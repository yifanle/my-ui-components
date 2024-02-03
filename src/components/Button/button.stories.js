import Button from ".";
import React from 'react';
import Add16Filled from '@ricons/fluent/Add16Filled';
import Icon from "components/Icon";

export default {
    title: "UI 组件/Button",
    component: Button,
}

export const RectButton = () => <Button shape="rect">默认按钮</Button>;

export const ButtonWithType = () => {
    return <>
        <Button shape="rect" type="primary">默认按钮</Button>
        <Button shape="rect" type="success">成功按钮</Button>
        <Button shape="rect" type="danger">危险按钮</Button>
    </>
};

export const CircleButton = () => {
    return <>
        <Button shape="circle" type="primary"><Icon icon={Add16Filled}/></Button>
        <Button shape="circle" type="success"><Icon icon={Add16Filled}/></Button>
        <Button shape="circle" type="danger"><Icon icon={Add16Filled}/></Button>
    </>
};