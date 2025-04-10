import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = (props) => {
    const apiAddress = "http://localhost:4000";
    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        username: '',
        website: '',
        address: {
            geo: {}
        },
        company: {}
    });

    function edit(){
        navigate('/users/edit/' + user.id, { state: { user } });
    }

    useEffect(() => {
        axios.get(`${apiAddress}/users/${params.id}`)
            .then(res => setUser(res.data))
            .catch(err => alert("Erro ao buscar usuário"));
    }, [
        params.id
    ])

    return(
        <>
            <div className="container">
                <div className="container-header">
                    <h2>Detalhes do Usuário</h2>
                    <button className="base-button" onClick={edit}>Editar</button>
                </div>
                <div className="container-content">
                    <h3>Informações Básicas</h3>
                    <p><strong>Nome:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Telefone:</strong> {user.phone}</p>
                    <p><strong>Nome de usuário:</strong> {user.username}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <h3>Endereço</h3>
                    <p><strong>Rua:</strong> {user.address.street} - {user.address.suite}, {user.address.city}</p>
                    <p><strong>Código Postal:</strong> {user.address.zipcode}</p>
                    <p><strong>Geolocalização:</strong> LG: {user.address.geo.lat} LT: {user.address.geo.lng}</p>
                    <h3>Empresa</h3>
                    <p><strong>Nome:</strong> {user.company.name}</p>
                    <p><strong>Frase de captura:</strong> {user.company.catchPhrase}</p>
                    <p><strong>BS:</strong> {user.company.bs}</p>
                </div>
            </div>
        </>
    )
}

export default UserDetails;