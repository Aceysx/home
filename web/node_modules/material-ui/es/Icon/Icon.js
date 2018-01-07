var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalizeFirstLetter } from '../utils/helpers';

export const styles = theme => ({
  root: {
    userSelect: 'none'
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

function Icon(props) {
  const { children, classes, className: classNameProp, color } = props,
        other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color']);

  const className = classNames('material-icons', classes.root, {
    [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'inherit'
  }, classNameProp);

  return React.createElement(
    'span',
    _extends({ className: className, 'aria-hidden': 'true' }, other),
    children
  );
}

Icon.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,
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
  color: PropTypes.oneOf(['inherit', 'accent', 'action', 'contrast', 'disabled', 'error', 'primary'])
};

Icon.defaultProps = {
  color: 'inherit'
};

Icon.muiName = 'Icon';

export default withStyles(styles, { name: 'MuiIcon' })(Icon);