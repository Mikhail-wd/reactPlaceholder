import { useState, useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "./tableSkeleton";

const Items = lazy(() => import("./tablesItems"));

function Table() {

    const [data, dataSet] = useState([])
    const [dataSorded, dataSortedSet] = useState()
    const [error, errorSet] = useState(null)
    const [tableSort, tableSortSet] = useState();
    const [elementsPPage, elementsPPageSet] = useState(10)


    const amountPages = Math.ceil(data.length / elementsPPage);
    const dispatch = useDispatch();
    const searchData = useSelector(state => state.search);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(respond => respond.ok ? respond.json() : errorSet('Fetch is failed'))
            .then(json => dataSet(json));

    }, []);

    const activePage = useSelector((state) => state.currenPage);

    function sortingID() {
        if (tableSort !== "ID") {
            tableSortSet('ID')
            dataSet([...data.sort((a, b) => a.id < b.id)])
        } else {
            tableSortSet('ID')
            dataSet([...data.reverse()])
        }
    }
    function sortingTitle() {
        if (tableSort !== "Title") {
            tableSortSet('Title')
            dataSet([...data.sort((a, b) => a.title > b.title)]);
        } else {
            tableSortSet('Title')
            dataSet([...data.reverse()]);
        }
    }
    function sortingbody() {
        if (tableSort !== "Content") {
            tableSortSet('Content')
            dataSet([...data.sort((a, b) => a.body > b.body)]);
        } else {
            tableSortSet('Content')
            dataSet([...data.reverse()]);
        }
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <td onClick={() => sortingID()}>ID
                        <span className={tableSort === 'ID' ? "sort-marker" : "hidden"}><span></span><span></span></span>
                    </td>
                    <td onClick={() => sortingTitle()}>Заголовок
                        <span className={tableSort === 'Title' ? "sort-marker" : "hidden"}><span></span><span></span></span>
                    </td>
                    <td onClick={() => sortingbody()}>Описание
                        <span className={tableSort === 'Content' ? "sort-marker" : "hidden"}><span></span><span></span></span>
                    </td>
                </tr>
            </thead>
            <tbody>
                <Suspense fallback={<Skeleton />}>
                    {searchData === null ?
                        <Items props={data.slice((activePage * elementsPPage) - elementsPPage, (activePage * elementsPPage))}
                        pages ={amountPages}/>
                        : <Items props={(data.filter((index) =>
                            index.title.includes(searchData) || index.id === searchData * 1 || index.body.includes(searchData))).slice((activePage * elementsPPage) - elementsPPage, (activePage * elementsPPage))}
                        pages={Math.ceil((data.filter((index) =>
                            index.title.includes(searchData) || index.id === searchData * 1 || index.body.includes(searchData))).length / elementsPPage)}/>}
                </Suspense>
            </tbody>
        </table>
    )
}

export default Table;