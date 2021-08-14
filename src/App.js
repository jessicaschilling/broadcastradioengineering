import React, { Component } from 'react';

class App extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
  return (
    <div className="App">
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
        <main>
          <section className="section-about">
            <div className="content-container">
              <h2>
                Radio engineering services based in Boulder, Colorado USA.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Ut accumsan interdum tellus</li>
                <li><strong>Donec efficitur dui</strong> vel hendrerit mollis. Ut vel tincidunt justo, consectetur semper justo</li>
                <li><strong>Sed fringilla odio consectetur</strong>, tincidunt nisl vel, lacinia odio. Integer ut efficitur erat, ut semper ante. </li>
                <li><strong>Duis venenatis libero</strong> leo, at vulputate arcu aliquam vitae.</li>
              </ul>
            </div>
          </section>
          <div className="button-nudge">
            <a className="button" href="mailto:eric@broadcastradio.engineering?subject=Email%20enquiry%20from%20BroadcastRadio.Engineering">
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
