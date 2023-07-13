import { Component } from 'react';

import './emploeeys-list-item.css';

class EmploeeysListItem extends Component {
   constructor(props) {
      super(props)
      this.state = {
         salary: ''
      }
   }

   onChangeSalaryValue = (e) => {
      const changedSalary = e.target.value.slice(0, -1);
      this.setState({
         salary: changedSalary
      })
      this.props.onChangeSalary(this.props.name, changedSalary);
   }

   render() {

      const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = this.props;

      let classNames = "list-group-item d-flex justify-content-between";
      if (increase) {
         classNames += " increase";
      }

      if (rise) {
         classNames += " like";
      }


      return (
         <li className={classNames}>
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input onChange={this.onChangeSalaryValue} type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
               <button
                  type="button"
                  className="btn-cookie btn-sm"
                  onClick={onToggleIncrease}>
                  <i className="fas fa-cookie"></i>
               </button>

               <button
                  type="button"
                  className="btn-trash btn-sm"
                  onClick={onDelete}>
                  <i className="fas fa-trash"></i>
               </button>
               <i className="fas fa-star"></i>
            </div>
         </li>
      )
   }
}

export default EmploeeysListItem;