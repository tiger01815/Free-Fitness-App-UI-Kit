import react, {useState}from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import LinearGradient from 'react-native-linear-gradient'


import TargetAddScreen from './TargetAdd';
import CommonHeader from '../common/CommonHeader';
import SuccessModal from './SuccesModal'
import Constants from '../common/Constants';

const ActivityScreen = ({navigation})=>{
    const onBackPress = ()=>navigation.goBack();
    const onMenuPress = () => navigation.openDrawer()
    
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleVisible =()=> setMenuVisible(!menuVisible);
    
    const [activityViewMode, setActivityViewMode] = useState(false)
    const [targetAddModal, setTargetAddModal] = useState(false);
    return(
        <View
            style={{
                // paddingHorizontal:30,
                // paddingTop:40
                flex:1,
                backgroundColor:Constants.COLOR.WHITE
            }}
        >
            <CommonHeader
                title={'Activity Tracker'}
                backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
            />
            {
                targetAddModal && 
                <SuccessModal
                    title={'test'}
                    content={'test'}
                />
            }
            <View
                style={{
                    paddingHorizontal:30
                }}
            >
            <LinearGradient
                colors={['#92A3FD', '#9DCEFF' ]}
                style={styles.sectioncontainer}
                start={{ x: 1, y: 1 }}
            >
                <View style={styles.firstSectiontitle}>
                    <Text 
                        style={{
                            fontSize:14,fontWeight:'700',color:'black'}}
                    >Today Target</Text>
                    <TouchableOpacity
                        onPress={()=>setTargetAddModal(true)}
                    >
                    <Image
                        source={require('../../assets/image/ActivityPlusButton.png')}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.firstSectioncardContainer}>
                    <View style={styles.firstSectioncard}>
                        <Image
                            source={require('../../assets/image/glass.png')}
                            style={styles.firstSectionCardImage}  
                        />
                        <View>
                            <Text style={styles.firstSectionAmount}>8L</Text>
                            <Text style={styles.firstSectioncontent}>Water Intake</Text>
                        </View>
                    </View>
                    <View style={styles.firstSectioncard}>
                        <Image
                            source={require('../../assets/image/boots.png')}
                            style={styles.firstSectionCardImage}
                        />
                        <View>
                            <Text style={styles.firstSectionAmount}>2400</Text>
                            <Text style={styles.firstSectioncontent}>Foot Steps</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            </View>
            <View
                style={{
                    paddingHorizontal:30
                }}
            >
                <View style={styles.secondSection}>
                    <View style={styles.secondSectionHead}>
                        <Text style={styles.sectionheaderTitle}>Activity Progress</Text>
                        <TouchableOpacity onPress={()=>setActivityViewMode(!activityViewMode)} style={styles.sectionheaderDropdown}>
                            <Text 
                                style={{
                                    fontSize:10,
                                    fontWeight:'500',
                                    color:'white'
                                }}
                            >
                                Weekly
                            </Text>
                            {activityViewMode?<Image
                                source={require('../../assets/image/ArrowDown2.png')}
                                style={{
                                    transform: [
                                        { scaleX:-1}
                                    ]
                                }}
                            />:
                            <Image
                            source={require('../../assets/image/ArrowDown2.png')
                            }
                        />}
                            {activityViewMode &&
                                    <View style={ styles.secondSectionViewMode}>
                                        <Text onPress={()=>console.log(1)} style={styles.secontSectionViewModeItem}>Dayily</Text>
                                        <Text style={styles.secontSectionViewModeItem}>Weekly</Text>
                                        <Text style={styles.secontSectionViewModeItem}>Monthly</Text>
                                    </View>}
                            
                        </TouchableOpacity>
                        {activityViewMode && (
                            <Modal
                                transparent
                                style={{flex:1}}
                            >
                                <TouchableWithoutFeedback
                                    onPress={() => { setActivityViewMode(false) }
                                    }
                                >
                                    <View 
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                    </View>
                                </TouchableWithoutFeedback>
                                    {/* <View style={ styles.secondSectionViewMode}>
                                        <Text style={styles.secontSectionViewModeItem}>Dayily</Text>
                                        <Text style={styles.secontSectionViewModeItem}>Weekly</Text>
                                        <Text style={styles.secontSectionViewModeItem}>Monthly</Text>
                                    </View> */}
                            
                            </Modal>
                        )
                        }
                    </View>
                    <View
                        style={[styles.secondSectonBarcontainer,styles.containershadow]}
                    >
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#92A3FD', '#9AC2FE' ,'#9DCEFF']}
                                style={[styles.secondsectionbar,{height:39}]}
                                start={{ x: 1, y: 1 }}
                            />
                        </View>
                        <Text style={styles.secondSectionbarDate}>Sun</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#C58BF2', '#E8A1D3' ,'#EEA4CE']}
                                style={[styles.secondsectionbar,{height:98}]}
                                start={{ x: 1, y: 1 }}
                            />
                            {/* <View style={[styles.secondsectionbar,{backgroundColor:'#C58BF2',height:79}]}/> */}
                        </View>
                        <Text style={styles.secondSectionbarDate}>Mon</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#92A3FD', '#9AC2FE' ,'#9DCEFF']}
                                style={[styles.secondsectionbar,{height:64}]}
                                start={{ x: 1, y: 1 }}
                            />
                        </View>
                        <Text style={styles.secondSectionbarDate}>Tue</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                        <LinearGradient
                                colors={['#C58BF2', '#E8A1D3' ,'#EEA4CE']}
                                style={[styles.secondsectionbar,{height:85}]}
                                start={{ x: 1, y: 1 }}
                            />
                            {/* <View style={[styles.secondsectionbar,{backgroundColor:'#C58BF2',height:36}]}/> */}
                        </View>
                        <Text style={styles.secondSectionbarDate}>Wed</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#92A3FD', '#9AC2FE' ,'#9DCEFF']}
                                style={[styles.secondsectionbar,{height:108}]}
                                start={{ x: 1, y: 1 }}
                            />
                           
                        </View>
                        <Text style={styles.secondSectionbarDate}>Thu</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#C58BF2', '#E8A1D3' ,'#EEA4CE']}
                                style={[styles.secondsectionbar,{height:39}]}
                                start={{ x: 1, y: 1 }}
                            />
                            {/* <View style={[styles.secondsectionbar,{backgroundColor:'#C58BF2',height:68}]}/> */}
                        </View>
                        <Text style={styles.secondSectionbarDate}>Fri</Text>
                        </View>
                        <View>
                        <View style={styles.secontSectionBarItem}>
                            <LinearGradient
                                colors={['#92A3FD', '#9AC2FE' ,'#9DCEFF']}
                                style={[styles.secondsectionbar,{height:87}]}
                                start={{ x: 1, y: 1 }}
                            />
                            
                        </View>
                        <Text style={styles.secondSectionbarDate}>Sat</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    padding:30
                }}
            >
            <View style={styles.thirdSection}>
                <View style={styles.thirdSectionHeader}>
                    <Text style={styles.sectionheaderTitle}>Latest Activity</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('MoreActivity')}
                    >
                        <Text>See more</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.thirdSectioncard,styles.containershadow]}
                        onPress={()=>navigation.navigate('ActivityDetail')}
                    >
                        <View style={styles.thirdSectionLeft}>
                            <Image
                                source={require('../../assets/image/Latest-Pic.png')}
                                style={styles.thirdSectionAvatar}
                            />
                            <View>
                                <Text style={styles.thirdSectionItemTitle}>Drinking 300ml Water</Text>
                                <Text>About 3 minutes ago</Text>
                            </View>
                        </View>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Menu
                                visible={menuVisible}
                                
                                anchor={
                                    <TouchableOpacity
                                        onPress={()=>toggleVisible()}
                                    >
                                        <Image
                                            source={require('../../assets/image/more-vertical5.png')}
                                        />
                                    </TouchableOpacity>
                                }
                                onRequestClose={toggleVisible}
                            >
                                <MenuItem onPress={toggleVisible}>Menu item 1</MenuItem>
                                <MenuItem onPress={toggleVisible}>Menu item 2</MenuItem>
                                <MenuItem disabled>Disabled item</MenuItem>
                                <MenuDivider />
                                <MenuItem onPress={toggleVisible}>Menu item 4</MenuItem>
                            </Menu>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.thirdSectioncard,styles.containershadow]}
                        onPress={()=>navigation.navigate('ActivityDetail')}
                    >
                        <View style={styles.thirdSectionLeft}>
                            <Image
                                source={require('../../assets/image/Latest-Pic.png')}
                                style={styles.thirdSectionAvatar}
                            />
                            <View>
                                <Text style={styles.thirdSectionItemTitle}>Eat Snack(Eitbar)</Text>
                                <Text>About 10 minutes ago</Text>
                            </View>
                        </View>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Menu
                                visible={menuVisible}
                                
                                anchor={
                                    <TouchableOpacity
                                        onPress={()=>toggleVisible()}
                                    >
                                        <Image
                                            source={require('../../assets/image/more-vertical5.png')}
                                        />
                                    </TouchableOpacity>
                                }
                                onRequestClose={toggleVisible}
                            >
                                <MenuItem onPress={toggleVisible}>Menu item 1</MenuItem>
                                <MenuItem onPress={toggleVisible}>Menu item 2</MenuItem>
                                <MenuItem disabled>Disabled item</MenuItem>
                                <MenuDivider />
                                <MenuItem onPress={toggleVisible}>Menu item 4</MenuItem>
                            </Menu>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    )
}

