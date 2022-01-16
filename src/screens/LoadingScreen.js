import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const LoadingScreen = ({color="#EFF3F2"}) => {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color
        }}>
            <ActivityIndicator 
                size={ 50 }
                color="#022D41"
            />
        </View>
    )
}