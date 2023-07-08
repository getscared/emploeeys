import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeeysList from '../emploeeys-list/emploeeys-list';
import EmploeeysAddForm from '../emploeeys-add-form/emploeeys-add-form';

import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: "John S.", salary: 800, increase: false, promotion: false, id: 1 },
            { name: "Alex M.", salary: 1000, increase: true, promotion: false, id: 2 },
            { name: "Stiven K.", salary: 1200, increase: false, promotion: false, id: 3 },
            { name: "Suzan L.", salary: 1500, increase: false, promotion: false, id: 4 },
         ]
      }
      this.maxId = 5;
   }

   // Удаление по кнопке "Корзины"
   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(elem => elem.id !== id)
         }
      });
   }

   //Метод добавления нового сотрудника с ЗП
   //Метод принимает имя + ЗП которые прийдут из emploeeyrs-add-form и формирует новый массив в setState
   addItem = (name, salary) => {
      const newItem = {
         name: name,
         salary: salary,
         increase: false,
         id: this.maxId++
      }

      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   render() {
      return (
         <div className="app">
            <AppInfo />
            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>
            <EmploeeysList
               data={this.state.data}
               onDelete={this.deleteItem} />
            <EmploeeysAddForm onAdd={this.addItem} />
         </div>
      )
   }
}

export default App;