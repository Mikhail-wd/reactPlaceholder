import { useSelector, useDispatch } from "react-redux";


function Pagination() {
    const activePages = useSelector(state => state.currenPage)
    const pages = useSelector(state => state.pages)
    const dispatch = useDispatch()

    function activePage(value, e) {
        window.history.pushState({},{},value)
        e.preventDefault();
        dispatch({ type: 'activePage', payload: value })
    }

    function amountOfPages() {
        let amount = []
        for (let x = 1; x <= pages; x++) {
            amount.push(x)
        }
        return amount
    }
    return (
        <>
            {
                amountOfPages().map(index =>
                    <li key={index}>
                        <a onClick={(e) => activePage(index, e)}
                            id={index} href={ index }
                            className={activePages === index ? 'selected' : ""}>
                            {index}
                        </a>
                    </li>)
            }
        </>

    )
}

export default Pagination;