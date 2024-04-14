import React from 'react';
import { 
    Modal, 
    Text,
    ActivityIndicator, 
    StyleSheet,
    View
} from 'react-native'
import Constants from './Constants';

const Spinner = (props:{visible:boolean; textContant:string,textStyle:any})=>{
    if(props.visible) {
        return (
            <Modal transparent style={{flex:1}}>
                <View style={[styles.container, { backgroundColor:'rgba(0,0,0,0.1)' }]} >
                    <ActivityIndicator animating={props.visible} size="large" color='white' />
                    <Text style={[styles.message, { color: 'white' }]}>
                        {props.textContent}
                    </Text>
                </View >
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    message: {
        textAlign: 'center', marginTop: 10, fontSize: Constants.FONT_SIZE.FT22, fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR
    }
})

export default Spinner;