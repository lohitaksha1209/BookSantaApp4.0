import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequest from '../screens/BookRequest';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{screen:BookDonateScreen,
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20,height:20}}/>,
        tabBarlabel:"Donate Books"
    }},
    BookRequest:{screen:BookRequest,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,height:20}}/>,
            tabBarlabel:"Book Request"
        }}
})