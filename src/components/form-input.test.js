import React from 'react'
import { shallow } from 'enzyme'
import FormInput from './form-input'

describe('FormInput component', () => {
	let wrapper
	let mockHandleChange

	beforeEach(() => {
		mockHandleChange = jest.fn()

		const mockProps = {
			label: 'Place',
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

	test('should call handleChange method when input changes', () => {
		wrapper
			.find('FormInputContainer')
			.simulate('change')

		expect(mockHandleChange).toHaveBeenCalled()
	})

	test('should render FormInputLabel if there is a label', () => {
		expect(
			wrapper.exists('FormInputLabel')
		).toBeTruthy()
	})

	test('should not render FormInputLabel if there is no label', () => {
		const mockNewProps = {
			label: '',
			value: 'Vietnamese',
			handleChange: mockHandleChange,
		}

		const newWrapper = shallow(
			<FormInput {...mockNewProps} />
		)

		expect(
			newWrapper.exists('FormInputLabel')
		).toBe(false)
	})
})
