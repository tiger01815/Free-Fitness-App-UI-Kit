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

const SuccessModal = ({ title, content = '', insets, onClosePress }) => {

    return (
        
        <Modal transparent style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} >
                
                <View style={{ backgroundColor: Constants.COLOR.WHITE, borderRadius: 12, width: Constants.LAYOUT.SCREEN_WIDTH - 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingBottom: 34,paddingTop:30 }}>
                    <View
                        style={styles.modalHeader}
                    >
                        <Image
                            source={require('../../assets/image/Close-Icon.png')}
                        />
                        <Text>Activity</Text>
                        <Image
                            source={require('../../assets/image/More-Icon.png')}
                        />
                    </View>
                    {/* <Image style={{ position: 'absolute', top: -30, width: 111, height: 87, resizeMode: 'contain' }} source={require('../../assets/images/ic_logo_membership.png')} /> */}
                    <View>
                        <Text></Text>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 86, fontFamily: Constants.FONT_FAMILY.PRIMARY_BOLD, fontSize: Constants.FONT_SIZE.FT24, color: Constants.COLOR.BLACK }}>
                        {title}
                    </Text>
                    {
                        content !== '' &&
                        <Text style={{ marginTop: 12, lineHeight: 30, textAlign: 'center', fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT24, color: Constants.COLOR.BLACK }}>
                            {content}
                        </Text>
                    }
                    {/* <StyledButton
                        containerStyle={{ width: Constants.LAYOUT.SCREEN_WIDTH - 120, height: 52, marginTop: 24 }}
                        textStyle={{}}
                        title={"OK"}
                        onPress={onClosePress} 
                    /> */}
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
        width:Constants.LAYOUT.SCREEN_WIDTH - 60

    }
})

export default SuccessModal;