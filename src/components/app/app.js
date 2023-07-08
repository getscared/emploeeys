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
            { name: "John S.", salary: 800, increase: false, rise: true, id: 1 },
            { name: "Alex M.", salary: 1000, increase: true, rise: false, id: 2 },
            { name: "Stiven K.", salary: 1200, increase: false, rise: false, id: 3 },
            { name: "Suzan L.", salary: 1500, increase: false, rise: false, id: 4 },
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
         rise: false,
         id: this.maxId++
      }

      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   onToggleIncrease = (id) => {
      this.setState(({ data }) => {
         //Получаем индекс элемента
         const index = data.findIndex(elem => elem.id === id);

         //создание копии index обьекта
         //старый обьект
         const old = data[index];
         //создание копии обьекта
         const newItem = { ...old, increase: !old.increase };
         //создаем новый массив в state (не изм. часть + изм + не изм. остаток)
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

         return {
            data: newArr
         }
      });
   }

   onToggleRise = (id) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, rise: !item.rise }
            }
            return item;
         })
      }))
   }

   render() {
      const emploeeys = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;

      return (
         <div className="app">
            <AppInfo
               emploeeys={emploeeys}
               increased={increased} />
            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>
            <EmploeeysList
               data={this.state.data}
               onDelete={this.deleteItem}
               onToggleIncrease={this.onToggleIncrease}
               onToggleRise={this.onToggleRise} />
            <EmploeeysAddForm onAdd={this.addItem} />
         </div>
      )
   }
}

export default App;