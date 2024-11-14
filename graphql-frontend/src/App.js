import React from 'react';
import ItemList from './components/ItemList.js';
import AddItemForm from './components/AddItem.js';

function App() {
  return (
    <div className="App">
      <h1>Add Item</h1>
      <AddItemForm />
      <h1>Item List</h1>
      <ItemList />
    </div>
  );
}

export default App;
