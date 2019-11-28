import React, {useEffect, useRef, useState} from "react";
import css from "./index.module.css";
import BezierEasing from "bezier-easing"
import GSAP from "gsap"

const easing = BezierEasing(0.645, 0.045, 0.355, 1)

const bands = [1 , 2, 3, 4, 5, 6, 7]

export const NavigationPanel = () => {
    const HEIGHT = 600;
    const MIN_WIDTH = 200;
    const MAX_WIDTH = 300;
    const VISIBLE_WHEEL_WIDTH = 30;
    const MIN_BAND_WIDTH = 50;
    const MAX_BAND_WIDTH = 100 + MIN_BAND_WIDTH;
    const BAND_HEIGHT = 50;
    const BAND_PADDING = 30;
    const BAND_SPACE = HEIGHT - 2 * BAND_PADDING;

    const wheelRadius = (VISIBLE_WHEEL_WIDTH ** 2 + (HEIGHT / 2) ** 2) / (2 * VISIBLE_WHEEL_WIDTH);

    const wheelRef = useRef(null);
    const bandsRef = useRef(null);



    const bandsPositions = bands.map((_, i) => {
        const y = ((BAND_SPACE - BAND_HEIGHT) / (bands.length - 1)) * i;
        return {
            x: Math.cos(0.5 * Math.PI * (2 * y + BAND_HEIGHT - BAND_SPACE) / BAND_SPACE) * MAX_BAND_WIDTH + MIN_BAND_WIDTH,
            y: y + BAND_PADDING,
        };
    })


    const wheelStyle = {
        width: `${2 * wheelRadius}px`,
        height: `${2 * wheelRadius}px`,
        borderRadius: `${wheelRadius}px`,
        transform: `translate(${-wheelRadius * 2 + VISIBLE_WHEEL_WIDTH}px, ${HEIGHT / 2 - wheelRadius}px)`
    }

    const mouseOverHandler = () => {
        if (!wheelRef.current) {
            return
        }

        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power2.out",
            onUpdate: (params) => {
                const vis_width = VISIBLE_WHEEL_WIDTH + 100 * params.ratio
                const radius = (vis_width ** 2 + (HEIGHT / 2) ** 2) / (2 * vis_width)

                GSAP.to(wheelRef.current!, {
                    width: `${2 * radius}px`,
                    height: `${2 * radius}px`,
                    borderRadius: `${radius}px`,
                    x: -radius * 2 + vis_width,
                    y: HEIGHT / 2 - radius,
                });
            }
        })
        GSAP.to(bandsRef.current!, {
            duration: 0.5,
            ease: "power2.out",
            onUpdate: (params) => {
                GSAP.to(bandsRef.current!, {
                    x:  (MAX_WIDTH - MIN_WIDTH) * params.ratio,
                });
            }
        })
    }

    const mouseOutHandler = () => {
        if (!wheelRef.current) {
            return
        }
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power2.out",
            onUpdate: (params) => {
                const vis_width = VISIBLE_WHEEL_WIDTH + (MAX_WIDTH - MIN_WIDTH) - (MAX_WIDTH - MIN_WIDTH) * params.ratio
                const radius = (vis_width ** 2 + (HEIGHT / 2) ** 2) / (2 * vis_width)

                GSAP.set(wheelRef.current!, {
                    width: `${2 * radius}px`,
                    height: `${2 * radius}px`,
                    borderRadius: `${radius}px`,
                    x: -radius * 2 + vis_width,
                    y: HEIGHT / 2 - radius,
                })
            }
        })
        GSAP.to(bandsRef.current!, {
            duration: 0.5,
            ease: "power2.out",
            onUpdate: (params) => {
                GSAP.set(bandsRef.current!, {
                    x:  (MAX_WIDTH - MIN_WIDTH) - (MAX_WIDTH - MIN_WIDTH) * params.ratio,
                })
            }
        })
    }

    return (
        <div className={css.root}>
            <div
              className={css.body}
              style={{height: `${HEIGHT}px`, width: `${MIN_WIDTH}px`}}
              onMouseEnter={mouseOverHandler}
              onMouseLeave={mouseOutHandler}
            >
                <div
                    className={css.bands}
                    ref={bandsRef}
                >
                    {bandsPositions.map(pos => {
                        const bandStyle = {
                            width: `${pos.x}px`,
                            height: `${BAND_HEIGHT}px`,
                            transform: `translate(0, ${pos.y}px)`,
                            borderTopRightRadius: `${BAND_HEIGHT / 2}px`,
                            borderBottomRightRadius: `${BAND_HEIGHT / 2}px`
                        };

                        return <div className={css.band} style={bandStyle} />
                    })}
                </div>
                <div
                  className={css.wheel}
                  style={wheelStyle}
                  ref={wheelRef}
                />
            </div>
        </div>
    )
};
