import react from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import CommonHeader from '../common/CommonHeader';
import Constants from '../common/Constants';

const HomeScreen = ({navigation})=>{
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <View>
                    <Text style={{color:"#ADA4A5", fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize:Constants.FONT_SIZE.FT12}}>Welcome Back</Text>
                    <Text style={{color:'black', fontSize:Constants.FONT_SIZE.FT22, fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD}}>Stefani Wong</Text>
                </View>
                <TouchableOpacity
                    style={styles.headernotificaionconatiner}
                >
                    <Image
                        source={require('../../assets/image/notification.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.firstsection}>
                <View style={styles.cone}/>
                <Text>11</Text>
            </View>
            {/* <CommonHeader
                title={'Home'}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Home Screen.
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:25,
        flex:1
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headernotificaionconatiner:{
        width:40,
        height:40,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F7F8F8'
    },
    firstsection:{
        height:300,
        // width:'100%'
        width:300

    },
    cone:{
        width: 0,
        height: 0,
        borderLeftWidth: 55,
        borderLeftColor: "transparent",
        borderRightWidth: 55,
        borderRightColor: "transparent",
        borderTopWidth: 100,
        borderTopColor: "red",
        borderRadius: 55,
    }
})

export default HomeScreen;