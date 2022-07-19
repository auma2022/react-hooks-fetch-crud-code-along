/*import React from "react";

function Item({ item }) {
  /*
   Generate a unique id for each item in the cart
2. we add a unique id to each item in the cart
3. Next we update the state of isInCart by toggling it
4. We also add the item to the cart with this unique id and the count
5. We also save the item to localstorage
  
 
  const handleAddToCart=()=>{
    console.log(item.isInCart);
    const itemData={
      isInCart: !item.isInCart
    }
    /*
     The function takes in the item to be updated and the updated item data as arguments
2. first we make an axios call to our server to fetch the item we want to update
3. We then send a POST request to our server to update the item with the updated item data
4. We then return the updated item object

    fetch(`http://localhost:4000/items/${item.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
  .then((r) => r.json())
  .then((updatedItem) => console.log(updatedItem));

  } 
  /*
    First we make a fetch request to the server to delete the item by its id
2.  We then make another fetch request to get the updated list of items and print them out
3.  The third fetch request is made to get the updated list of items and print them out 
  
  const handleDelete=()=>{
    fetch(`http://localhost:4000/items/${item.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((r) => r.json())
    .then((updatedItem) => console.log(updatedItem));
     
  }
/*
 The function first checks if the item is in the cart. If it isn't, it sets the className of the 'add to cart' button to 'add' and sets the event handler to 'handleAddToCart'
2. If the item is already in the cart, the className of the 'add to cart' button is set to 'remove' and the event handler is set to 'handleRemoveFromCart'
3. If the user clicks on the 'add to cart' button, the item is added to the cart and the className of the button is updated.
4. If the user clicks on the 'remove' button, the item is removed from the cart and the className of the button is updated.
5. The user can delete an item by clicking on the 'delete' button.

The complete code for the above example is provided below.

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
*/
import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }

  function handleAddToCartClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Item;