import React from 'react';
import { HStack, Icon, Text } from 'native-base'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderTile = ({text}) => {
    return (
        <HStack space={3} alignItems="center" right={5} mb={3} >
        <Text
        fontSize={12}
        fontWeight="bold"
        >
        {text}
        </Text>
        <Icon
        fontSize={80}
          color="#022D41"
          as={<Material name="account-outline" />}
        />
        </HStack>
    )
}
