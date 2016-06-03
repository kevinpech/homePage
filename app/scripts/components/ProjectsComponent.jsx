import React from 'react';
import ProjectsFilter from 'components/ProjectsFilter.jsx';
import ProjectsListComponent from 'components/ProjectsListComponent.jsx';

class ProjectsComponent extends React.Component {

  constructor(props) {
      super(props);

      this.state = {"filter":null,"projects":null}
    }

    handleUserInput(value) {
        this.setState({filter:value}, function () {
          console.log("New projects filter ::  "+this.state.filter);
        });
  }
  componentWillMount(){

    var projects = require('../data/projects.json');
    this.setState({projects:projects})

  }


  render() {
        return(
      <section className="leftCol">
        <h3>Liste des projets</h3>
        <ProjectsFilter filter={this.state.projectsFilter} onUserInput={this.handleUserInput.bind(this)} />
        <ProjectsListComponent projectsList={this.state.projects} filter={this.state.filter}/>
      </section>
    )
  }
}

export default ProjectsComponent;
