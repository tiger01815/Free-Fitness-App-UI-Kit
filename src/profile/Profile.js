import react,{useState} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { Switch } from 'react-native-switch';

import CommonHeader from '../common/CommonHeader';
const ProfileScreen = ({navigation})=>{
    const onBackPress =()=> navigation.goBack();
    const onMenuPress = () => navigation.openDrawer()
    // let switchval = true;
    const [switchval, setSwitchval] = useState(true)
    return(
        <ScrollView style={styles.container}>
          <CommonHeader
              title={'Profile'}
              backenable={true}
              onBackPress={onBackPress}
              onMenuPress={onMenuPress}
          />
          <View style={styles.firstSectionContainer}>
            <View style={styles.firstSectionHeader}>
              <View style={styles.firstSectionHeaderLeft}>
                <Image style={styles.firstSectionAvatar} source={require('../../assets/image/Vector.png')}/>
                <View style={styles.firstSectionLeftUserInfo}>
                  <Text style={styles.firstSectionUserName}>Stefani Wong</Text>
                  <Text>Lose a Fat Program</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.firstSectionEditButton}
                onPress={()=>navigation.navigate('ProfileEdit')}
              >
                <Text style={styles.firstSectionEditText}>Edit</Text>
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
                  <Text style={styles.firstSectionCardText1}>180cm</Text>
                  <Text style={styles.firstSectionCardText2}>Height</Text>
                </View>
                <View style={styles.firstSectionCard}>
                  <Text style={styles.firstSectionCardText1}>65kg</Text>
                  <Text style={styles.firstSectionCardText2}>Weight</Text>
                </View>
                <View style={styles.firstSectionCard}>
                  <Text style={styles.firstSectionCardText1}>22yo</Text>
                  <Text style={styles.firstSectionCardText2}>Age</Text>
                </View>
            </View>
          </View>
          <View style={styles.secondSectionContainer}>
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
              <Text>Personal Data</Text>
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
                <Text>Achievement</Text>
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
              <Text>Activity History</Text>
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
              <Text>Workout Progress</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.thirdSectionContainer}>
            <View>
              <Text style={styles.secondSectionTitle}>Notification</Text>  
            </View>
            <View style={styles.secondSectionItem}>
              <View style={styles.secondSectionItemLeft}>
                <Image
                  source={require('../../assets/image/Icon-Notif.png')}
                  style={styles.secondSectionItemIcon}
                />
                <Text>Pop-up Notificaion</Text>
              </View>
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
                backgroundActive={'#C58BF2'}
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
            </View>
          </View>
          <View style={styles.forthSectionContainer}>
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
                <Text>Contact Us</Text>
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
                <Text>Privacy Policy</Text>
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
              <Text>Settings</Text>
              </View>
              <Image
                source={require('../../assets/image/ArrowRight2.png')}
                style={styles.secondSectionItemArrowIcon}
              />
            </TouchableOpacity>
          </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:25,
  },
  firstSectionContainer:{
    flexDirection:'column',
    height:135,
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
    fontSize:14,
    fontWeight:'700',
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
    fontSize:12,
    fontWeight:'700',
  },
  firstSectionDetailContainer:{
    flexDirection:'row',
    height:65,
    justifyContent:'space-between'
  },
  firstSectionCard:{
    borderRadius:16,
    width:95,
    height:65,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "black",
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
    fontSize:14,
    fontWeight:'700',
    marginBottom:7
  },
  firstSectionCardText2:{
    color:'#7B6F72',
    fontSize:12,
    fontWeight:'700'
  },
  secondSectionContainer:{
    height:189,
    justifyContent:'space-around',
    borderRadius:16
  },
  secondSectionTitle:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
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
    justifyContent:'space-evenly'
  },
  forthSectionContainer:{
    height:159,
    justifyContent:'space-evenly'
  }
})

export default ProfileScreen;