import react,{useState} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';

import Constants from '../common/Constants';

const ProfileStepOneScreen =()=>{

    const [currentDtatIndex, setCurrentDataIndex] = useState(0)
    const data = [
        {contentTitle:'Improve Shape',content:'I have a law amount of body fat and need / want to build more muscle.',image:require('../../assets/image/goal1.png')},
        {contentTitle:'Learn & Tone',content:"I'm "+"skinny fat."+"look thin but have no shape. I want to add learn muscle in the right way.",image:require('../../assets/image/goal2.png')},
        {contentTitle:'Lose a Fat',content:'I have over 20 lbs to lose. I want to drop all this fat and again muscle mass',image:require('../../assets/image/goal3.png')}
    ]

    const renderItem=({item,index})=>{
        return(
            // <View style={{borderRadius:12, borderColor:'black'}}>
            <LinearGradient
                colors={['#A192FD','#9DCEFF']}
                start={{x:1,y:1}}
                style={{
                    borderRadius:22,
                    paddingHorizontal:30,
                    paddingVertical:30,
                    height:478,
                    alignItems:'center',
                    justifyContent:'flex-end',
                    // marginHorizontal:30
                }}
            >
                <Image source={item.image} style={{marginBottom:10}}/>
                {/* <View> */}
                <Text style={{fontSize:Constants.FONT_FAMILY.PRIMARY_MEDIUM,fontSize:Constants.FONT_SIZE.FT14,color:'white',marginBottom:10}}>{item.contentTitle}</Text>
                <View style={{width:50,height:1,backgroundColor:'white',marginBottom:20}}/>
                <Text style={{fontSize:Constants.FONT_SIZE.FT12,fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,color:'white',textAlign:'center'}}>{item.content}</Text>
                {/* </View> */}
                </LinearGradient>
        )
    }  
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}/>
            <Text style={{paddingTop:20,fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,fontSize:Constants.FONT_SIZE.FT20,color:'#1D1617',textAlign:'center'}}>What is your goal?</Text>
            <Text style={{fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,fontSize:Constants.FONT_SIZE.FT12,color:'#7B6F72',textAlign:'center'}}>It will help us choose a best {`\n`}program for you.</Text>
            <View style={{width:Constants.LAYOUT.SCREEN_WIDTH,marginTop:30,flex:1}}>
                <Carousel
                    layout={'default'}
                    data = {data}
                    containerCustomStyle = {{}}
                    loop={true}
                    renderItem={renderItem}
                    firstITem={0}
                    sliderWidth = {Constants.LAYOUT.SCREEN_WIDTH}
                    itemWidth = {275}
                    inactiveSlideOpacity = {0.7}
                    inactiveSlideScale={0.8}
                    inactiveSliderShift={0}
                    onSnapToItem = {item =>setCurrentDataIndex(item)}
                />
                <TouchableOpacity style={{paddingHorizontal:30}}>
                    <LinearGradient
                        colors={['#C58BF2','#EEA4CE']}
                        style={{
                            marginBottom:20,
                            height:60,
                            borderRadius:99,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        start={{x:1,y:1}}
                    >
                    <Text style={{fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,fontSize:Constants.FONT_SIZE.FT16,color:'white'}}>continue</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        width:Constants.LAYOUT.SCREEN_WIDTH,
        // justifyContent:'space-between'
    }
})

export default ProfileStepOneScreen