import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'
import OpenEye from './assets/openEye.png'
import CloseEye from './assets/closeEye.png'
import Icon from 'react-native-vector-icons/FontAwesome5';






export default function App() {
  const [iconEye, setIconEye] = useState(true);
  const onPressEye = () => {
    setIconEye(prevIconEye => !prevIconEye);
  }

  return (


    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textHeader}>FACEBOOK</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor="#ccc"
            color='#fff'
            fontSize='20'
          // keyboardType="numeric"
          />
        </View>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor="#ccc"
            secureTextEntry={iconEye ? true : false}
            color='#fff'
            fontSize='20'
          />
          <TouchableOpacity onPress={onPressEye}>
            <Icon name={iconEye ? 'eye-slash' : 'eye'}
            size='16'
            style={styles.imageEye}>
            </Icon> 
          </TouchableOpacity>


        </View>
        <Button
          title='Forgot password'
          color='#fff'
          textDecoration = 'underline'

        />
        <View style={styles.buttonForm}>



          <View style={styles.button}>
            <Button
              title='Login'
              color='#000'
              fontWeight="bold"


            />
          </View>
        </View>

        <View style={styles.textOr}>
          <View style={styles.orWrap}>
            <View style={styles.text}>

              <Text style={styles.text_or}>OR</Text>
            </View>

          </View>

        </View>
        <View style={styles.buttonLgGG}>
          <Icon 
          name='google' size ='30' color = 'red'>

          </Icon>
          <Button
            title='Login In with Google'
            color="#000"

          />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#1890FF',
    justifyContent: 'space-evenly',
    paddingHorizontal: 50
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textHeader: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
  form: {
    flex: 3,

    alignItems: 'center'
  },
  inputForm: {
    width: '70%',
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 10,
    borderRadius: 60,
    justifyContent: 'center',
    paddingHorizontal: 40,

  },
  imageEye: {
    width: 20,
    height: 20,
    
    position: 'absolute',
    right: -20,
    bottom: 0,

  },
  input: {},
  buttonForm: {
    width: '70%',
    height: 60,
    backgroundColor: '#fff',


    marginVertical: 10,
    borderRadius: 60,
    justifyContent: 'center',

  },
  button: {


  },
  button: {},
  textOr: {
    marginTop: 30,
    width: '80%',
    height: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#1890FF',

  },
  orWrap: {
    width: 90,
    height: 10,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1890FF'
  },
  text_or: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18


  },
  buttonLgGG: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 10,
    width: '70%',
    height: 60,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 60,

  },
  iconGG: {},

});
