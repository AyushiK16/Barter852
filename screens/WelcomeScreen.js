import React from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Alert} from 'react-native';
import db from '../config';
//import SantaAnimation from '../components/Santa.js';
import firebase from 'firebase';
import Barter from '../components/Barter';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId :'',
            password:''
        }
    }
    userSignup = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("User Added");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMsg = error.message;
            return Alert.alert(errorMsg);
        })

    }

    userLogin = (emailId, password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("User Login")
        }
        )
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMsg);
            // ...
          });
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                   <Barter/>
                   <Text style = {styles.title}>Barter System</Text> 
                </View>
            <View style={styles.buttonContainer}>
                <TextInput
                style = {styles.loginBox}
                placeholder = "abc@gmail.com"
                keyboardType = "email-address"
                onChangeText = {(text)=>{
                    this.setState({
                        emailId : text
                    })
                }}
                />
                <TextInput
                style = {styles.loginBox}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        password : text
                    })
                }}
                />
                <TouchableOpacity
                style = {[styles.button,{marginBottom:20, marginTop:20}]}
                onPress = {()=>{
                    this.userLogin(this.state.emailId, this.state.password)
                }}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.userSignup(this.state.emailId, this.state.password)
                }}
                >
                <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })