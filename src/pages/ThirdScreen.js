import react from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const ThirdScreen = ()=>{
    return(
        <SafeAreaView
            style={
                {
                    flex:1
                }
            }
        >
            <View
                style={
                    styles.container
                }
            >
                <Text
                    style={
                        styles.paragraphStyle
                    }
                >
                    Content Loaded from Third Screen
                </Text>
                <Image
                    style={
                        styles.logoStyle
                    }
                    source={{uri:'https://avatars.githubusercontent.com/u/54445456?v=4'}}
                />
            </View>
        </SafeAreaView>
    )
}

export default ThirdScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        padding:24
    },
    paragraphStyle:{
        margin:24,
        marginTop:0,
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center'
    },
    logoStyle:{
        height:50,
        width:50
    }
})