import react from 'react';
import {
    Text,
    View
} from 'react-native'

import CommonHeader from '../common/CommonHeader';

const ProfileEditScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View>
            <CommonHeader
                title={'Profile Edit'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Profile Edit Screen
            </Text>
        </View>
    )
}

export default ProfileEditScreen;