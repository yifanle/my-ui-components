import Paragraph from ".";
import React from 'react'

import 'story.css'

export default {
    title: "排版/Paragraph",
    component: Paragraph,
}

export const Default = () => (
    <>
        <Paragraph>这是一个段落</Paragraph>
        <Paragraph>这是一个段落</Paragraph>
    </>
);

export const Ellipsis = () => (
    <Paragraph ellipsis>这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落这是一个超长的段落</Paragraph>
);

export const TextAttrs = () => (
    <>
        <Paragraph bold>加粗段落</Paragraph>
        <Paragraph type="secondary">次要段落次要段落次要段落次要段落</Paragraph>
        <Paragraph size="xxlarge">超大size段落</Paragraph>
    </>
);