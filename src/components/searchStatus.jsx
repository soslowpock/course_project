import React from "react";


const SearchStatus = ({ usersQuantity }) => {

  const getLabelOutput = (quantity) => {
    if (quantity === 1) return 'Один человек тусанёт с тобой сегодня'
    else if (quantity >= 1 && quantity <= 4) return `${quantity} человека тусанут с тобой сегодня`
    else if (quantity >= 5 && quantity <= 20) return `${quantity} человек тусанёт с тобой сегодня`
    else if (quantity === 0) return `Никто не тусанёт с тобой сегодня`
  }


  return (
    <>
      <h2 className="p-2 m-1">
      <span
        className={usersQuantity === 0
          ? `badge bg-danger`
          : `badge bg-primary`}>
          {getLabelOutput(usersQuantity)}
        </span>
      </h2>
         
      
    </>)
}

export default SearchStatus