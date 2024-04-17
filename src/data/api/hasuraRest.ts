import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      '3dByaG3ZsoIy3snbgRpM5Y8Uhwx9Y4Zhua5l5ROJN8PCY2Z4xrSN9TjcqG4YGu5z',
  },
});

export const getHasuraRest = () => {
  try {
    const response = axios.post(
      'https://modern-polecat-67.hasura.app/api/rest/addusertest'
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  const api = `https://modern-polecat-67.hasura.app/api/rest/deleteuser/${id}`;
  try {
    const response = await axiosClient.delete(api);
    console.log(response.data, 'res.data');
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async ({
  userName,
  pk,
}: {
  userName: string;
  pk: string;
}) => {
  if (!userName || !pk) return;
  const api = 'https://modern-polecat-67.hasura.app/api/rest/updateuser';
  try {
    const response = await axiosClient.patch(api, { pk, userName });
    console.log(response.data.update_users_by_pk.name, 'res.data');
    if (!response.data.update_users_by_pk.name) return;
  } catch (error) {
    console.log(error);
  }
};

export const getRelationshipData = async () => {
  const api = 'https://modern-polecat-67.hasura.app/api/rest/relationship';

  try {
    const response = await axiosClient.get(api);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
