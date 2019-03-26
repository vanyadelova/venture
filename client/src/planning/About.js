import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return(
      <div className="About-container z-depth-3">
      <section id="team">
        <h5>The Team</h5>
        
        <div className="container">
          <div className="row">
            
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/40762788?s=460&v=4" alt="Vanya" />
              </div>
              <div className="card-content">
                <a href="https://github.com/vanyadelova" className="team-link">Vanya Delova</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </section>
    </div>
    );
  }
}

export default About;
