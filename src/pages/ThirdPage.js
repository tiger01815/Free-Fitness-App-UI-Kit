import react from'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from'react-native';

const ThirdPage = ({navigation,route})=>{
    return (
        <SafeAreaView
            style={styles.safeAreaContainer}
        >
            <View
                style={styles.container}
            >
                <View
                    style={
                        styles.pagetitlecontainer
                    }
                >
                    <Text
                        style={
                            styles.pagetitle
                        }
                    >
                        This is Third Page of the App{'\n'}
                        {route.params.someParam}
                    </Text>
                    {route.params.someParam !='reset' ? 
                        <Button
                            title='Go back'
                            onPress={()=>navigation.goBack()}
                        />
                        :null
                    }
                    <Button
                        title='Go to Second Page'
                        onPress={()=>navigation.navigate('SecondPag')}
                    />
                    <Button
                        title="Reset navigator to First Page"
                        onPress={()=>
                            navigation.reset({
                                index:0,
                                routes:[
                                    {
                                        name:'FirstPage',
                                        params:{someParam:'reset'}
                                    }    
                                ]
                            })
                        }
                    />
                </View>
                <Text
                    style={
                        styles.pagedescription      
                    }
                >
                    Navigate Between Screens using{'\n'} React Navigation
                </Text>
                <Text
                    style={
                        styles.siteurlstyle
                    }
                >
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ThirdPage;

const styles = StyleSheet.create({
    safeAreaContainer:{
        flex:1
    },
    container:{
        flex:1,
        padding:16
    },
    pagetitlecontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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
    },
    pagetitle:{
        fontSize:25,
        textAlign:'center',
        marginBottom:16
    }
})