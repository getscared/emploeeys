import './app-info.css';

const AppInfo = ({ emploeeys, increased }) => {
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании name</h1>
         <h2>Общее число сотрудников: {emploeeys}</h2>
         <h2>Премию получат: {increased}</h2>
      </div>
   )
}

export default AppInfo;