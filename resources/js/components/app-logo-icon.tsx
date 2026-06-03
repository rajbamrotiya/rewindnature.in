import type { HTMLAttributes } from 'react';

export default function AppLogoIcon(props: HTMLAttributes<HTMLImageElement> | any) {
    return (
        <img src="/Logo.png" alt="Logo" {...props} className={`object-contain ${props.className || ''}`} />
    );
}
