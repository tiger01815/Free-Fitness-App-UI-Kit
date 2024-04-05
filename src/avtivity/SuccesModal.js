import React, { useEffect, useRef, useState } from 'react'
import { 
    View, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    Modal, 
    Text, 
    Keyboard, 
    LayoutAnimation, 
    Platform,
    TextInput
} from 'react-native';
import Constants from '../common/Constants';
import {Menu,MenuItem,MenuDivider} from 'react-native-material-menu'
import StyledTextInput from '../common/StyledTextInput';

const SuccessModal = ({ title, content = '', insets, onClosePress }) => {
    const [menuVisible, setMenuVisible] = useState(false)
    const toggleVisible=()=>setMenuVisible(!menuVisible);
    const phoneRef = useRef();
    const [phone, setPhone] = useState('')
    
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardWillShow", (event) => keyboardDidShow(event));
        const hideSubscription = Keyboard.addListener("keyboardWillHide", (event) => keyboardDidHide(event));
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }
    }, []);
    const keyboardDidShow = (event) => {
        let height = event.endCoordinates.height;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        // setKeyboardHeight(height)
    }
    const keyboardDidHide = (event) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        // setKeyboardHeight(0)
    }

    return (
        
        <Modal transparent style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} >
                
                <View style={{ backgroundColor: Constants.COLOR.WHITE, borderRadius: 12, width: Constants.LAYOUT.SCREEN_WIDTH - 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingBottom: 34,paddingTop:30 }}>
                    <View
                        style={styles.modalHeader}
                    >
                        <TouchableOpacity
                            onPress={()=>onClosePress()}
                        >
                        <Image
                            source={require('../../assets/image/Close-Icon.png')}
                            style={{
                                height:20,
                                width:20
                            }}
                        />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize:Constants.FONT_SIZE.FT24
                            }}
                        >Activity</Text>
                        <Image
                            source={require('../../assets/image/More-Icon.png')}
                        />
                    </View>
                    {/* <View>
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
                            <MenuItem onPress={toggleVisible}>Menu item 2</MenuItem>
                        </Menu>
                        <View>
                        <StyledTextInput
                        ref={phoneRef}
                        type={"cel-phone"}
                        keyboardType={'phone-pad'}
                        containerStyle={{ marginTop: 20 }}
                        placeholder={"AMount"}
                        value={phone}
                        onChangeText={(text) => setPhone(text)} />
                        </View>
                    </View> */}
                   <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        width:Constants.LAYOUT.SCREEN_WIDTH - 60,
        paddingHorizontal:30
                    }}
                   >
                    <TouchableOpacity
                        onPress={()=>onClosePress()}
                    >
                        <Text style={{ marginTop: 12,textAlign: 'center', fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT18, color: Constants.COLOR.BLACK }}>
                            OK
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>onClosePress()}
                    >
                        <Text style={{ marginTop: 12, textAlign: 'center', fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT18, color: Constants.COLOR.BLACK }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                   
                    </View> 
                        
                </View>
            </View >
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Constants.LAYOUT.SCREEN_WIDTH - 60, 
        height: 60, 
        backgroundColor: Constants.COLOR.PRIMARY, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 7,
        padding:20
    },
    text: {
        fontFamily: Constants.FONT_FAMILY.PRIMARY_DEMI, fontSize: Constants.FONT_SIZE.FT20, color: Constants.COLOR.WHITE
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Constants.LAYOUT.SCREEN_WIDTH - 60,
        paddingHorizontal:30,
        alignItems:'center'
    }
})

export default SuccessModal;