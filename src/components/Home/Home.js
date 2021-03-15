import React, { useState } from "react";
import orbit from "../../images/orbitPath.png";
import planetOne from "../../images/planet1.png";
import planetTwo from "../../images/planet2.png";

function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setButtonClicked(true);
  }

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__details">
          <div className="home__content__details__hello">
            <div className="home__content__details__hello__block top"></div>
            <span>hello</span>
            <div className="home__content__details__hello__block bottom"></div>
          </div>
          <div className="home__content__details__title">
            <span>minimalist space posters</span>
          </div>
          <div className="home__content__details__signup">
            <span>
              Sign up for announcements, sales, and new product updates.
            </span>
            {buttonClicked ? (
              <div className="home__content__details__success">
                <span>Success, we added you to the list.</span>
              </div>
            ) : (
              <form
                className="home__content__details__signup__form"
                onSubmit={(e) => handleSubmit(e)}>
                <input type="email" placeholder="Email Address" required />
                <button>Sign Up</button>
              </form>
            )}
          </div>
        </div>

        <div className="home__content__animation">
          <img
            className="home__content__animation__orbit-1 orbit"
            src={orbit}
            alt="Planet Orbit"
          />
          <img
            className="home__content__animation__planet-1 planet"
            src={planetOne}
            alt="Planet One"
          />
          <img
            className="home__content__animation__planet-2 planet"
            src={planetTwo}
            alt="Planet Two"
          />
          <img
            className="home__content__animation__orbit-2 orbit"
            src={orbit}
            alt="Planet Orbit"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
