import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../../../components/common/content/containers/Content';

class BrowseContentPanel extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.getAllRobotRender=this.getAllRobotRender.bind(this);
    }

getAllRobotRender(){
    let array_render=[];
    console.log(this.props.contentMap["1"]);
    var maMap=this.props.contentMap;
    Object.keys(this.props.contentMap).forEach(function(k, v){

        array_render.push(
            <Content
                key={maMap[k].id} 
                id={maMap[k].id}
                src={maMap[k].src}
                type={maMap[k].type}
                title={maMap[k].title}
                onlyContent="0"
            />

            );
    });
    return array_render;
 }
    
  render() {
    const display_list= this.getAllRobotRender();
    return (

            <div className="BrowseContentPanel">
                <div className="new_file">
                    <h1>Drop your files here</h1>
                </div>
                <div className="contentList">
                    {display_list}
                </div>
            </div>

        
    ); }}

const mapStateToProps = (state, ownProps) => {
     return {
        contentMap: state.updateModelReducer.content_map,
     } };
export default connect(mapStateToProps)(BrowseContentPanel);