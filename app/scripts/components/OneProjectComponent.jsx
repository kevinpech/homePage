import React from 'react';

class OneProjectComponent extends React.Component {

  render() {
    return(
      <div className="projet">
        <h3>{this.props.data.name}</h3>
        <p>
          <a target='_BLANK' href={this.props.data.urlProd}>P</a>
          <a target='_BLANK' href={this.props.data.urlRecette}>R</a>
          <a target='_BLANK' href={this.props.data.urlDev}>D</a>
          <a target='_BLANK' href={this.props.data.urlGoogleDrive}><img src="./images/icoGoogleDrive.png" /></a>
          <a target='_BLANK' href={this.props.data.urlJenkins}><img src="./images/icoJenkins.png" /></a>
        </p>
      </div>)
  }
}

export default OneProjectComponent;
