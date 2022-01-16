import React from 'react';
import { ScrollView} from 'react-native';
import {
    VStack,
    Box,
    Input,
    FormControl,
} from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { ButtonForm } from '../components/forms/ButtonForm';
import { startLogin } from '../state/actions/authActions';
import { Title } from '../components/Title';






export const LoginScreen = ({navigation}) => {


    const dispatch = useDispatch();

      const handleSubmit = (values) => {
        dispatch(startLogin(values));
      }
     


    return (
      <>
        <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: "#EFF3F2"}}
      keyboardShouldPersistTaps="handled"
      >
        <Box
          flex={1}
          w="80%"
          mx="auto"
          justifyContent="center"
          >
            <Box mb={10}>
          <Title textAlign='center' text="AgileMovies" left={0} fontSize={20} />
            </Box>
          <Formik
            initialValues={{username: 'agilesoft', password: 'agile1234'}}
            onSubmit={(values, {resetForm}) =>{
              handleSubmit(values)
            }}
            validationSchema={
                Yup.object({
                    username: Yup.string().required('El nombre es requerido'),
                    password: Yup.string().required('El password es requerido')
                    .min(8, ({min}) => `La contraseña debe tener al menos ${min} caracteres`)
                  })
            }
            
            
            >
            {({handleChange, handleBlur,values,errors}) => (
              <VStack space={2}>

                <FormControl mb={3} isRequired isInvalid={'username' in errors}>
                    <Input 
                     placeholder="Nombre de usuario" 
                     maxLength={50}
                     keyboardType="email-address"
                     autoCapitalize="none"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                     value={values.username}
                     />
                  <FormControl.ErrorMessage>
                    {errors.username}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl mb={3} isRequired isInvalid={'password' in errors}>
                       <Input
                     placeholder="Password"
                     maxLength={8}
                     type={"password"}
                     autoCapitalize="none"
                     value={values.password}
                     onBlur={handleBlur('password')}
                     onChangeText={handleChange('password')}
                     />
                  <FormControl.ErrorMessage>
                    {errors.password}
                  </FormControl.ErrorMessage>
                </FormControl>

                 <ButtonForm
              textColor="white"
              bgColor="#022D41"
              text="Iniciar Sesión"
            />

              </VStack>
            )}
          </Formik>
        </Box>
        </ScrollView>
   </>
    );
}