import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'
import Icon from 'components/Icon'
import { Search20Filled } from '@ricons/fluent'
import { useTheme } from 'styled-components'

function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {prefix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

function Search({placeholder = "请输入搜索内容...", ...rest}) {
  const theme = useTheme();
  return (
    <Input placeholder={placeholder} prefix={<Icon icon={Search20Filled} color={theme.gray3}/>} {...rest}/>
  )
}

Input.Search = Search;

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
}

export default Input

