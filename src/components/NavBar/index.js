import React from 'react'
import StyledNavBar, {MenuIcon, MenuItems, StyledMenuItem} from './style'
import Badge from 'components/Badge'
import Avatar from 'components/Avatar'
import img1 from 'assets/images/img1.jpg'
import AccessTime20Regular from '@ricons/fluent/AccessTime20Regular'
import 'styled-components/macro'

function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={img1} status={"online"}/>
      <MenuItems>
        <MenuItem showBadge active icon={AccessTime20Regular}/>
        <MenuItem icon={AccessTime20Regular}/>
        <MenuItem icon={AccessTime20Regular}/>
        <MenuItem icon={AccessTime20Regular}/>
        <MenuItem icon={AccessTime20Regular}/>
        <MenuItem icon={AccessTime20Regular} css={`align-self: end`}/>
      </MenuItems>
    </StyledNavBar>
  )
}

function MenuItem({icon: XIcon, active, showBadge, ...rest}) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active}>
            {XIcon && <XIcon width="36" height="36"/>}
          </MenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

export default NavBar

export { MenuItem }

