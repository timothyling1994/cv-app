import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="full-name">TIMOTHY C. LING</div>
        <div className="contact-info">
          <div className="cell-phone">cell: (408) 761-5617</div>
          <div className="email">lingt@usc.edu</div>
        </div>
      </div>

      <div className="education-container">
        <div className="education">
          <div className="title">EDUCATION</div>
          <div className="university">University of Southern California</div>
          <div className="degree"> B.S Computer Science</div>
        </div>
      </div>

      <div className="work-experience-container">
        <div className="title">WORK EXPERIENCE</div>
        <div id="work-exp-1" className="work-experience">
          <div id="company-1" className="company">Ticketmaster</div>
          <div className="role">Solutions Engineer</div>
          <div className="description">
            <ul>
              <li id="bullet-1">Created FQDN web app tool using Django framework </li>
              <li id="bullet-2">Created FQDN web app tool using Django framework </li>
            </ul>
          </div>
        </div>

        <div id="work-exp-2" className="work-experience">
          <div id="company-1" className="company">IRCAD</div>
          <div className="role">Software Engineer</div>
          <div className="description">
            <ul>
              <li id="bullet-1">MIS research for image processing </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skills">
        <ul>
          <li>C++</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
      </div>


    </div>
  );
}

export default App;