export default ActivityScreen;

const styles = StyleSheet.create({
    sectioncontainer:{
        height:139,
        backgroundColor:'#9AC2FE',
        borderRadius:40,
        padding:20,
        justifyContent:'space-around'
    },
    firstSectiontitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    firstSectioncardContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    firstSectioncard:{
        backgroundColor:'white',
        borderRadius:15,
        padding:10,
        flexDirection:'row',
        width:130
    },
    firstSectionCardImage:{
        height:34,
        width:25,
        marginRight:5
    },
    firstSectionAmount:{
        fontSize:14,
        fontWeight:'600',
        color:'#92A3FD'
    },
    firstSectioncontent:{
        fontSize:12,
        fontWeight:'500',
        color:'#7B6F72'
    },
    secondSection:{
        height:245,
        borderRadius:20,
        justifyContent:'space-around'
    },
    secondSectionHead:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    sectionheaderTitle:{
        fontSize:16,
        fontWeight:'600',
        color:'black'
    },
    sectionheaderDropdown:{
        width:76,
        height:30,
        backgroundColor:'#92A3FD',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    secondsectionbar:{
        // height:100,
        width:22,
        borderRadius:20
    },
    secondSectonBarcontainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderRadius:20
    },
    secondSectionbarDate:{
        fontSize:12,
        fontWeight:'500',
        color:'#7B6F72'
    },
    secontSectionBarItem:{
        height:135,
        backgroundColor:'#F7F8F8',
        borderRadius:20,
        justifyContent:'flex-end'
    },
    thirdSection:{
        height:214,
        zIndex:-1,
        justifyContent:'space-around'
    },
    thirdSectionHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    thirdSectioncard:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        borderRadius:20,
        paddingHorizontal:10,
        height:80
    },
    thirdSectionLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    thirdSectionAvatar:{
        height:50,
        width:50,
        marginRight:10
    },
    thirdSectionItemTitle:{
        color:'black',
        fontWeight:'500',
        fontSize:16
    },
    secondSectionViewMode:{
        position:'absolute',
        top:20,
        right:0,
        width:76,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:'#92A3FD',
        alignItems:'center',
        paddingTop:7,
        zIndex:100
    },
    secontSectionViewModeItem:{
        fontSize:10,
        fontWeight:'500',
        color:'white',
        marginBottom:3
    },
    containershadow:{
        shadowColor: "#a7a4a4",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity:  0.1,
        shadowRadius: 30.00,
        elevation: 17,
        backgroundColor: 'white',
        // borderRadius:35
    }
})