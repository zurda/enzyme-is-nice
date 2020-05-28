import React from 'react';
import { render } from '@testing-library/react';
import {Link} from './App';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe("Link component", ()=> {
  it('a tag node renders href correctly', () => {
    // testing the href value 
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  })
  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
  })
  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({ hide: true })
    expect(wrapper.get(0)).toBeNull()
  })
})





