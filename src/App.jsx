import './index.css';

import MainMenu from 'modules/MainMenu/MainMenu';
import mainMenu from "./data/mainMenu.json";
import MyPhone from 'modules/MyPhone/MyPhone';

function App() {
  return (
    <div className="App">
      <MainMenu items={mainMenu} />
      <MyPhone />
    </div>
  );
};

export default App;
