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
    <div className="list-header border-t-[3px] border-solid border-b-slate-800">
      <h3 className="title is-3 mt-[10px]">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label text-[20px]  mt-[10px]">Search</label>

        <input
          className="input  mt-[10px]"
          value={searchitem}
          onChange={handlesearch}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
