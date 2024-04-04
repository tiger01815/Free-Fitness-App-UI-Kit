import react from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native';
import ActionBarImage from './ActionBarImage';

const HomeActivity = ({navigation})=>{
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=><ActionBarImage/>
        })
    },[navigation])

    return(
        <SafeAreaView>
            <Text
                style={{
                    fontSize:25,
                    textAlign:'center',
                    marginVertical:10
                }}
            >
                3 ways to Add Image Icon Inside Navigation Bar in React Native
            </Text>
            <Text
                style={{
                    textAlign:'center',
                    color:'grey'
                }}
            >
                www.aboutreact.com
            </Text>
        </SafeAreaView>
    )
}

export default HomeActivity;