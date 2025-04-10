import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const UserModal = (props) => {
  const apiAddress = "http://localhost:4000";

  const [inputs, setInputs] = useState({
    name: props.user.name,
    email: props.user.email,
    phone: props.user.phone,
    userName: props.user.username,
  });

  const [isEditMode, setIsEditMode] = useState(false);

  function editUser(){
    const request = {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      username: inputs.userName,
      address: {
        street: props.user.address.street,
        suite: props.user.address.suite,
        city: props.user.address.city,
        zipcode: props.user.address.zipcode,
        geo: {
          lng: props.user.address.geo.lng,
          lat: props.user.address.geo.lat,
        }
      },
      website: props.user.website,
      company: {
        name: props.user.company.name,
        catchPhrase: props.user.company.catchPhrase,
        bs: props.user.company.bs,
      }
    };

    axios.put(`${apiAddress}/users/${props.user.id}`, request)
      .then(() => window.location.reload())
      .catch(err => alert(err?.response?.data?.error ?? err));
  }

  function viewMore(){
    props.viewMore(props.user.id);
  }
  function switchEditMode(isEditMode){
    setIsEditMode(isEditMode);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-header">
          <h2>Usuário #{props.user.id}</h2>
          <button className="modal-close-button" onClick={props.closeModal}>X</button>
        </div>
      {!isEditMode &&
        <>
          <p><strong>Nome:</strong> {props.user.name}</p>
          <p><strong>Email:</strong> {props.user.email}</p>
          <p><strong>Telefone:</strong> {props.user.phone}</p>
          <p><strong>Nome de usuário:</strong> {props.user.username}</p>
        </>
      }

      {isEditMode &&
        <>
          <div id="user-form">
            <div className="form-input">
              <label>Nome: </label>
              <input name="name" value={inputs.name} onChange={handleChange} />
            </div>
            <div className="form-input">
              <label>Email: </label>
              <input name="email" value={inputs.email} onChange={handleChange} />
            </div>
            <div className="form-input">
              <label>Telefone: </label>
              <input name="phone" value={inputs.phone} onChange={handleChange} />
            </div>
            <div className="form-input">
              <label>Nome de usuário: </label>
              <input name="userName" value={inputs.userName} onChange={handleChange} />
            </div>
          </div>
        </>
      }

      {!isEditMode && 
        <div className="buttons-section">
          <button className="base-button" onClick={() => switchEditMode(true)}>Editar Simples</button>
          <button className="base-button" onClick={() => viewMore()}>Ver mais</button>
        </div>
      }
      {isEditMode &&  
        <div className="buttons-section">
          <button className="base-button" onClick={() => switchEditMode(false)}>Cancelar</button>
          <button className="base-button" onClick={editUser}>Confirmar</button>
        </div>
      }

    </div>
  </div>);
}

export default UserModal;