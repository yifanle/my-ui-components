import Avatar from ".";
import React from 'react'
import img1 from 'assets/images/img1.jpg'
import img2 from 'assets/images/img2.jpg'

export default {
    title: "UI 组件/Avatar",
    component: Avatar,
}

export const Default = () => {
    return <Avatar src={ img1 }/>
}

export const Sizes = () => {
    return (
        <div className="row-elements">
            <Avatar src={img1} size="48px"></Avatar>
            <Avatar src={img1} size="56px"></Avatar>
            <Avatar src={img2} size="64px"></Avatar>
            <Avatar src={img2} size="72px"></Avatar>
        </div>
    )
}

export const WithStatus = () => {
    return (
        <div className="row-elements">
            <Avatar src={img1} status="online"></Avatar>
            <Avatar src={img1} status="offline"></Avatar>
            <Avatar src={img2} status="offline" statusIconSize="16px" size="72px"></Avatar>
        </div>
    )
}