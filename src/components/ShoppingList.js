import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState([])
  const [newItems, setNewItems] = useState([])
   
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
   }

  function handleItemSearch (event) {
    setSearchItem(event.target.value);
   }
 
  let itemsToDisplay = items.filter((item) => {
      if (searchItem.length !== 0 ) {
        return item.name === searchItem
      } else{
        if (selectedCategory === "All") return true
        return item.category === selectedCategory
    };
  })
   
  function onItemFormSubmit (newItem) {
     setNewItems(...items,newItem)
 }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}  />

      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleItemSearch} 
      searchItem={searchItem} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
