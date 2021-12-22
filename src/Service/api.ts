import axios from 'axios';

const EXPO__SERVER__URL='https://api.expo.dev/v2/push/send';
const TOKEN__SERVER_URL='https://61b37d00af5ff70017ca1f86.mockapi.io/api/todos';

export interface Token{
    id: number
    token: string
}
//send Token to Server
export const submitToken =  async(token: string)=>{
    const res=await axios.post(TOKEN__SERVER_URL,{token});
    const result=res.data as Token;
    return result;
}
//getToken
export const getToken = async(id: number | string)=>{
    const res= await axios.get(`${TOKEN__SERVER_URL}/${id}`);
    const result=res.data as Token;
    return result;
}

export  const sendPushNotification = async(token:string,title:string,body:string)=>{
    const message ={
        to: token,
        sound: 'default',
        title,
        body,
    }   

    await axios.post(EXPO__SERVER__URL, message)
    alert('Trieu hoi gau thanh cong');
}