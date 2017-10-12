import React, { Component } from 'react';
import { connect } from 'react-redux';
import './slid.css';
import EditMetSlid from '../components/EditMetaSlid';
import {setSelectedSlid } from '../../../../../actions'


class Slid extends React.Component{

 constructor(props) {
            super(props);
        this.state={
            id:this.props.id,
            title:this.props.src,
            txt:this.props.txt,
            content_id:this.props.content_id,
            contentMap:this.props.contentMap,
            displayMode:this.props.displayMode,
        }
        this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeTxt=this.handleChangeTxt.bind(this);
 }

handleChangeTitle(e){
  /*this.setState({
      title: e.target.value
   });*/

  this.props.updateSlid(this.props.id,e.target.value,this.props.txt,this.props.content_id);
}

handleChangeTxt(e){
  /*this.setState({
      txt: e.target.value
   });*/
  this.props.updateSlid(this.props.id,this.props.title,e.target.value,this.props.content_id);
}


updateSelectedSlid(slid){
        const tmpSlid={
                    id:this.props.id,
                    title:this.props.title,
                    txt:this.props.txt,
                    content_id:this.props.content_id
                };
        this.props.dispatch(setSelectedSlid(tmpSlid));

}

  render() {

    if(this.props.id == undefined){
      return (<div>nothing to display</div>);
    }

    return (

        <div className="Slid">
            <EditMetSlid 
                handleChangeTxt={this.handleChangeTxt}
                handleChangeTitle={this.handleChangeTitle}
                updateSelectedSlid={this.updateSelectedSlid}
                id={this.props.id} 
                title={this.props.title} 
                txt={this.props.txt} 
                content_id={this.props.content_id} 
                contentMap={this.props.contentMap} 
                displayMode={this.props.displayMode}
            />
        </div>

        
    ); }}

export default connect() (Slid);