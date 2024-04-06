import react,{useEffect,useState,useRef} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Animated
} from 'react-native'
import Constants from '../common/Constants';
import  {AnimatedGradient}  from "../common/AnimatedGradient";

const OnboardingGetStartScreen=({navigation})=>{
    const animation1 = useRef(new Animated.Value(0)).current;
    const animation = useRef(new Animated.Value(0)).current
    const [colors1, setColors1] = useState(["white", "white"]);
    const [buttoncolors, setButtonColors] = useState(['#92A3FD', '#9DCEFF' ])

  useEffect(() => {
    Animated.timing(animation1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    setColors1(['#A192FD','#9DCEFF']);
    setButtonColors(["white", "white"]);
  }, []);

  const bgStyle = {
    color: animation1.interpolate({
      inputRange: [0, 1],
      outputRange: ['#CC8FED', 'white'],
    }),
  };

  const buttonTextstyle = {
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#9AC2FE'],
    }),
  };
  
  
    return(
        <AnimatedGradient 
            style={styles.container} 
            colors={colors1} 
            child={
                <View style={{flex:1}}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.mainLogoTitle}>Fitnest<Animated.Text style={[styles.mainLogoTitleBold,bgStyle]}>X</Animated.Text></Text>
                        <Text style={styles.description}>Everybody Can Train</Text>
                    </View>
                    <View
                        style={{
                            paddingHorizontal:30,
                            position:'absolute',
                            bottom:30,
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('OnboardingTrackYourGoal')}>
                            <AnimatedGradient
                                colors={buttoncolors}
                                start={{ x: 1, y: 1 }}
                                style={{
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    height:60,
                                    width:Constants.LAYOUT.SCREEN_WIDTH-60,
                                    borderRadius:99,
        
                                    shadowColor: "black",
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity:  0.25,
                                    shadowRadius: 20.00,
                                    elevation: 4,
                                }}
                                child={
                                    <Animated.Text
                                        style={{
                                            fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
                                            fontSize:Constants.FONT_SIZE.FT16,
                                            color:buttonTextstyle.color
                                        }}
                                    >
                                        Get Stared
                                    </Animated.Text>
                                }
                            >
                            </AnimatedGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        >  
         </AnimatedGradient>
    )
}
export default OnboardingGetStartScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Constants.LAYOUT.SCREEN_WIDTH,
    },
    mainLogoTitle:{
        fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
        fontSize:Constants.FONT_SIZE.FT36,
        color:Constants.COLOR.BackColor,
    },
    mainLogoTitleBold:{
        fontSize:Constants.FONT_SIZE.FT50,
        // color:'#CC8FED',
        marginTop:-10
    },
    description:{
        fontSize:Constants.FONT_SIZE.FT18,
        fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
        color:Constants.COLOR.GREY
    },
    subcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})