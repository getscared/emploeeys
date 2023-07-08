import { Component } from 'react';

import './emploeeys-add-form.css';

class EmploeeysAddForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         salary: ''
      }
   }

   onValueChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   //Метод на кнопке отправки формы. Добавляет нового сотрудника
   onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
         name: '',
         salary: ''
      });
   }

   render() {
      const { name, salary } = this.state;

      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex"
               //Вызов метода onSubmit при отправке формы
               onSubmit={this.onSubmit}>
               <input type="text"
                  className="form-control new-post-label"
                  placeholder="Имя сотрудника"
                  name="name"
                  value={name}
                  onChange={this.onValueChange} />
               <input type="number"
                  className="form-control new-post-label"
                  placeholder="3/П в $?"
                  name="salary"
                  value={salary}
                  onChange={this.onValueChange} />
               <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
            </form>
         </div>
      );
   }
}

export default EmploeeysAddForm;