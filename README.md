# react-toggle-slider

A highly customizable React toggle slider component.

## Usage

To add the component, simply import `ToggleSlider` and use it in your app.

```tsx
import ToggleSlider from "react-toggle-slider";

function App() {
    return (
        <div>
            <ToggleSlider/>
        </div>
    );
}
```

The slider works without any options, but it can be heavily customized.

### Options

| Option | Default | Description |
| ------------- | ------------- | ------------- |
| `active` | `false` | Initial state | 
| `onToggle` | `undefined` | Function to call when slider is toggled, passes active state as parameter | 
| `padding` | `5` | Padding between the handle and the sides of the bar | 
| `flip` | `false` | Handle starts of right instead of left | 
| `transitionDuration` | `100ms` | Transition duration of the slider | 
| `handleSize` | `18` | Diameter of the handle | 
| `handleBorderRadius` | `16` | Border radius of the handle | 
| `handleBackgroundColor` | `#ffffff` | Background color of the handle | 
| `handleBackgroundColorActive` | `undefined` | Background color of the handle while active | 
| `handleStyles` | `undefined` | Extra styles object to be applied to the handle | 
| `handleStylesActive` | `undefined` | Extra styles object to be applied to the handle while active | 
| `handleTransitionDuration` | `undefined` | Transition duration of the handle (overrides `transitionDuration`) | 
| `handleRenderer` | `undefined` | React node to completely replace the handle | 
| `handleRendererActive` | `undefined` | React node to completely replace the handle while active | 
| `barHeight` | `26` | Height of the bar | 
| `barWidth` | `48` | Width of the bar | 
| `barBorderRadius` | `16` | Border radius of the bar | 
| `barBackgroundColor` | `#dedede` | Background color of the bar | 
| `barBackgroundColorActive` | `#06b7e7` | Background color of the bar while active | 
| `barTransitionDuration` | `undefined` | Transition duration of the bar (overrides `transitionDuration`) | 
| `barStyles` | `undefined` | Extra styles object to be applied to the bar | 
| `barStylesActive` | `undefined` | Extra styles object to be applied to the bar while active | 
| `barRenderer` | `undefined` | React node to completely replace the bar | 
| `barRendererActive` | `undefined` | React node to completely replace the bar while active | 

If any options which refer to the active state of the slider are undefined, it will default to the
inactive value.

## Accessing the state of the slider

### Callback

The slider's state can be accessed using a callback. This can be used with `useState` or something
similar to represent the status on the page.

```tsx

import ToggleSlider from "react-toggle-slider";

function App() {

    const [active, setActive] = useState(false);

    return (
        <div>
            <ToggleSlider onToggle={state => setActive(state)}/>
            Slider is {active ? "active" : "inactive"}
        </div>
    );
}
```

### Hook

The slider can also be used as a hook. This can be used to access the state of the slider without
a callback. To do this, import the `useToggleSlider` function.
Options can be passed into the function as an object.

```tsx

import { useToggleSlider } from "react-toggle-slider"

function App() {

    const [toggleSlider, active] = useToggleSlider({barBackgroundColorActive: "red"});
    return (
        <div>
            { toggleSlider }
            Slider is {active ? "active" : "inactive"}
        </div>
    );
}

```
