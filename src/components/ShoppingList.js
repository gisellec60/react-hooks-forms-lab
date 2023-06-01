import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState([])
  const [itemArray, setItemArray] = useState(items)
  const [categorySelection, setCategorySelection] = useState("Produce")
  const [addItem, setAddItem] = useState([])
  
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
   }

  function handleItemSearch (event) {
    setSearchItem(event.target.value);
   }
 
  const itemsToDisplay = items.filter((item) => {
      if (searchItem.length !== 0 ) {
        console.log("are you here")
        return item.name === searchItem
      }else{
        if (selectedCategory === "All") return true
        return item.category === selectedCategory
    };
  })

  function handleAddItemCategory(event) {
    setCategorySelection(event.target.value);
    console.log("this is new category", categorySelection)
  }

  function handleAddItem (e) {
    setAddItem(e.target.value)
    console.log("this is new item", addItem)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    const newItem = {
      "id":uuid(),
      "name":addItem,
      "category":categorySelection,
   }
    console.log("this is new item",newItem)
    setItemArray([...itemArray, newItem])
    console.log("this is new array", itemArray)
  }
 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleOnSubmit} 
      additem={addItem} categorySelection={categorySelection} 
      onChangeCategory={handleAddItemCategory} onAddItem={handleAddItem}/>

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
