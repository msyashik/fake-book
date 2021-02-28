import "./App.css";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import fakeData from "./MOCK_DATA.json";

function App() {
  return (
    <div>
      <Header></Header>
      <Friends fakeData={fakeData}></Friends>
    </div>
  );
}

export default App;
