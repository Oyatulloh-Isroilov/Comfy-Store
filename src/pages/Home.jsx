import { useNavigate } from 'react-router-dom';
import '../css/index.css'
import carousel from '../assets/images/carousel.png'
import * as React from 'react';
import ThreeProducts from '../components/ThreeProducts';


function Home() {
  const navigate = useNavigate();
  function handleProduct() {
    navigate("/product")
  }

  return (
    <>
      <div className="container">
        <div className="heroContainer">
          <div className="infos">
            <h1>We are changing the way people shop</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
            <button className='ourProBtn' onClick={handleProduct}>OUR PRODUTCS</button>
          </div>
          <div className="CarouselImg">
            <img src={carousel} />
          </div>
        </div>
        <div className="featuredProducts">
          <div className="featuredHeader">
            <h2>Featured Products</h2>
          </div>
          <div className="featuredHero">
            <ThreeProducts />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
