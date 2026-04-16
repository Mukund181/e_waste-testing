import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';

describe('EcoCycle Prototype App', () => {

  it('1. Renders the App Wrapper and Dashboard Header correctly', () => {
    render(<App />);
    expect(screen.getByText('EcoCycle Verification Scenarios')).toBeInTheDocument();
    expect(screen.getByTestId('iphone-frame')).toBeInTheDocument();
  });

  it('2. Shows the SplashScreen by default', () => {
    render(<App />);
    expect(screen.getByText('Recycle smarter. Live greener.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
  });

  it('3. Navigates to Login Screen when Get Started is clicked', () => {
    render(<App />);
    const getStartedBtn = screen.getByRole('button', { name: /Get Started/i });
    fireEvent.click(getStartedBtn);
    
    // Login Screen should now be visible
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('priya@gmail.com')).toBeInTheDocument();
  });

  it('4. Login Screen renders Email and Password inputs, and Social Login buttons', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i })); // Navigate to Login
    
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Let's go!/i })).toBeInTheDocument();
    expect(screen.getByText(/Continue with Google/i)).toBeInTheDocument();
  });

  it('5. Navigates back to Splash Screen when back arrow is clicked on Login', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    
    const backBtn = screen.getByRole('button', { name: '←' });
    fireEvent.click(backBtn);
    
    expect(screen.getByText('Recycle smarter. Live greener.')).toBeInTheDocument();
  });

  it('6. Navigates to Home Screen after successful login', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    
    expect(screen.getByText('Good Morning,')).toBeInTheDocument();
    expect(screen.getByText('Priya! 👋')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search items, categories...')).toBeInTheDocument();
  });

  it('7. Home Screen displays Your Impact stats accurately', () => {
    render(<App />);
    // Navigate straight to Home for this test
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    
    expect(screen.getByText(/items/i)).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument(); // kg CO2 saved
    expect(screen.getByText('350')).toBeInTheDocument(); // Eco points
  });

  it('8. Quick Action navigation to Schedule Pickup works', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    
    const scheduleBtn = screen.getAllByText('Schedule')[0];
    fireEvent.click(scheduleBtn);
    
    expect(screen.getByText('Select E-Waste Category')).toBeInTheDocument();
  });

  it('9. Schedule Pickup form permits categorical selections', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    fireEvent.click(screen.getAllByText('Schedule')[0]);
    
    const phonesCat = screen.getByText('Phones');
    const laptopsCat = screen.getByText('Laptops');
    
    expect(phonesCat).toBeInTheDocument();
    expect(laptopsCat).toBeInTheDocument();
    
    fireEvent.click(laptopsCat);
  });

  it('10. Navigates to Track Pickup on scheduling', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    fireEvent.click(screen.getAllByText('Schedule')[0]);
    
    fireEvent.click(screen.getByRole('button', { name: /Schedule Pickup/i }));
    
    expect(screen.getByText('En Route to You')).toBeInTheDocument();
    expect(screen.getByText('ETA 20 min')).toBeInTheDocument();
    expect(screen.getByText('Amit Kumar')).toBeInTheDocument(); // Driver
  });

  it('11. Bottom Navbar allows switching to Rewards screen', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    fireEvent.click(screen.getByRole('button', { name: /Let's go!/i }));
    
    // In Home screen, the bottom nav "Rewards" is clickable
    const rewardsNavItems = screen.getAllByText('Rewards');
    fireEvent.click(rewardsNavItems[0]); // Bottom Nav link
    
    expect(screen.getByText('2,450')).toBeInTheDocument(); // Points Balance
    expect(screen.getByText('Level 4')).toBeInTheDocument();
    expect(screen.getByText('Amazon ₹500')).toBeInTheDocument();
  });

});
