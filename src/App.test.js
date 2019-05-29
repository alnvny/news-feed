import React from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import SearchBar from './SearchBar/SearchBar';
import SideDrawer from './SideDrawer/SideDrawer';
import List from './List';



it("validate search filter", () => {
  const div = document.createElement('div');
  const wrapper = shallow(<SearchBar />);
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.exists()).toBe(true);
})

it("validate sideDrawer component", () => {
  const div = document.createElement('div');
  const wrapper = shallow(<SideDrawer />);
  ReactDOM.render(<SideDrawer />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.exists()).toBe(true);
})

it("validate SearchAppbar component", () => {
  const wrapper = shallow(<SearchAppBar />);
  const div = document.createElement('div');
  ReactDOM.render(<SearchAppBar />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.exists()).toBe(true);
})


it("validate Data List ", () => {
  const wrapper = shallow(<List />);
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.exists()).toBe(true);
})

it("validate SideDrawer click  and data change", () => {
  const wrapper = shallow(<SideDrawer getData={() => { }} />);
  wrapper.find('li').at(0).simulate("click", {
    target: { getData: 1 }
  });
  expect(wrapper.find('li').length).toBe(3);
});

it("validate sideDrawer open when clicked", () => {
  const wrapper = shallow(<SideDrawer show={() => { }} />);
  wrapper.find('nav').at(0).simulate("click", {
    target: { show: true }
  });
  expect(wrapper.find('nav').length).toBe(1);
});
it("validate if Search input is changed ", () => {
  const wrapper = shallow(<SearchAppBar searchFilter={() => { }} />);
  wrapper.find('div.list').at(0).simulate("change", {
    target: {
      search: "data"
    }
  })
  expect(wrapper.find('div.list').exists()).toBe(true);
});
