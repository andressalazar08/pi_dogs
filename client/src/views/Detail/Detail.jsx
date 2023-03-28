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
                    <h1>{doggiedetail[0].name}</h1>

                </div>

            )}

            <Link to='/home'>
                <button className={style.retbutton} onClick={()=>handleClear()}>Return</button>

            </Link>
        </div>
    )
    }


export default Detail;