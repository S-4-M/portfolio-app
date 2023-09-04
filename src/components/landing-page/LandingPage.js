import React from "react";
import "./style.css";

const toggleMenu = () => {
  const navigationMenu = document.querySelector("#collapse");
  if (navigationMenu) {
    navigationMenu.classList.toggle("open");
  }
  // const isOpen = navigationMenu.classList.contains("open");
  //   console.log(isOpen);
};

const changeCallToAction = () => {
  const getStarted = document.querySelector("#get-started");
  const signUp = document.querySelector("#sign-up");
  if (getStarted && signUp) {
    getStarted.classList.toggle("off");
    signUp.classList.toggle("on");
  }
};

const getItemsWidth = () => {
  const itemsWidth = document.querySelector(".slider > ul > li").offsetWidth;
  if (typeof itemsWidth === "number") {
    // item + margin 20px
    return itemsWidth + 40;
  }
  return 0;
};

const moveToSlide = (index) => {
  document.querySelector(".slider > ul").style.transform = `translateX(-${
    index * getItemsWidth()
  }px)`;
  currentIndex = index;
};

const slidesAllowed = () => {
  const itemsWidth = document.querySelector(".slider > ul > li").offsetWidth;
  const sliderWidth = document.querySelector(".slider").offsetWidth;

  if (typeof itemsWidth && typeof sliderWidth === "number") {
    return sliderWidth / (itemsWidth + 40);
  }
  return 0;
};

let currentIndex = 0;

const prevAction = () => {
  if (currentIndex > 0) {
    moveToSlide(currentIndex - 1);
  }
  // console.log(currentIndex);
};

const nextAction = () => {
  const items = document.querySelectorAll(".slider > ul > li");
  if (currentIndex < items.length - slidesAllowed()) {
    moveToSlide(currentIndex + 1);
  }
  // console.log(currentIndex);
};

