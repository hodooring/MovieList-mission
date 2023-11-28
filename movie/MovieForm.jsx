
const MovieForm = ({onSubmit, movie, changeInput,isEdit,selChange}) => {
    const {genre, title, actor, date} = movie
    return (
        <div className="con1" > 
            <select className="sel" onChange={selChange}>
            
                <option>항목을 선택하세요. </option>
                <option value="genre">장르</option>
                <option value="title">제목</option>
                <option value="actor">배우</option>
                <option value="date">개봉일</option>
            </select>

            <form className="MovieForm" onSubmit={onSubmit}>
                <p>
                    <label>장르</label>
                    <input type="text" value={genre} name="genre" onChange={changeInput} />
                </p>
                <p>
                    <label>제목</label>
                    <input type="text" value={title} name="title" onChange={changeInput} />
                </p>
                <p>
                    <label>주인공</label>
                    <input type="text" value={actor} name="actor" onChange={changeInput} />
                </p>
                <p>
                    <label>개봉일</label>
                    <input type="text" value={date} name="date" onChange={changeInput} />
                </p>
                <button type="submit" >
                    {
                        isEdit?'수정':'등록'
                    }
                </button>
            </form>
        </div>
    );
};

export default MovieForm;