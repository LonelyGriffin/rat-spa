import React, {useEffect, useRef} from "react";
import css from "./index.module.css";
import GSAP from "gsap";
import {act} from "react-dom/test-utils";

const bands = [1 , 2, 3, 4, 5, 6, 7];

const getRelativeShift = (activeIndex: number, prevIndex: number, count: number, progress: number) => {
    const n = Math.floor(count / 2);
    let from = count - prevIndex + n >= count ? n - prevIndex : count - prevIndex + n;
    let to = count - activeIndex + n >= count ? n - activeIndex : count - activeIndex + n;

    if (Math.abs(from - to) > n) {
        if (from - to > 0) {
            to = to + count
        } else {
            from = count + from
        }
    }
    let result = from + (to - from) * progress;
    return result;
};

type OuterProps = {
    active: number,
    onBandClick: (key: number) => void
}

function usePrevious<T>(value: T) {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}


export const NavigationPanel = (props: OuterProps) => {
    const BORDER_WIDTH = 1;
    const HEIGHT = 650;
    const MIN_WIDTH = 210;
    const MAX_WIDTH = 500;
    const MAX_BASE_HEIGHT = 1600;
    const MIN_VISIBLE_WHEEL_WIDTH = 40;
    const MAX_VISIBLE_WHEEL_WIDTH = 100;
    const MIN_BAND_WIDTH = 70;
    const MAX_BAND_WIDTH = 100;
    const MAX_BAND_WIDTH_ON_HOVER = 300;
    const BAND_HEIGHT = 60;
    const BAND_PADDING = 60;

    const bodyRef = useRef<HTMLDivElement>(null);
    const baseRef = useRef<HTMLDivElement>(null);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const bandRefs = useRef(new Map<number, HTMLDivElement>()).current;

    const waveCenterYRef = useRef(HEIGHT / 2);
    const expandAnimationRef = useRef(false);
    const rotateAnimationRef = useRef(false);

    const updateBase = (visibleWidth: number, visibleHeight: number, borderWidth: number) => {
        const base = baseRef.current

        if (base === null) {
            return;
        }

        const baseRadius = (visibleWidth ** 2 + (visibleHeight / 2) ** 2) / (2 * visibleWidth);

        base.style.height = base.style.width = `${2 * baseRadius}px`;
        base.style.borderRadius = `${baseRadius}px`;
        base.style.transform = `translate(${-baseRadius * 2 + visibleWidth}px, ${HEIGHT / 2 - baseRadius}px)`;
        base.style.borderWidth = `${borderWidth}px`;
    };
    const updateBubble = (visibleWidth: number, visibleHeight: number) => {
        const bubble = bubbleRef.current

        if (bubble === null) {
            return;
        }

        const baseRadius = (visibleWidth ** 2 + (visibleHeight / 2) ** 2) / (2 * visibleWidth);

        bubble.style.height = bubble.style.width = `${2 * baseRadius}px`;
        bubble.style.borderRadius = `${baseRadius}px`;
        bubble.style.transform = `translate(${-baseRadius * 2 + visibleWidth}px, ${HEIGHT / 2 - baseRadius}px)`;
    };
    const updateWaveCenterYByMouse = (mouseClientY: number) => {
        const body = bodyRef.current;

        if (!body) {
            return;
        }

        waveCenterYRef.current = mouseClientY - body.getBoundingClientRect().top;
    };
    const updateBody = (width: number) => {
        const body = bodyRef.current;

        if (!body) {
            return;
        }

        body.style.width = `${width}px`;
        body.style.height = `${HEIGHT}px`;
    };
    const updateWheel = (visibleWidth: number) => {
        const wheel = wheelRef.current

        if (wheel === null) {
            return;
        }

        const wheelRadius = (visibleWidth ** 2 + (HEIGHT / 2) ** 2) / (2 * visibleWidth);

        wheel.style.height = wheel.style.width = `${2 * wheelRadius}px`;
        wheel.style.borderRadius = `${wheelRadius}px`;
        wheel.style.transform = `translate(${-wheelRadius * 2 + visibleWidth}px, ${HEIGHT / 2 - wheelRadius}px)`
    };
    const updateBands = (visibleWidth: number, waveCenterY: number, maxWidth: number, relativeShift: number) => {
        const length = bands.length;
        const halfBandHeight = BAND_HEIGHT / 2;
        const bandSpace = HEIGHT - 2 * BAND_PADDING;
        const oneBandSpace = bandSpace / (length - 1);
        const fractionalRelativeShift = relativeShift % 1;
        const integerRelativeShift = relativeShift > 0 ? Math.floor(relativeShift) : Math.ceil(relativeShift);
        const centralShift = oneBandSpace * (integerRelativeShift % length + fractionalRelativeShift);

        for(let i = 0; i < length; i++) {
            if (bandRefs.has(i)) {
                const ref = bandRefs.get(i);

                const centralY = oneBandSpace * i + centralShift;
                const y = centralY <= bandSpace ? centralY - halfBandHeight + BAND_PADDING
                    : centralY > bandSpace + BAND_HEIGHT ? centralY - bandSpace - oneBandSpace - halfBandHeight + BAND_PADDING
                    : fractionalRelativeShift <= 0.5 ? 2 * fractionalRelativeShift * BAND_HEIGHT + bandSpace - halfBandHeight + BAND_PADDING
                    : -2 * (1 - fractionalRelativeShift) * BAND_HEIGHT - halfBandHeight + BAND_PADDING;


                const distanceToWaveCenter = waveCenterY - y - halfBandHeight;
                const currentHalfWave = Math.sign(distanceToWaveCenter) > 0
                    ? waveCenterY
                    : HEIGHT - waveCenterY;

                const width = Math.cos(0.5 * Math.PI * Math.abs(distanceToWaveCenter / currentHalfWave)) * maxWidth + MIN_BAND_WIDTH + (visibleWidth - MIN_VISIBLE_WHEEL_WIDTH)

                ref!.style.width = `${width}px`;
                ref!.style.height = `${BAND_HEIGHT}px`;
                ref!.style.transform = `translate(0, ${y}px)`;
                ref!.style.borderTopRightRadius = ref!.style.borderBottomRightRadius = `${halfBandHeight}px`;
            }
        }
    }

    const mouseEnterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        expandAnimationRef.current = true;
        updateBody(MAX_WIDTH);
        updateWaveCenterYByMouse(e.clientY);
        const fromY = waveCenterYRef.current;
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "slow(0.1, 0.4, false)",
            onComplete: () => {
                expandAnimationRef.current = false;
            },
            onUpdate: (params) => {
                const wheelWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_VISIBLE_WHEEL_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * params.ratio;
                const waveCenterY = waveCenterYRef.current - (waveCenterYRef.current - fromY) * (1 - params.ratio);
                const maxBandWidth = MAX_BAND_WIDTH_ON_HOVER - (MAX_BAND_WIDTH_ON_HOVER - MAX_BAND_WIDTH) * (1 - params.ratio);
                const relativeShift = getRelativeShift(props.active, props.active, bands.length, 0);
                updateWheel(wheelWidth);
                updateBands(wheelWidth, waveCenterY, maxBandWidth, relativeShift);
            }
        });
        GSAP.to(baseRef.current!, {
            duration: 0.5,
            ease: "power4.in",
            border: 'solid 3px #FBD46D',
            onUpdate: (params) => {
                const baseWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * params.ratio;
                const baseHeight = HEIGHT + (MAX_BASE_HEIGHT - HEIGHT) * params.ratio;
                updateBase(baseWidth, baseHeight, params.ratio * BORDER_WIDTH);
            }
        });
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power4.out",
            onUpdate: (params) => {
                const baseWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * params.ratio;
                const baseHeight = HEIGHT + (MAX_BASE_HEIGHT - HEIGHT) * params.ratio;
                updateBubble(baseWidth, baseHeight);
            }
        });
    };
    const mouseLeaveHandler = () => {
        updateBody(MIN_WIDTH);
        const fromY = waveCenterYRef.current;
        const toY = HEIGHT / 2;
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power2.inOut",
            onUpdate: (params) => {
                const wheelWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_VISIBLE_WHEEL_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * (1 - params.ratio);
                const waveCenterY = toY - (toY - fromY) * (1 - params.ratio);
                const maxBandWidth = MAX_BAND_WIDTH - (MAX_BAND_WIDTH - MAX_BAND_WIDTH_ON_HOVER) * (1 - params.ratio);
                const relativeShift = getRelativeShift(props.active, props.active, bands.length, 0);

                updateWheel(wheelWidth);
                updateBands(wheelWidth, waveCenterY, maxBandWidth, relativeShift);
            }
        });
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power4.in",
            onUpdate: (params) => {
                const width = MIN_VISIBLE_WHEEL_WIDTH + (MAX_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * (1 - params.ratio);
                const height = HEIGHT + (MAX_BASE_HEIGHT - HEIGHT) * (1 - params.ratio);
                updateBase(width, height, (1 - params.ratio) * BORDER_WIDTH);
            }
        });
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power4.out",
            onUpdate: (params) => {
                const width = MIN_VISIBLE_WHEEL_WIDTH + (MAX_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * (1 - params.ratio);
                const height = HEIGHT + (MAX_BASE_HEIGHT - HEIGHT) * (1 - params.ratio);
                updateBubble(width, height);
            }
        });
    };
    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        updateWaveCenterYByMouse(e.clientY);
        if (!expandAnimationRef.current && !rotateAnimationRef.current) {
            const wheelWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_VISIBLE_WHEEL_WIDTH - MIN_VISIBLE_WHEEL_WIDTH);
            const relativeShift = getRelativeShift(props.active, props.active, bands.length, 0);

            updateWheel(wheelWidth);
            updateBands(wheelWidth, waveCenterYRef.current, MAX_BAND_WIDTH_ON_HOVER, relativeShift);
        }
    };

    useEffect(() => {
        const activeIndex = getRelativeShift(props.active, props.active, bands.length, 0);

        updateBody(MIN_WIDTH);
        updateWheel(MIN_VISIBLE_WHEEL_WIDTH);
        updateBase(MIN_VISIBLE_WHEEL_WIDTH, HEIGHT, 0);
        updateBands(MIN_VISIBLE_WHEEL_WIDTH, waveCenterYRef.current, MAX_BAND_WIDTH, activeIndex);
    }, []);

    const prevActive = usePrevious(props.active);
    useEffect(() => {
        if (prevActive || prevActive === 0) {
            rotateAnimationRef.current = true;
            GSAP.to(wheelRef.current!, {
                duration: 1,
                ease: "power4.out",
                onComplete: () => {
                    rotateAnimationRef.current = false;
                },
                onUpdate: (params) => {
                    const relativeShift = getRelativeShift(props.active, prevActive, bands.length, params.ratio);

                    updateBands(MAX_VISIBLE_WHEEL_WIDTH, waveCenterYRef.current, MAX_BAND_WIDTH_ON_HOVER, relativeShift);
                }
            });
        } else {
            const currentIndex = getRelativeShift(props.active, props.active, bands.length, 1);
            updateBands(MIN_VISIBLE_WHEEL_WIDTH, waveCenterYRef.current, MAX_BAND_WIDTH, currentIndex);
        }
    }, [props.active]);

    return (
        <div className={css.root}>
            <div
              ref={bodyRef}
              className={css.body}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              onMouseMove={mouseMoveHandler}
            >
                <div className={css.bubble} ref={bubbleRef}/>
                <div className={css.base} ref={baseRef}/>
                <div className={css.bands}>
                    {bands.map((pos, i) => {
                        const key = i;

                        return <div
                          onClick={() => props.onBandClick(i)}
                          key={key}
                          className={css.band}
                          ref={inst => inst === null ? bandRefs.delete(key) : bandRefs.set(key, inst)}
                        >
                            <div className={css.bandIcon}>{key}</div>
                        </div>
                    })}
                </div>
                <div
                  className={css.wheel}
                  ref={wheelRef}
                />
            </div>
        </div>
    )
};
