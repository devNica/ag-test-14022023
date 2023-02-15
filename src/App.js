
import TableWrapper from "./components/TableWrapper";
import './app.css'
import { CountryProvider } from "./context/CountryContext";

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <TableWrapper />
      </CountryProvider>

    </div>
  );
}

export default App;
