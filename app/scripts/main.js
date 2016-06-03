import React from 'react';
import ReactDOM from 'react-dom';

import GoogleComponent from 'components/GoogleComponent.jsx';
import ProjectsComponent from 'components/ProjectsComponent.jsx';
import SectionsComponent from 'components/SectionsComponent.jsx';

var projectsJSON = require('./data/projects.json');
var toolsJSON = require('./data/tools.json');

class HomePage extends React.Component {

  constructor(props) {
      super(props);

      this.state = {"ProjectsFilter":null}
    }


  componentWillMount() {
    console.log('AppliWillMount');
  }

  render(){
    return(
        <div className="content" is="test">
            <GoogleComponent />

            <div id="content">

              <ProjectsComponent filter={this.state.ProjectsFilter} />

              <SectionsComponent />

            </div>
          </div>)
  }

};





ReactDOM.render(<HomePage/>, document.getElementById('reactContainer'));
