const React = require('react');
const { useSelector, useDispatch, useStore } = require('@dummmy/react-redux');
const Fruit = require('./components/Fruit');

const App = () => {
  // window.stores = window.stores || [];
  // const store = useStore();
  // window.stores.push(store);
  // const dispatch = useDispatch();


  const fruits = useSelector(state => state.app.fruits);
  return (
    <div>
      <h1 onClick={() => dispatch({ type: 'MODIFY'})}>
        App
      </h1>
      <button onClick={() => dispatch({ type: 'ADD_FRUIT', id: fruits.length + 1})}>add fruit</button>
      {fruits.map(fruit => (<Fruit {...fruit} />))}
    </div>
  )
};

module.exports = App;