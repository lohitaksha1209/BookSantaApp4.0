import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';
export default class BookRequest extends Component
{
    render(){
        return(
            <View>
                <Text>
                    Book request
                </Text>
            </View>
        )
    }
}