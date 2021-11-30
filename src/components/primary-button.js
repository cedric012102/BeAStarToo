import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles/primary-button-style.js';

export function PrimaryButton({onPress, label, iconName, iconColor}) {
  return (
    <>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        {iconName && (
          <AntDesign
            name={iconName}
            size={24}
            color={iconColor}
            style={styles.mediaIcons}
          />
        )}
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}
