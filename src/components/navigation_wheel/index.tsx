import React, {useEffect, useRef, useState} from "react";
const css = require("./index.module.css");
import GSAP from "gsap";
import cn from "classnames"
import Link from "next/link";

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

type OuterProps<T> = {
    items: T[]
    extractKey: (item: T) => string
    currentItemKey: string
    onItemClick: (key: string) => void
    renderItem: (item: T, isExpanded: boolean) => React.ReactNode
}

function usePrevious<T>(value: T) {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}


export function NavigationWheel<T>(props: OuterProps<T>) {
    const {items, extractKey, currentItemKey, onItemClick} = props
    const currentItemIndex = items.findIndex(item => extractKey(item) === currentItemKey)

    const HEIGHT = 500;
    const MIN_WIDTH = 140;
    const MAX_WIDTH = 650;
    const MIN_VISIBLE_WHEEL_WIDTH = 40;
    const MAX_VISIBLE_WHEEL_WIDTH = 40;
    const MIN_BAND_WIDTH = 83;
    const MAX_BAND_WIDTH = 43;
    const MAX_BAND_WIDTH_ON_HOVER = 300;
    const MIN_BAND_WIDTH_ON_HOVER = 330;
    const BAND_HEIGHT = 84;
    const BAND_PADDING = 60;

    const bodyRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const isRealHoveredRef = useRef<boolean>(false);
    const bandRefs = useRef(new Map<string, HTMLDivElement>()).current;

    const waveCenterYRef = useRef(HEIGHT / 2);
    const expandAnimationRef = useRef(false);
    const [isHovered, setIsHovered] = useState(false);
    const rotateAnimationRef = useRef(false);


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
    const updateBands = (visibleWidth: number, waveCenterY: number, minWidth: number, maxWidth: number, relativeShift: number) => {
        const length = items.length;
        const halfBandHeight = BAND_HEIGHT / 2;
        const bandSpace = HEIGHT - 2 * BAND_PADDING;
        const oneBandSpace = bandSpace / (length - 1);
        const fractionalRelativeShift = relativeShift % 1;
        const integerRelativeShift = relativeShift > 0 ? Math.floor(relativeShift) : Math.ceil(relativeShift);
        const centralShift = oneBandSpace * (integerRelativeShift % length + fractionalRelativeShift);

        for(let i = 0; i < length; i++) {
            const key = extractKey(items[i]);
            if (bandRefs.has(key)) {
                const ref = bandRefs.get(key);

                const centralY = oneBandSpace * i + centralShift;
                const y = centralY <= bandSpace ? centralY - halfBandHeight + BAND_PADDING
                    : centralY > bandSpace + BAND_HEIGHT ? centralY - bandSpace - oneBandSpace - halfBandHeight + BAND_PADDING
                    : fractionalRelativeShift <= 0.5 ? 2 * fractionalRelativeShift * BAND_HEIGHT + bandSpace - halfBandHeight + BAND_PADDING
                    : -2 * (1 - fractionalRelativeShift) * BAND_HEIGHT - halfBandHeight + BAND_PADDING;


                const distanceToWaveCenter = waveCenterY - y - halfBandHeight;
                const currentHalfWave = Math.sign(distanceToWaveCenter) > 0
                    ? waveCenterY
                    : HEIGHT - waveCenterY;

                const width = Math.cos(0.5 * Math.PI * Math.abs(distanceToWaveCenter / currentHalfWave)) * maxWidth + minWidth + (visibleWidth - MIN_VISIBLE_WHEEL_WIDTH)

                ref!.style.width = `${width}px`;
                ref!.style.height = `${BAND_HEIGHT}px`;
                ref!.style.transform = `translate(0, ${y}px)`;
                ref!.style.borderTopRightRadius = ref!.style.borderBottomRightRadius = `${halfBandHeight}px`;
            }
        }
    }

    const mouseEnterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        isRealHoveredRef.current = true
        setIsHovered(true)
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
                const minBandWidth = MIN_BAND_WIDTH_ON_HOVER - (MIN_BAND_WIDTH_ON_HOVER - MIN_BAND_WIDTH) * (1 - params.ratio);
                const relativeShift = getRelativeShift(currentItemIndex, currentItemIndex, items.length, 0);
                updateWheel(wheelWidth);
                updateBands(wheelWidth, waveCenterY, minBandWidth, maxBandWidth, relativeShift);
            }
        });
    };
    const mouseLeaveHandler = () => {
        isRealHoveredRef.current = false
        setIsHovered(false)
        updateBody(MIN_WIDTH);
        const fromY = waveCenterYRef.current;
        const toY = HEIGHT / 2;
        waveCenterYRef.current = toY;
        GSAP.to(wheelRef.current!, {
            duration: 0.5,
            ease: "power2.inOut",
            onUpdate: (params) => {
                const wheelWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_VISIBLE_WHEEL_WIDTH - MIN_VISIBLE_WHEEL_WIDTH) * (1 - params.ratio);
                const waveCenterY = toY - (toY - fromY) * (1 - params.ratio);
                const maxBandWidth = MAX_BAND_WIDTH - (MAX_BAND_WIDTH - MAX_BAND_WIDTH_ON_HOVER) * (1 - params.ratio);
                const minBandWidth = MIN_BAND_WIDTH - (MIN_BAND_WIDTH - MIN_BAND_WIDTH_ON_HOVER) * (1 - params.ratio);
                const relativeShift = getRelativeShift(currentItemIndex, currentItemIndex, items.length, 0);

                updateWheel(wheelWidth);
                updateBands(wheelWidth, waveCenterY, minBandWidth, maxBandWidth, relativeShift);
            }
        });
    };
    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        updateWaveCenterYByMouse(e.clientY);
        if (!expandAnimationRef.current && !rotateAnimationRef.current) {
            const wheelWidth = MIN_VISIBLE_WHEEL_WIDTH + (MAX_VISIBLE_WHEEL_WIDTH - MIN_VISIBLE_WHEEL_WIDTH);
            const relativeShift = getRelativeShift(currentItemIndex, currentItemIndex, items.length, 0);

            updateWheel(wheelWidth);
            updateBands(wheelWidth, waveCenterYRef.current, MIN_BAND_WIDTH_ON_HOVER, MAX_BAND_WIDTH_ON_HOVER, relativeShift);
        }
    };

    useEffect(() => {
        const activeIndex = getRelativeShift(currentItemIndex, currentItemIndex, items.length, 0);

        updateBody(MIN_WIDTH);
        updateWheel(MIN_VISIBLE_WHEEL_WIDTH);
        updateBands(MIN_VISIBLE_WHEEL_WIDTH, waveCenterYRef.current, MIN_BAND_WIDTH, MAX_BAND_WIDTH, activeIndex);
    }, []);

    const prevActive = usePrevious(currentItemIndex);
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
                    const relativeShift = getRelativeShift(currentItemIndex, prevActive, items.length, params.ratio);
                    const minBandWidth = isRealHoveredRef.current ? MIN_BAND_WIDTH_ON_HOVER : MIN_BAND_WIDTH
                    const maxBandWidth = isRealHoveredRef.current ? MAX_BAND_WIDTH_ON_HOVER : MAX_BAND_WIDTH
                    const visibleWheelWidth = isRealHoveredRef.current ? MAX_VISIBLE_WHEEL_WIDTH : MIN_VISIBLE_WHEEL_WIDTH;

                    updateBands(visibleWheelWidth, waveCenterYRef.current, minBandWidth, maxBandWidth, relativeShift);
                }
            });
        } else {
            const currentIndex = getRelativeShift(currentItemIndex, currentItemIndex, items.length, 1);
            updateBands(MIN_VISIBLE_WHEEL_WIDTH, waveCenterYRef.current, MIN_BAND_WIDTH, MAX_BAND_WIDTH, currentIndex);
        }
    }, [currentItemKey]);

    return (
        <div className={css.root}>
            <div className={cn(css.overlay, isHovered && css.overlay_active)}/>
            <div className={css.shadow} />
            <div className={css.container}>
                <div
                  className={css.body}
                  ref={bodyRef}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  onMouseMove={mouseMoveHandler}
                >
                    <div className={css.bands}>
                        {items.map((item, i) => {
                            const key = extractKey(item);

                            return <div
                              onClick={() => onItemClick(key)}
                              key={key}
                              className={cn(css.band, i === currentItemIndex && css.band_active)}
                              ref={inst => inst === null ? bandRefs.delete(key) : bandRefs.set(key, inst)}
                            >
                                {props.renderItem(item, isHovered)}
                            </div>
                        })}
                    </div>
                    <div
                      className={css.wheel}
                      ref={wheelRef}
                    />
                    <Link href={'/about'}><a className={css.about} title={'О сайте'} /></Link>
                </div>
            </div>
        </div>
    )
}
