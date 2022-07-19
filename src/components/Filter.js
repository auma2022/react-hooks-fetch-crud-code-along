import React from "react";
/*
 Create a select element with the id `filter` and set the name to `filter`.
2. Create a <option> with the text `Filter by category` and a value of `All`.
3. Create a <option> with the text `Produce` and a value of `Produce`.
4. Create a <option> with the text `Dairy` and a value of `Dairy`.
5. Create a <option> with the text `Dessert` and a value of `Dessert`.
6. Attach an event listener to the select element that listens for changes.
7. Execute the onCategoryChange function when the select element is changed.
8. Pass in the value attribute of the select element as the argument to the onCategoryChange function.

In the render function, we create a select element with the id `filter` and then render the Filter component inside that.

We also pass in the onCategoryChange that we defined in the previous section to handle changes to the category.
*/
function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
