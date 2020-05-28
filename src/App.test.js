import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe(
  'App', () => {
    it('should render App: element selectors', () => {
      // context is optional 
      const wrapper = shallow(<App />, {context: {}})
      // find element by tag
      expect(wrapper.find('p').length).toBe(1)
      // find element by classname
      expect(wrapper.find('.App-link').length).toBe(1)
      // exists: handy when there's only one 
      expect(wrapper.find('.App-link').exists()).toBe(true)
      // find children 
      expect(wrapper.find('ul').children().length).toBe(3)
      // find children w/ class
      expect(wrapper.find('ol').hasClass('me')).toBe(true)
      // text() 
      expect(wrapper.find('a').text()).toBe('Learn React')
    })
    it('should render App: element selectors', () => {
      const wrapper = shallow(<App />)
      // find element by props
      expect(wrapper.find('[text="some title"]').length).toBe(1)
      // find element by component name 
      expect(wrapper.find('Test').length).toBe(1)
      // find by attributes 
      expect(wrapper.find({alt: 'logo'}).length).toBe(1)
    })
    it('matches the snapshot', () => {
      // toJson will make the file nicer to read 
      const tree = shallow(<App />)
      expect(toJson(tree)).toMatchSnapshot()
    })
  }
)

describe(
  'App', () => {
  // Full DOM rendering is ideal for use cases where 
  // you have components that may interact with DOM APIs, 
  // or may require the full React lifecycle in order 
  // to fully test a component.
    it('should render App using mount: element selectors', () => {
      // context is optional 
      const wrapper = mount(<App />, {context: {}})
      // find element by tag
      expect(wrapper.find('p').length).toBe(1)
      // find element by classname
      expect(wrapper.find('.App-link').length).toBe(1)
      // exists: handy when there's only one 
      expect(wrapper.find('.App-link').exists()).toBe(true)
      // find children 
      expect(wrapper.find('ul').children().length).toBe(3)
      // find children w/ class
      expect(wrapper.find('ol').hasClass('me')).toBe(true)
      // text() 
      expect(wrapper.find('a').text()).toBe('Learn React')
      // tests might affect each other if they're using the same dom 
      // so it's importnat to unmount
      wrapper.unmount()
    })

    it('on button is no initially', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('.button-state').text()).toBe('No!')
    })
    it('on button click text is yes', () => {
      const wrapper = shallow(<App />)
      const button = wrapper.find('button')
      button.simulate('click')
      expect(wrapper.find('.button-state').text()).toBe('Yes!')
    })
    it('on input change, title changes text', () => {
      const wrapper = shallow(<App />)
      const input = wrapper.find('input')
      expect(wrapper.find('h2').text()).toBe('')
      input.simulate('change', {currentTarget: {value: 'Me'}})
      expect(wrapper.find('h2').text()).toBe('Me')
    })
  }
)




