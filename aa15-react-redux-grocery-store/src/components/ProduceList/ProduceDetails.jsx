import { addCartItem } from "../../store/cart";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../store/produce";


function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addCartItem(produce.id))
  }

  const handleToggle = () => {
    dispatch(toggleLike(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleToggle}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
