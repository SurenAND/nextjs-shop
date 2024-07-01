import { useQuery } from 'react-query';
import { getDealsApi } from './deals.api';
import { DealsDataType } from './deals.type';

export const useGetDealsIds = () => {
  return useQuery<DealsDataType[]>({
    queryKey: 'productIds',
    queryFn: () => getDealsApi(),
  });
};
