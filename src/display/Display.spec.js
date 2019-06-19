import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';

import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import "jest-dom/extend-expect"; 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


describe('display text', () => {
    it('Checks default display values: unlocked and open', () => {
        const {getByText} = render(<Display />);

        getByText(/Unlocked/i);
        getByText(/Open/i)
    })
})

// describe('checks default display values are green', () => {
//     const {getByText} = render(<Display />);

//     const openCloseDisplay = getByText(/Open/i);
//     const lockUnlockDisplay = getByText(/Unlocked/i);

//     expect(openCloseDisplay).toHaveStyle('background-color: limegreen;')

// })






