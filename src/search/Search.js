import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const SearchScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Search'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Search Screen.
            </Text>
        </View>
    )
}

export default SearchScreen;