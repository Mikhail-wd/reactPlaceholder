import { useState } from "react";
import Search from "../img/search-svgrepo-com 1.svg";

import { useDispatch, useSelector } from "react-redux";

function Searching() {
    const [searchData, searchDataSet] = useState('')
    const dispatch = useDispatch();

    function searching(data){
        searchDataSet(data);
        window.history.pushState({},{},1)
        if (data == "")
        {
            dispatch({type:"search", payload:null});
            dispatch({type:"activePage", payload:1});
        } else {
            dispatch({type:"search", payload:data});
            dispatch({type:"activePage", payload:1});
        }        
    }

    return (
        <div className="search">
            <input type="text" placeholder="Поиск" onChange={(e)=>searching(e.target.value)}/>
            <img src={Search} alt="search" />
        </div>
    )
}

export default Searching;