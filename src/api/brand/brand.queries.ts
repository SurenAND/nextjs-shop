import { useQuery } from 'react-query';
import { BrandsDataType } from './brand.type';
import { getBrandsApi } from './brand.api';
import { ProductDataType } from '../product/product.type';
import { getProductByBrandApi } from '../product/product.api';
export const useGetBrands = () => {
  return useQuery<BrandsDataType[]>({
    queryKey: ['id', 'brand_name', 'image', 'delivery_time'],
    queryFn: () => getBrandsApi(),
  });
};

export const useGetProductByBrand = (brand: string) => {
  return useQuery<ProductDataType[]>({
    queryKey: ['products', 'brand_name', brand],
    queryFn: () => getProductByBrandApi(brand),
  });
};
