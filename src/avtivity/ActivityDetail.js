import React from "react";
import {Text, View} from'react-native'


import CommonHeader from '../common/CommonHeader';

const ActivityDetailScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack();
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Activity Detail'}
                onBackPress={onBackPress}
                backenable={true}
                onMenuPress={onMenuPress}
            />
            <Text
                style={{
                    alignSelf:'center'
                }}
            >
                This is Activity Detail screen.
            </Text>
        </View>
    )
}

export default ActivityDetailScreen;