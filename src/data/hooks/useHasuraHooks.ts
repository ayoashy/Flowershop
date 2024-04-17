import { useMutation, useQuery } from 'react-query';
import {
  deleteUser,
  getHasuraRest,
  getRelationshipData,
  updateUser,
} from '../api/hasuraRest';

export const useHasuraHook = () => {
  return useQuery(['rest'], () => {
    return getHasuraRest();
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => console.log('this is deleted'),
  });
};
export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => console.log('this is deleted'),
  });
};

// export const useUpdate = (name: string, pk: string) => {
//   return useMutation({
//     mutationFn: () => updateUser(name, pk),
//     onSuccess: () => {
//       console.log('good stuff');
//     },
//   });
// };
