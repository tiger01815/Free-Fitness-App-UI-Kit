import react from'react'
import {
    Text,
    View,
    Modal,
    TouchableWithoutFeedback,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Constants from '../common/Constants';

const TargetAddScreen = ({title, content,close})=>{
    return(
        <Modal transparent style={{ justifyContent:"center" }}>
            <TouchableWithoutFeedback 
                // onPress={()=>{ 
                //     onClosePress()}
                // }
            >
                <View style={styles.modalBackground}>
                </View>
            </TouchableWithoutFeedback>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }} >
                <View style={{ paddingHorizontal: 30, backgroundColor: Constants.COLOR.WHITE, paddingTop: 30, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ flex: 1, fontFamily: Constants.FONT_FAMILY.PRIMARY_DEMI, fontSize: Constants.FONT_SIZE.FT28, color: Constants.COLOR.BLACK }}>
                            Activity
                        </Text>
                        <TouchableOpacity >
                            {/* <Image style={{ width: 14, height: 14, resizeMode: 'contain' }} source={require('../../assets/images/ic_close_about.png')} /> */}
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginTop: 24, fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT24, color: Constants.COLOR.BLACK }}>
                        Are you going to add a new activiry?
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 24, justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: 24, fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT24, color: Constants.COLOR.BLACK }}>
                        THis is content
                    </Text>
                    <Text style={{ marginTop: 24, fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT24, color: Constants.COLOR.BLACK }}>
                        THis is content
                    </Text>
                        {/* <StyledButton
                            containerStyle={{ width: (Constants.LAYOUT.SCREEN_WIDTH - 80) / 2, height: 60, borderRadius: 7, backgroundColor: Constants.COLOR.GRAY_DARK }}
                            textStyle={{ fontFamily: Constants.FONT_FAMILY.PRIMARY_DEMI, fontSize: Constants.FONT_SIZE.FT20, color: Constants.COLOR.WHITE }}
                            title={"NO"}
                        /> */}
                        {/* <StyledButton
                            containerStyle={{ width: (Constants.LAYOUT.SCREEN_WIDTH - 80) / 2, height: 60, borderRadius: 7, backgroundColor: Constants.COLOR.PRIMARY }}
                            textStyle={{ fontFamily: Constants.FONT_FAMILY.PRIMARY_DEMI, fontSize: Constants.FONT_SIZE.FT20, color: Constants.COLOR.WHITE }}
                            title={ okbtncontent? okbtncontent : "YES" }
                        /> */}
                    </View>
                </View>
            </View >
        </Modal>
    )
}

const styles =StyleSheet.create({
    modalBackground:{

    }
})
export default TargetAddScreen;