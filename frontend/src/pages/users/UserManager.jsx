import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserManager = (props) => {
  const apiAddress = "http://localhost:4000";
  const navigate = useNavigate();
  const location = useLocation();
  const isEditMode = location.pathname.startsWith("/users/edit") && location.state?.user;

  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    userName: "",
    website: "",
    addressStreet: "",
    addressSuite: "",
    addressCity: "",
    addressZipCode: "",
    adressLongitude: "",
    adressLatitude: "",
    companyName: "",
    companyCatchPhrase: "",
    companyBs: ""
  });
  
  useEffect(() => {
    if (isEditMode){
      var user = location.state?.user;
      setInputs({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userName: user.username,
        website: user.website,
        addressStreet: user.address.street,
        addressSuite: user.address.suite,
        addressCity: user.address.city,
        addressZipCode: user.address.zipcode,
        adressLongitude: user.address.geo.lat,
        adressLatitude: user.address.geo.lng,
        companyName: user.company.name,
        companyCatchPhrase: user.company.catchPhrase,
        companyBs: user.company.bs
      });
    }
  }, [
    isEditMode,
    location.state?.user
  ])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function onSubmit() {
    const request = {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      username: inputs.userName,
      address: {
        street: inputs.addressStreet,
        suite: inputs.addressSuite,
        city: inputs.addressCity,
        zipcode: inputs.addressZipCode,
        geo: {
          lng: inputs.adressLongitude,
          lat: inputs.adressLatitude,
        }
      },
      website: inputs.website,
      company: {
        name: inputs.companyName,
        catchPhrase: inputs.companyCatchPhrase,
        bs: inputs.companyBs,
      }
    };

    if (isEditMode)
    {
      axios.put(`${apiAddress}/users/${inputs.id}`, request)
        .then(() => navigate('/users'))
        .catch(err => alert(err?.response?.data?.error ?? err));
    }
    else {
      axios.post(`${apiAddress}/users`, request)
        .then(() => navigate('/users'))
        .catch(err => alert(err?.response?.data?.error ?? err));
    }
  }

  function deleteUser() {
    axios.delete(`${apiAddress}/users/${location.state?.user.id}`)
      .then(() => navigate("/"))
      .catch(err => alert(err));;
  }

  return (
    <>
      <div className="container">
        <div className="container-header">
          {(!isEditMode && <h2>Novo usuário</h2>) || 
            (<h2>Editar usuário</h2>)}
          <div className="container-header-actions">
            {isEditMode && <button className="base-button" onClick={deleteUser}>Excluir</button>}
            <button className="base-button" onClick={onSubmit}>Confirmar</button>
          </div>
        </div>
        
        <div className="container-content">
          <h3>Informações Básicas</h3>
          <div className="form-input">
            <label>Nome</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Telefone</label>
            <input name="phone" value={inputs.phone} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Nome de usuário</label>
            <input name="userName" value={inputs.userName} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Website</label>
            <input name="website" value={inputs.website} onChange={handleChange} />
          </div>
          <h3>Endereço</h3>
          <div className="form-input">
            <label>Rua</label>
            <input name="addressStreet" value={inputs.addressStreet} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Logradouro</label>
            <input name="addressSuite" value={inputs.addressSuite} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Cidade</label>
            <input name="addressCity" value={inputs.addressCity} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Código Postal</label>
            <input name="addressZipCode" value={inputs.addressZipCode} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Geolocalização - Longitude</label>
            <input name="adressLongitude" value={inputs.adressLongitude} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Geolocalização - Latitude</label>
            <input name="adressLatitude" value={inputs.adressLatitude} onChange={handleChange} />
          </div>
          <h3>Empresa</h3>
          <div className="form-input">
            <label>Nome</label>
            <input name="companyName" value={inputs.companyName} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>Frase de captura</label>
            <input name="companyCatchPhrase" value={inputs.companyCatchPhrase} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label>BS</label>
            <input name="companyBs" value={inputs.companyBs} onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManager;