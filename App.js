/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect,useRef, Component}from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Autocomplete from 'react-native-autocomplete-input';
import 'react-native-gesture-handler';
import 
{
  NavigationContainer,
  getFocusedRouteNameFromRoute
} from'@react-navigation/native';
import {createNativeStackNavigator} from'@react-navigation/native-stack'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Switch} from 'react-native-switch'
// import { Shadow } from 'react-native-shadow-2';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

//Profile
import ProfileScreen from './src/profile/Profile';
import ProfileEditScreen from './src/profile/ProfileEdit';
import AchievementScreen from './src/profile/Achievement';
import ActivityHistoryScreen from './src/profile/ActivityHostory';
import ContactUsScreen from './src/profile/ContactUs';
import PersonalDataScreen from './src/profile/PersonalData';
import PrivacyPolicyScreen from './src/profile/PrivacyPolicy';
import SettingsScreen from './src/profile/Settings';
import WorkoutProgressScreen from './src/profile/WorkoutProgress';
//Camera
import CameraScreen from './src/camera/Camera';
//Activity
import ActivityScreen from './src/avtivity/Activity';
import MoreActivityScreen from './src/avtivity/MoreActivity';
import ActivityDetailScreen from './src/avtivity/ActivityDetail';
//Home
import HomeScreen from './src/home/Home';
//Search
import SearchScreen from './src/search/Search';
//Onboarding
import OnboardingGetStartScreen from './src/onboarding/OnboardingGetStartScreen';
import OnboardingTrackYourGoalScreen from './src/onboarding/OnboardingTrackYourGoal'
import OnboardingGetBurnScreen from './src/onboarding/OnboardingGetBurn';
import OnbordingEatWellScreen from './src/onboarding/OnbordingEatWell';
import OnboardingImproveSleepScreen from './src/onboarding/OnboardingImproveSleep';

//auth
// import CreatPasswordScreen from './src/auth/CreatPassword';
import LogInScreen from './src/auth/LogIn';
import LogInSuccessScreen from './src/auth/LogInSucces';
import CreatPasswordScreen from './src/auth/CreatPassword';
import CompleteProfileStartScreen from './src/auth/CompleteProfile';
import ProfileStepOneScreen from './src/auth/ProfileStepOne';

//constant
import Constants from './src/common/Constants';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
const Tab =  createBottomTabNavigator()

function Tabprofile(){
  return(
    <Stack.Navigator
      initialRouteName={'Profile'}
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen
        key ={'Profile'}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        key ={'PersonalData'}
        name="PersonalData"
        component={PersonalDataScreen}
      />
      <Stack.Screen
        key ={'Achievement'}
        name="Achievement"
        component={AchievementScreen}
      />
      <Stack.Screen
        key ={'ActivityHistory'}
        name="ActivityHistory"
        component={ActivityHistoryScreen}
      />
      <Stack.Screen
        key ={'WorkoutProgress'}
        name="WorkoutProgress"
        component={WorkoutProgressScreen}
      />
      <Stack.Screen
        key ={'ContactUs'}
        name="ContactUs"
        component={ContactUsScreen}
      />
      <Stack.Screen
        key ={'PrivacyPolicy'}
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        key ={'Settings'}
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        key ={'ProfileEdit'}
        name="ProfileEdit"
        component={ProfileEditScreen}
      />
    </Stack.Navigator>
  )
}

function TabHome(){
  return(
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen
        key={'Home'}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )

}
function TabActivity(){
  return(
    <Stack.Navigator
      initialRouteName='Activity'
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen
        key={'Activity'}
        name="Activity"
        component={ActivityScreen}
      />
      <Stack.Screen
        key={'MoreActivity'}
        name="MoreActivity"
        component={MoreActivityScreen}
      />
      <Stack.Screen
        key={'ActivityDetail'}
        name="ActivityDetail"
        component={ActivityDetailScreen}
      />
    </Stack.Navigator>
  )
}
function TabSearch(){
  return(
    <Stack.Navigator
      initialRouteName='Search'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen
        key={'Search'}
        name='Search'
        component={SearchScreen}
      />
    </Stack.Navigator>
  )
}
function TabCamera(){
  return(
    <Stack.Navigator
      initialRouteName='Camera'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen
        key={'Camera'}
        name='Camera'
        component={CameraScreen}
      />
    </Stack.Navigator>
  )
}

