import React, {useState} from "react";
import css from "./index.module.css";
import BezierEasing from "bezier-easing"

const easing = BezierEasing(0.645, 0.045, 0.355, 1)

const items = [1 , 2, 3, 4, 5, 6, 7]

export const NavigationPanel = () => {
    const [mouseY, setMouseY] = useState(0)


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseY(e.clientY)
    }
    const lineHeight = 50
    const maxLineX = 150
    // const wheelRadius = 2000
    const winHeight = window.innerHeight;
    const centerY = winHeight / 2;
    const fromY = centerY - 700 / 2;
    const toY = fromY + 700 - lineHeight
    const itemsY = items.map((_, i) => i * (toY - fromY) / items.length + fromY + lineHeight)
    const itemWidth = items.map((_, i) => {
        const d = Math.abs(itemsY[i] - (mouseY || centerY))
        return maxLineX * easing(d / (toY - fromY))
    })
    return (
        <div className={css.root}>
            <div className={css.wheel} onMouseMove={handleMouseMove}/>
            <div className={css.hover_register} onMouseMove={handleMouseMove}/>
            {items.map((_, i) =>
                <div onMouseMove={handleMouseMove} className={css.line} style={{transform: `translate(${-itemWidth[i]}px, ${itemsY[i]}px)`}} />
            )}
        </div>
    );
};
