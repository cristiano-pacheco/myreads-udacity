import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  global.localStorage = {}
  it('renders correctly', () => {
    expect(mount(<App />))
  })
})
