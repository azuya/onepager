const React      = require('react');
const Input      = require('react-bootstrap/lib/Input');
const PureMixin  = require('../../../shared/mixins/PureMixin.js');
const scrollIntoView  = require('../../../shared/lib/scrollview.js');
const AppActions = require('../../AppActions.js');

let Title = React.createClass({
  propTypes: {
    index: React.PropTypes.number,
    title: React.PropTypes.string
  },

  getInitialState(){
    return {
      edit: false
    };
  },

  handleEditTitle(){
    this.setState({edit: true});
  },

  updateEditTitle(e){
    //proceed on enter
    if (e.which !== 13) {
      return;
    }

    let newTitle = this.refs.title.getValue();

    AppActions.updateTitle(this.props.index, this.props.title, newTitle);

    this.setState({edit: false});
  },

  render() {
    let title = this.props.title;

    return (
      <div onDoubleClick={this.handleEditTitle}>
        { this.state.edit ?
          (
            <div>
              <Input type="text" ref="title" onKeyUp={this.updateEditTitle} defaultValue={title}/>
              <span className="label label-default">Enter</span>
            </div>
          ) :
          (
            <div>
              {this.props.children}
            </div>
          )
        }
      </div>
    );
  }
});

module.exports = Title;

//<h3 onClick={this.handleScrollIntoView} onDoubleClick={this.handleEditTitle}>
//  <span className="fa fa-ellipsis-v"></span><span className="fa fa-ellipsis-v"></span> {title}
//</h3>