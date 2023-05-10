import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <div className="app">
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Spiderman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
