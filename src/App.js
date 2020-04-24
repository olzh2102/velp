import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import { loadPlaces } from './store/places'

import PlacesPage from './pages/places'
import NotFoundPage from './pages/not-found'

import WithSpinner from './components/with-spinner'

const PlacesPageWithSpinner = WithSpinner(
	PlacesPage
)

function App({ loadPlaces }) {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		loadPlaces()
		setLoading(false)
	}, [])

	return (
		<div className="App">
			<Switch>
				<Route
					path="/places"
					render={(props) => (
						<PlacesPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
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
	loadPlaces: () => dispatch(loadPlaces()),
})

export default connect(
	null,
	mapDispatchToProps
)(App)
