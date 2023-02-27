import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('')
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleItemName (e) {
    setItemName(e.target.value)
  } 

  function handleItemCategory (e) {
    setItemCategory(e.target.value)
  }
 
  function onItemFormSubmit (item) {
  setItems([...items, item])
  setItemName("")
  setItemCategory("")
}

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchQuery (e) {
    setSearchQuery((searchQuery) => e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
     else {
      return item.category === selectedCategory;}
      
  });

const searchResults = itemsToDisplay.filter(item => {
  return item.name.includes(searchQuery) ||
    item.name===(searchQuery)
} )



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}
      itemName={itemName}
      itemCategory={itemCategory}
      handleItemName={handleItemName}
      handleItemCategory={handleItemCategory}
      />
      <Filter search= {searchQuery} onSearchChange={handleSearchQuery} onCategoryChange={handleCategoryChange} 
      
      selectedCategoryValue={selectedCategory}/>
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
