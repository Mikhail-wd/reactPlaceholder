import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import Table from "./components/table";
import Pagination from './components/pagination';
import Searching from './components/search';

function App() {

  const currentPage = useSelector((state) => state.currenPage)
  const maxPages = useSelector((state) => state.pages)
  const dispatch = useDispatch()


  function nextPage() {

    if (currentPage !== 0 && currentPage < maxPages) {
      window.history.pushState({}, {}, currentPage + 1)
      dispatch({ type: 'nextPage' })
    }
  }

  function prevPage() {

    if (currentPage > 1 && currentPage <= maxPages) {
      window.history.pushState({}, {}, currentPage - 1)
      dispatch({ type: 'prevPage' })
    }
  }

  return (
    <div className="App">
      <Searching />
      <div >
        <Table />
      </div>
      <div className="controller">
        <div className="text" onClick={() => prevPage()}>Назад</div>
        <div className="number">
          <ul>
            <Pagination />
          </ul>
        </div>
        <div className="text" onClick={() => nextPage()}>Далее</div>
      </div>
    </div>
  );
}

export default App;
