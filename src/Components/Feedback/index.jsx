import React,{useState} from "react";
// import { LineMdMenuToCloseAltTransition } from "./LineMdMenuToCloseAltTransition";
import "./styles.css";
import images from "../../Assets/images";
import Loader from "../Loader";

const Feedback = () => {

  const [isLoading, setIsLoading] = useState(false);


  const visitWebsite =()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
    
  }

  return (
    <div>
      <div className="task">
        <div className="div">
          {/* <LineMdMenuToCloseAltTransition className="line-md-menu-to" color="white" /> */}
          <div className="label">
            <p className="epic-games-an">Epic Games : An American video game and software developer</p>
            <p className="epic-games-an2">and publisher based in Cary, North Carolina</p>
          </div>
          <img className="fortnite-pictures" alt="Fortnite pictures" src={images.fortnite} />
          <p className="create-play-and">
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and
            Zero Build, experience a concert or live event, or discover over a million creator made games, including
            racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find
            the one that&#39;s right for you and your friends. Find it all in Fortnite ... Drop In.
          </p>
          <div className="group">
            <button className="overlap-group-wrapper" onClick={() => { visitWebsite() }}>
              {isLoading ? <Loader height={'15rem'} width={'25rem'}/>:'Visit Website'}</button>
          </div>
          <div className="img-section">
            <div>
              <img className="mask-group" alt="Mask group" src={images.fortnite1} />
              <p className="explore-large">Explore Large, Destructible Environments Where No Two Games Are Ever The Same.</p>
            </div>
            <div>
              <img className="img" alt="Mask group" src={images.fortnite2} />
              <p className="team-up-with-friends">
                Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale
              </p>
            </div>
            <div>
              <img className="mask-group-2" alt="Mask group" src={images.fortnite3} />
              <p className="discover-even-more">
                Discover Even More Ways To Play Across Thousands Of Creator-made Game Genres
              </p>
            </div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-2">Our Contribution</div>
            <p className="p">
              Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of
              our user community.<br /> Collaborating with us represents an investment, rather than a mere expenditure. Our
              dedication to providing <br /> distinctive digital interactions guarantees unparalleled benefits for our clientele.
            </p>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="group-3">
                <div className="text-wrapper-3">5M</div>
                <p className="daily-user">
                  <span className="span">
                    Daily User <br />
                    Engagements
                  </span>
                </p>
              </div>
              <div className="text-wrapper-4">$500K</div>
              <p className="revenue-surge-for-an">
                Revenue Surge for an
                <br />
                Platform
              </p>
            </div>
            <div className="text-wrapper-5">10X</div>
            <p className="ROAS-on-all-our">
              ROAS on all our <br />
              marketing campaigns
            </p>
          </div>
          <div className="group-5">
            <div className="group-6">
              <p className="interested-in">Interested In Delving Deeper Into The Project?</p>
              <p className="if-you-d-like-to">
                <span className="text-wrapper-6">
                  If you&#39;d like to explore further details about our initiatives or any of our affiliated brands,
                  don&#39;t hesitate to connect. You can reach out to us via email at{" "}
                </span>
                <span className="text-wrapper-7">hello@abc.com</span>
                <span className="text-wrapper-8">&nbsp;</span>
                <span className="text-wrapper-6">or give us a call at </span>
                <span className="text-wrapper-7">+91 480 20802730.</span>
              </p>
            </div>
            <div className="group-7">
              <button className="text-wrapper-9">Contact Us</button>
            </div>
            <div className="group-8">
              <button className="text-wrapper-10">Ring us on Skype</button>
            </div>
          </div>
          <div>
            <p className="text-wrapper-11">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Feedback
