import React from "react";
import ProductCarousel from "../productCarousel";


function OffersCarousel() {

  const slickData = [{
    id: '0',
    url: 'https://sgi2.offerscdn.net/i/production/published/65/filename/14983.flim.v63.bffffff.jpg',
    caption: 'Stuff offers'
  },
    {
      id: '1',
      url: 'https://i.pinimg.com/originals/df/43/74/df43748883cf66a686c48ede3508be10.jpg',
      caption: 'Plants offers'
    }
  ]

  return <article className="container flex-column justify-content-center offers-content">
    <section className="flex-row offers-list">


      {/*<ProductCarousel carouselData={slickData} carouselClassName="offers-carousel"/>*/}

      <div className="">

      </div>

    </section>

    <a href="#">
      <section className="flex-row justify-content-between link-to-offers">
        <div className="img-small-circle" style={{height: '60px', objectFit: 'cover'}}>
          <img
            src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/30402E408CEC494B8197AFC3E8ECAFAB/28529_32606328.jpg?fit=inside|1024:1024"
            alt=""/>
        </div>

        <p className="offers-link-text">
          Lorem ipsum dolor sit amet
        </p>

        <div className="img-small-circle" style={{height: '60px', objectFit: 'cover'}}>
          <img width="auto"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf9FbqfyHSq-TQNZoiP3BwpBsMvgl-cWFKpFRYOO2opd_-nTt23aZfNWjbGwh2zrlvmI&usqp=CAU"
               alt=""/>
        </div>
      </section>
    </a>
  </article>
}

export default OffersCarousel;