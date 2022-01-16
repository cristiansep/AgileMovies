import 'react-native-gesture-handler';

import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { store } from './src/state/store';
import { Provider } from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import setup from './src/api/setUpInterceptor';


 const App = () => {

  return (
    <>
      <NativeBaseProvider>
       <Provider store={store} >
      <NavigationContainer>
       <StackNavigation/>
      </NavigationContainer>
       </Provider>
      </NativeBaseProvider>
    </>
  )
}


export default App;
