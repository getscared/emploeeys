import './app-filter.css';

const AppFilter = () => {
   return (
      <div className="btn-group">
         <button
            className="btn btn-light"
            type="button">
            Список всех сотрудников
         </button>
         <button
            className="btn btn-outline-light"
            type="button">
            Претенденты на повышние
         </button>
         <button
            className="btn btn-outline-light"
            type="button">
            3/П больше 1000$
         </button>
      </div>
   )
}

export default AppFilter;