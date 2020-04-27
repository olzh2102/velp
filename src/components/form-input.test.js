import React from 'react'
import { shallow } from 'enzyme'
import FormInput from './form-input'

describe('FormInput component', () => {
	let wrapper
	let mockHandleChange

	beforeEach(() => {
		mockHandleChange = jest.fn()

		const mockProps = {
			label: 'places',
			value: 'Vietnamese',
			handleChange: mockHandleChange,
		}

		wrapper = shallow(
			<FormInput {...mockProps} />
		)
	})

	test('should render FormInput component', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
