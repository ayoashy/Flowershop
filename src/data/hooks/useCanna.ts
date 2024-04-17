import { useQuery} from 'react-query'
import { getCanna } from '../api/canna';



export const useCanna = () => {
  return useQuery(['canna'], () => {
    return getCanna();
  });
};