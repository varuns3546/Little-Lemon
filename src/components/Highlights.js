function Highlights() {
  return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h2>Specials</h2>
            <button style={styles.menuButton}>Online Menu</button>
        </header>
        <nav>
            <ul style={styles.ul}>
                <li>
                    <img src="/greek salad.jpg" alt="Greek Salad" style={styles.image} />
                    <h3>Greek Salad</h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <button style={styles.button}>Order a delivery</button>
                </li>
                <li>
                    <img src="/bruschetta.jpg" alt="Bruschetta" style={styles.image} />
                    <h3>Bruschetta</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <button style={styles.button}>Order a delivery</button>
                </li>
                <li>   
                    <img src="/lemon dessert.jpg" alt="Lemon Dessert" style={styles.image} />
                    <h3>Lemon Dessert</h3>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <button style={styles.button}>Order a delivery</button>
                </li>
            </ul>
        </nav>
    </div>
    );
}

export default Highlights;

const styles = {
    container: {
        padding: '40px 20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px'
    },
    image: {
        width: '250px',
        height: '250px',
        objectFit: 'cover',
    },
    button: {
        backgroundColor: 'rgb(255, 255, 156)',
        borderColor: 'rgb(255, 247, 247)',
    },
    menuButton: {
        backgroundColor: 'rgb(255, 255, 156)',
        borderColor: 'rgb(255, 247, 247)',
        width: '200px', 
        height: '60px',
        marginRight: '10%', 
    }
}
