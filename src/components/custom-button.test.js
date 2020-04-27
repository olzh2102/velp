import React from 'react'
import { shallow } from 'enzyme'
import CustomButton from './custom-button'

test('should render CustomButton component', () => {
	expect(
		shallow(<CustomButton />)
	).toMatchSnapshot()
})
