import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from '../app/App'

const wrapper = shallow(<App />);

describe('(Component) App', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
