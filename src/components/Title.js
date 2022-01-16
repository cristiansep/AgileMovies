import React from 'react'
import { Text } from 'native-base'


export const Title = ({text, left=5, fontSize=16, textAlign="left"}) => {
    return (
        <Text
        left={left}
        mb={3}
        textAlign={textAlign}
        fontSize={fontSize}
        fontWeight="bold"
        >
            {text}
        </Text>
    )
}
