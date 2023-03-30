import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail, clearDetail } from "../../redux/actions";

import style from "./Detail.module.css";

const Detail = ({name}) =>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const doggiedetail = useSelector((state)=>state.detail);


    useEffect(()=>{
        dispatch(getDogDetail(id))
    },[dispatch, id])


    function handleClear(){
        dispatch(clearDetail())
    }

    return(
        <div>
            <h1> Esta es la vista de Detail {id}</h1>
            {doggiedetail.length> 0 &&(
                <div className={style.detailContainer}>
                    <h3>Este es el detalle de la tarjeta</h3>
                    <h1>Name: {doggiedetail[0].name}</h1>
                    <h2>Min Weight: {doggiedetail[0].min_weight}</h2>
                    <h2>Max Weight: {doggiedetail[0].max_weight}</h2>
                    <h2>Min Height: {doggiedetail[0].min_height}</h2>
                    <h2>Max Height: {doggiedetail[0].max_height}</h2>
                    <h2>Life Span: {doggiedetail[0].life_span}</h2>
                    <img src={doggiedetail[0].image} alt={doggiedetail[0].id} className={style.detailDogImage}></img>
                    <h2>Temperament: {doggiedetail[0].temperament}</h2>


                </div>

            )}

            <Link to='/home'>
                <button className={style.retbutton} onClick={()=>handleClear()}>Return</button>

            </Link>
        </div>
    )
    }


export default Detail;


// {
//     "id": "1",
//     "name": "Affenpinscher",
//     "min_weight": 3,
//     "max_weight": 6,
//     "min_height": 23,
//     "max_height": 29,
//     "life_span": "10 - 12 years",
//     "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
//     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
//   },