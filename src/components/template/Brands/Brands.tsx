import { useGetProductByBrand } from '@/src/api/brand/brand.queries';
import { Box, Typography } from '@mui/material';
import CardComp from '../../shared/Card/Card';

const BrandsTemplate = ({ brand }: any) => {
  const removeHyphens = (str: string): string => {
    return str?.replace(/-/g, ' ');
  };
  const { data, isLoading, isError } = useGetProductByBrand(brand);

  return (
    <Box component="main">
      {isLoading && <Typography variant="body1">Loading ...</Typography>}
      {isError && <Typography variant="body1">Error</Typography>}
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          my: 5,
          fontSize: '3rem',
          textTransform: 'uppercase',
          textDecoration: 'underline',
          textDecorationOffset: '8px',
        }}
      >
        {removeHyphens(brand)}
      </Typography>
      <Box
        component="section"
        sx={{
          p: 4,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 5,
        }}
      >
        {data && data?.length > 0 ? (
          data?.map((item: any) => <CardComp key={item.id} data={item} />)
        ) : (
          <Typography variant="body1">No products found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default BrandsTemplate;
