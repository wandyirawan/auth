import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAL2dX_2gfjzfCVKhxWhqgb6mSlLNkQyWo",
      authDomain: "authentication-wandy.firebaseapp.com",
      databaseURL: "https://authentication-wandy.firebaseio.com",
      projectId: "authentication-wandy",
      storageBucket: "authentication-wandy.appspot.com",
      messagingSenderId: "778928167206"
    });
  }
  render() {
    return(
      <View>
       <Header headerText="Authentication" />
       <LoginForm />
      </View>
    )
  }
};

export default App;
