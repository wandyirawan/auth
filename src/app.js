import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner,CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAL2dX_2gfjzfCVKhxWhqgb6mSlLNkQyWo",
      authDomain: "authentication-wandy.firebaseapp.com",
      databaseURL: "https://authentication-wandy.firebaseio.com",
      projectId: "authentication-wandy",
      storageBucket: "authentication-wandy.appspot.com",
      messagingSenderId: "778928167206"
    });
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.setState({ loggedIn: true});
      } else{
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={()=>firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return(
      <View>
       <Header headerText="Authentication" />
       {this.renderContent()}
      </View>
    )
  }
};

export default App;
