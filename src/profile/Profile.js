import react,{useState,useRef} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    StatusBar
} from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { Switch } from 'react-native-switch';
import LinearGradient from 'react-native-linear-gradient';
import Dialog  from 'react-native-dialog';

import StyledTextInput from '../common/StyledTextInput';
import Constants from '../common/Constants';
import CommonHeader from '../common/CommonHeader';

const ProfileScreen = ({navigation})=>{
    const onBackPress =()=> navigation.goBack();
    const onMenuPress = () => navigation.openDrawer()
    const phoneRef = useRef();
    const [phone, setPhone] = useState('')
    const [userName, setUserName] = useState('Stefani Wong');
    const [userRole, setUserRole] = useState('Lose a Fat Program');
    const [userHeight, setUserHeight] = useState('180');
    const [userWeight, setUserWeight] = useState('65');
    const [userAge, setUserAge] = useState('22');
    const userNameRef = useRef()
    const userRoleRef = useRef();
    const userHeightRef = useRef();
    const userWeightRef = useRef();
    const userAgeRef = useRef();

    const [switchval, setSwitchval] = useState(true);
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
      userNameRef.current.value && setUserName(userNameRef.current.value)
      userRoleRef.current.value && setUserRole(userRoleRef.current.value)
      userHeightRef.current.value && setUserHeight(userHeightRef.current.value)
      userWeightRef.current.value && setUserWeight(userWeightRef.current.value)
      userAgeRef.current.value && setUserAge(userAgeRef.current.value)
      
    };
    const handleDelete = () => {
      // The user has pressed the "Delete" button, so here you can do your own logic.
      // ...Your logic
      setVisible(false);
    };
    return(
        <View
          style={{
            flex:1,
            backgroundColor:'white'
          }}
        >
        <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'dark-content'} backgroundColor={Constants.COLOR.WHITE} />
        <CommonHeader
                title={'Profile'}
                // backenable={true}
                onBackPress={onBackPress}
                onMenuPress={onMenuPress}
        />
        <ScrollView style={styles.container}>
          
          <View style={styles.firstSectionContainer}>
            <View style={styles.firstSectionHeader}>
              <View style={styles.firstSectionHeaderLeft}>
                <TouchableOpacity>
                <Image style={styles.firstSectionAvatar} source={require('../../assets/image/Latest-Pic.png')}/>
                </TouchableOpacity>
                <View style={styles.firstSectionLeftUserInfo}>
                  <Text style={styles.firstSectionUserName}>{userName}</Text>
                  <Text style={{
                    fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR,
                    fontSize:Constants.FONT_SIZE.FT12
                  }}>{userRole}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.firstSectionEditButton}
                onPress={()=>{
                  showDialog();
                }}
              >
                <LinearGradient
                  colors={['#92A3FD', '#9DCEFF' ]}
                  style={styles.firstSectionEditButton}
                  start={{ x: 1, y: 1 }}
                >
                <Text style={styles.firstSectionEditText}>Edit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.firstSectionDetailContainer}>
              {/* <Shadow
                distance={30}
                // startColor='#ADA4A5'
                // offset={[0,20]}
                // corners={{ topStart: false, bottomStart: false, bottomEnd: false }}
                // sides={{top: false }}
                paintInside={false}
                // startColor="#072A4233"
                finalColor="transparent"
                offset={[0, 10]}
                style={{
                    // alignSelf:'stretch',
                    borderRadius:16,
                    width:95,
                    height:65,
                    justifyContent:'center',
                    alignItems:'center',
                    // shadowColor:'#7B6F72'
                  }}
              > */}
                <View style={styles.firstSectionCard}>
                  <Text style={styles.firstSectionCardText1}>{userHeight+'cm'}</Text>
                  <Text style={styles.firstSectionCardText2}>Height</Text>
                </View>
                <View style={styles.firstSectionCard}>
                  <Text style={styles.firstSectionCardText1}>{userWeight+'kg'}</Text>
                  <Text style={styles.firstSectionCardText2}>Weight</Text>
                </View>
                <View style={styles.firstSectionCard}>
                  <Text style={styles.firstSectionCardText1}>{userAge+'yo'}</Text>
                  <Text style={styles.firstSectionCardText2}>Age</Text>
                </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal:30
            }}
          >
          <View style={[styles.secondSectionContainer,styles.containershadow]}>
            <View>
              <Text style={styles.secondSectionTitle}>Account</Text>
            </View>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('PersonalData')}
            >
              <View style={styles.secondSectionItemLeft}>
              <Image
                source={require('../../assets/image/Icon-Profile.png')}
                style={styles.secondSectionItemIcon}
              />
              <Text style={styles.firstSectionCardText2}>Personal Data</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('Achievement')}
            >
              <View style={styles.secondSectionItemLeft}>
                <Image
                  source={require('../../assets/image/Icon-Achievement.png')}
                  style={styles.secondSectionItemIcon}
                />
                <Text style={styles.firstSectionCardText2}>Achievement</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('ActivityHistory')}
            >
              <View style={styles.secondSectionItemLeft}>
              <Image
                source={require('../../assets/image/Icon-Activity.png')}
                style={styles.secondSectionItemIcon}
              />
              <Text style={styles.firstSectionCardText2}>Activity History</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('WorkoutProgress')}
            >
              <View style={styles.secondSectionItemLeft}>
              <Image
                source={require('../../assets/image/Icon-Workout.png')}
                style={styles.secondSectionItemIcon}
              />
              <Text style={styles.firstSectionCardText2}>Workout Progress</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
          </View>
          </View>
          <View
            style={{
              paddingHorizontal:30
            }}
          >
          <View style={[styles.thirdSectionContainer,styles.containershadow]}>
            <View>
              <Text style={styles.secondSectionTitle}>Notification</Text>  
            </View>
            <View style={styles.secondSectionItem}>
              <View style={styles.secondSectionItemLeft}>
                <Image
                  source={require('../../assets/image/Icon-Notif.png')}
                  style={styles.secondSectionItemIcon}
                />
                <Text style={styles.firstSectionCardText2}>Pop-up Notificaion</Text>
              </View>
              <LinearGradient
                  colors={['#C58BF2', '#EEA4CE' ]}
                  style={{
                    height:18,
                    borderRadius:12
                  }}
                  start={{ x: 1, y: 1 }}
                >
              <Switch
                value={switchval}
                onValueChange={(val)=>setSwitchval(val)}
                disabled={false}
                activeText={''}
                inActiveText={''}
                circleSize={12}
                barHeight={18}
                // barWidth={36}
                circleBorderWidth={0}
                backgroundActive={'transparent'}
                backgroundInactive={'rgba(170,170,170,1)'}
                circleActiveColor={'rgba(255,255,255,1)'}
                circleInActiveColor={'rgba(255,255,255,1)'}
                renderInsideCircle={() => <View />} // custom component to render inside the Switch circle (Text, Image, etc.)
                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                outerCircleStyle={{}} // style for outer animated circle
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={2.6} // multiplied by the `circleSize` prop to calculate total width of the Switch
                switchBorderRadius={12} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
              />
              </LinearGradient>
            </View>
          </View>
          </View>
          <View
            style={{
              paddingHorizontal:30,
              paddingBottom:Constants.LAYOUT.BOTTOM_BAR_HEIGHT
            }}
          >
          <View style={[styles.forthSectionContainer,styles.containershadow]}>
            <View>
              <Text style={styles.secondSectionTitle}>Other</Text>
            </View>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('ContactUs')}
            >
              <View style={styles.secondSectionItemLeft}>
                <Image
                  source={require('../../assets/image/Icon-Message.png')}
                  style={styles.secondSectionItemIcon}
                />
                <Text style={styles.firstSectionCardText2}>Contact Us</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('PrivacyPolicy')}
            >
              <View style={styles.secondSectionItemLeft}>
                <Image
                  source={require('../../assets/image/Icon-Privacy.png')}
                  style={styles.secondSectionItemIcon}
                />
                <Text style={styles.firstSectionCardText2}>Privacy Policy</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondSectionItem}
              onPress={()=>navigation.navigate('Settings')}
            >
              <View style={styles.secondSectionItemLeft}>
              <Image
                source={require('../../assets/image/Icon-Setting.png')}
                style={styles.secondSectionItemIcon}
              />
              <Text style={styles.firstSectionCardText2}>Settings</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
          </View>
          </View>
          
          
        </ScrollView>
        {
          <Dialog.Container visible={visible} headerStyle={{height:0}}>
            {/* <Dialog.Title>Edit</Dialog.Title> */}
            {/* <Dialog.Description> */}
              {/* <ScrollView style={{height:50}}> */}
            <Dialog.Input
              textInputRef={userNameRef} 
              defaultValue={userName} 
              onChangeText={(e) => userNameRef.current.value = e} 
              label={"Name"}/>
            <Dialog.Input 
              textInputRef={userRoleRef} 
              defaultValue={userRole}
              multiline={true}
              onChangeText={(e)=>userRoleRef.current.value = e}
              label={'Role'}/>
            <Dialog.Input 
              textInputRef={userHeightRef} 
              defaultValue={userHeight}
              onChangeText={(e)=>userHeightRef.current.value = e}
              keyboardType='number-pad'
              label={'Height'}/>
            <Dialog.Input 
              textInputRef={userWeightRef}
              defaultValue={userWeight}
              keyboardType='number-pad'
              onChangeText={(e)=>userWeightRef.current.value = e} 
              label={"Weight"}/>
            <Dialog.Input 
              textInputRef={userAgeRef} 
              defaultValue={userAge}
              keyboardType='number-pad'
              onChangeText={(e)=>userAgeRef.current.value = e}
              label={"Age"}/>
              {/* </ScrollView> */}
            {/* </Dialog.Description> */}
            
            <Dialog.Button label="Ok" onPress={handleCancel} />
            <Dialog.Button label="Cancel" onPress={handleDelete} />
          </Dialog.Container>
        }
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
  firstSectionContainer:{
    flexDirection:'column',
    height:135,
    paddingHorizontal:30,
  },
  firstSectionHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  firstSectionHeaderLeft:{
    flexDirection:'row',
  },
  firstSectionAvatar:{
    height:55,
    width:55
  },
  firstSectionLeftUserInfo:{
    flexDirection:'column',
    marginTop:4,
    marginLeft:10
  },
  firstSectionUserName:{
    fontSize:Constants.FONT_SIZE.FT14,
    fontFamily:Constants.FONT_FAMILY.PRIMARY_MEDIUM,
    color:'black'
  },
  firstSectionEditButton:{
    backgroundColor:'#92A3FD',
    width:83,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:99
  },
  firstSectionEditText:{
    color:'white',
    fontSize:Constants.FONT_SIZE.FT12,
    fontFamily:Constants.FONT_FAMILY.PRIMARY_MEDIUM
  },
  firstSectionDetailContainer:{
    flexDirection:'row',
    height:65,
    justifyContent:'space-between',
    marginTop:20
  },
  firstSectionCard:{
    borderRadius:16,
    width:95,
    height:65,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#a7a4a4",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24,
    backgroundColor: 'white'
  },
  firstSectionCardText1:{
    color:'#92A3FD',
    fontSize:Constants.FONT_SIZE.FT14,
    fontFamily:Constants.FONT_FAMILY.PRIMARY_MEDIUM,
    marginBottom:7
  },
  firstSectionCardText2:{
    color:'#7B6F72',
    fontSize:Constants.FONT_SIZE.FT12,
    fontFamily:Constants.FONT_FAMILY.PRIMARY_REGULAR
  },
  secondSectionContainer:{
    height:189,
    justifyContent:'space-evenly',
    borderRadius:16,
    marginTop:30,
    marginBottom:15,
    paddingHorizontal:20,
  },
  secondSectionTitle:{
    fontSize:Constants.FONT_SIZE.FT16,
    fontFamily:Constants.FONT_FAMILY.PRIMARY_SEMI,
    color:'black',
    
  },
  secondSectionItem:{
    flexDirection:'row',
    height:20,
    justifyContent:'space-between'
  },
  secondSectionItemLeft:{
    flexDirection:'row',
  },
  secondSectionItemIcon:{
    height:20,
    width:20,
    marginRight:10
  },
  secondSectionItemArrowIcon:{
    height:18,
    width:18
  },
  thirdSectionContainer:{
    height:99,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    marginBottom:15,
    borderRadius:20
  },
  forthSectionContainer:{
    height:159,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    borderRadius:20
  },
  containershadow:{
    shadowColor: "#a7a4a4",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24,
    backgroundColor: 'white',
    // borderRadius:35
  },
  itemText:{
    
  }
})

export default ProfileScreen;