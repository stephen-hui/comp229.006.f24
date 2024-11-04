import logo from "./logo.svg";
import "./App.css";
import Li from "./LI";

function App({ items }) {
  return (
    <div className="App">
      <ul>
        {items.map((item, i) => (
          <Li key={i} item={item}></Li>
        ))}
      </ul>
      <p>testing</p>
    </div>
  );
}

export default App;
