function Testimonials() {
  return (
    <div style={styles.container}>
        <h2>Testimonials</h2>
        <ul style={styles.ul}>
            <li>
                <div>
                    <h3>5 stars from Jamie</h3>
                </div>
                <div>
                    <p>The food is amazing! I love the taste of the food and the service is also very good.</p>
                </div>
            </li>
            <li>
                <div>
                    <h3>5 stars from Alex</h3>
                </div>
                <div>
                    <p>The food is amazing! I love the taste of the food and the service is also very good.</p>
                </div>
            </li>
            <li>
                <div>
                    <h3>5 stars from Emily</h3>
                </div>
                <div>
                    <p>The food is amazing! I love the taste of the food and the service is also very good.</p>
                </div>
            </li>
            <li>
                <div>
                    <h3>5 stars from John</h3>
                </div>
                <div>
                    <p>The food is amazing! I love the taste of the food and the service is also very good.</p>
                </div>
            </li>
            
        </ul>
    </div>
  );
}

export default Testimonials;

const styles = {
    container: {
       
    },
    ul: {
        listStyleType: 'none',
        display: 'flex'
    },
    li: {
    }
};