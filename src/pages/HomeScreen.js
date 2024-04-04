import react from'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
const HomeScreen = ({navigation}) =>{
    return(
        <SafeAreaView
            style={{
                flex:1
            }}
        >
            <View
                style={{
                    flex:1,
                    padding:16
                }}
            >
                <View
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize:25,
                            textAlign:'center',
                            marginBottom:16
                        }}
                    >
                        You are on Home Screen
                    </Text>
                    <TouchableOpacity
                        style={
                            styles.button
                        }
                        onPress={()=>navigation.navigate('Details')}
                    >
                        <Text>Open Details Screen</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize:18,
                        textAlign:'center',
                        color:'grey'
                    }}
                >
                    React Native Bottom Navigation
                </Text>
                <Text style={{
                    fontSize:16,
                    textAlign:'center',
                    color:'grey'
                }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:'#DDDDDD',
        padding:10,
        width:300,
        marginTop:16
    }
})