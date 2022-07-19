//  Imports react
// 2. Imports react-dom
// 3. Imports useEffect from react
// 4. Imports useState from react
// 5. Imports ReactDOM
// 6. Imports styles.css from styles.css
// 7. Creates calendar() function
// 8. Creates a jsx variable
// 9. Imports useState from react
// 10. Calls ReactDOM.render() function and passes in two parameters
// 11. Passes jsx variable into the first parameter of ReactDOM.render()
// 12. Passes the empty div into the second parameter of ReactDOM.render()
// 13. Renders the JSX inside the div element
// 14. Closes the jsx variable
// 15. Closes the calendar() function

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

 //This function is called by react when our page loads.
 //The function is looking for the "users" key in the application state. If
   //that key does not exist, the function sets the key to an empty array.
//The function then sets the users in the application state equal to the value
   //stored in the "users" key of the application state.
function App() {
  const [users, setUsers] = useState();


// There are many ways to make api calls, but in this project, we will be using fetch library::

// 1. Fetch is a built-in api that lets you make asynchronous requests to a server.
// 2. Fetch lib has a method called fetch() which takes the url of the api endpoint as an argument.
// 3. The response is then returned in the form of a promise (an object with the result of the api call)
// 4. The .then() method is used to handle the result of the promise.
// 5. The .then() method takes two parameters:
//    1. a function that runs if the promise was successful
//    2. a function that runs if the promise failed


// ### The final JSX
// Here's what the final JSX for our Users component will look like::


  // Function to collect data
  // Make an api call to fetch the data from the url
//  Parse the response in json format
//  Store the response in a local state.
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());

    setUsers(response);
  };

  //Fetching the data from the api.
  // Running the getApiData function.
  useEffect(() => {
    getApiData();
  }, []);

//   First, it imports and creates a constant  from the helper library. 
// 2.  Next, it fetches the list of users from the API. 
// 3.  It then loops through the users array and creates a new li element 
//     for each user. 
// 4.  Finally, it returns the new li elements inside a new div.

// There you have it! This is how you build a React app with no 
// redux and no react-router! If you want to learn how to add redux, 
// take a look at the next section.

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  );
}
//  Importing the React library.
// 2. Importing the TodoApp component from the app/js/components folder.
// 3. Setting the root element to the div with id 'root'.
// 4. Rendering the TodoApp component inside the root element (div with id 'root').

// We create a folder named js/components and put our TodoApp component in it.
// This is the javascript file:

// app/js/components/TodoApp.jsx
// ----------------------------------
// import React from 'react';

// const TodoApp = () => {
//   return (
//     <div>
//       <h1>Todo App!</h1>
//     </div>
//   );
// };

// export default TodoApp;

// ReactDOM.render(<TodoApp />, document.getElementById('root'));

// The above code is a simple React component that renders a div with the text "Todo App!"

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);