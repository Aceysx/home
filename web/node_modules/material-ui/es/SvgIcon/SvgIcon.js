var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalizeFirstLetter } from '../utils/helpers';

export const styles = theme => ({
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
});

function SvgIcon(props) {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    titleAccess,
    viewBox
  } = props,
        other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color', 'titleAccess', 'viewBox']);

  const className = classNames(classes.root, {
    [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'inherit'
  }, classNameProp);

  return React.createElement(
    'svg',
    _extends({
      className: className,
      focusable: 'false',
      viewBox: viewBox,
      'aria-hidden': titleAccess ? 'false' : 'true'
    }, other),
    titleAccess ? React.createElement(
      'title',
      null,
      titleAccess
    ) : null,
    children
  );
}

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG Icon.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: PropTypes.oneOf(['inherit', 'accent', 'action', 'contrast', 'disabled', 'error', 'primary']),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string
};

SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};

SvgIcon.muiName = 'SvgIcon';

export default withStyles(styles, { name: 'MuiSvgIcon' })(SvgIcon);