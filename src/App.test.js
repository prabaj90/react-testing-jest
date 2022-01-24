// import { render, screen } from '@testing-library/react';
import {
  shallow,
  mount,
  render
} from 'enzyme';
import App from './App';

import Counter from './Counter';


describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    /*If you use Wrapper
     it will read only the parent component, 
     it will not read child components*/
    // wrapper = shallow( < Counter / > );
    // console.log(wrapper.debug());

    /*If you use mount, 
    it will read all the child componets also*/
     wrapper = mount(<App/>);
     console.log(wrapper.debug());

  });
  test('renders the title of counter', () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // render(<App />);
    // const linkElement = screen.getByText("This is counter app");
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with the text of `increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })
})