function StarWithLetter() {
  return (
    <svg width="40" height="40">
      <polygon
        points="20,0 28,12 40,14 30,24 32,36 20,30 8,36 10,24 0,14 12,12"
        style={{ fill: "white", stroke: "#00bcd4", strokeWidth: 0.5 }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#00bcd4"
        fontSize="20px"
        fontFamily="Arial"
      >
        L
      </text>
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div id="BusinessWeb">
      <div className="web-container">
        <header>
          <nav>
            {/* <a href="#"><img src="logo.png" alt="Startup Company Logo" /></a>  */}
            <span>{StarWithLetter()}</span>
            <button onClick={toggleMenu}>
              <span className="fa fa-bars"></span>
            </button>
            <div id="collapse">
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about-us">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonials">Blog</a>
                </li>
                <li>
                  <a href="#call-to-action">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <section id="hero">
            <h1>Welcome to Startup Company</h1>
            <p>We're a fast-growing startup that helps businesses thrive.</p>
          </section>
          <section id="about-us">
            <h2>About Us</h2>
            <div className="content">
              <div className="p-container">
                <p>
                  We are a team of passionate individuals who are committed to
                  helping businesses succeed. Our company was founded with the
                  goal of providing high-quality, affordable solutions that meet
                  the needs of modern businesses.
                </p>
                <p>
                  Our team consists of experienced professionals from a variety
                  of backgrounds, including marketing, technology, and business
                  strategy. We work together to create innovative solutions that
                  help our clients achieve their goals.
                </p>
                <p>
                  At our core, we believe in the power of collaboration and
                  creativity. We are constantly seeking new ideas and ways to
                  improve our services. Our commitment to excellence is
                  reflected in everything we do.
                </p>
              </div>
              <div className="circle">
                <img src="./business-web/about-us.jpg" alt="team" />
              </div>
            </div>
          </section>
          <section id="services">
            <h2>Services</h2>
            <ul>
              <li>
                <h3>Service 1</h3>
                <img src="./business-web/service1s.jpg" alt="Service 1" />
                <p>Custom strategy and solutions for any businesses.</p>
              </li>
              <li>
                <h3>Service 2</h3>
                <img src="./business-web/service2s.jpg" alt="Service 2" />
                <p>
                  Custom software development tailored to your business needs.
                </p>
              </li>
              <li>
                <h3>Service 3</h3>
                <img src="./business-web/service3s.jpg" alt="Service 3" />
                <p>
                  Website design and development that will take your online
                  presence to the next level.
                </p>
              </li>
              <li>
                <h3>Service 4</h3>
                <img src="./business-web/service4s.jpg" alt="Service 4" />
                <p>Mobile app development for iOS and Android devices.</p>
              </li>
              <li>
                <h3>Service 5</h3>
                <img src="./business-web/service5s.jpg" alt="Service 5" />
                <p>
                  Social media management and marketing to help your business
                  reach its audience.
                </p>
              </li>
            </ul>
          </section>
          <section id="features">
            <h2>Your way to success</h2>
            <ul>
              <li>
                <div className="circle">
                  <img src="./business-web/feature-1.jpg" alt="Feature 1" />
                </div>
                <h3>Feature 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <div className="circle">
                  <img src="./business-web/feature-2.jpg" alt="Feature 2" />
                </div>
                <h3>Feature 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <div className="circle">
                  <img src="./business-web/feature-3.jpg" alt="Feature 3" />
                </div>
                <h3>Feature 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
            </ul>
          </section>
          <section id="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="carousel">
              <button onClick={prevAction} id="prev-button">
                &#10094;
              </button>
              <div className="slider">
                <ul>
                  <li>
                    <p>
                      "Startup Company helped us increase our sales by 50%.
                      Highly recommended!"
                    </p>
                    <cite>John Smith, CEO of XYZ Company</cite>
                  </li>
                  <li>
                    <p>
                      "This company created a stunning and functional website
                      for my corporation that exceeded my expectations. Highly
                      recommended."
                    </p>
                    <cite>Michael Lee, Owner of lol corporation</cite>
                  </li>
                  <li>
                    <p>
                      "I've never seen such amazing customer support. Startup
                      Company really cares about their customers."
                    </p>
                    <cite>Jane Doe, Owner of ABC Business</cite>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus in inventore, iusto, quas nesciunt, autem modi
                      cupiditate perferendis unde similique mollitia sequi quia
                      aut quaerat natus sapiente cum impedit a?
                    </p>
                    <cite>John Smith, CEO of XYZ Company</cite>
                  </li>
                </ul>
              </div>
              <button onClick={nextAction} id="next-button">
                &#10095;
              </button>
            </div>
          </section>
          <section id="call-to-action">
            <div className="" id="get-started">
              <h2>Ready to Get Started?</h2>
              <p>Sign up for our service and start seeing results today!</p>
              <button onClick={changeCallToAction}>Sign Up Now</button>
            </div>
            <div className="waiting" id="sign-up">
              <ul>
                <li>
                  <h6>content</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                    eaque cumque, officiis perspiciatis quisquam commodi nisi
                    temporibus laboriosam maxime ratione animi necessitatibus
                    error doloribus sapiente nulla dolores deleniti itaque
                    labore iste enim rem hic! Sed saepe commodi vel animi
                    quisquam maiores ut quos, sapiente dolore dicta et tempora
                    dolorum dolorem?
                  </p>
                </li>
                <li>
                  <h6>useful links</h6>
                  <a href="#hero">Home</a>
                  <a href="#about-us">About</a>
                  <a href="#services">Services</a>
                  <a href="#testimonials">Blog</a>
                </li>
                <li>
                  <h6>Contact</h6>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Jerusalem,
                    12345, ISR
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope"></i>start-up@email.com
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>+ 09 876 543 21
                  </p>
                  <p>
                    <i className="fa-solid fa-print"></i>+ 09 876 543 21
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <footer>
          <section>
            {/* <h2>follow us</h2> */}
            <ul>
              <li>
                <a href="#icon1" role="link">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#icon2" role="link">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#icon3" role="link">
                  <span className="fab fa-google"></span>
                </a>
              </li>
              <li>
                <a href="#icon4" role="link">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#icon5" role="link">
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </li>
              <li>
                <a href="#icon6" role="link">
                  <span className="fab fa-github"></span>
                </a>
              </li>
            </ul>
          </section>
          <p>&copy; 2023 Startup Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
