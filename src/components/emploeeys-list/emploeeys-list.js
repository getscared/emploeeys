import EmploeeysListItem from '../emploeeys-list-item/emploeeys-list-item';

import './emploeeys-list.css';

const EmploeeysList = ({ data, onDelete, onToggleIncrease, onToggleRise, onChangeSalary }) => {

   const elements = data.map(elem => {
      const { id, ...itemProps } = elem;
      return (
         <EmploeeysListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
            onChangeSalary={onChangeSalary} />
      );
   });

   return (
      <ul className="app-list list-gruop">
         {elements}
      </ul>
   )
}

export default EmploeeysList;