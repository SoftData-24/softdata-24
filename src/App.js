import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Biodata from './components/Biodata/Biodata';
import Portfolio from './components/Portfolio/Portfolio';
import WorkComplete from './components/WorkComplete/WorkComplete';
import Service from './components/Service/Service';
import Testimonial from './components/Testimonial/Testimonial';
import Freelancing from './components/Freelancing/Freelancing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import TestimonialData from './components/Testimonial/TestimonialData';


function App() {
  // console.log(TestimonialData);
  return (
    <div className="App">
      <Header />
      <About />
      <Biodata />
      <Portfolio />
      <WorkComplete />
      <Service />
      <Freelancing />
      <section className="section section-testimonial ">
        <div className="container">
          <h2 className="common-heading">Happy Client works</h2>
        </div>
        <div className="swiper mySwiper container">
          <div className="swiper-wrapper">
            {TestimonialData.map((item,index)=>{
              <Testimonial key={index} data={item}/>
            })
            }
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
