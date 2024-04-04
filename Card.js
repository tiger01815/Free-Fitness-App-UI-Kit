import react from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Animated,
    TouchableOpacity,
} from'react-native';

const Card = (props)=>{
    const {removeItem, item} = props;
    const {uri,title,description,key} = item
    return (
        <Animated.View
            style={{
                flex:1,
                alignItems:'center',
                paddingVertical:10
            }}
        >
            <TouchableOpacity
                onPress={()=>removeItem(key)}
                style={styles.container}
            >
                <Image
                    style={styles.thumbnail}
                    source = {{uri}}
                />

                <View style={styles.metaDataContainer}>
                    <View style={styles.metaDataContent}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        elevation:3,
        borderColor:'grey',
        borderRadius:5,
        flexDirection:'row',
        marginHorizontal:20
    },
    metaDataContainer:{
        flex:1
    },
    thumbnail:{
        width:70,
        height:70
    },
    metaDataContent:{
        marginTop:5,
        marginLeft:15
    },
    title:{
        color:'#444',
        fontSize:18,
        fontWeight:'bold'
    },
    description:{
        fontSize:16,
        color:'#888',
        fontWeight:'700'
    }
})

export default Card;