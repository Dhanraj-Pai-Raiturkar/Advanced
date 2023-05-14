import { useRef } from 'react';
import './App.css';
import RefDemoClassComponent from './RefDemoClassComponent';
import RefDemoFunctionalComponent from './RefDemoFunctionalComponent';
import RefAClassComponent from './RefAClassComponent';
import ForwardRefParent from './ForwardRefParent';

function App() {

  const refClassComponent = useRef();

  console.log("ref to a react class component", refClassComponent);

  return (
    <div className="app">
      <h1>Refs</h1>
      <RefDemoClassComponent />
      <hr style={{width: '100%'}}/>
      <RefDemoFunctionalComponent />
      <hr style={{width: '100%'}}/>
      <RefAClassComponent ref={refClassComponent} />
      <hr style={{width: '100%'}}/>
      <ForwardRefParent />
    </div>
  );
}

export default App;
