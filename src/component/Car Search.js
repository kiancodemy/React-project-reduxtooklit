import { useDispatch, useSelector } from "react-redux";
import { changesearch } from "../store";
function CarSearch() {
  const dispatch = useDispatch();
  const searchitem = useSelector((state) => {
    return state.car.searchitem;
  });
  const handlesearch = (e) => {
    dispatch(changesearch(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>

        <input
          className="input"
          value={searchitem}
          onChange={handlesearch}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
