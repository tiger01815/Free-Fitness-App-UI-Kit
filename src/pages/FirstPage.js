import react ,{useEffect, useState}from 'react';
import {Button, View, Text, SafeAreaView,StyleSheet} from 'react-native';

const FirstPage = ({navigation}) =>{
    const [content, setContent] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setInterval(()=>{
                setContent(content+1)
            },1000)
        })
        const unsubscribe = navigation.addListener('willBlur',()=>{
            // clearInterval(interval)
            setCount(0)
        })
        return () =>{
            clearTimeout(interval)
            unsubscribe()
        }
    },[navigation])

      

    return (
        <SafeAreaView
            style ={styles.safeAreaContainter}
        >
            <View
                style={
                    styles.container
                }
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
                        This is the FirstPage of the app
                    </Text>
                    <Button
                        onPress={()=>navigation.navigate('SecondPage')}
                        title="Go to Second Page"
                    />
                </View>
                <Text
                    style={
                        styles.pagedescription
                    }
                >
                    Navigate Between Screens using {'\n'}React Navigation
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

export default FirstPage;

const styles = StyleSheet.create({
    safeAreaContainter:{
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