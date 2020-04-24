import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import { loadPlaces } from './store/places'

import PlacesPage from './pages/places'
import NotFoundPage from './pages/not-found'

function App({ loadPlaces }) {
	useEffect(() => {
		const params = {
			term: 'restaurants',
			location: 'berlin',
			limit: 10,
			categories: 'pizza,sushi,burgers',
		}
		loadPlaces(params)
	}, [])

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

const mapDispatchToProps = (dispatch) => ({
	loadPlaces: (params) =>
		dispatch(loadPlaces(params)),
})

export default connect(
	null,
	mapDispatchToProps
)(App)
