import react from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from'react-native'

const CommonHeader = ({title, backenable, onBackPress=null,onMenuPress=null})=>{
    return(
        <View
        style={{
          flexDirection:'row',
          alignItems:'center',
          height:32,
          marginBottom:20,
          // width:Dimensions.get('window').width,
          justifyContent:'space-between'
        }}
      >
        <TouchableOpacity
          onPress={()=>onBackPress()}
        >
        {backenable && <Image
          style={{
            width:32,
            height:32
          }}
          source={require('../../assets/image/Back-Navs.png')}
        />}
        </TouchableOpacity>
        <Text
          style={{
            fontSize:26,
            fontWeight:'bold',
            color:'black'
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          onPress={()=>onMenuPress()}
        >
        <Image
          style={{
            width:32,
            height:32
          }}
          source={require('../../assets/image/Detail-Navs.png')}
        />
        </TouchableOpacity>
      </View>
    )
}
export default CommonHeader;
