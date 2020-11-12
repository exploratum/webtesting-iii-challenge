// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import Display from '../display/Display'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe('display change when clicking button', () => {

    it( 'toggles open/close display when clicking open/close gate, with the initial condition gate is unlocked',
        () => {
            //default initial state: gate is unlocked allowing open & close operation

            const {getByText} = render(<Dashboard />);
            const openCloseBtn = getByText(/Close Gate/i); 

            fireEvent.click(openCloseBtn);
            getByText(/^Closed$/i)

            fireEvent.click(openCloseBtn);
            getByText(/^Open$/i)

            fireEvent.click(openCloseBtn);
            getByText(/^Closed$/i)
        }
    )

    it( 'toggles locked/unlocked display when clicking open/close gate with the initial condition that gate is closed ', 
        () => {
            const {getByText} = render(<Dashboard />);
            const lockUnlockGate = getByText(/Lock Gate/i);
            const openCloseBtn = getByText(/Close Gate/i); 

            //Initial consition: Close gate allowing lock/unlock operations
            fireEvent.click(openCloseBtn);
            

            fireEvent.click(lockUnlockGate);
            getByText(/^Locked$/i)

            fireEvent.click(lockUnlockGate);
            getByText(/^Unlocked$/i)

            fireEvent.click(lockUnlockGate);
            getByText(/^Locked$/i)
    })

})