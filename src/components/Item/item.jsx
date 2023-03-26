import { Link } from "react-router-dom"

function Item ({Item, onItemClick }) {
    const handleClick = () => {
    onItemClik && onItemClik(item)
    }

    return (
        <li>
         <p>{item.name}</p>
         <button type="button" onClick={handleClick}>Ver Detalhes</button>
        </li>
    )
}

export default Item;