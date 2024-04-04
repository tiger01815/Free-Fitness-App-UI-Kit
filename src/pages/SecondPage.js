import react from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const SecondPage = ({navigation}) =>{
    return (
        <SafeAreaView
            style={styles.safeAreaContainer}
        >
            <View
                style={
                    styles.container
                }
            >
                <View
                    style={
                        styles.titlecontainer
                    }
                >
                    <Text
                        style={styles.pagetitle}
                    >
                        This is Second Page of the App
                    </Text>
                    <Button
                        title="Replace this screen with Third Page"
                        onPress={()=>navigation.replace('SecondPage', {
                            someParam:'Param'
                        })}
                    />
                    {/* <Button
                        title="Go back"
                        onPress={()=>navigation.goBack()}
                    />
                    <Button
                        title="Replace this screen with Third Page"
                        onPress={()=>navigation.replace('ThirdPage', {
                            someParam:'Param'
                        })}
                    />
                    <Button
                        title="Reset navigation state to Third Page"
                        onPress={()=>navigation.reset({
                            index:0,
                            route:[
                                {
                                    name:'ThirdPage',
                                    params:{someParam:'reset'}
                                }
                            ]
                        })}
                    />
                    <Button
                        title='Go to First Page'
                        onPress={()=>navigation.navigate('FirstPage')}
                    />
                    <Button
                        title='Go to Third Page'
                        onPress={()=>navigation.navigate('ThirdPag',{
                            someParam:'Param1'
                        })}
                    /> */}
                </View>
                <Text
                    style={
                        styles.pagedescription
                    }
                >
                    Navogate Between Screens using{'\n'}React Navigation
                </Text>
                <Text
                    style={
                        styles.siteurlstyle
                    }
                >
                    
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SecondPage;

const styles = StyleSheet.create({
    safeAreaContainer:{
        flex:1
    },
    container:{
        flex:1,
        padding:16
    },
    titlecontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    pagetitle:{
        fontSize:25,
        textAlign:'center',
        marginBottom:16
    },
    pagedescription:{
        fontSize:18,
        textAlign:'center',
        color:'grey'
    },
    siteurlstyle:{
        fontSize:16,
        textAlign:'center',
        color:'grey'
    }
})