import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditMetSlid from '../../common/content/slid/components/EditMetaSlid';
import Slid from '../../common/content/slid/containers/Slid';
import {updateSlid } from '../../../actions'


class EditSlidPanel extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            selected_slid:this.props.selected_slid,
            contentMap:this.props.contentMap,
        }
        this.updateSlid=this.updateSlid.bind(this);

    }

updateSlid(id,title,txt,content_id){
        const tmpSlid={
                id:id,
                title:title,
                txt:txt,
                content_id:content_id
            };
        this.props.dispatch(updateSlid(tmpSlid));
}
    
  //render function use to update the virtual dom
  render() {

    return (

        <div className="EditSlidPanel">
            <Slid updateSlid={this.updateSlid} id={this.props.selected_slid.id} title={this.props.selected_slid.title} txt={this.props.selected_slid.txt} content_id={this.props.selected_slid.content_id} contentMap={this.props.contentMap} displayMode="FULL_MNG"/>
        </div>

        
    ); }}


const mapStateToProps = (state, ownProps) => {
    return {
        selected_slid: state.selectedReducer.slid,
        contentMap: state.updateModelReducer.content_map,
    } };


export default connect(mapStateToProps)(EditSlidPanel);