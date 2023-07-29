import { useDispatch, useSelector } from "react-redux";
import { changename, changecost, addcar } from "../store";

function CarForm() {
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });
  const dispatch = useDispatch();
  const handlename = (e) => {
    dispatch(changename(e.target.value));
  };

  const handlecost = (e) => {
    const carcost = parseInt(e.target.value) || 0;
    dispatch(changecost(carcost));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    dispatch(addcar({ name: name, cost: cost }));
  };

  return (
    <div className="car-form panel bg-[#F6F4EB]">
      <h4 className="subtitle is-3">Add caer</h4>
      <form onSubmit={handlesubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handlename}
            ></input>
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handlecost}
              type="number"
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
