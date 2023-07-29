import { useSelector, useDispatch } from "react-redux";
import { removecar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ car: { searchterm, data } }) => {
    return data.filter((cars) =>
      cars.name.toLowerCase().includes(searchterm.toLowerCase())
    );
  });
  const handledelete = (car) => {
    dispatch(removecar(car.id));
  };

  const render = cars.map((car) => {
    return (
      <div
        key={car.id}
        className="panel mt-[8px]  rounded-[10px] border-[2px] border-[#aaa]"
      >
        <p>
          {car.name}-${car.cost}
        </p>
        <button onClick={() => handledelete(car)} className="button is-danger">
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list mt-[15px]">
      {render}
      <hr />
    </div>
  );
}

export default CarList;
