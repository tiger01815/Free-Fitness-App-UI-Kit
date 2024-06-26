import react, {useEffect, useState,useContext, useRef} from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    StatusBar,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Config from '../config/Config';
import Constants from '../common/Constants';
import AuthContext from '../context/AuthContext';
import Spinner from '../common/Spinner';

const CreatPasswordScreen = ({navigation})=>{
    const emailRef = useRef();
    // const {sessionStart} = useContext(AuthContext)
    const [keyboardHeight, setKeyboardHeight] = useState('')
    const passwordRef = useRef();
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const gologin=()=>{navigation.navigate('login')}
    const [ticked, setTicked] = useState(true);
    const toggleTick = ()=>setTicked(!ticked)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const register= async ()=>{
        setLoading(true)
        try {
            const {data} = await axios.post('http://192.168.118.138:8000/create-user',{
                fullname:firstName + lastName,
                email:email,
                password:password,
                confirmPassword:password
            },{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
            
            if(data.success) {
                let userInfo = data;
                AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
                AsyncStorage.setItem('isRegistered',"true");
                setLoading(false)
                navigation.navigate('completeprofilestart')
            }else{
                setLoading(false)
                alert(data.message);
            }

        }catch(e){
            setLoading(false)
            console.log(e)
            alert(e.massage)
        }

        
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardWillShow", (event) => keyboardDidShow(event));
        const hideSubscription = Keyboard.addListener("keyboardWillHide", (event) => keyboardDidHide(event));
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }
    }, []);
    const keyboardDidShow = (event) => {
        let height = event.endCoordinates.height;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardHeight(height)
    }
    const keyboardDidHide = (event) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardHeight(0)
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            
            <View style={styles.wholecontainer}>
                <StatusBar backgroundColor={'white'}/>
                <View styles = {styles.container}>
                    <View style = {styles.titleconatine}>
                        <Text style={styles.text1}>Hey there</Text>
                        <Text style={styles.text2}>Create an Account</Text>
                    </View>
                    <ScrollView style={{paddingTop:20, paddingBottom:30}}>
                    <View style={styles.inputSectionContainer}>
                        <View style={styles.emailInputContainer}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Profile.png')}/>
                            <TextInput 
                                placeholder='First Name' 
                                style={styles.emailInputStyle}
                                value={firstName}
                                onChangeText={(val)=>setFirstName(val)}
                            />
                        </View>
                        <View style={styles.emailInputContainer}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Profile.png')}/>
                            <TextInput 
                                placeholder='Last Name' 
                                style={styles.emailInputStyle}
                                value={lastName}
                                onChangeText={(val)=>setLastName(val)}
                            />
                        </View>
                        <View style={styles.emailInputContainer}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Message.png')}/>
                            <TextInput 
                                placeholder='Email' 
                                style={styles.emailInputStyle}
                                value={email}
                                onChangeText={(val)=>setEmail(val)}
                            />
                            {/* <StyledTextInput
                                ref={emailRef}
                                // containerStyle={styles.emailInputStyle}
                                placeholder={"Email"}
                                autoCapitalize={'words'}
                                value={email}
                                returnKeyType={'next'}
                                textStyle={styles.emailInputStyle}
                                keyboardType={'email-address'}
                                // onSubmitEditing={() => phoneRef.current._inputElement.focus()}
                                onChangeText={(text) => setEmail(text)} 
                                /> */}
                        </View>
                        <View style={styles.emailInputContainer}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Lock.png')}/>
                            <TextInput 
                                ref={passwordRef}
                                placeholder='Password' 
                                style={styles.emailInputStyle}
                                secureTextEntry={secureTextEntry}
                                value={password}
                                onChangeText={(val)=>setPassword(val)}
                            />
                            <TouchableOpacity  onPress={()=>setSecureTextEntry(!secureTextEntry)}>
                            {secureTextEntry?
                                <Image style={styles.inputIconStyle} source={require('../../assets/image/Hide-Password.png')}/> :
                                <Image style={styles.inputIconStyle} source={require('../../assets/image/Show.png')}/>
                            }
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <TouchableOpacity onPress={()=>toggleTick()}>
                                <Image
                                    source={ticked ? require('../../assets/image/tick.png'):require('../../assets/image/untick.png')}
                                    style={{
                                        height:16,
                                        width:16,
                                        resizeMode:'cover'
                                    }}
                                />
                            </TouchableOpacity>
                            <Text style={styles.forgottext}>By continuing you accept our <Text style={styles.confirmunderlinetext}>Privacy Policy</Text> and <Text style={styles.confirmunderlinetext}>Term of Use.</Text></Text>
                        </View>
                    </View>
                    </ScrollView>
                    
                </View>
                <View style={styles.bottomcontainer}>
                        <TouchableOpacity style={{width:'100%'}} onPress={()=>register()}>
                            <LinearGradient
                                colors={['#A192FD', '#9DCEFF' ]}
                                style={styles.gradiendbutton}
                                start={{ x: 1, y: 1 }}
                            >
                                    {/* <Image source={require('../../assets/image/Login.png')}/> */}
                                    <Text style={styles.loginbuttontext}>Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginTop:10}}>
                            <View style={{width:140, height:1, backgroundColor:'#DDDADA'}}></View>
                            <Text style={{color:'#1D1617',fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,fontSize:Constants.FONT_SIZE.FT12}}>Or</Text>
                            <View style={{width:140, height:1, backgroundColor:'#DDDADA'}}></View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <Image style={{marginRight:10}} source={require('../../assets/image/googleicon.png')}/>
                            <Image style={{marginLeft:10}} source={require('../../assets/image/facebookicon.png')}/>
                        </View>
                        <Text style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center', 
                            marginTop:20,
                            color:'#1D1617',
                            fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
                            fontSize:Constants.FONT_SIZE.FT14
                            }}>
                                Alerady have an account?
                               <Text onPress={()=>navigation.navigate('login')} 
                               style={{color:'#DA98DF',
                               fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
                               fontSize:Constants.FONT_SIZE.FT14
                               }}>
                                Login
                            </Text>
                            </Text>
                </View>
                {loading && <Spinner visible={true}/>}
            </View>
        </TouchableWithoutFeedback>
    )
    
}
const styles = StyleSheet.create({
    wholecontainer:{
        flex:1, backgroundColor:'white', 
        justifyContent:'space-between'
    },
    container:{
        // flex:1,
        backGroungLColor:'#fff',
        // paddingHorizontal:30,
        // width:Constants.LAYOUT.SCREEN_WIDTH
    },
    text1:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
        fontSize:Constants.FONT_SIZE.FT16
    },
    text2:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
        fontSize:Constants.FONT_SIZE.FT20,
        color:Constants.COLOR.BackColor
    },
    titleconatine:{
        width:Constants.LAYOUT.SCREEN_WIDTH,
        alignItems:'center',
        paddingTop:40
    },
    inputSectionContainer:{
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30,
        justifyContent:'center',
        marginTop:10
    },
    emailInputContainer:{
        height:48,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#F7F8F8',
        borderRadius:14,
        paddingHorizontal:20,
        
        marginBottom:20
    },emailInputStyle:{
        flex:1
    },
    inputIconStyle:{
        height:18,
        width:18
    },
    forgottext:{
        // textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        textDecorationLine:'underline',
        color:'#ADA4A5',
    },
    confirmunderlinetext:{
        textDecorationLine:'underline'
    },
    bottomcontainer:{
        // flex:1,
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30,
        alignItems:'center',
        paddingBottom:30
    },
    gradiendbutton:{
        height:60,
        borderRadius:99,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    loginbuttontext:{
        paddingLeft:10,
        color:'white',
        fontSize:Constants.FONT_SIZE.FT16,
        fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD
    }
})

export default CreatPasswordScreen;