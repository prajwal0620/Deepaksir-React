import './App.css';
//    
import Parent1 from './view/Parent1';
// import ParentFn from './view/ParentFn';
import ParentFn1 from './view/ParentFn1';


function App() {
  return (
    <div className="App">
      <h1>
        {/* <ClassComponent/>
        <FunctionalComponent/>
        <Parent/>
        <ParentFn/> */}
        <ParentFn1/>
        <Parent1 />
      </h1>

    </div>
    
  );
} 
export default App;