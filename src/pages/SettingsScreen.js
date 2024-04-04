import react from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Button
} from'react-native'

const SettingsScreen = ({route, navigation}) =>{
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
                        You are on Setting Screen
                    </Text>
                    <TouchableOpacity
                        Style={
                            styles.button
                        }
                        onPress={()=>navigation.navigate('Home')}
                    >
                        <Text>Go to Home tab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        Style={
                            styles.button
                        }
                        onPress={()=>navigation.navigate('Details')}
                    >
                        <Text>Open Detail screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        Style={
                            styles.button
                        }
                        onPress={()=>navigation.navigate('Profile')}
                    >
                        <Text>Open Profile Screen</Text>
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
                <Text 
                    style={{
                        fontSize:16,
                        textAlign:'center',
                        color:'grey'
                    }}
                >
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:'#DDDDDD',
        padding:10,
        width:300,
        marginTop:16
    }
})