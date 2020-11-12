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



describe('Disabled buttons', () => {
    it('shows that Lock Gate button is disabled in the initial state when the option of closing the gate is active (doors is open)', 
    ()=> {
        const {getByText} = render(<Controls/>)
        expect(getByText(/Lock Gate/i).hasAttribute('disabled')).toBeTruthy()
    })

    it('shows that Open Gate button is disabled when the option of unlocking the gate is active (doors is locked)', 
    ()=> {

        const {getByText} = render(<Controls closed={true} locked={true}/>)
        expect(getByText(/Open Gate/i).hasAttribute('disabled')).toBeTruthy()
    })


})
