import { FcFullTrash } from "react-icons/fc";
import { TiPencil } from "react-icons/ti";


const MovieItem = ({item,onDel,onEdit}) => {
    const {genre,title,actor,date,id} = item
    return (
        <tr>
           <td>{genre}</td> 
           <td>{title}</td> 
           <td>{actor}</td> 
           <td>{date}</td> 
           <td>
                <button onClick={()=>onEdit(id)}>edit</button>  
                <button onClick={()=>onDel(id)} >del</button>  
           </td> 
        </tr>
    );
};

export default MovieItem;