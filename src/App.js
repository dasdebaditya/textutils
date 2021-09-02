import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <TextArea text="Enter your text: "/>
      <About/>
    </>
  );
}

export default App;
