import React from 'react'
import { shallow, mount } from 'enzyme'
import BookshelfChanger from '../components/bookshelf-changer'

describe('<BookshelfChanger />', () => {
  const changeBookshelf = jest.fn()

  it('shallow renders correctly', () => {
    expect(shallow(<BookshelfChanger onChangeBookshelf={changeBookshelf} />))
  })

  it('mount correctly', () => {
    expect(mount(<BookshelfChanger onChangeBookshelf={changeBookshelf} />))
  })

  it('should select a option with a prop', () => {
    let wrapper = mount(
      <BookshelfChanger
        defaultItem='wantToRead'
        onChangeBookshelf={changeBookshelf}
      />
    )

    expect(wrapper.find('select').props().value).toBe('wantToRead')

    wrapper = mount(
      <BookshelfChanger
        defaultItem='read'
        onChangeBookshelf={changeBookshelf}
      />
    )

    expect(wrapper.find('select').props().value).toBe('read')

    wrapper = mount(<BookshelfChanger onChangeBookshelf={changeBookshelf} />)

    expect(wrapper.find('select').props().value).toBe('none')
  })

  it('expects onChangeBookshelf called on select change', () => {
    const wrapper = mount(
      <BookshelfChanger onChangeBookshelf={changeBookshelf} />
    )
    wrapper.find('select').simulate('change')
    expect(changeBookshelf).toHaveBeenCalledTimes(1)
  })
})
