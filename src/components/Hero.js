function Hero() {
  return (
    <div style={styles.container}>
        <div style={styles.leftDiv}>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <div style={styles.rightDiv}>
            <img 
                src="/hero image.jpg" 
                alt="Hero Image"
                style={styles.image}
            />
        </div>
    </div>
    );
}

export default Hero;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px',
    },
    leftDiv: {
        flex: 1,
    },
    rightDiv: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '250px',
        height: '250px',
        objectFit: 'cover',
    }
}