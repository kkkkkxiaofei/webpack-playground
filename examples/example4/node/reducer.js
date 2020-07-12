const { combineReducers } = require('@dummmy/redux');

const actionReducer = (state = '', action) => {
  if (action.type === 'MODIFY') {
    return {
      actionTime: new Date().toLocaleString()
    }
  }
  return state;
};

const fruitsReducer = (state = [], action) => {
  if (action.type === 'ADD_FRUIT') {
    return state.concat({ id: action.id, price: 0 })
  }

  if (action.type === 'CHANGE_PRICE') {
    return state.map(fruit => fruit.id === action.id ? ({ ...fruit, price: fruit.price + 1 }) : {...fruit})
  }

  
  return state;
};


// module.exports = combineReducers({
//   app: combineReducers({ 
//     fruits: fruitsReducer,
//     action: actionReducer, 
//   })
// })

export default combineReducers({
  app: combineReducers({ 
    fruits: fruitsReducer,
    action: actionReducer, 
  })
})
