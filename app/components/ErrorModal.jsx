var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired,
      onDismiss:React.PropTypes.func.isRequired
  },
  render: function () {
    var {title, message, onDismiss} = this.props;
    return (
      <div className="reveal-overlay" style={{"display": "block"}}>
        <div className="reveal tiny text-center" style={{"display": "block", "top": 233}}>
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" onClick={onDismiss}>
              Okay
            </button>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;
