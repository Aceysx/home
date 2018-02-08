'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
exports.isMuiElement = isMuiElement;
exports.isMuiComponent = isMuiComponent;

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneChildrenWithClassName(children, className, props) {
  return _react.Children.map(children, function (child) {
    return (0, _react.isValidElement)(child) && (0, _react.cloneElement)(child, (0, _extends3.default)({
      className: child.props.hasOwnProperty('className') ? child.props.className + ' ' + className : className
    }, props));
  });
}
/* eslint-disable import/prefer-default-export */

function isMuiElement(element, muiNames) {
  return (0, _react.isValidElement)(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function isMuiComponent(element, muiNames) {
  return muiNames.indexOf(element.muiName) !== -1;
}