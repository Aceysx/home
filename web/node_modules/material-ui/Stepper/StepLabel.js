'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _StepIcon = require('./StepIcon');

var _StepIcon2 = _interopRequireDefault(_StepIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    horizontal: {},
    vertical: {},
    active: {
      fontWeight: 500
    },
    completed: {
      fontWeight: 500
    },
    disabled: {
      cursor: 'default'
    },
    iconContainer: {},
    iconContainerNoAlternative: {
      paddingRight: theme.spacing.unit
    },
    alternativeLabelRoot: {
      flexDirection: 'column'
    },
    alternativeLabel: {
      textAlign: 'center',
      marginTop: theme.spacing.unit * 2
    }
  };
};

function StepLabel(props) {
  var _classNames, _classNames2;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.completed, completed), (0, _defineProperty3.default)(_classNames, classes.alternativeLabelRoot, alternativeLabel), (0, _defineProperty3.default)(_classNames, 'classNameProp', classNameProp), _classNames));
  var labelClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.alternativeLabel, alternativeLabel), (0, _defineProperty3.default)(_classNames2, classes.completed, completed), (0, _defineProperty3.default)(_classNames2, classes.active, active), _classNames2));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    icon && _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(classes.iconContainer, (0, _defineProperty3.default)({}, classes.iconContainerNoAlternative, !alternativeLabel))
      },
      _react2.default.createElement(_StepIcon2.default, {
        completed: completed,
        active: active,
        icon: icon,
        alternativeLabel: alternativeLabel
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'body1', className: labelClassName },
        children
      ),
      optional
    )
  );
}

StepLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: _propTypes2.default.node,
  /**
   * Custom styles for component.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label - if not set will be set by Step component.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  last: false,
  orientation: 'horizontal'
};

StepLabel.muiName = 'StepLabel';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepLabel' })(StepLabel);