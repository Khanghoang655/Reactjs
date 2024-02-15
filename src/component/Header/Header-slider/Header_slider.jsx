

export default function Header_slider() {
  return (
    <div className="ps-home-banner ps-home-banner--1">
  <div className="ps-container">
    <div className="ps-section__left">
      <div
        className="ps-carousel--nav-inside owl-slider"
        data-owl-auto="true"
        data-owl-loop="true"
        data-owl-speed={5000}
        data-owl-gap={0}
        data-owl-nav="true"
        data-owl-dots="true"
        data-owl-item={1}
        data-owl-item-xs={1}
        data-owl-item-sm={1}
        data-owl-item-md={1}
        data-owl-item-lg={1}
        data-owl-duration={1000}
        data-owl-mousedrag="on"
        data-owl-animate-in="fadeIn"
        data-owl-animate-out="fadeOut"
      >
        <div
          className="ps-banner bg--cover"
          data-background="img/slider/home-1/slide-1.jpg"
        >
          <a className="ps-banner__overlay" href="/Shopping" />
        </div>
        <div
          className="ps-banner bg--cover"
          data-background="img/slider/home-1/slide-2.jpg"
        >
          <a className="ps-banner__overlay" href="/Shopping" />
        </div>
        <div
          className="ps-banner bg--cover"
          data-background="img/slider/home-1/slide-3.jpg"
        >
          <a className="ps-banner__overlay" href="/Shopping" />
        </div>
      </div>
    </div>
    <div className="ps-section__right">
      <a className="ps-collection" href="#">
        <img src="/img/slider/home-1/promotion-1.jpg" alt="" />
      </a>
      <a className="ps-collection" href="#">
        <img src="/img/slider/home-1/promotion-2.jpg" alt="" />
      </a>
    </div>
  </div>
</div>

  )
}
