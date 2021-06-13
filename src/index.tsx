import React, { CSSProperties, useState } from 'react';

interface ToggleSliderHandleProps extends CSSProperties {
    size: number | string,
}

function ToggleSliderHandle(props: ToggleSliderHandleProps) {
    return (
        <div style={{ width: props.size, height: props.size, ...props }}/>
    )
}

interface ToggleSliderBarProps extends CSSProperties {

}

function ToggleSliderBar(props: ToggleSliderBarProps) {
    return (
        <div style={props}/>
    )
}

interface ToggleSliderProps {
    handleSize?: number,
    handleBorderRadius?: number | string,
    handleBackgroundColor?: string,
    handleBackgroundColorActive?: string,
    handleStyles?: CSSProperties,
    handleStylesActive?: CSSProperties,
    barWidth?: number,
    barHeight?: number,
    barBorderRadius?: number | string,
    barBackgroundColor?: string,
    barBackgroundColorActive?: string,
    barStyles?: CSSProperties,
    barStylesActive?: CSSProperties,
    padding?: number,
    transitionDuration?: string,
    handleTransitionDuration?: string,
    barTransitionDuration?: string,
    onToggle?: (active: boolean) => void,
    handleRenderer?: React.ReactNode,
    handleRendererActive?: React.ReactNode,
    barRenderer?: React.ReactNode,
    barRendererActive?: React.ReactNode,
    flip?: boolean,
    active?: boolean,
}

function ToggleSlider({
                          barBackgroundColor = "#dedede",
                          barBackgroundColorActive = "#06b7e7",
                          barBorderRadius = 16,
                          barHeight = 26,
                          barWidth = 48,
                          handleBackgroundColor = "#ffffff",
                          handleBackgroundColorActive,
                          handleBorderRadius = 16,
                          handleSize = 18,
                          padding = 5,
                          transitionDuration = "100ms",
                          barTransitionDuration,
                          handleTransitionDuration,
                          onToggle = () => undefined,
                          handleRenderer,
                          handleRendererActive,
                          barRenderer,
                          barRendererActive,
                          flip,
                          barStyles,
                          barStylesActive,
                          handleStyles,
                          handleStylesActive,
                          active: initialActive = false,
                      }: ToggleSliderProps) {

    const [active, setActive] = useState(initialActive);

    function onClick() {
        onToggle(!active);
        setActive(!active);
    }

    const overlayStyles: CSSProperties = {
        width: "100%",
        height: "100%",
        position: "absolute",
        transition: `all ${transitionDuration}`,
    };

    barStyles = active ? { ...barStyles, ...barStylesActive } : barStyles;
    handleStyles = active ? { ...handleStyles, ...handleStylesActive } : handleStyles;


    const bar = barRenderer ?? <ToggleSliderBar width={barWidth} height={barHeight}
                                                borderRadius={barBorderRadius}
                                                backgroundColor={active ? barBackgroundColorActive : barBackgroundColor}
                                                transition={`all ${barTransitionDuration ?? transitionDuration}`}
                                                {...barStyles}/>;
    const handle = handleRenderer ?? <ToggleSliderHandle size={handleSize}
                                                         borderRadius={handleBorderRadius}
                                                         backgroundColor={active ?
                                                             (handleBackgroundColorActive ?? handleBackgroundColor) :
                                                             handleBackgroundColor}
                                                         transition={`all ${handleTransitionDuration ?? transitionDuration}`}
                                                         {...handleStyles}/>;
    const barActive = barRendererActive ?? bar;
    const handleActive = handleRendererActive ?? handle;

    return (
        <div style={{ position: "relative", cursor: "pointer" }} onClick={onClick}>
            <div style={{ top: Math.max(handleSize - barHeight, 0) / 2, left: 0, ...overlayStyles }}>
                {active ? barActive : bar}
            </div>
            <div style={{
                top: Math.max(barHeight - handleSize, 0) / 2,
                left: ((active && !flip || !active && flip) ? barWidth - padding - handleSize : padding),
                ...overlayStyles
            }}>
                {active ? handleActive : handle}
            </div>
        </div>
    );
}

export function useToggleSlider(props?: ToggleSliderProps) {

    const [activeState, setActiveState] = useState(props?.active ?? false);
    function onToggle(value: boolean) {
        setActiveState(value);
    }

    return [<ToggleSlider onToggle={onToggle} {...props}/>, activeState]

}

export default ToggleSlider;
