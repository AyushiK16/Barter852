import React from 'react';
import LottieView from 'lottie-react-native';

export default class Barter extends React.Component{
    render(){
        return(
            //this is a comment!
            
            <LottieView
            source = {require('../assets/barterLottie.json')}
            style = {{width : '60%'}}
            autoPlay loop
            />
        )
    }
}