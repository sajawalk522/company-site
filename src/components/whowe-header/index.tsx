import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header whowe-header">
      <div className="slider-image-res">
        <div className="responsive-slider">
          <div className="header-res-content">
              <h2>Who We Are</h2>
              <p>We are a team derived to achieve our goals efficiently and successfully and we won't settle for anything less than perfect.</p>
          </div>
        </div>
      </div>
      <div className="slider-section">
        <div className="image-gril"></div>
        <div className="image-pink"></div>
        <div className="home-setting">
          <div className="content-slider">
            <div
              className="content-image"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="content-div para-font-size">
                <h2>Who We Are</h2>
                <p>
                We are a team derived to achieve our goals efficiently and successfully and we won't settle for anything less than perfect.</p>
              </div>
            </div>
            <div className="home-right-slider">
              <div
                className="stroke-container"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="services-head-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
