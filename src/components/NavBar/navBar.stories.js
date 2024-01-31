import NavBar, { MenuItem } from ".";
import React from 'react';
import { Money16Regular } from '@ricons/fluent';
import 'styled-components/macro';

export default {
    title: "页面组件/NavBar",
    component: NavBar,
}

export const Default = () => <NavBar>默认</NavBar>;

export const Menu = () => {
    return (
        <div css={`
            background-color: ${({theme}) => theme.darkPurple};
            width: 100px;
        `}>
            <MenuItem showBadge active icon={Money16Regular}/>
        </div>
    )
}