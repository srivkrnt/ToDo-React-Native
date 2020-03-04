import React from 'react';
import MainApp from './components/Home'
import store from './Store'
import {Provider} from 'react-redux';

const App = () => { 
  return(
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
    
