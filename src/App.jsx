import React , {useState} from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";


function App() {
  //task-2
  //sat will be used to compare changes in state. 
  //setSat is a function that will be used to update the state.
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div className="App">
      <Banner/>
      <Buttons
       filterByType={filterByType}
       setSat={setSat}
       displaySats={displaySats} />
      <Table sat={sat}  /> 
    </div>
  );
}

export default App;