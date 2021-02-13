import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import DonateItem from '../screens/DonateScreen'
import RequestItem from '../screens/RequestScreen'
import { StackNavigator } from './StackNavigator';

export const TabNavigator = createBottomTabNavigator({
    DonateItems : {
        screen : StackNavigator,
        navigationOptions : {
           // tabBarIcon : <Image source = {require ('../assets/request-list.png')}
           // style = {{width : 20, height : 20}}/>,

            tabBarLabel : "Item Donate"
        }
    },

    RequestItems : {
        screen : RequestItem,
        navigationOptions : {
            //tabBarIcon : <Image source = {require ('../assets/request-book.png')}
            //style = {{width : 20, height : 20}}/>,
            
            tabBarLabel : "Item Request"
        }
    }
})