function Onboarding(){
  return(
    <Stack.Navigator
      initialRouteName='OnboardingStart'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen
        key={'OnboardingStart'}
        name='OnboardingStart'
        component={OnboardingGetStartScreen}
      />
      <Stack.Screen
        key={'OnboardingTrackYourGoal'}
        name='OnboardingTrackYourGoal'
        component={OnboardingTrackYourGoalScreen}
      />
      <Stack.Screen
        key={'OnboardingGetBurn'}
        name='OnboardingGetBurn'
        component={OnboardingGetBurnScreen}
      />
      <Stack.Screen
        key={'OnbordingEatWell'}
        name='OnbordingEatWell'
        component={OnbordingEatWellScreen}
      />
      <Stack.Screen
        key={'OnboardingImproveSleep'}
        name='OnboardingImproveSleep'
        component={OnboardingImproveSleepScreen}
      />
      <Stack.Screen
        name={'NavigatorTab'}
        component={NavigatorTab}
      />
    </Stack.Navigator>
  )
}

function Auth(){
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName='createpassword'
    >
      <Stack.Screen
        key={'login'}
        name='login'
        component={LogInScreen}
      />
      <Stack.Screen
        key={'loginsucces'}
        name='loginsucces'
        component={LogInSuccessScreen}
      />
      <Stack.Screen
        key={'createpassword'}
        name='createpassword'
        component={CreatPasswordScreen}
      />
      <Stack.Screen
        key={'completeprofilestart'}
        name='completeprofilestart'
        component={CompleteProfileStartScreen}
      />
      
      <Stack.Screen
        key={'profilestepone'}
        name='profilestepone'
        component={ProfileStepOneScreen}
      />
    </Stack.Navigator>
  )
}

