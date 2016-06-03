import React from 'react';


class ProjectsFilter extends React.Component {


  handleChange(e) {
     this.props.onUserInput(e.target.value);
   }


  render() {
    return (
        <input type="text"
               className="form-control"
               name="projectsFilter"
               value={this.props.filter}
               onInput={this.handleChange.bind(this)}
               ref="filterTextInput"
               placeholder="Filtrer"
               />
    )
  }
}

export default ProjectsFilter;
