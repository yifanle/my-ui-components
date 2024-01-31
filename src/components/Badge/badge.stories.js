import Badge from ".";
import React from 'react'
import { ReactComponent as AtomIcon} from 'assets/icon/atom.svg'
import Icon from "components/Icon";

export default {
    title: "UI 组件/Badge",
    component: Badge,
}

export const Default = () => <Badge count={5} />;

export const ShowZero = () => <Badge showZero count={0} />;

export const DotVariant = () => {
    return (
        <div className="row-elements">
            <Badge show>
                <Icon icon={AtomIcon} color="#cccccc"/>
            </Badge>
        </div>
    )
}