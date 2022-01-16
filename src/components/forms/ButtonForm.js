import React from 'react';
import { Button } from "native-base";
import {useFormikContext} from 'formik';

export const ButtonForm = ({textColor, bgColor, text,rounded=25,colorFocus='#033a54',...rest}) => {

    const {handleSubmit} = useFormikContext();


    return (
        <Button 
        _text={{color: textColor }} 
        rounded={rounded}
        color={bgColor}
        colorFocus={colorFocus}
        onPress={handleSubmit}
        {...rest}
        >
            {text}
        </Button>
    )
}