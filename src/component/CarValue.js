import { useSelector } from "react-redux";
function Carvalue() {
  const total = useSelector(({ car: { data, searchterm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchterm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total Cost:${total}</div>;
}

export default Carvalue;
