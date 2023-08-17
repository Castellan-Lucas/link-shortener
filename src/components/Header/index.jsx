import React from 'react'
import '../Header/Header.sass'

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Shortly</h1>
      </div>
      <nav className="nav-buttons">
        <button className="nav-button">Features</button>
        <button className="nav-button">Pricing </button>
        <button className="nav-button">Resources</button>
      </nav>
    </header>
  );
}
