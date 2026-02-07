import '../../App.css';
const Hero = () => {
  return (
    <div className="heroContainer">
        <h1 className="heroHeader">Little Lemon</h1>   
        <div className="heroLeftDiv">
            <p>Chicago</p>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="heroButton">Reserve a Table</button>
        </div>
         <div className="heroRightDiv">
            <img src="/hero_image.jpg" alt="Hero Image" className="heroImage"/>
        </div>
    </div>
    );
}

export default Hero;

