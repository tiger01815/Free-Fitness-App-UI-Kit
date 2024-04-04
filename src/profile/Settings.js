import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const SettingsScreen = ({navigation})=>{
    const onBackPress = () => navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25,
            }}
        >
            <CommonHeader
                title={'Settings'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text>
                This is Settings Screen.
            </Text>
        </View>
    )
}

export default SettingsScreen;