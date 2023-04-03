import CarForm from "./component/CarForm";
import CarList from "./component/CarList";
import CarSearch from "./component/Car Search";
import Carvalue from "./component/CarValue";
function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <Carvalue />
    </div>
  );
}

export default App;
