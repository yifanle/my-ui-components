import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'

function Button({ children, type="primary", size="30px", shape="circle", bgColor, ...rest }) {
  return (
    <StyledButton type={type} size={size} shape={shape} bgColor={bgColor} {...rest}>
        {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary","success","danger"]),
  shape: PropTypes.oneOf(["circle", "rect"]),
  size: PropTypes.string,
}

export default Button

