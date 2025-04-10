import UsersList from '../../components/UsersList';
import { useEffect, useState } from 'react';
import React from 'react';
import UserModal from 'components/UserModal';
import SimpleMessageModal from 'components/SimpleMessageModal';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const apiAddress = "http://localhost:4000";
    const [isModalTrue, setIsModalTrue] = useState(false);
    const [itemClicked, setItemClicked] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
  
    function clicked(item) {
      setIsModalTrue(true);
      setItemClicked(item);
    }
  
    function closeUserModal(){
      setIsModalTrue(false);
      setItemClicked(null);
    }


    function viewMore(id){
      navigate('/users/'+id);
    }

    useEffect(
      () => {
        fetch(`${apiAddress}/users`)
          .then(res => res.json())
          .then(res => {
            setData(res);
            setIsLoading(false);
          })
          .catch(e => {
            setErr({ 
              title: "Ocorreu um erro!", 
              message: "Não foi possível obter os dados do servidor. Verifique sua conexão com a internet e tente novamente"
            })
            setIsLoading(false);
          });
      }, 
      []);

    return (
        <>
          {!isLoading && 
            <>
              <UsersList clicked={clicked} data={data}></UsersList>
              {isModalTrue && itemClicked && (
                <UserModal user={itemClicked} closeModal={closeUserModal} viewMore={viewMore}></UserModal>
              )}
            </>}
          {!isLoading && err && 
            <SimpleMessageModal title={err.title} message={err.message}></SimpleMessageModal>}
        </>
      )
}

export default Users;