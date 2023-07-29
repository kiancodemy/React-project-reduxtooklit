import { useSelector } from "react-redux";
function Carvalue() {
  const total = useSelector(({ car: { data, searchterm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchterm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return (
    <div className="  car-value mt-[15px] p-[5px] inline rounded-[5px]  content-start border-[#ddd] px-[5px] border-[1px] font-[500]">
      Total Cost: ${total}
    </div>
  );
}

export default Carvalue;
