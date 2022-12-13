import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {rd} from './Constants';

const Btn = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
        margin: 25,
        height: 47,
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
