import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../components/loading'

describe('<Loading />', () => {
  it('should render <Loading /> component', () => {
    expect(shallow(<Loading />))
  })

  it('should render <Loading /> component with an image', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find('.loading > img').length).toBe(1)
  })
})
