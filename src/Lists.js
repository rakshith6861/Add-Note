import React from "react";

function Lists({ updata, setUpdata }) {
  const deleteList = (key) => {
    const newList = updata.filter((lists) => {
      return lists.key !== key; 
           
    });

    setUpdata(newList);
    localStorage.setItem('myData', JSON.stringify(newList))
  };


  return ( 
    <div className="list">
        
      {updata.map((lists) => {
        return (
          <div className="item-list">
            <div className="item-list">{lists.item}</div>
            <button
              onClick={() => deleteList(lists.key)}
              className="delete-btn"
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
