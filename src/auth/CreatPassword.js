import react from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Keyboard,
    StyleSheet
} from 'react-native';

import Constants from '../common/Constants';

const CreatPasswordScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text>Hey, there</Text>
            <Text>Create an account</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Constants.LAYOUT.SCREEN_WIDTH,
        paddingHorizontal:30
    }
})

export default CreatPasswordScreen;