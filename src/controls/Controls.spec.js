// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';

import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// describe('Open/Close Gate button', () => {
//     it('toggles  between open Gate and Close Gate after clicking', () => {
//         let {getByText} = render(<Controls />);

//         const openCloseBtn = getByText(/Close Gate/i);
//         fireEvent.click(openCloseBtn);
//         getByText(/Open Gate/i);
//     })
// })

describe('Lock/Unlock Gate button', () => {
    it('toggles  between Lock Gate and Unlock Gate after clicking', () => {
        let {getByText} = render(<Controls />);

        const openCloseBtn = getByText(/Close Gate/i);
        const lockUnlockGate = getByText(/Lock Gate/i);

        fireEvent.click(openCloseBtn);
        fireEvent.click(lockUnlockGate);

        getByText(/Unlock Gate/i);
    })
})