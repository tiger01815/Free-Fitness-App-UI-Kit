import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const PrivacyPolicyScreen = ({navigation})=>{
    const onBackPress = () => navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25,
            }}
        >
            <CommonHeader
                title={'PrivacyPolicy'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text>
                This is PrivacyPolicy Screen.
            </Text>
        </View>
    )
}

export default PrivacyPolicyScreen;