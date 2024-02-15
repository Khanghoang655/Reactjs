import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Product() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("October 25, 2023 15:37:25").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  console.log(timeRemaining);
  return (
    <div className="ps-deal-of-day">
    <div className="ps-container">  
      <div className="ps-section__header">
        <div className="ps-block--countdown-deal">
          <div className="ps-block__left">
            <h3>Deals of the day</h3>
          </div>
          <div className="ps-block__right">
          <figure>
            <figcaption>End in:</figcaption>
            <ul className="ps-countdown">
              <li><span >{timeRemaining.days}</span> Days </li>
              <li><span >{timeRemaining.hours}</span> Hours </li>
              <li><span >{timeRemaining.minutes}</span> Minutes </li>
              <li><span >{timeRemaining.seconds}</span> Seconds</li>
            </ul>
          </figure>
          </div>
        </div><a href="#">View all</a>
      </div>
      <div className="ps-section__content">
        <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={7} data-owl-item-xs={2} data-owl-item-sm={3} data-owl-item-md={4} data-owl-item-lg={5} data-owl-item-xl={6} data-owl-duration={1000} data-owl-mousedrag="on">
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/1.jpg" alt="" /></a>
              <div className="ps-product__badge">-16%</div>
            </div>  
            <div className="ps-product__container">
              <p className="ps-product__price sale">$567.99<del>$670.00</del><small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Korea Long Sofa</a>
                <div className="ps-product__progress-bar ps-progress" data-value={82}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:39</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/2.jpg" alt="" /></a>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">$101.99<small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Aroma Rice Cooker</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={10}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:20</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/3.jpg" alt="" /></a>
              <div className="ps-product__badge">-25%</div>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Simple Plastice Chair In White Color</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={36}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:62</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/4.jpg" alt="" /></a>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">$320.00<small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Korea Fabric Chair In Brown Colorr</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={19}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:54</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/5.jpg" alt="" /></a>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">$85.00<small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Set 14-Piece Knife From KichiKit</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={4}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/6.jpg" alt="" /></a>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">$92.00<small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={68}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:49</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/7.jpg" alt="" /></a>
              <div className="ps-product__badge">-46%</div>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Letter Printed Cushion Cover Cotton</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={22}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:70</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail"><a href="/Shopping"><img src="/img/products/home/7.jpg" alt="" /></a>
              <div className="ps-product__badge">-46%</div>
              
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
              <div className="ps-product__content"><a className="ps-product__title" href="/Shopping">Letter Printed Cushion Cover Cotton</a>
                
                <div className="ps-product__progress-bar ps-progress" data-value={87}>
                  <div className="ps-progress__value"><span /></div>
                  <p>Sold:95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
