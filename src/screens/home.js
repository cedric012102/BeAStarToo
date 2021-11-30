import React, {useEffect, useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Post} from '../components/post';
// import { API, graphqlOperation } from 'aws-amplify';

// import {listPosts} from '../../graphql/queries';
// import posts from '../../data/posts';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(onSyncPosts, []);

  // useEffect( () => {
  //   const fetchPost = async () => {
  //     //fetch all the posts
  //     try {
  //         const response = await API.graphql(graphqlOperation(listPosts));
  //         setPosts(response.data.listPosts.items);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchPost();
  // }, []);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => <Post item={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );

  function onSyncPosts() {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setPosts(collectionDocuments);
        },
      });
    return unsubscribe;
  }
};

export default Home;
