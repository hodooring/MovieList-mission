import MovieItem from "./MovieItem";

const MovieList = ({data,onDel,onEdit}) => {
    return (
        <div className="con2" >
            <table>
                {/* <caption>영화 관리</caption> */}
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <th>장르</th>
                        <th>제목</th>
                        <th>주인공</th>
                        <th>개봉연도</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=><MovieItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;