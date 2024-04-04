import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const HomeScreen = ({navigation})=>{
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Home'}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Home Screen.
            </Text>
        </View>
    )
}

export default HomeScreen;