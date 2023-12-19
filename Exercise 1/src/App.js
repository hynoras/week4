import React4 from './components/Exercise 1/index';
import FletchingData from './components/Exercise 1.1/FletchingData';
import SpinnerFallback from './components/Exercise 1.2/SpinnerFallback';
import Nav1 from './components/Exercise 1.3/Nav1';
import Nav2 from './components/Exercise 1.3/Exercise 1.3.1/Nav2';
import Nav3 from './components/Exercise 1.3/Exercise 1.3.2/Nav3';
import TextInput from './components/Exercise 1.4/TextInput';
import Button1 from './components/Exercise 1.5/Button';
import ValidateForm from './components/Exercise 1.6/ValidateForm';
import React5 from './components/Exercise 1.7/index';

function App() {
  return (
    <div>
      <h2>Exercise 1</h2>
      <React4/>
      <h2>Exercise 1.1</h2>
      <FletchingData/>
      <h2>Exercise 1.2</h2>
      <SpinnerFallback/>
      <h2>Exercise 1.3</h2>
      <Nav1/>
      <h2>Exercise 1.3.1</h2>
      <Nav2/>
      <h2>Exercise 1.3.2</h2>
      <Nav3/>
      <h2>Exercise 1.4</h2>
      <TextInput/>
      <h2>Exercise 1.5</h2>
      <Button1/>
      <h2>Exercise 1.6</h2>
      <ValidateForm/>
      <h2>Exercise 1.7</h2>
      <React5/>
    </div>
  );
}

export default App;