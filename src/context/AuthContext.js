// import react,{createContext,useState,useEffect, Children} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Config from '../config/Config';

// export const AuthContext = createContext();

// export const AuthProvider = ({children})=>{
//     const [userInfo, setUserInfo] = useState({});
//     const [isLoading, setIsLoading] = useState(false);

// }
import React from 'react';
const AuthContext = React.createContext();
export default AuthContext;