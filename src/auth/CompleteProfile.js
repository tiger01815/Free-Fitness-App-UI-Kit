import react,{useEffect,useState,useRef} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Menu,MenuItem,MenuDivider } from 'react-native-material-menu';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import Constants from '../common/Constants';
import ContactUsScreen from '../profile/ContactUs';


const CompleteProfileStartScreen = ({navigation})=>{

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleVisible = ()=>setMenuVisible(!menuVisible);
    const [gender, setGender] = useState('')
    const [date,setDate] = useState(new Date());
    const gonext=()=>{
        navigation.navigate('profilestepone')
    }
    // console.log(moment(date,'YYYY-MM-DD'))
    // let yourDate = new Date()
    // console.log(yourDate.toISOString().split('T')[0])
    const [visibleDatePicker, setVisibleDatePicker ] = useState(false)
    return(
        <TouchableWithoutFeedback accessible={true} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'}/>
                <ScrollView style={{flex:1,paddingTop:20, paddingBottom:30 }}>
                <View style={styles.topcontainer}>
                    <Image
                        source={require('../../assets/image/completeprofilestart.png')}
                        style={styles.imagestyle}
                    />
                </View>
                <Text style={styles.text1}>Let's complete your profile</Text>
                <Text style={styles.text2}>It will help us to know ,more about you!</Text>
                <Menu
                    visible={menuVisible}
                    anchor={
                        <TouchableOpacity style={styles.emailInputContainer} onPress={()=>toggleVisible()}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Lock.png')}/>
                            <TextInput 
                                placeholder='Choose Gender' 
                                style={styles.emailInputStyle}
                                editable={false}
                                value={gender}
                            />
                            <TouchableOpacity >
                                <Image style={styles.inputIconStyle} source={require('../../assets/image/dropdownicon.png')}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }
                    style={{width:Constants.LAYOUT.SCREEN_WIDTH-60}}
                    onRequestClose={()=>toggleVisible()}
                >
                    <MenuItem onPress={()=>{
                        toggleVisible();
                        setGender('Male')
                        }}>Male</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={()=>{
                        toggleVisible()
                        setGender('Female')
                        }}>Female</MenuItem>
                </Menu>
                    
                        
                        <TouchableOpacity style={styles.emailInputContainer} onPress={()=>setVisibleDatePicker(true)}>
                            <Image style={styles.inputIconStyle} source={require('../../assets/image/Calendar.png')}/>
                            <TextInput 
                                placeholder='Date of Birth' 
                                style={styles.emailInputStyle}
                                value={date.toISOString().split('T')[0]}
                                editable={false}
                            />
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode={'date'}
                            open={visibleDatePicker}
                            date={date}
                            onConfirm={(date) => {
                                setVisibleDatePicker(false)
                                setDate(date)
                                // onChangeText(date)
                            }}
                            onCancel={() => {
                                setVisibleDatePicker(false)
                            }}
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20 }}>
                            {/* <View style={{flexDirection:'row',alignItems:'center'}}> */}
                                <View style={{flex:1 ,flexDirection:'row',borderRadius:14,justifyContent:'center',alignItems:'center',backgroundColor:'#F7F8F8',marginRight:10,paddingLeft:20}}>
                                    <Image style={styles.inputIconStyle} source={require('../../assets/image/weightscale.png')}/>
                                    <TextInput 
                                        placeholder='Your Weight' 
                                        style={styles.emailInputStyle}
                                        keyboardType='decimal-pad'
                                    />

                                </View>
                            
                                <LinearGradient
                                        colors={['#C58BF2', '#EEA4CE' ]}
                                        style={styles.gradiendbutton}
                                        start={{ x: 1, y: 1 }}
                                    >
                                    <Text>KG</Text>
                                    </LinearGradient>
                        </View>
                        
                        <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20}}>
                            {/* <View style={{flexDirection:'row',alignItems:'center'}}> */}
                                <View style={{flex:1 ,flexDirection:'row',borderRadius:14,justifyContent:'center',alignItems:'center',backgroundColor:'#F7F8F8',marginRi:20,paddingLeft:20}}>
                                    <Image style={styles.inputIconStyle} source={require('../../assets/image/heightscale.png')}/>
                                    <TextInput 
                                        placeholder='Your Height' 
                                        style={styles.emailInputStyle}
                                        keyboardType='decimal-pad'
                                    />

                                </View>
                            
                                <LinearGradient
                                        colors={['#C58BF2', '#EEA4CE' ]}
                                        style={styles.gradiendbutton}
                                        start={{ x: 1, y: 1 }}
                                    >
                                    <Text>CM</Text>
                                    </LinearGradient>
                        </View>

                </ScrollView>
                <TouchableOpacity style={{width:'100%',marginBottom:40,paddingTop:20}} onPress={()=>gonext()}>
                            <LinearGradient
                                colors={['#A192FD', '#9DCEFF' ]}
                                style={[styles.gradiendbutton,{width:'100%',height:60}]}
                                start={{ x: 1, y: 1 }}
                            >
                                <Text style={styles.loginbuttontext}>Next</Text>
                            </LinearGradient>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CompleteProfileStartScreen;

const styles = StyleSheet.create({
    topcontainer:{
        width:'100%'
    },
    wholecontainer:{
        flex:1, backgroundColor:'white', 
        justifyContent:'space-between'
    },imagestyle:{
        // height:,
        width:'100%',
        resizeMode:'stretch'
    },
    container:{
        flex:1,
        backgroundColor:'white',
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30,
        justifyContent:'center',
    },
    text1:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
        fontSize:Constants.FONT_SIZE.FT20,
        color:'#1D1617',
        textAlign:'center',
        marginTop:20
    },
    text2:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
        fontSize:Constants.FONT_SIZE.FT12,
        color:'#7B6F72',
        textAlign:'center'
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
        borderRadius:14,
        width:48,
        height:48,
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