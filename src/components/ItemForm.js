import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, itemName, handleItemName, handleItemCategory, itemCategory}) {


  return (
    <form onSubmit ={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemName}type="text" name="name" value={itemName} />
      </label>

      <label>
        Category:
        <select onChange={handleItemCategory} name="category" value= {itemCategory}>
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
