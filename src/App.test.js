
// import React from 'react';
// import App from './App';
// import { fireEvent, render, wait } from '@testing-library/react'
// import userEvent from "@testing-library/user-event"
// import { api } from "./api"
// import { tsExternalModuleReference } from '@babel/types';

// // TESTING PART 3 (Mocking)

// // syntax needed to mock api
// const mockCreateItem = (api.createItem = jest.fn())

// test('add items to list', async () => {
//   const todoText = "learn spanish";
//   mockCreateItem.mockResolvedValueOnce(todoText);
//   const{getByText, getByPlaceholderText} = render(<App/>)
  
//   const input = getByPlaceholderText('Add ToDo ...');
//   userEvent.type(input, "wash car")

//   await wait(() => getByPlaceholderText('wash car'))

//   expect(mockCreateItem).toBeCalledTimes(1);
//   expect(mockCreateItem).toBeCalledWith(
//   expect(input).toHaveValue("wash car")
//   )
// });

// TESTING PART 2


// // test('ToDo', () => {
// //   const{getByText, getByPlaceholderText} = render(<App/>)
// //   getByText('ToDo List');
// //   getByPlaceholderText('Add ToDo ...');
// // });

// // test('add items to list', () => {
// //   const{getByText, getByLabelText} = render(<App/>)
// //   getByText('ToDo List');
// //   const input = getByLabelText('Add todo:');
// //   fireEvent.change(input, {target:{value:'wash car'}});
// //   fireEvent.click(getByText("Add #1"))

// //   // confirm data
// //   getByText('Add #2')
// //   getByText('wash car')
// // });

// // userEvents expresses intent better
// test("user-events allows users to add...", () => {
//   const{getByText, getByPlaceholderText} = render(<App/>)

//   const input = getByPlaceholderText('Add ToDo ...');
//   //const input = getByText('Add #1');

//   userEvent.type(input, "learn spanish")
//   //userEvent.click(button);

// //   // confirm data
//   //getByText('Add #2')
//   //getByText('learn spanish')
//   expect(getByPlaceholderText('Add ToDo ...')).toHaveValue("learn spanish")
//   //expect(onsubmit).toHaveBeenCalled()
// }
// )


// TESTING PART 1

import React from 'react';
//import * as ReactDOM from 'react-dom'
import App from './App';
//import { getQueriesForElement } from '@testing-library/dom'
import { render } from '@testing-library/react'

// Create a div to be used to add our application into
// So this renders the app onto a virtual environment

test('ToDo', () => {
  // const root = document.createElement('div');
  // ReactDOM.render(<App/>, root)

  // const {getByText, getByPlaceholderText} = getQueriesForElement(root)

  const{getByText, getByPlaceholderText} = render(<App/>)

  // After rendering our component use DOM API's (query selector) to make assertions
  // select h1 and check if the text content is ToDo List
//   expect(root.querySelector('h1').textContent).toBe('ToDo List Never lose track of your tasks again...');
//   expect(root.querySelector('input').placeholder).toBe('Add ToDo ...');
// // This is no longer referring to the elements on the page
//   expect(getByText('ToDo List')).not.toBeNull();
//   expect(getByPlaceholderText('Add ToDo ...')).not.toBeNull()
// Better syntax
  getByText('ToDo List');
  getByPlaceholderText('Add ToDo .');

});

// "test": "react-scripts test
    //"test": "echo \"Error: no test specified\" && exit 1","
