import React, { Component } from 'react';
import BrowseContentPanel from '../../../../../components/browseContentPanel/containers/BrowseContentPanel';
import Content from '../../../../../components/common/content/containers/Content';


class EditMetaSlid extends Component {
  constructor(props) {
    super(props);   

  }
  
  render() {
    let display;
    switch(this.props.displayMode){
      case "SHORT":
      display=(
        <div onClick={this.props.updateSelectedSlid}>
          <div>
            <h3>{this.props.title}</h3> 
            <h3>{this.props.txt}</h3>
            <div>
            <Content 
              id={this.props.contentMap[this.props.content_id].id}
              src={this.props.contentMap[this.props.content_id].src}
              type={this.props.contentMap[this.props.content_id].type}
              title={this.props.contentMap[this.props.content_id].title}
              onlyContent="1"
            />
            </div> 
          </div>
        </div>

        );
        break;
        case "FULL_MNG":
        display=(
        <div>
          <div className="form-group">
            <label htmlFor="currentSlideTitle">Title </label>
              <input
                type="text"
                className="form-control"
                id="currentSlideTitle"
                onChange={this.props.handleChangeTitle}
                value={this.props.title}
              />
              <label htmlFor="currentSlideText">Text</label>
              <textarea
              rows="5"
              type="text"
              className="form-control"
              id="currentSlideText"
              onChange={this.props.handleChangeTxt}
              value={this.props.txt}>
              </textarea>
            </div>
          <div>
          <Content 
            id={this.props.contentMap[this.props.content_id].id}
            src={this.props.contentMap[this.props.content_id].src}
            type={this.props.contentMap[this.props.content_id].type}
            title={this.props.contentMap[this.props.content_id].title}
            onlyContent="1"
          />
          </div> 
        </div>

        );
        break;
      }
      return (

      <div className="SlideEdit">
      <div className="file">
      {display}
      </div>  
      </div>          
      );
    }
  }

  export default EditMetaSlid;