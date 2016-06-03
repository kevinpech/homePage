import React from 'react';
import OneProjectComponent from 'components/OneProjectComponent.jsx';


class ProjectsListComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {"ProjectsFilter":null,"loaded":false}
    }

    componentDidMount(){
      this.setState({loaded:true})
    }

  render() {
    if(this.state.loaded){
      var list=[];
        var projectsList = this.props.projectsList.data.map(project => {

          if(this.props.filter == null || project.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) != -1  ){

              list.push(<OneProjectComponent
                            data={project}
                            key={project.name}
                            />);
          }
      } );

      return(
       <div>{list}</div>
      )

    }else{

      return(
        <p>Loading</p>
      )

    }
  }
}

export default ProjectsListComponent;
