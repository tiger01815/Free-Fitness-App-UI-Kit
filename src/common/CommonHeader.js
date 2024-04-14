import react,{useState, useContext} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import AuthContext from '../context/AuthContext';
import Constants from './Constants';
const CommonHeader = ({title, backenable, onBackPress=null,onMenuPress=null})=>{
  const {sessionClose} = useContext(AuthContext);
  const inset = useSafeAreaInsets();
  const [menuVisible,setMenuVisible] = useState(false);
  const toggleVisible=()=>setMenuVisible(!menuVisible)
  const logout = () => sessionClose()
    return(
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            height:32,
            marginTop:40-inset.bottom,
            backgroundColor:'white',
            justifyContent:'space-between',
            paddingHorizontal:30,
            marginBottom:15
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
            marginLeft:30,
            fontSize:Constants.FONT_SIZE.FT26,
            fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
            color:'black',
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center'
          }}
        >
          {title}
        </Text>
        <Menu
          visible={menuVisible}
          anchor={
            <TouchableOpacity
            onPress={()=>toggleVisible()}
          >
          <Image
            style={{
              width:32,
              height:32
            }}
            source={require('../../assets/image/Detail-Navs.png')}
          />
          </TouchableOpacity>
          }
          onRequestClose={toggleVisible}
      >
          <MenuItem onPress={toggleVisible}>Menu item 1</MenuItem>
          <MenuItem onPress={logout}>Log out</MenuItem>
          {/* <MenuItem disabled>Disabled item</MenuItem> */}
          {/* <MenuDivider /> */}
          {/* <MenuItem onPress={toggleVisible}>Menu item </MenuItem> */}
      </Menu>
        
      </View>
    )
}
export default CommonHeader;
