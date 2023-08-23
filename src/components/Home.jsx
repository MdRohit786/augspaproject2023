import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Md Rohit</h1>
          <p>Lorem ipsum dolor sit amet  adipisicing elit.</p>
        </main>
      </div>

      <div className="home2" id="home2">
        <img src={vg} alt="graphic" />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            consequuntur voluptate ipsum nemo dolore consequatur magnam porro
            animi doloribus sit.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint
            libero adipisci non temporibus amet nobis nisi, at mollitia error
            quidem, omnis, recusandae laboriosam? A dolorum quod quaerat
            architecto vero.Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quas sint libero adipisci non temporibus amet nobis nisi, at
            mollitia error quidem, omnis, recusandae laboriosam? A dolorum quod
            quaerat architecto vero.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas sint libero adipisci non temporibus amet
            nobis nisi, at mollitia error quidem, omnis, recusandae laboriosam?
            A dolorum quod quaerat architecto vero.Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quas sint libero adipisci non
            temporibus amet nobis nisi, at mollitia error quidem, omnis,
            recusandae laboriosam? A dolorum quod quaerat architecto vero.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              className="google"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              className="amazone"
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div
              className="youtube"
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              className="instagram"
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
