//1. Import Area
import React from 'react'
//2. Definition Area
const MovieSeatPlan = () => {
  return (
    <>
        <header className="header-section">
            <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                </a>
                </div>
                <ul className="menu">
                <li>
                    <a href="#0">Home</a>
                    <ul className="submenu">
                    <li>
                        <a href="index.html">Home One</a>
                    </li>
                    <li>
                        <a href="index-2.html">Home Two</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#0" className="active">movies</a>
                    <ul className="submenu">
                    <li>
                        <a href="movie-grid.html">Movie Grid</a>
                    </li>
                    <li>
                        <a href="movie-list.html">Movie List</a>
                    </li>
                    <li>
                        <a href="movie-details.html">Movie Details</a>
                    </li>
                    <li>
                        <a href="movie-details-2.html">Movie Details 2</a>
                    </li>
                    <li>
                        <a href="movie-ticket-plan.html">Movie Ticket Plan</a>
                    </li>
                    <li>
                        <a href="#0" className="active">Movie Seat Plan</a>
                    </li>
                    <li>
                        <a href="movie-checkout.html">Movie Checkout</a>
                    </li>
                    <li>
                        <a href="popcorn.html">Movie Food</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#0">events</a>
                    <ul className="submenu">
                    <li>
                        <a href="events.html">Events</a>
                    </li>
                    <li>
                        <a href="event-details.html">Event Details</a>
                    </li>
                    <li>
                        <a href="event-speaker.html">Event Speaker</a>
                    </li>
                    <li>
                        <a href="event-ticket.html">Event Ticket</a>
                    </li>
                    <li>
                        <a href="event-checkout.html">Event Checkout</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#0">sports</a>
                    <ul className="submenu">
                    <li>
                        <a href="sports.html">Sports</a>
                    </li>
                    <li>
                        <a href="sport-details.html">Sport Details</a>
                    </li>
                    <li>
                        <a href="sports-ticket.html">Sport Ticket</a>
                    </li>
                    <li>
                        <a href="sports-checkout.html">Sport Checkout</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#0">pages</a>
                    <ul className="submenu">
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="apps-download.html">Apps Download</a>
                    </li>
                    <li>
                        <a href="sign-in.html">Sign In</a>
                    </li>
                    <li>
                        <a href="sign-up.html">Sign Up</a>
                    </li>
                    <li>
                        <a href="404.html">404</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#0">blog</a>
                    <ul className="submenu">
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="blog-details.html">Blog Single</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">contact</a>
                </li>
                <li className="header-button pr-0">
                    <a href="sign-up.html">join us</a>
                </li>
                </ul>
                <div className="header-bar d-lg-none">
                <span />
                <span />
                <span />
                </div>
            </div>
            </div>
        </header>
        {/* ==========Header-Section========== */}
        {/* ==========Banner-Section========== */}
        <section className="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
            <div className="container">
            <div className="details-banner-wrapper">
                <div className="details-banner-content style-two">
                <h3 className="title">Venus</h3>
                <div className="tags">
                    <a href="#0">City Walk</a>
                    <a href="#0">English - 2D</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* ==========Banner-Section========== */}
        {/* ==========Page-Title========== */}
        <section className="page-title bg-one">
            <div className="container">
            <div className="page-title-area">
                <div className="item md-order-1">
                <a href="movie-ticket-plan.html" className="custom-button back-button">
                    <i className="flaticon-double-right-arrows-angles" />back
                </a>
                </div>
                <div className="item date-item">
                <span className="date">MON, SEP 09 2020</span>
                <select className="select-bar">
                    <option value="sc1">09:40</option>
                    <option value="sc2">13:45</option>
                    <option value="sc3">15:45</option>
                    <option value="sc4">19:50</option>
                </select>
                </div>
                <div className="item">
                <h5 className="title">05:00</h5>
                <p>Mins Left</p>
                </div>
            </div>
            </div>
        </section>
        {/* ==========Page-Title========== */}
        {/* ==========Movie-Section========== */}
        <div className="seat-plan-section padding-bottom padding-top">
            <div className="container">
            <div className="screen-area">
                <h4 className="screen">screen</h4>
                <div className="screen-thumb">
                <img src="assets/images/movie/screen-thumb.png" alt="movie" />
                </div>
                <h5 className="subtitle">silver plus</h5>
                <div className="screen-wrapper">
                <ul className="seat-area">
                    <li className="seat-line">
                    <span>G</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>G</span>
                    </li>
                    <li className="seat-line">
                    <span>f</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat seat-free">
                            <img src="assets/images/movie/seat01-free.png" alt="seat" />
                            <span className="sit-num">f7</span>
                            </li>
                            <li className="single-seat seat-free">
                            <img src="assets/images/movie/seat01-free.png" alt="seat" />
                            <span className="sit-num">f8</span>
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat seat-free">
                            <img src="assets/images/movie/seat01-free.png" alt="seat" />
                            <span className="sit-num">f9</span>
                            </li>
                            <li className="single-seat seat-free">
                            <img src="assets/images/movie/seat01-free.png" alt="seat" />
                            <span className="sit-num">f10</span>
                            </li>
                            <li className="single-seat seat-free">
                            <img src="assets/images/movie/seat01-free.png" alt="seat" />
                            <span className="sit-num">f11</span>
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat01.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>f</span>
                    </li>
                </ul>
                </div>
                <h5 className="subtitle">silver plus</h5>
                <div className="screen-wrapper">
                <ul className="seat-area couple">
                    <li className="seat-line">
                    <span>e</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>e</span>
                    </li>
                    <li className="seat-line">
                    <span>d</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-booked.png" alt="seat" />
                            <span className="sit-num">D7 D8</span>
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>d</span>
                    </li>
                    <li className="seat-line">
                    <span>c</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">f11 f12</span>
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>c</span>
                    </li>
                    <li className="seat-line">
                    <span>b</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">b7 b8</span>
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                            <img src="assets/images/movie/seat02.png" alt="seat" />
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>b</span>
                    </li>
                    <li className="seat-line">
                    <span>a</span>
                    <ul className="seat--area">
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a1 a2</span>
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a3 a4</span>
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a5 a6</span>
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a7 a8</span>
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a9 a10</span>
                            </li>
                        </ul>
                        </li>
                        <li className="front-seat">
                        <ul>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a11</span>
                            </li>
                            <li className="single-seat seat-free-two">
                            <img src="assets/images/movie/seat02-free.png" alt="seat" />
                            <span className="sit-num">a12</span>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <span>a</span>
                    </li>
                </ul>
                </div>
            </div>
            <div className="proceed-book bg_img" data-background="assets/images/movie/movie-bg-proceed.jpg">
                <div className="proceed-to-book">
                <div className="book-item">
                    <span>You have Choosed Seat</span>
                    <h3 className="title">d9, d10</h3>
                </div>
                <div className="book-item">
                    <span>total price</span>
                    <h3 className="title">$150</h3>
                </div>
                <div className="book-item">
                    <a href="movie-checkout.html" className="custom-button">proceed</a>
                </div>
                </div>
            </div>
            </div>
        </div>  
    </>
  )
}
//3. Export Area
export default MovieSeatPlan