var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable import/prefer-default-export */

import { cloneElement, Children, isValidElement } from 'react';


export function cloneChildrenWithClassName(children, className, props) {
  return Children.map(children, child => {
    return isValidElement(child) && cloneElement(child, _extends({
      className: child.props.hasOwnProperty('className') ? `${child.props.className} ${className}` : className
    }, props));
  });
}

export function isMuiElement(element, muiNames) {
  return isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

export function isMuiComponent(element, muiNames) {
  return muiNames.indexOf(element.muiName) !== -1;
}