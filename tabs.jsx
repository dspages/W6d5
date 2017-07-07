import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state={selected: 0, listitems: [], content: ""};
    this.updateList=this.updateList.bind(this);
    this.click=this.click.bind(this);
  }

  componentDidMount(){
    this.updateList();
  }

  updateList(){
    this.setState({listitems: this.props.tabs.map((cur,idx)=>{
      if(idx !== this.state.selected){
        return <li value={idx} onClick={this.click} key={idx}>{cur['title']}</li>;
      }else{
        this.setState({content: cur['content']});
        return <li className="selected_tab" value={idx} onClick={this.click} key={idx}>{cur['title']}</li>;
      }
    })});
  }

  click(event){
    event.preventDefault();
    this.setState({selected: parseInt(event.currentTarget.value)});
    window.setTimeout(this.updateList,10);
  }

  render(){
    return (
      <div>
        <h2>Awesome tabs</h2>
        <section>
          <ul>
            {this.state.listitems}
          </ul>
          <p>{this.state.content}</p>
        </section>
      </div>
    );
  }

}

export default Tabs;
