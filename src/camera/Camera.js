import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const CameraScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Camera'}
                onBackPress={onBackPress}
                backenable={true}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Camera Screen.
            </Text>
        </View>
    )
}

export default CameraScreen;