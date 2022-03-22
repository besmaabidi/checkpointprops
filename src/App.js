import Data from "./profile/Profilecomponent";
import './App.css';
import Image from "./Besma.jpg"

function App() {

  let fun = {fullname:"Besma ABIDI",bio:"MeanStack MernStack",profession:"FullStack Developper"}

  return (

    <div className="App">
        <Data data={fun}>
        <img src={Image}/>
        </Data>
    </div>
  );
}

export default App;
