import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All")

  const selectedFoods = items.filter(item =>{
    if (selectedCategory === "All"){
      return true
    } else {
      return item.category === selectedCategory;
    }
  })

  const displayFoods = selectedFoods.map(item =>{
    return(<Item key={item.id} name={item.name} category={item.category} />)
  })

  function changeFilter(event){
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayFoods}
      </ul>
    </div>
  );
}

export default ShoppingList;
