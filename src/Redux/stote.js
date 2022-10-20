import {createStore,compose } from 'redux';
import CombineReduce from './reducers/CombineReduce.js'

// установка middleware с подключение devtools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


    //preloadedState - предыдущий стейт
    const configureStore= preloadedState => createStore(

        CombineReduce,
        preloadedState,
        composeEnhancers()
    )
const store = configureStore({});


export default store;