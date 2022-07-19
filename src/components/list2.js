//  Import axios module from 3rd party.
// 2. Create a new instance of axios.
// 3. Call the get method on axios and pass in the url of the API.
// 4. Assign the result to this.state.weather. This will be a promise.
// 5. To make sure that the response is available we need to use the then function to ensure that the promise will be resolved. If the promise is rejected we need to use the catch function in order to avoid any errors.
// 6. In the then function set this.setState({
//         weather: response.data,
//         loading: false,
//         error: false
//     })
import React, { Component } from 'react'
import axios from 'axios'

//  The constructor() function is called each time a new object of the class is created. 
//    The constructor() function runs as soon as an object of a class is instantiated. 
//    The constructor() function runs only once per class object.
// 2. Inside the constructor() function, we can set our initial state properties by creating new state properties with 
//    the object literal notation.
// 3. In this function, our state object 'posts' is set to an empty array; this means that our array will contain no data at first. 
//    As we fetch our data from the API, it will be stored in this state object.
// 4. Our state object 'errorMsg' is set to an empty string; this means that our API call will set this property to an error 
//    message if one is encountered.
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}
//  we are getting the data from the API. 
// 2. we are setting it to state.
// 3. we are returning the response object from the API. 
// 4. inside the promise, we have errors and succes. 
// 5. errors will be logged to console and written to state of errorMsg. 
// 6. success will be logged to console and written to state of posts. 
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}
//  Above function is a React component that uses the post list component as a subcomponent.
// 2. This component accepts a prop called posts.
// 3. This component is a javascript class that extends the React.Component class.
// 4. render method defines what React should render to the web browser.
// 5. In render method we have a ternary operator that returns the posts if it has some, otherwise return null.

// Now we need to map our current post list component to the dom so that it can be rendered.

// # Create the post list component
	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default PostList