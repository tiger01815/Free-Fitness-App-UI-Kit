import react from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native'

const FirstScreen = ()=>{
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
                    Content Loaded from First Screen
                </Text>
                <Image
                    style={
                        styles.logoStyle
                    }
                    source={{uri:'https://avatars.githubusercontent.com/u/3450307?v=4'}}
                />
            </View>
        </SafeAreaView>
    )
}

export default FirstScreen;

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