import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards  from './Cards'
import list from "../../public/list.json" 
function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-4">
      <div>
        <h1 className="font-semibold text-x1 pb-2">Free Offered Courses</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, labore, vitae tempora fugiat aut error perferendis quo quas numquam cum in omnis sed exercitationem sunt? Beatae nostrum eos labore pariatur!
        </p>
        </div> 
    
    <div>
      
    <Slider {...settings}>
   
   <div>
      <Cards>
          <h3>1</h3>
          </Cards>
        </div>

        <div>
          <Cards>
          <h3>2</h3>
          </Cards>
        </div>

        <div>
          <Cards>
          <h3>3</h3>
          </Cards>
        </div>

        <div>
          <Cards>
          <h3>4</h3>
          </Cards>
        </div>
        <div>
          <Cards>
          <h3>5</h3>
          </Cards>
        </div>
        <div>
          <Cards>
          <h3>6</h3>
          </Cards>
        </div>
        <div>
          <Cards>
          <h3>7</h3>
          </Cards>
        </div>
        <div>
          <Cards>
          <h3>8</h3>
          </Cards>
        </div>      
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freebook
