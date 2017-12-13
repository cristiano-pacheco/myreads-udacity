import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/header'

describe('<Header />', () => {
  it('should render <Header /> component', () => {
    expect(shallow(<Header />))
  })
})
