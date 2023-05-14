# About

## Refs:

### Content
* React.createRef (class components)
* useRef (functional components)
* referencing a react class component using ref
* React.forwardRef (referencing a functional component using ref)

<br/>
Refs provide a way to access DOM nodes or React elements created in the render method.
Please note, we can add refs to react component, but the react component has to be a class component (using render method).
We cannot add refs to functional components, for achieving this in functional components we can use React.ForwardRef method.

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

## When to Use Refs

There are a few good use cases for refs:

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.
* Avoid using refs for anything that can be done declaratively.

For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.



## Video Reference:
https://youtu.be/FXa9mMTKOu8
https://youtu.be/8aCXVC9Qmto
https://youtu.be/RLWniwmfdq4