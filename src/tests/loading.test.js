import React from 'react'
import { shallow, mount } from 'enzyme'
import Loading from '../components/loading'

describe('<Loading />', () => {
  it('should render <Loading /> component', () => {
    expect(shallow(<Loading />))
  })

  it('should render <Loading /> component with an image', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find('.loading > img').length).toBe(1)
  })

  it('should mount <Loading /> correctly', () => {
    const wrapper = mount(<Loading />)
    expect(wrapper.find('.loading').length).toBe(1)
  })
})
