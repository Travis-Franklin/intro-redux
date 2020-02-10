// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//The Bank-"the state"
//descripbe the ideal version of state

// {
//     amount: 100
// }

// if we added1 to the amount, what would state look lie?

// {
//     amount: 101
// }

// //The teller-reducer function

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

//A transaction slip-action
//reducers are always named for the state they manage
//they always receive the current state and the action they're processing

import {
    createStore
} from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function actionIncrement (howMuch=1){
    
    return{
        type: INCREMENT,
        amount: howMuch
    }
}

function actionDecrement (howMuch=1){
    return {
        type: DECREMENT,
        amount: howMuch
    }
}

const defaultState = {amount1: 100, amount2: 50}

function counter(state=defaultState , action){

        const newState = {...state};

        switch(action.type){
            case INCREMENT:
                newState.amount = state.amount + action.amount;
                break;
            case DECREMENT :
                newState.amount = state.amount - action.amount;
                break;
            default:
                break;
        }
        // if (action.type === 'INCREMENT') {
        //     newState.amount = state.amount + action.amount;
        // } else if (action.type === 'DECREMENT'){
        //     newState.amount = state.amount - action.amount;
        // } else {
        // }
        return newState;
    //they must return the new version of state.
}

//you give it a reducer, it gives you a 'store'
//the store is an object that manages your state using your reducer
const store = createStore(counter);
//push notifications- subscribe to changes in the store

store.subscribe(()=> {
    console.log(`The state is now: `);
    console.table(store.getState());
});

//lets give th store some actions to process.

store.dispatch(actionIncrement());

store.dispatch(actionIncrement(5));
store.dispatch(actionDecrement(99));


