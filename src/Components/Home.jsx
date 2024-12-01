import React from 'react';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../CSS/Home.css';

const Home = () => {
  return (
    <section className="section">
      <div id="home" className="container">
        <div id="home_inner">
          <div id="home_inner_two">
            <div id="home_inner_three">
              <img id="me" src="../assets/logo.png" alt="A picture of James." />
              <p>
                Hi, I’m James. I build responsive and dynamic websites using
                React and Bootstrap. Explore my projects and see my work in
                action.
              </p>
            </div>
            <div id="socials">
              <Link to="#" className="social_link" id="linkedin">
                <i className="bi bi-linkedin" />
              </Link>
              <Link to="#" className="social_link" id="github">
                <i className="bi bi-github" />
              </Link>
              <Link to="#" className="social_link" id="x">
                <i className="bi bi-twitter-x" />
              </Link>
              <Link to="#" className="social_link" id="resume">
                <i className="bi bi-download" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
