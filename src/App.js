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
			<Switch>
				<Route
					path="/places"
					component={PlacesPage}
				/>

				<Redirect
					from="/"
					exact
					to="/places"
				/>
			</Switch>
		</div>
	)
}

export default App
