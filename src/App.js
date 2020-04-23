import React from 'react'
import {
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'
import PlacesPage from './pages/places'

function App() {
	return (
		<div className="App">
			<Route
				path="/places"
				component={PlacesPage}
			/>
		</div>
	)
}

export default App
