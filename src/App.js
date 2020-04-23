import React from 'react'
import {
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import PlacesPage from './pages/places'
import NotFoundPage from './pages/not-found'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route
					path="/places"
					component={PlacesPage}
				/>
				<Route
					path="/not-found"
					component={NotFoundPage}
				/>

				<Redirect
					from="/"
					exact
					to="/places"
				/>
				<Redirect to="/not-found" />
			</Switch>
		</div>
	)
}

export default App
