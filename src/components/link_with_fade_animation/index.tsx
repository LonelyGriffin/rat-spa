import React, {ReactNode, useRef} from "react";
import {RouterAction, useRouter} from "../../router";
import {RouteType} from "../../router/routes_map";

export const enum FadeAnimationType {
    In,
    Out
}

type InnerProps = {
    to: RouteType | RouterAction
    children?: ReactNode
    type?: FadeAnimationType
    className?: string
}

export const LinkWithFadeAnimation = (props: InnerProps) => {
    const {children, className, to} = props;
    // hooks
    const rootRef = useRef(null);
    const router = useRouter();

    // handlers
    const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (typeof to === typeof RouteType) {
            router.navigateTo(to as RouteType);
        } else {
            router.dispatch(to as RouterAction);
        }

    };

    return (
        <a onClick={clickHandler} className={className} ref={rootRef}>
            {children}
        </a>
    )
};