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

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block',
      fill: 'currentColor',
      height: 24,
      width: 24,
      userSelect: 'none',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },
    colorAccent: {
      color: theme.palette.secondary.A200
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorContrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error[500]
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    }
  };
};

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'titleAccess', 'viewBox']);


  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'inherit'), classNameProp);

  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({
      className: className,
      focusable: 'false',
      viewBox: viewBox,
      'aria-hidden': titleAccess ? 'false' : 'true'
    }, other),
    titleAccess ? _react2.default.createElement(
      'title',
      null,
      titleAccess
    ) : null,
    children
  );
}

SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Node passed into the SVG Icon.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['inherit', 'accent', 'action', 'contrast', 'disabled', 'error', 'primary']),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes2.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
} : {};

SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};

SvgIcon.muiName = 'SvgIcon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSvgIcon' })(SvgIcon);