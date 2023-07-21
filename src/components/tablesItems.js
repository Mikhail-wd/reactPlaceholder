import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Items({props, pages }) {
    const dispatch = useDispatch()
    dispatch({type:'amountOfPages',payload:pages})
    return (
        props.map(index =>
            <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.title}</td>
                <td>{index.body}</td>
            </tr>)
    )
}

export default Items;