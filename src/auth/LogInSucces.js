import react, {useEffect, useState} from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import LinearGradient from'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from '../common/Constants';

const LogInSuccessScreen = ({navigation}) =>{
    useEffect(()=>{
        getInfo()
        
    })

    const getInfo = async()=>{
        try{
            const userInfo = await AsyncStorage.getItem('userInfo');
            console.log(JSON.parse(userInfo).token)
            setUserName(JSON.parse(userInfo).user.fullname)
        }catch(e){
            console.log(e)
        }
    }

    const [userName, setUserName] = useState('');

    const gotohome = ()=>navigation.navigate('NavigatorTab')
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}/>
            <View
                style={{
                    width:'100%',
                    alignItems:'center',
                    marginTop:50
                }}
            >
                <Image
                    source={require('../../assets/image/Loginsuccess.png')}
                    style={{
                        height:304,
                        width:277.56
                    }}
                />
                <Text style={{fontSize:Constants.FONT_SIZE.FT20,fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,color:Constants.COLOR.BackColor, marginTop:25}}>{`Welcome, ${userName}`}</Text>
                <Text style={{fontSize:Constants.FONT_SIZE.FT12,fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,color:'#7B6F72',textAlign:'center'}}>You are all set now, let’s reach your {'\n'}goals together with us</Text>
            </View>
            <View style={{marginBottom:30}}>
                <TouchableOpacity onPress={()=>gotohome()}>
                    <LinearGradient
                        colors={['#A192FD', '#9DCEFF' ]}
                        style={{
                            height:60,
                            borderRadius:99,
                            width:'100%',
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        start={{ x: 1, y: 1 }}
                    >
                        <Text style={{
                            fontSize:Constants.FONT_SIZE.FT16,
                            fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
                            color:'white'
                            }}>
                                Go to Home
                            </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogInSuccessScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30,
        justifyContent:'space-between'
    }
})