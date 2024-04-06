import react from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Constants from '../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaProvider,
    useSafeAreaInsets
} from 'react-native-safe-area-context'

// const insets = useSafeAreaInsets()
const OnboardingGetBurnScreen = ({navigation}) =>{
    const insets = useSafeAreaInsets()
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/image/onboarding2.png')} style={styles.imagestyle}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Get Burn</Text>
                <Text style={styles.description}>Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever</Text>
            </View>
            <TouchableOpacity style={styles.nextbuttonstyle} onPress={()=>navigation.navigate('OnbordingEatWell')}>
                <Image style={styles.nextbuttonimage} source={require('../../assets/image/onboarding-button-2.png')}/>
            </TouchableOpacity>
            {/* <LinearGradient
                colors={['#C58BF2', '#EEA4CE' ]}
                style={{
                height:18,
                borderRadius:12
                }}
                start={{ x: 1, y: 1 }}
            >

            </LinearGradient> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Constants.LAYOUT.SCREEN_WIDTH,

    },
    imagestyle:{
        width:Constants.LAYOUT.SCREEN_WIDTH,
        resizeMode:'stretch'
    },
    descriptionContainer:{
        marginTop:40,
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30,

    },
    title:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_MEDIUM,
        fontSize:Constants.FONT_SIZE.FT24,
        color:Constants.COLOR.BackColor
    },
    description:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
        fontSize:Constants.FONT_SIZE.FT14,
    },
    nextbuttonimage:{
        width:60,
        height:60
    },
    nextbuttonstyle:{
        position:'absolute',
        right:20,
        bottom:20
        // +insets.bottom
    }
})

export default OnboardingGetBurnScreen;