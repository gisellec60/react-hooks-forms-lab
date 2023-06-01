import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addItem, onItemFormSubmit,onChangeCategory,onAddItem}) {
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" onChange={onAddItem} name="name" value={addItem}/>
        
      </label>

      <label>
        Category:
        <select name="category" onChange={onChangeCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
