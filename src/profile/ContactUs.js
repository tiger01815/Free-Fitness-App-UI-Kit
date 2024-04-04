import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const ContactUsScreen = ({navigation})=>{
    const onBackPress = () => navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25,
            }}
        >
            <CommonHeader
                title={'Contact Us'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text>
                This is Contact Us Screen.
            </Text>
        </View>
    )
}

export default ContactUsScreen;