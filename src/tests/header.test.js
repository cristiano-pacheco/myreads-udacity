import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/header'

describe('<Header />', () => {
  test('shallow renders correctly', () => {
    expect(shallow(<Header />))
  })
})
