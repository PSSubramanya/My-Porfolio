import react from "react";
import { Link } from "react-scroll";
import "./HomeScreen.css";
import imagePath from "../../constants/imagePaths";

const HomeScreen = () => {
  return (
    <div>
      <div className="row-style header-spacing-style" id="header-section">
        <Link
          to="home"
          className="head-text"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          Home
        </Link>
        <Link
          to="about"
          className="head-text"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          About
        </Link>
        <Link
          to="projects"
          className="head-text"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          Projects
        </Link>
        <Link
          to="contact"
          className="head-text"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          Contact
        </Link>
      </div>

      <section id="home">
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
            <Link
              to="contact"
              className="new-project-text"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              <div className="button-styling">
                <span className="button-text">New project?</span>
              </div>
            </Link>
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
              <Link
                to="contact"
                className="new-project-text"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                <div className="button-styling">
                  <span className="button-text">New project?</span>
                </div>
              </Link>
              <div className="button-styling button-styling-negative-style">
                <span className="button-text button-text-negative-style">
                  My resume
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="about">
        <div className="row-style" id="tech-stack-view">
          <div className="row-style tech-stack-container">
            <img
              src={imagePath?.reactIcon}
              className="portfolio-icons"
              alt="mobile-app-development"
            />
            <span className="tech-stack-text">Mobile App Development</span>
          </div>

          <div className="row-style tech-stack-container">
            <img
              src={imagePath?.webDevelopmentIcon}
              className="portfolio-icons"
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
                className="portfolio-icons"
                alt="mobile-app-development"
              />
              <span className="tech-stack-text">Mobile App Development</span>
            </div>
            <div id="small-dot-size" />
            <div className="row-style tech-stack-container">
              <img
                src={imagePath?.webDevelopmentIcon}
                className="portfolio-icons"
                alt="web-app-development"
              />
              <span className="tech-stack-text">Website Development</span>
            </div>
          </div>
          <div id="about-me">
            <span className="section-header-text">About me</span>
            <span id="about-me-description">
              I have my bachelor degree in Computer Science Engineering. I
              started with Front end Mobile application development using React
              Native. Building apps is something that I like to do very much. I
              am very eager to take up projects that are challenging and
              complicated. This will enhance both my skills and the clients
              requirements.
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
      </section>

      <section id="projects">
        <span className="section-header-text" id="section-header">
          PROJECTS
        </span>
        <div id="projects-section">
          <div className="row-style project-display">
            <div className="row-style project-screenshots screenhots-leftpad">
              <img
                src={imagePath?.screenshot1}
                className="screenshot-styling"
                alt="ss1"
              />
              <img
                src={imagePath?.screenshot2}
                className="screenshot-styling screenshot-spacing"
                alt="ss2"
              />
            </div>
            <div className="column-style project-details">
              <span className="project-text">AniVault</span>
              <span className="project-description">
                An anime and manga hub where users can explore detailed
                information on shows and series. It also acts as a personal
                vault, allowing users to track, manage, and organize their anime
                watchlists and completed titles.
              </span>
            </div>
          </div>
          <div className="divider-style" />
          <div className="row-style project-display">
            <div className="column-style project-details media-queried-details-one">
              <span className="project-text">FurniBazar</span>
              <span className="project-description">
                An e-commerce style mobile application focused exclusively on
                furniture and table-based equipment. Similar to Amazon but
                tailored to home and office furniture, enabling users to browse,
                compare, and purchase with ease.
              </span>
            </div>
            <div className="row-style project-screenshots right-style screenhots-rightpad">
              <img
                src={imagePath?.screenshot3}
                className="screenshot-styling"
                alt="ss3"
              />
              <img
                src={imagePath?.screenshot4}
                className="screenshot-styling screenshot-spacing"
                alt="ss4"
              />
            </div>
            <div className="column-style project-details media-queried-details-two">
              <span className="project-text">FurniBazar</span>
              <span className="project-description">
                An e-commerce style mobile application focused exclusively on
                furniture and table-based equipment. Similar to Amazon but
                tailored to home and office furniture, enabling users to browse,
                compare, and purchase with ease.
              </span>
            </div>
          </div>
          <div className="divider-style" />
          <div className="row-style project-display">
            <div className="row-style project-screenshots screenhots-leftpad">
              <img
                src={imagePath?.screenshot5}
                className="screenshot-styling"
                alt="ss5"
              />
              <img
                src={imagePath?.screenshot6}
                className="screenshot-styling screenshot-spacing"
                alt="ss6"
              />
            </div>
            <div className="column-style project-details">
              <span className="project-text">Poke Guide</span>
              <span className="project-description">
                A React Native mobile app that serves as a PokémonGo guide,
                providing a complete Pokédex, event updates, and gameplay tips.
                Helps players track Pokémon details, stay updated on in-game
                events, and improve their overall experience
              </span>
            </div>
          </div>
          <div className="divider-style" />
          <div className="row-style project-display">
            <div className="column-style project-details media-queried-details-one">
              <span className="project-text">KitchenGRAM</span>
              <span className="project-description">
                A social media-inspired app like Instagram but dedicated to food
                lovers. Users can share food photos, discover new recipes,
                follow chefs, and even order ingredients or meals directly from
                creators.
              </span>
            </div>
            <div className="row-style project-screenshots right-style screenhots-rightpad">
              <img
                src={imagePath?.screenshot7}
                className="screenshot-styling"
                alt="ss7"
              />
              <img
                src={imagePath?.screenshot8}
                className="screenshot-styling screenshot-spacing"
                alt="ss8"
              />
            </div>
            <div className="column-style project-details media-queried-details-two">
              <span className="project-text">KitchenGRAM</span>
              <span className="project-description">
                A social media-inspired app like Instagram but dedicated to food
                lovers. Users can share food photos, discover new recipes,
                follow chefs, and even order ingredients or meals directly from
                creators.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-style" />

      <section id="contact">
        <span className="section-header-text" id="contacts-section">
          CONTACT US
        </span>
        <div className="row-style contact-medium-spacing-style">
          <div className="contacting-box">
            <img
              src={imagePath?.mailIcon}
              className="portfolio-icons"
              alt="emil-us"
            />
            <span className="contacting-medium-heder-text">Email us</span>
            <span className="contacting-medium-description-text">
              From your email
            </span>

            <div className="small-divider">
              <button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=subbukarthikeya98@gmail.com",
                    "_blank"
                  )
                }
                className="contacting-medium-text active-styling"
              >
                subbukarthikeya98@gmail.com
              </button>
            </div>
          </div>

          <div className="contacting-box">
            <img
              src={imagePath?.callIcon}
              className="portfolio-icons"
              alt="call-or-text"
            />
            <span className="contacting-medium-heder-text">Call or text</span>
            <span className="contacting-medium-description-text">
              Call us directly between 9AM to 7PM
            </span>
            <div className="small-divider">
              <span className="contacting-medium-text">+91 7204958072</span>
            </div>
          </div>

          <div className="contacting-box">
            <img
              src={imagePath?.chatIcon}
              className="portfolio-icons"
              alt="linkedin"
            />
            <span className="contacting-medium-heder-text">Chat with us</span>
            <span className="contacting-medium-description-text">
              Chat with us on LinkedIn
            </span>
            <div className="small-divider">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ps-subramanya-bhat/",
                    "_blank"
                  )
                }
                className="contacting-medium-text active-styling"
              >
                <span className="contacting-medium-text active-styling">
                  Go to LinkedIn
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-style">
          <span className="project-description">
            We will get back to you as soon as possible. I will be available on
            working days between 9AM to 7PM and on weekends between 9Am to 1PM.
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
