import React from "react";
import {Text, View} from'react-native'


import CommonHeader from '../common/CommonHeader';

const MoreActivityScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack();
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Activities'}
                onBackPress={onBackPress}
                backenable={true}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Activities screen.
            </Text>
        </View>
    )
}

export default MoreActivityScreen;