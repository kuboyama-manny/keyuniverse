import React from 'react';
import logoKey from './assets/logo-keyuniverse.png';

function AboutUs(props) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="card-special card-left" data-aos="fade-left">
                <div className="card-special-body">
                  <img src={logoKey} alt=""/>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="card bg-secondary shadow-lg">
                  <div className="card-body p-5" data-aos="fade">
                    <h3 className="mb-4">Who We Are</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                      bibendum erat. Duis pulvinar vulputate ligula a rhoncus. Maecenas sem justo, fringilla vitae
                      tellus id, placerat posuere elit. Vestibulum eget gravida odio. Mauris tempor mauris lectus, et
                      dictum mauris luctus eget. Curabitur bibendum dignissim consectetur. Donec id sagittis diam, a
                      sollicitudin lacus.</p>
                    <button className="mt-3 btn btn-outline-primary btn-lg px-5 font-spacing">
                      <small>LEARN MORE</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;