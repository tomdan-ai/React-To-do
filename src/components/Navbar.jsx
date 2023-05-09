import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    document.title = `Current state value: ${dropdown}`;
  }, [dropdown]);
  return (
    <nav>
      <button
        className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? (
          <MdClose style={{ width: '32px', height: '32px' }} />
        ) : (
          <FiMenu
            style={{
              width: '32px',
              height: '32px',
            }}
          />
        )}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <a onClick={() => setNavbarOpen(false)} href={link.path}>{link.text}</a>
          </li>
        ))}
        <li>
          <button onClick={() => setDropdown(!dropdown)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
          <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
