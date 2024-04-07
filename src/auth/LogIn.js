import react, {useState} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const LogISCreen = ()=>{
    return(
        <View styles = {styles.container}>

      <View>
        <Text>Hey there</Text>
        <Text>Welcome Back</Text>
        </View>
        <View>
        <TextInput>
        </TextInput>
        </View>
        <View><TouchableOpacity>Login</TouchableOpacity></View>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backGroungLColor:'#fff'
    }
})
export default LoginS