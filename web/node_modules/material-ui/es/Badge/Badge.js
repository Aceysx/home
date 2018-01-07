var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalizeFirstLetter } from '../utils/helpers';

const RADIUS = 12;

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex'
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -RADIUS,
    right: -RADIUS,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight,
    fontSize: theme.typography.pxToRem(RADIUS),
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: '50%',
    backgroundColor: theme.palette.color,
    color: theme.palette.textColor,
    zIndex: 1 // Render the badge on top of potential ripples.
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.getContrastText(theme.palette.primary[500])
  },
  colorAccent: {
    backgroundColor: theme.palette.secondary.A200,
    color: theme.palette.getContrastText(theme.palette.secondary.A200)
  }
});

function Badge(props) {
  const { badgeContent, classes, className: classNameProp, color, children } = props,
        other = _objectWithoutProperties(props, ['badgeContent', 'classes', 'className', 'color', 'children']);

  const badgeClassName = classNames(classes.badge, {
    [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'default'
  });

  return React.createElement(
    'div',
    _extends({ className: classNames(classes.root, classNameProp) }, other),
    children,
    React.createElement(
      'span',
      { className: badgeClassName },
      badgeContent
    )
  );
}

Badge.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node.isRequired,
  /**
   * The badge will be added relative to this node.
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
  color: PropTypes.oneOf(['default', 'primary', 'accent'])
};

Badge.defaultProps = {
  color: 'default'
};

export default withStyles(styles, { name: 'MuiBadge' })(Badge);