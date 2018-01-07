var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalizeFirstLetter } from '../utils/helpers';
import Icon from '../Icon';
import { isMuiElement } from '../utils/reactHelpers';
import '../SvgIcon'; // Ensure CSS specificity

export const styles = theme => ({
  root: {
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    width: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
    padding: 0,
    borderRadius: '50%',
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    })
  },
  colorAccent: {
    color: theme.palette.secondary.A200
  },
  colorContrast: {
    color: theme.palette.getContrastText(theme.palette.primary[500])
  },
  colorPrimary: {
    color: theme.palette.primary[500]
  },
  colorInherit: {
    color: 'inherit'
  },
  disabled: {
    color: theme.palette.action.disabled
  },
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },
  icon: {
    width: '1em',
    height: '1em'
  },
  keyboardFocused: {
    backgroundColor: theme.palette.text.divider
  }
});

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
function IconButton(props) {
  const { buttonRef, children, classes, className, color, disabled, rootRef } = props,
        other = _objectWithoutProperties(props, ['buttonRef', 'children', 'classes', 'className', 'color', 'disabled', 'rootRef']);

  return React.createElement(
    ButtonBase,
    _extends({
      className: classNames(classes.root, {
        [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'default',
        [classes.disabled]: disabled
      }, className),
      centerRipple: true,
      keyboardFocusedClassName: classes.keyboardFocused,
      disabled: disabled,
      rootRef: buttonRef,
      ref: rootRef
    }, other),
    React.createElement(
      'span',
      { className: classes.label },
      typeof children === 'string' ? React.createElement(
        Icon,
        { className: classes.icon },
        children
      ) : React.Children.map(children, child => {
        if (isMuiElement(child, ['Icon', 'SvgIcon'])) {
          return React.cloneElement(child, {
            className: classNames(classes.icon, child.props.className)
          });
        }

        return child;
      })
    )
  );
}

IconButton.propTypes = {
  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: PropTypes.func,
  /**
   * The icon element.
   * If a string is provided, it will be used as an icon font ligature.
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
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'contrast', 'accent']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: PropTypes.func
};

IconButton.defaultProps = {
  color: 'default',
  disabled: false,
  disableRipple: false
};

export default withStyles(styles, { name: 'MuiIconButton' })(IconButton);