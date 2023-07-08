import EmploeeysListItem from '../emploeeys-list-item/emploeeys-list-item';

import './emploeeys-list.css';

const EmploeeysList = ({ data, onDelete }) => {

   const elements = data.map(elem => {
      const { id, ...itemProps } = elem;
      return (
         <EmploeeysListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)} />
      );
   });

   return (
      <ul className="app-list list-gruop">
         {elements}
      </ul>
   )
}

export default EmploeeysList;