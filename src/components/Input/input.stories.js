import Icon from "components/Icon";
import Input from ".";
import React from 'react'
import { SearchVisual20Filled, Search20Filled } from '@ricons/fluent';

import 'story.css'

export default {
    title: "UI 组件/Input",
    component: Input,
}

export const Default = () => <Input/>;

export const Search = () => <Input.Search/>;

export const WithAffix = () => <Input prefix={<Icon icon={Search20Filled} color="#cccccc"/> } suffix={<Icon icon={SearchVisual20Filled} color="#ccc" />}/>;