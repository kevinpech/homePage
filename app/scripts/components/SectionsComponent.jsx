import React from 'react';


class ProjectsComponent extends React.Component {

  render() {

    return(
      <section className="rightCol">
          <h3 className="center">Liste des outils</h3>
          <div className="tools">
            <ul>
              <li><img src="images/icoAlfresco.png" alt=""/></li>
              <li><img src="images/icoJenkins.png" alt=""/></li>
              <li><img src="images/icoSlack.png" alt=""/></li>
              <li><img src="images/icoJira.png" alt=""/></li>
              <li><img src="images/icoWiki.png" alt=""/></li>
            </ul>
          </div>
      </section>
    )
  }
}

export default ProjectsComponent;
