import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
  // console.log(dummy);
  //   console.log(items[0].card.info);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    console.log(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between align-center"
        >
          <div className="py-2">
            <span className="font-bold"> {item.card.info.name}</span>
            <span>- ₹ {item.card.info.price / 100}</span>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          <div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-36"
            />
            <button
              className="p-2 bg-black text-white shadow-lg absolute m-auto rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
