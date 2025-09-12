import react from "react";
import "./HomeScreen.css";
import imagePath from "../../constants/imagePaths";

const HomeScreen = () => {
  return (
    <div>
      <div className="row-style header-spacing-style" id="header-section">
        <span className="head-text">Home</span>
        <span className="head-text">About</span>
        <span className="head-text">Projects</span>
        <span className="head-text">Contact</span>
      </div>

      <div className="introduction-section-two">
        <div className="row-style">
          <span className="montserrat-font" id="hello-font">
            Hello
          </span>
          <div id="dot-size" />
        </div>
        <span className="montserrat-font" id="name-font">
          I'm PS Subramanya Bhat
        </span>
        <span className="montserrat-font" id="designation-font">
          Senior Software Engineer
        </span>
        <div id="button-section">
          <div className="button-styling">
            <span className="button-text">New project?</span>
          </div>
          <div className="button-styling button-styling-negative-style">
            <span className="button-text button-text-negative-style">
              My resume
            </span>
          </div>
        </div>
      </div>

      <div className="row-style">
        <div id="profile-container">
          <div id="profile-background">
            <div id="profile-background-layer2"></div>
          </div>
          <img
            src={imagePath?.profileImage1}
            id="profile-styling"
            alt="profile"
          />
        </div>
        <div className="introduction-section">
          <div className="row-style">
            <span className="montserrat-font" id="hello-font">
              Hello
            </span>
            <div id="dot-size" />
          </div>
          <span className="montserrat-font" id="name-font">
            I'm PS Subramanya Bhat
          </span>
          <span className="montserrat-font" id="designation-font">
            Senior Software Engineer
          </span>
          <div id="button-section">
            <div className="button-styling">
              <span className="button-text">New project?</span>
            </div>
            <div className="button-styling button-styling-negative-style">
              <span className="button-text button-text-negative-style">
                My resume
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row-style" id="skillset-section">
        <span className="head-text skillset-text">HTML</span>
        <span className="head-text skillset-text">CSS</span>
        <span className="head-text skillset-text">React JS</span>
        <span className="head-text skillset-text">React Native</span>
        <span className="head-text skillset-text">JavaScript</span>
        <span className="head-text skillset-text">TypeScript</span>
        <span className="head-text skillset-text">Git</span>
        <span className="head-text skillset-text">POSTMAN</span>
        <span className="head-text skillset-text">Jira</span>
      </div>
      <div className="row-style" id="tech-stack-view">
        <div className="row-style tech-stack-container">
          <img
            src={imagePath?.reactIcon}
            className="tech-stack-icon"
            alt="mobile-app-development"
          />
          <span className="tech-stack-text">Mobile App Development</span>
        </div>

        <div className="row-style tech-stack-container">
          <img
            src={imagePath?.webDevelopmentIcon}
            className="tech-stack-icon"
            alt="web-app-development"
          />
          <span className="tech-stack-text">Website Development</span>
        </div>
      </div>
      <div id="about-section">
        <div id="tech-stacks">
          <div className="row-style tech-stack-container">
            <img
              src={imagePath?.reactIcon}
              className="tech-stack-icon"
              alt="mobile-app-development"
            />
            <span className="tech-stack-text">Mobile App Development</span>
          </div>
          <div id="small-dot-size" />
          <div className="row-style tech-stack-container">
            <img
              src={imagePath?.webDevelopmentIcon}
              className="tech-stack-icon"
              alt="web-app-development"
            />
            <span className="tech-stack-text">Website Development</span>
          </div>
        </div>
        <div id="about-me">
          <span id="about-me-text">About me</span>
          <span id="about-me-description">
            I have my bachelor degree in Computer Science Engineering. I started
            with Front end Mobile application development using React Native.
            Building apps is something that I like to do very much. I am very
            eager to take up projects that are challenging and complicated. This
            will enhance both my skills and the clients requirements.
          </span>
          <div className="row-style" id="stats-container">
            <div className="my-stats-section">
              <span className="my-stats-bold-text">6+</span>
              <span className="my-stats-normal-text">
                Total projects worked on
              </span>
            </div>
            <div className="my-stats-section">
              <span className="my-stats-bold-text">2</span>
              <span className="my-stats-normal-text">
                Total number of companies
              </span>
            </div>
            <div className="my-stats-section">
              <span className="my-stats-bold-text">5+</span>
              <span className="my-stats-normal-text">
                Total years of experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
