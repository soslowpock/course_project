import React from "react";


const BookMark = ({id, bookmark, onBookmark}) => {

  
  return (
    <>
      {bookmark === true
        ? <i onClick={() => onBookmark(id)} className="bi bi-bookmark-star-fill"></i>
        : <i onClick={() => onBookmark(id)} className="bi bi-bookmark-star"></i>}
    </>
  )
}

export default BookMark

