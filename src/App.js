import React, { Component } from 'react'
import {Link} from 'react-scroll';

class App extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
  return (
    <div className="App">
        <div className="">
          <a className="button-nav" href="mailto:eric@broadcastradio.engineering?subject=Email%20enquiry%20from%20BroadcastRadio.Engineering">
            Contact
          </a>
        </div>
        <header>
          <div className="section-logotype">
            <h1>
              <div className="font-light">
                Broadcast
              </div>
              <div>
                Radio
              </div>
              <div className="dot-nudge">
                <strong>.Engineering</strong>
              </div>
            </h1>
          </div>
        </header>
        <div className="button-play">
          <Link to="about" spy={true} smooth={true}>
            <img src="play.svg" alt="Scroll down" />
          </Link>
        </div>
        <main>
          <section className="section-about">
            <div className="content-container">
              <h2 id="about">
                Radio engineering services based in Boulder, Colorado USA.
              </h2>
              <p>
                More than 50 years of contract and consulting engineering services for stations in the <strong>AM, FM, and shortwave broadcast services</strong>, as well as <strong>maritime and point-to-point services</strong>.
              </p>
              <p>
                Recent projects include the successful <strong>design, evaluation, installation, test</strong>, and <strong>maintenance</strong> of:
              </p>
              <ul>
                <li>Transmitting and receiving sites</li>
                <li>Studios, operator positions, and technical operations centers</li>
                <li>Supporting IT network infrastructure</li>
                <li>Antenna and coverage modeling, including NEC4</li>
                <li>Broadcast frequency studies</li>
              </ul>
            </div>
          </section>
          <div className="button-nudge">
            <a className="button-main" href="mailto:eric@broadcastradio.engineering?subject=Email%20enquiry%20from%20BroadcastRadio.Engineering">
              Contact Us
            </a>
          </div>
          <section className="section-contact content-container">
            <p>
              If you're in need of services in broadcast radio engineering, we can help. <a href="mailto:eric@broadcastradio.engineering?subject=Email%20enquiry%20from%20BroadcastRadio.Engineering">Check our availability</a> for project work, discuss the scope of your next improvement or maintenance project, and see how our services can fit within your budget. <a href="mailto:eric@broadcastradio.engineering?subject=Email%20enquiry%20from%20BroadcastRadio.Engineering">Send a note →</a>
            </p>
          </section>
        </main>
        <footer>
          &copy; {this.getYear()} Broadcast Radio Engineering. All rights reserved.
        </footer>
    </div>
  );
}
}
export default App;
