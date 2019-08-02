import * as React from 'react';
import * as Feather from 'react-feather';

export const ICONS = Object.keys(Feather);

type Icons = keyof ICONS;

type IconProps = {
    icon: Icons,
    label?: string
}

type A11yProps = {
    'aria-label'?: string,
    'aria-hidden'?: boolean,
    role: string
}

function Icon(props: IconProps) {
    const { icon, ...rest } = props;
    const FeatherIcon = Feather[icon];
    const a11yProps: A11yProps = {
        role: 'img'
    }
    if (props.label) {
        a11yProps['aria-label'] = props.label
    } else {
        a11yProps['aria-hidden'] = true
    }
    return (
        <FeatherIcon {...a11yProps} {...rest} />
    )
}

export default Icon;