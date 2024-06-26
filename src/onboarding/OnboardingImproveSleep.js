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
const OnboardingImproveSleepScreen = ({navigation}) =>{
    const insets = useSafeAreaInsets()
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/image/onboarding4.png')} style={styles.imagestyle}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Improve Sleep{'\n'}Quality</Text>
                <Text style={styles.description}>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</Text>
            </View>
            <TouchableOpacity style={styles.nextbuttonstyle} onPress={()=>navigation.navigate('OnboardingAuth')}>
                <Image style={styles.nextbuttonimage} source={require('../../assets/image/onboarding-button-4.png')}/>
            </TouchableOpacity>
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

export default OnboardingImproveSleepScreen;