import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slid from '../../slid/containers/Slid';

class Presentation extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            title:this.props.src,
            description:this.props.description,
            slidArray:this.props.title,
            contentMap:this.props.onlyContent,
        }
        this.getAllSlide=this.getAllSlide.bind(this);
      
    }

getAllSlide(){
     let array_render=[];
      var maMap=this.props.contentMap;

      for(var i=0; i<this.props.presa.slidArray.length; i++){
        console.log(this.props.presa.slidArray[i]);
        array_render.push(
            <Slid
              key={this.props.presa.slidArray[i].id} 
              id={this.props.presa.slidArray[i].id} 
              title={this.props.presa.slidArray[i].title}
              txt={this.props.presa.slidArray[i].txt} 
              content_id={this.props.presa.slidArray[i].content_id}  
              contentMap={this.props.contentMap}
              displayMode="SHORT"
            />

            );
      }
     return array_render;
 }
  //render function use to update the virtual dom
  render() {

    const display_slid_list= this.getAllSlide();

    return (

            <div className="Presentation">
                <div className="form_pres">
                    <div className="row">
                        <label htmlFor="currentPresentationTitle">Title </label>
                           <input
                           type="text"
                           className="form-control-pres"
                           id="currentPresentationTitle"
                           onChange={this.props.handleChangeTitle}
                           value={this.props.presa.title}
                           />
                    </div>
                    <div className="row">
                          <label htmlFor="currentPresentationText">Text</label>
                           <textarea
                           rows="5"
                           type="text"
                           className="form-control"
                           id="currentPresentationText"
                           onChange={this.props.handleChangeDescription}
                           value={this.props.presa.description}>
                           </textarea>
                    </div>
                </div>
                <div>
                    {display_slid_list}
                </div>
            </div>

        
    ); }}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        presa: state.updateModelReducer.presentation,
        slids: state.selectedReducer.slid,
    } };


export default connect(mapStateToProps)(Presentation);