function NavigatorTab() {
  const insets = useSafeAreaInsets();
  const Stack = createBottomTabNavigator();
  const TabBarItem = ({ navigation, target, icon, width, height, focused }) => {
      return (
          <View
              style={{
                  height: 80 + insets.bottom,
              }}>
              {/* <View style={{ height: 80 }}> */}
              
                  <TouchableOpacity
                      onPress={() => {
                          navigation.navigate(target);
                      }}
                      style={{
                          width: Dimensions.get('window').width / 5,
                          height: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}>

                      {
                        target=='TabSearch' ?
                        
                          // <View 
                          //   style={{
                          //     alignItems: 'center',
                          //     width:60,
                          //     height:60,
                          //     backgroundColor:'#92A3FD',
                          //     justifyContent:'center',
                          //     borderRadius:60/2,
                          //     marginBottom:75
                          //   }}
                          // >
                            <LinearGradient
                              colors={['#92A3FD', '#9DCEFF' ]}
                              style={{
                              width:60,
                              alignItems: 'center',
                              justifyContent:'center',
                              height:60,
                              borderRadius:60/2,
                              marginBottom:75,
                              shadowColor: "black",
                              shadowOffset: {
                                width: 0,
                                height: 5,
                              },
                              shadowOpacity:  0.25,
                              shadowRadius: 20.00,
                              elevation: 4,
                              // backgroundColor: 'white',
                              // borderRadius:35
                              }}
                              start={{ x: 1, y: 1 }}
                            >
                            <Image
                                style={{
                                    // marginTop: 0,
                                    width: width,
                                    height: height,
                                    resizeMode: 'contain',
                                    // tintColor:
                                    //     target != 'TabSwipe' && target != 'TabBlasts'
                                    //         ? 'rgba(61,60,61,1)'
                                    //         : null,
                                }}
                                source={icon}
                            />
                            </LinearGradient>
                          // </View>
                          :
                          <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{
                                    marginTop: 0,
                                    width: width,
                                    height: height,
                                    resizeMode: 'contain',
                                    // tintColor:
                                    //     target != 'TabSwipe' && target != 'TabBlasts'
                                    //         ? 'rgba(61,60,61,1)'
                                    //         : null,
                                }}
                                source={icon}
                            />
                            <View
                                style={{
                                    marginTop: 5,
                                    width: 4,
                                    height: 4,
                                    borderRadius: 3,
                                    backgroundColor: focused
                                        ? '#C58BF2'
                                        : 'transparent',
                                }}
                            />
                          </View>
                      }
                  </TouchableOpacity>
                
              {/* </View> */}
          </View>
      );
  };
  const getTabBarVisibility = (tab, route) => {
      const routeName = getFocusedRouteNameFromRoute(route);
      const screensWithTab = {
          TabHome: [undefined, 'Profile'],
          TabActivity: [undefined, 'Activity'],
          TabSearch: [undefined, 'Search'],
          TabCamera: [undefined, 'Camera'],
          Tabprofile: [undefined, 'Profile']
      };
      return screensWithTab[tab].indexOf(routeName) > -1;
  };
  return (
      <Stack.Navigator
          screenOptions={({ navigation, route }) => ({
              tabBarIcon: ({ focused }) => {
                  let icon;
                  if (route.name === 'TabHome') {
                      icon = !focused
                          ? require('./assets/image/Home.png')
                          : require('./assets/image/Home_focused.png');
                  } else if (route.name === 'TabActivity') {
                      icon = !focused
                          ? require('./assets/image/Activity.png')
                          : require('./assets/image/Activity_focused.png');
                  } else if (route.name === 'TabSearch') {
                      icon = !focused
                          ? require('./assets/image/Search.png')
                          : require('./assets/image/Search.png');
                  } else if (route.name === 'TabCamera') {
                      icon = !focused
                          ? require('./assets/image/Camera.png')
                          : require('./assets/image/Camera_focused.png');
                  } else if(route.name === 'Tabprofile'){
                      icon = !focused
                          ? require('./assets/image/Profile.png')
                          : require('./assets/image/Profile_focused.png')
                  }
                  switch (route.name) {
                      case 'TabHome':
                          return (
                              <TabBarItem
                                  navigation={navigation}
                                  target={'TabHome'}
                                  icon={icon}
                                  width={24}
                                  height={24}
                                  focused={focused}
                              />
                          )
                      case 'TabActivity':
                          return (
                              <TabBarItem
                                  navigation={navigation}
                                  target={'TabActivity'}
                                  icon={icon}
                                  width={24}
                                  height={24}
                                  focused={focused}
                              />
                          )
                      case 'TabSearch':
                          return (
                              <TabBarItem
                                  navigation={navigation}
                                  target={'TabSearch'}
                                  icon={icon}
                                  width={24}
                                  height={24}
                                  focused={focused}
                              />
                          )
                      case 'TabCamera':
                          return (
                              <TabBarItem
                                  navigation={navigation}
                                  target={'TabCamera'}
                                  icon={icon}
                                  width={24}
                                  height={24}
                                  focused={focused}
                              />
                          )
                      case 'Tabprofile':
                        return (
                            <TabBarItem
                                navigation={navigation}
                                target={'Tabprofile'}
                                icon={icon}
                                width={24}
                                height={24}
                                focused={focused}
                            />
                        )
                      default:
                          return <View />
                  }
              },
              tabBarLabel: () => {
                  return null;
              },
          })}
          initialRouteName={'TabHome'}>
          <Stack.Screen
              name="TabHome"
              component={TabHome}
              options={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      height: 80 + insets.bottom,
                      width: Dimensions.get('window').width,
                      left: 0,
                      bottom: 0,
                      borderTopWidth: 0,
                      backgroundColor: 'white',
                      display: 'flex',
                      // display: getTabBarVisibility('TabHome', route) ? 'flex' : 'none',

                      ...Platform.select({
                          ios: {
                              shadowColor: '#000',
                              shadowOffset: {
                                  width: 0,
                                  height: -3,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 4.59,
                          },
                          android: {
                              elevation: 5,
                          },
                      }),
                  },
              })}
          />
          <Stack.Screen
              name="TabActivity"
              component={TabActivity}
              options={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      height: 80 + insets.bottom,
                      width: Dimensions.get('window').width,
                      left: 0,
                      bottom: 0,
                      borderTopWidth: 0,
                      backgroundColor: 'white',
                      display: getTabBarVisibility('TabActivity', route) ? 'flex' : 'none',
                      ...Platform.select({
                          ios: {
                              shadowColor: '#000',
                              shadowOffset: {
                                  width: 0,
                                  height: -3,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 4.59,
                          },
                          android: {
                              elevation: 5,
                          },
                      }),
                  },
              })}
          />
          <Stack.Screen
              name="TabSearch"
              component={TabSearch}
              options={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      height: 80 + insets.bottom,
                      width: Dimensions.get('window').width,
                      left: 0,
                      bottom: 0,
                      borderTopWidth: 0,
                      backgroundColor: 'white',
                      display: getTabBarVisibility('TabSearch', route) ? 'flex' : 'none',
                      ...Platform.select({
                          ios: {
                              shadowColor: '#000',
                              shadowOffset: {
                                  width: 0,
                                  height: -3,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 4.59,
                          },
                          android: {
                              elevation: 5,
                          },
                      }),
                  },
              })}
          />
          <Stack.Screen
              name="TabCamera"
              component={TabCamera}
              options={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      height: 80 + insets.bottom,
                      width: Dimensions.get('window').width,
                      left: 0,
                      bottom: 0,
                      borderTopWidth: 0,
                      backgroundColor: 'white',
                      display: getTabBarVisibility('TabCamera', route) ? 'flex' : 'none',
                      ...Platform.select({
                          ios: {
                              shadowColor: '#000',
                              shadowOffset: {
                                  width: 0,
                                  height: -3,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 4.59,
                          },
                          android: {
                              elevation: 5,
                          },
                      }),
                  },
              })}
          />
          <Stack.Screen
              name="Tabprofile"
              component={Tabprofile}
              options={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      height: 80 + insets.bottom,
                      width: Dimensions.get('window').width,
                      left: 0,
                      bottom: 0,
                      borderTopWidth: 0,
                      backgroundColor: 'white',
                      display: getTabBarVisibility('Tabprofile', route) ? 'flex' : 'none',
                      ...Platform.select({
                          ios: {
                              shadowColor: '#000',
                              shadowOffset: {
                                  width: 0,
                                  height: -3,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 4.59,
                          },
                          android: {
                              elevation: 5,
                          },
                      }),
                  },
              })}
          />
      </Stack.Navigator>
  );
}


