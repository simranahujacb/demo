import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {grey, greywhite} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        color: 'white',
        placeholderTextColor: 'white',
        paddingHorizontal: 10,
        width: '85%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginLeft: 22,
        fontSize: 18,
      }}></TextInput>
  );
};

export default Field;
