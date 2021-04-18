import React from 'react';
import './HomePage.css';
import self from '../../img/self.png';
import { BackTop, Button } from 'antd';
import { CanDoList } from '../sections/CanDo';
import { LearningList } from '../sections/Learning';
import { Projects } from '../sections/Projects';
// import ContactMe from '../sections/ContactMe';
import { FiChevronUp, FiChevronsRight } from 'react-icons/fi';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import { FiMoreHorizontal } from 'react-icons/fi';

/*

TODO

create illustrations for can do and learning
add skils and tools to cando/learning
add picture with white coloring
activate navbar links when scrolled at them
custom Erlisa Kulla handwritten 
edit can do and learning sections

make skills and can do as slideshow cards
make stuff appear on scroll
do sth cool when hover on sofware engineer and artist
add random objects that when you hover you can see info: mp3 player, notebook/sketchbook, 
use react-scroll
cool background designs
https://reactjs.org/docs/animation.html#low-level-api-reacttransitiongroup
cool background illustrations for each section that move on scroll
add transition when content is loading

*/

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.displaySkillsContent = this.displaySkillsContent.bind(this);
    this.displayToolsContent = this.displayToolsContent.bind(this);

    this.state = { 
      cardSkillsContent: false,
      cardToolsContent: false,
    };
  };

  displaySkillsContent() {
    this.setState({cardSkillsContent: !this.state.cardSkillsContent})
  }

  displayToolsContent() {
    this.setState({cardToolsContent: !this.state.cardToolsContent})
  }

  render() {
    return (
      <>
        <div className="home-page">
          <div id="section-1">
            <img id="home-img" src={self} alt="intro-img"/>

            <div className="intro-text">
              <h2 id="name">Erlisa Kulla</h2>
              <p id="text">
                <a href="https://github.com/erlisakulla" target="_blank" rel="noreferrer"><b style={{color:'#3f51b5'}} id="software">Software Developer</b></a> and <a href="https://erlisakulla.artstation.com" target="_blank" rel="noreferrer"><b style={{color:'#f50057'}} id="artist">Artist</b></a> with a great passion for learning and creative exploration.
              </p>
              <a href="#skills">
                <Button 
                  type="secondary" 
                  shape="round" 
                  size="large"
                  className="link-btn"
                  icon={<FiChevronsRight size={20} style={{marginRight:'10px'}} id="icon-arrow"/>}
                >
                  Get to know me
                </Button>
              </a>
            </div>
          </div>

          <div id="skills">
            <h1>Skills</h1>

            <div id="can-do">
              <h3 style={{paddingBottom:30}}>What I can do</h3>
              <CanDoList/>
            </div>

            <div id="learning">
              <h3 style={{paddingBottom:30}}>What I am learning</h3>
              <LearningList/>
            </div>
          </div>

          <div id="about">
            <h1>About Me</h1>
            <p style={{fontSize:'16px'}} id="about-text">
              I am from Albania, currently located in Bremen, Germany. <br/>
              My biggest passions are programming and art and I am always looking for ways to combine the two.
              I love painting, listening to music, playing bass, watching animated movies and shows, and of course programming.
            </p>

            <div id="experience">
              <h3 style={{padding:30}}>Work Experience</h3>
              <Experience/>
            </div>

            <div id="education">
              <h3 style={{padding:30}}>Education</h3>
              <Education/>
            </div>
          </div>

          <div id="projects">
            <h1 style={{paddingBottom:30}}>Projects</h1>
            <Projects/>
            <a href="https://github.com/erlisakulla?tab=repositories" target="_blank" rel="noreferrer">
              <Button 
                type="secondary" 
                shape="round" 
                size="large"
                id="more-btn"
                style={{marginTop:'50px'}}
                icon={<FiMoreHorizontal style={{marginRight:'10px'}}/>}
              >
                More
              </Button>
            </a>
          </div>

          {/* <div id="contact">
            <h1>Let's get in touch!</h1>
            <ContactMe/>
          </div> */}
        </div>

        <BackTop>
          <div><FiChevronUp id="back-top-btn" size={40}/></div>
        </BackTop>
      </>
    );
  }
}

export default Home;