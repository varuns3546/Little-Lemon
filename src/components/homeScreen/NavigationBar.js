import React from 'react';
const NavigationBar = () => {
  return(   
    <nav style={styles.nav}>
        <img 
          src="/Logo.svg" 
          alt="Little Lemon Logo" 
          style={styles.logo}
        />
        <ul style={styles.ul}>
            <li style={styles.li}>
                <a href="/">Home</a>
            </li>
            <li style={styles.li}>
                <a href="/about">About</a>
            </li>
            <li style={styles.li}>
                <a href="/menu">Menu</a>
            </li>
            <li style={styles.li}>
                <a href="/reservations">Reservations</a>
            </li>
            <li style={styles.li}>
                <a href="/order-online">Order Online</a>
            </li>
            <li style={styles.li}>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
  );
}

export default NavigationBar;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
    },
    logo: {
        width: '148px',
        height: '40px'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px'
    },
   
};