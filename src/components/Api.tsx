import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from 'inspector';
import {
  useDeleteUser,
  useUpdateUser,
} from '../data/hooks/useHasuraHooks';

const Api = () => {
  const [updateValues, setUpdateValues] = useState({ name: '', pk: '' });
  const [done, setDone] = useState(false);
  const { data, isLoading, mutate } = useDeleteUser();



  const { mutate: deleteMutate, data: deleteData } = useUpdateUser();

  const doneSetTimeOut = () => {
    setTimeout(() => {
      setDone(false);
    }, 5000);
  };

  const axiosClient = axios.create({
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret':
        '3dByaG3ZsoIy3snbgRpM5Y8Uhwx9Y4Zhua5l5ROJN8PCY2Z4xrSN9TjcqG4YGu5z',
    },
  });

  const updateUser = async (name: string, pk: string) => {
    const api = 'https://modern-polecat-67.hasura.app/api/rest/updateuser';
    try {
      const response = await axiosClient.patch(api, { pk, name });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (e: string) => {
    setUpdateValues({
      ...updateValues,
      name: e,
    });
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      deleteMutate({
        userName: updateValues.name,
        pk: updateValues.pk,
      });
      // console.log(deleteData, 'delete data');
      setDone(true);
      doneSetTimeOut();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  if (isLoading) {
    return <p>loading state active</p>;
  }
  return (
    <div>
      {/* {done ? (
        <h3>This is the success state</h3>
      ) : (
        <h3>This is the undone state</h3>
      )} */}

      {/* <div>
        <form onSubmit={handleUpdateSubmit}>
          <input
            type='text'
            value={updateValues.name}
            onChange={(e) => handleChangeName(e.target.value)}
            className='bg-gray-500'
            placeholder='for name'
          />
          <input
            type='text'
            value={updateValues.pk}
            onChange={(e) =>
              setUpdateValues({ ...updateValues, pk: e.target.value })
            }
            className='block bg-gray-500'
            placeholder='for pk'
          />
          <button type='submit'>update value</button>
        </form>
      </div> */}
    </div>
  );
};

export default Api;