function NavigatorDrawer(){
  function CustomDrawerContent(props){
    const MenuItem = ({icon,title,onPress})=>{
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:15
          }}
        >
          <Image
            style={{
              width:16,
              height:16,
              resizeMode:'contain'
            }}
            source={icon}
          />
          <Text
            style={{
              marginLeft:25,
              fontFamily:Constants.FONT_FAMILY.PRIMARY_MEDIUM,
              fontSize:Constants.FONT_SIZE.FT20,
              color:Constants.COLOR.BLACK
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      )
    }

    return(
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingTop:24,
            paddingBottom:24,
            paddingHorizontal:40
          }}
        >
          <View
            style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-around'
            }}
          >
            <Text
              style={{
                fontFamily:Constants.FONT_FAMILY.PRIMARY_BOLD,
                fontSize:Constants.FONT_SIZE.FT28,
                color:Constants.COLOR.BLACK
              }}
            >
              Menu
            </Text>
            <TouchableOpacity
              onPress={()=>{props.navigation.closeDrawer()}}
            >
              <Image
                source={require('./assets/image/Close-Icon.png')}
                style={{
                  width:20,
                  height:20
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    )

  }
  return(
    <Drawer.Navigator
      screenOptions={{
        drawerPosition:'right',
        drawerType:'front',
        headerShown:false,
        drawerStyle:{
          width:Constants.LAYOUT.SCREEN_WIDTH-100
        }
      }}
      initialRouteName={'loginDrawer'}
      drawerContent={props => <CustomDrawerContent {...props}/>}
    >
      <Drawer.Screen
       name={'NavigatorTab'}
       component={NavigatorTab}
      />
      {/* <Drawer.Screen
        name={'on'}
      /> */}
      <Drawer.Screen
        key={'OnboardingStartDrawer'}
        name='OnboardingStartDrawer'
        component={Onboarding}
      />
      <Drawer.Screen
       key={'loginDrawer'}
       name='loginDrawer'
       component={Auth}
      />
    </Drawer.Navigator>

  )
}

function App(){
  return (
    <SafeAreaProvider
      style={{
        // backgroundColor:'white'
      }}
    >
      <NavigationContainer>
        {/* <NavigatorTab/> */}
        <NavigatorDrawer/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({

});


export default App;
