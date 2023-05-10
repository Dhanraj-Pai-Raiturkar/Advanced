# About

## Error Boundaries:
<br/>
Error Boundaries are react components, that catch javascript error in their child component tree.
Log these errors.
Display fallback UI.

static method getDerivedStateFrom error can change the state object, based on state we can then render a fallback ui if an error occurs instead of the whole react dom tree getting unmounted.

ComponentDidCatch function gets error and message parameters to log the error and error info.

A class component becomes a error boundary by defining either or both getDerivedStateFromError and ComponentDidCatch lifecycle methods.
## Video Reference:
https://youtu.be/DNYXgtZBRPE