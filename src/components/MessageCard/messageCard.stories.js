import MessageCard from ".";
import React from 'react'
import img2 from 'assets/images/img2.jpg'

export default {
    title: "UI 组件/MessageCard",
    component: MessageCard,
}

export const Default = () => (
    <MessageCard
        avatarSrc={img2}
        name="李铭浩"
        avatarStatus="online"
        statusText="在线"
        time="3小时之前"
        message="即使爬到最高的山上，一次也只能脚踏实地地"
        unreadCount={2}
    />
);