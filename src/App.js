import './style.css';
//import Pet from "./component/Pet";
import Searchparams from './component/SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      <Searchparams/>
    </div>
  );
};

export default App;
