import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../screens/LoginScreen';
import { validarToken } from '../state/actions/authActions';

const Stack = createStackNavigator();

export const StackNavigation = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(validarToken())
    }, []);


    if(status === 'checking') return <LoadingScreen />


    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle: {
                backgroundColor: "white"
            }
        }}
        >
        {
            status !== 'authenticated' ? (
                <Stack.Screen name="Login" component={LoginScreen} />
            ) : (
                <Stack.Screen name="Home" component={HomeScreen} />
            )
        }
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    )
}
