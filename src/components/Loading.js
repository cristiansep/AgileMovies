import React from 'react';
import { ActivityIndicator} from 'react-native';

export const Loading = ({position="relative", color="#022D41", size=50}) => {
    return (
        <ActivityIndicator 
        style={{position}}
        size={size}
        color={color}
    />
    )
}
