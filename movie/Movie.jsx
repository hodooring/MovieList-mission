import { useEffect, useRef, useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import './style.scss'

const dataList = [
    {id:1, genre:'드라마', title:'라라랜드', actor:'라이언고슬링', date:'2000'},
    {id:2, genre:'범죄', title:'범죄도시3', actor:'마동석', date:'2022'},
    {id:3, genre:'스릴러', title:'조커', actor:'호아킨 피닉스', date:'2015'},
    {id:4, genre:'멜로', title:'만추', actor:'탕웨이', date:'2021'},
    {id:5, genre:'드라마', title:'서울의 봄', actor:'정우성', date:'2023'},
]
const Movie = () => {
    const [data,setData] = useState(dataList)
    const [movie,setMovie] = useState({
        genre:'', title:'', actor:'', date:''
    })
    const [isEdit,setIsEdit] = useState(false)
    const changeInput = (e) => {
        const {name,value} = e.target
        
        setMovie({
            ...movie,
            [name]:value
        })
    }
    const selChange = (e) => {
        const {value} = e.target
        {
            setData([...data].sort((a,b)=>a[value]>b[value]?1:-1))
        }

    }
    const no = useRef(1)
    const onSubmit = (e) => {
        e.preventDefault ()
        if (isEdit){
            setData(data.map(item=>item.id===movie.id?movie:item))
            setIsEdit(false)
        }
        else {
            movie.id=no.current++
            setData([
                ...data,
                movie
            ])
        }
        setMovie({
            genre:'',title:'',actor:'',date:''
        })    
    }
    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }
    const onEdit = (id) => {
        setIsEdit(true)
        setMovie(data.find(item=>item.id===id))
        
    }

    return (
        <div className="movielist">
            {/* <h2 className="movietitle"><FcFilm /> 영화 관리 리스트 <FcFilmReel /></h2> */}
            <div className="logo">
            <div className="focus">
                Movie List
            </div>
            <div className="mask">
                <div className="text">Movie List</div>
            </div>
            </div>
            {/* <h2 className="movietitle"><FcFilm /> 영화 관리 리스트 <FcFilmReel /></h2> */}
            <div className="con-box">
                <MovieForm onSubmit={onSubmit} movie={movie} changeInput={changeInput} isEdit={isEdit} selChange={selChange} />
                <MovieList data={data} onDel={onDel} onEdit={onEdit} />
            </div>
        </div>
    );
};

export default Movie;