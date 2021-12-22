import React from 'react';
import {Text,View,Button, TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import styled,{css} from 'styled-components';
import { Page ,Heading} from '../components';
import * as Notifications from 'expo-notifications';
import { getPermissionsAsync } from 'expo-notifications';
import { submitToken, Token } from '../Service/api';

async function getNotificationToken() {
    const {status}= await Notifications.getPermissionsAsync();
    if(status !== 'granted'){
        const {status}= await Notifications.requestPermissionsAsync();
        if(status !== 'granted'){
            alert('failed to get Notification Token')
            return ;
        }
    }

    const tokenData= await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    console.log({token});
    return token;


}
 const BoyScreen: React.FC=()=>{
           const [token, setToken] = React.useState<Token | undefined>()
    return(
        <View>
            <Header centerComponent={{text:'Cho anh',style:{color:'white'} }}/>
            <Page>
                <Heading>{token ? `Number is ${token.id}`:'Bạn chưa có mã số ,bấm vào đây'}</Heading>
                <Button 
                    onPress={ async ()=>{
                        const Token =await getNotificationToken();
                        if(Token){
                            const storedToken= await submitToken(Token)
                            setToken(storedToken);
                        }
                    }}
                    title='Bấm để lấy mã số'/>
            </Page>
        </View>
        
    )
 }
 export default BoyScreen;