
function Header() {
  return <h1>Welcome to my website!</h1>;
}

export default Header;

2. Create a new file `Footer.js` in `src/`:
import React from 'react';

function Footer() {
  return <p>&copy; 2023 My Website</p>;
}

export default Footer;

  Create the main App component*

1. Open `App.js` in `src/`:
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <p>This is my website.</p>
      <Footer />
    </div>
  );
