import { render, screen } from '@testing-library/react';
import App from './App';

import {configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Registration from './pages/Registration';
import { AppBar } from '@mui/material';

configure({ adapter: new Adapter() });

describe("Title Testing", ()=>{

test('renders learn react link', () => {
  // const wrapper = mount(<AppBar/>)
  // // console.log(wrapper.debug());
  // expect(wrapper.find('div').text()).toContain("Create");

 
  render(<App />);
  const linkElement = screen.getByText(/Create/i);
  expect(linkElement).toBeInTheDocument();
});
})

