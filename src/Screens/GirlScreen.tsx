import React from 'react';
import {Text,View,Button, TouchableOpacity, Alert} from 'react-native'
import { Header } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import styled,{css} from 'styled-components';
import { getToken, sendPushNotification, Token } from '../Service/api';
import { Heading,Page } from '../components';


const ButtonContainer=styled(View)`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
`
const SummonButton=styled(TouchableOpacity)<{ color?: string}>`
    background-color: ${p => p.color || 'green'};
    
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`
const TxtButton=styled(Text)`
    color: white;
    font-size: 16px;
`
// const token ='ExponentPushToken[uAX3k6BwypDwwg6r7qBSuR]'
const GirlScreen: React.FC=()=>{
        const [tokenInput, setTokenInput] = React.useState('');
        const [token, setToken] =   React.useState<Token | undefined>();
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MyBaby', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
                
           <Page>
             {token ?
             (<View>
                    <Heading>Number MyBoy is {token.id}</Heading>
                    <Heading>Success</Heading>
             </View>)
                : 
                (<View>
                  
                    <Input
                            label="Mã số gấu" 
                            placeholder='Nhập mã số gấu đực vào đây'
                            value={tokenInput}
                            
                            onChangeText={setTokenInput}
                            placeholderTextColor='green'
                    />
                    <Button
                            onPress={ async ()=>{
                                if(!tokenInput){
                                    alert('Hay nhap ma so')
                                }else{
                                    const storedToken= await getToken(tokenInput)
                                    setToken(storedToken)
                                }
                                
                            }}
                            title="Xác nhận mã số"
                            color='green'
                    />
                </View>
                )}

              {token &&  
                    <View style={{marginTop:20}}>
                    <Heading>Triệu hồi gấu đực</Heading>
                    <ButtonContainer>
                       
                        <SummonButton color="#09ce23" onPress={()=> sendPushNotification(token.token,'☺️ Em đói quá','Đi ăn lẩu đi')}>
                            <TxtButton>🚴🏻 Em đói quá</TxtButton>
                        </SummonButton>
                        <SummonButton color='purple'onPress={()=> sendPushNotification(token.token,'🍸Em thèm trà sữa','size XL')}>
                            <TxtButton>🍷 Em thèm trà sữa</TxtButton>
                        </SummonButton>
                        <SummonButton color='pink'onPress={()=> sendPushNotification(token.token,'🎱Mình đi xem phim nha','Phim hay lắm')}>
                            <TxtButton> 👫🏻 Nhớ anh quá</TxtButton>
                        </SummonButton>
                        <SummonButton color='blue'onPress={()=> sendPushNotification(token.token,' 💋Nhớ anh VL luôn','Đón em di')}>
                            <TxtButton>🏄🏻‍♀️ Gọi em nha</TxtButton>
                        </SummonButton>

                    </ButtonContainer>
              </View> }

            



               
           </Page>
        </View>
    )
 }
 export default GirlScreen;