import Header from "./components/Header";
import Form from "./components/Form";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="inputFields">
        <Form />
      </div>
    </div>
  );
}

export default App;
