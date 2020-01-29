import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriends from './components/AddFriends';


test('renders form in Login', () => {
  const { getByTestId } = render(<Login />);
  getByTestId('login-form');  
});

test('friends form renders', () => {
  const { getByTestId } = render(<AddFriends />);
  getByTestId('friend-form');
});

test('login button fires', () => {
  const { getByText } = render(<Login />);
  const loginButton = getByText(/login/i);
  fireEvent.click(loginButton)
});

test('add friends button fires', () => {
  const { getByText } = render(<AddFriends />);
  const addFriendButton = getByText(/Add New Friend/i);
  fireEvent.click(addFriendButton)
});

