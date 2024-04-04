import react from 'react';
import {
    Text,
    View
} from 'react-native';

import CommonHeader from '../common/CommonHeader';

const WorkoutProgressScreen = ({navigation})=>{
    const onBackPress = () => navigation.goBack()
    const onMenuPress = () => navigation.openDrawer()

    return(
        <View
            style={{
                paddingHorizontal:25
            }}
        >
            <CommonHeader
                title={'Workout Progress'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            <Text>
                This is Workout Progress Screen.
            </Text>
        </View>
    )
}

export default WorkoutProgressScreen;