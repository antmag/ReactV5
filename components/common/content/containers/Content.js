import React, { Component } from 'react';
import Visual from './components/Visual';
import { connect } from 'react-redux';


class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            src:this.props.src,
            type:this.props.type,
            title:this.props.title,
            onlyContent:this.props.onlyContent,
        }
    }
    
  //render function use to update the virtual dom
  render() {

    return (

            <div className="Content">
                <Visual id={this.props.id} src={this.props.src} type={this.props.type} title={this.props.title} onlyContent={this.props.onlyContent}/>
            </div>

        
    ); }}


export default Content;