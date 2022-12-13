import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TextInput, Image} from 'react-native';
import Background from './Background';
import {blck, grey, greywhite, rd, red} from './Constants';
import Field from './Field';
import Btn from './Btn';
import Vector from '../assets/Vector.svg';
import VectorLock from '../assets/VectorLock.svg';

const Home = () => {
  return (
    <Background>
      <Image
        source={require('../assets/Maskgroup.png')}
        style={{position: 'relative'}}
      />
      <Vector width={88} height={20} />
      <Field placeholder={'Username'} />
      <VectorLock width={21} height={20} marginTop={1} />
      <Field placeholder={'Password'} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <Text style={{color: red, fontWeight: 'bold', fontSize: 15}}>
          Switch account
        </Text>
        <Text
          style={{
            color: red,
            fontWeight: 'bold',
            fontSize: 15,
            marginRight: 25,
          }}>
          Forgot password
        </Text>
      </View>
      <Btn title={'Sign In'} backgroundColor={rd} />
      <Text style={{textAlign: 'center', color: grey}}>
        ──────────────── or ────────────────
      </Text>
      <Btn title={'Sign Up'} backgroundColor={blck} />
    </Background>
  );
};

export default Home;
