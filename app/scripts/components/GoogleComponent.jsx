import React from 'react';
import reactStringReplace from 'react-string-replace';


class GoogleComponent extends React.Component {

  constructor(props) {
      super(props);

      this.state = {searchValue:"",error:false}
    }
  handleChange(e){
    this.setState({ searchValue : e.target.value})
    if(this.state.error){
      this.setState({error:false})
    }
  }
  searchOnGoogle(e){
    if(this.state.searchValue != ""){
      var value = this.state.searchValue;
      value = value.split(/\s+/g).join('+');
      window.open("http://google.fr/#q="+value);
    }else{
      this.setState({error:true})
    }
  }
  render() {
    var className ="";
    if(this.state.error){
      className="error";
    }

    return(
      <header>
        <input  className={className+"form-control" }
                value={this.state.searchValue}
                onInput={this.handleChange.bind(this)}
                type="text"
                name="googleSearch"/>
        <button onClick={this.searchOnGoogle.bind(this)} >Googlé</button>
      </header>
    )
  }
}

export default GoogleComponent;
