//  Do the initial rendering
//   - use the array of items we passed to the component, and map each item to an Item component - adding it to the DOM in an Item component (see above)
//   - do it again, but this time use an ItemForm component instead of an Item component (see below)
// 2. When you add a new item, use that item as the data for your ItemForm component, and add that ItemForm component to the DOM
// 3. When you click the delete button, find the item in the array and remove it from the array. Then re-render.
// 4. When you click clear, empty out the array and re-render.

import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
//  First we are creating an array called items.
// 2. Next we are creating an array called categories.
// 3. Then we are setting a default value for the selectedCategory.
// 4. Finally, we are setting a default value for the selectedCategory.
// 5. We are creating a function called handleSubmit.
// 6. We are creating a function called handleChange.
function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

//  We are fetching data from http://localhost:4000/items and storing it in items array.
// 2. This function runs only when the app loads and after that it's not running again.

// We can try to run the same code with a different url and see the result.

  useEffect(()=>{
    fetch("http://localhost:4000/items")
    .then((res) =>res.json())
    .then((data) => {
      console.log(data)
      setItems(data)

    })
  },[])

/*
get method

function: 

fetch(url)
 When a category is selected, the function will be called automatically.
2. The current state of the selected categories is saved in a variable named selectedCategories.
3. The first if statement checks whether the selection is the same or not. If it is the same, there is no need to update anything and we can return immediately.
4. Otherwise, we need to update the categories field. The new selected category will be pushed into the current state. This will trigger a re-rendering of the component.
5. If the previous if statement is not true, but there is already an existing value in selectedCategories, it means that a new category has been selected and we have to remove it from the array. We use the .filter() method to do so.
6. The new state of the selected categories is saved back as the current state. This will trigger a re-rendering of the component.
7. When handleCategoryChange is called, it will check whether the new selection is the same as the old one or not. If it is the same, there is no need to update anything and we can return immediately.
8. Otherwise, we need to update the categories field. The new selected category will be removed from the current state. This will trigger a re-rendering of the component.


## Renders

The render method returns a DIV element with the following child elements:

1. Category Selector
2. Select All Button
3. Search Filter
4. List of Selected Categories


## Category Selector

The category selector is a React component that encapsulates all the logic related to category selection. We will be building this component in a separate file and importing it here. The CategorySelector class is defined in category-selector.jsx
component.jsx::

    import React, { Component } from 'react';

    export default class CategorySelector extends Component {

      constructor(props) {
        super(props);
        this.state = {};
      }

      handleCategoryChange(category) {...}

      render() {
        const category = this.props.category;
        const selectedCategories = this.state.selectedCategories;
        return (
          <div>
            <div className="filter-component">
              <CategorySelector category={category} onCategoryChange={this.handleCategory



*/

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
/*
 Calling the filter() method on the items array
2. Passing in a anonymous function that will check the category of each item
and whether the selectedCategory is equal to all.
3. If they are equal we will push the item into the new array.
4. Once we have done that we will return the new array, essentially filtering out the items that do not match our selectedCategory.
*/
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
/*
 The function is named `ShoppingList`.
2. It's designed to be the functional component for the shopping list page of the app.
3. It accepts an array of items as a prop.
4. The function is a React component because it returns an HTML element through the <div> tag.
5. It has an item form component as a child.
6. It has a filter component as a child.
7. It has an unordered list of items (represented by Item component) as a child.
8. It has 2 methods attached to the component to handle category changes and item creation (handleCategoryChange and ItemForm).

As you see from the above code, the functional component is in charge of the state management,
and the state is managed with the useState hook. This is an object with two items:
selected category and items. The state is handled in the parent component, 
and the state is passed as a prop to the child functional component.
*/
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
