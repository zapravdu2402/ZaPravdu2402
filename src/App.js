import "./App.css";
import Header from "./Header";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container max-w-full mx-auto px-2 sm:px-6 lg:px-8">
        <Posts />
      </div>
    </div>
  );
}

export default App;
