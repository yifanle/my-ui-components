import Icon from ".";
import React from 'react'
import { ReactComponent as AtomIcon} from 'assets/icon/atom.svg'
import { ReactComponent as MoneyIcon} from '@sicons/fluent/Money16Filled.svg'
import AccessTime20Regular from '@ricons/fluent/AccessTime20Regular'


export default {
    title: "UI 组件/Icon",
    component: Icon,
}

export const Default = () => <Icon icon={AtomIcon}/>;

export const CustomColor = () => {
    return <Icon icon={AtomIcon} color="#cccccc"/>
}

export const CustomSize = () => {
    return <Icon icon={AtomIcon} color={"#cccccc"} width={48} height={48}/>
}

export const XIcons = () => {
    return <div className="row-elements">
        <Icon icon={MoneyIcon} color={"#000"} opacity={.5}/>
        <Icon icon={AccessTime20Regular} color={"#cccccc"} width={48} height={48}/>
    </div>
}