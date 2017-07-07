import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: "",listitems: []};
    this.changename = this.changename.bind(this);
    this.click = this.click.bind(this);
    this.updatenames = this.updatenames.bind(this);
  }

  componentDidMount(){
    this.updatenames();
  }

  changename(event){
    this.setState({inputVal: event.target.value});
    window.setTimeout(this.updatenames,0);
  }

  updatenames(){
    this.setState({listitems: this.props.names.map((cur,idx)=>{
      if(cur.toLowerCase().indexOf(this.state.inputVal.toLowerCase()) !== -1){
        return <li value={cur} onClick={this.click} key={idx}>{cur}</li>;
      }else{
        return "";
      }
    })});
  }

  click(event){
    event.preventDefault();
    this.setState({inputVal: event.currentTarget.innerHTML});
  }

  render(){
    return (
      <div>
        <h2>Awesome TAs</h2>
        <section>
          <input value={this.state.inputVal} onChange={this.changename}></input>
          <ul>
            {this.state.listitems}
          </ul>
        </section>
      </div>

    );
  }
}

export default Autocomplete;
