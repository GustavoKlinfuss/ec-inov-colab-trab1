import { useEffect, useState } from "react";
import '../App.css';
import React from "react";

const UsersList = (props) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return(
    <>
      <ul id="user-list-content">
        {data.map((user) => {
          return <div className="user-card" key={user.id}>
              <span>
                <strong># {user.id}</strong>
              </span>
              <span>{user.name}</span>
              <span>{user.phone}</span>
              <span>{user.email}</span>
              <button className="see-more-button" onClick={() => props.clicked(user)}>Ver mais</button>
            </div>;
          })}
      </ul>
    </>
  )
}

export default UsersList;