import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const PersonalDataScreen = ({navigation})=>{
    const onBackPress = () => navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()
    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Persoal Data'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text>
                This is Personal Data Screen.
            </Text>
        </View>
    )
}

export default PersonalDataScreen;