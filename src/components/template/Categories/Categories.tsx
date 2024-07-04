import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import CardComp from "@/src/components/shared/Card/Card";
import {
  useGetProductByCategory,
  useGetProductByPrice,
} from "@/src/api/product/product.queries";
import { removeHyphens } from "@/src/lib/helper";
import { useState } from "react";

const CategoriesTemplate = ({ category }: any) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const { data: filterData } = useGetProductByPrice(category, min, max);

  const { data, isLoading, isError } = useGetProductByCategory(category);
  function filterByPrice(e: any) {
    const value = e.target.value;
    if (value) {
      const minMax = value?.split("-");
      setMin(minMax[0]);
      setMax(minMax[1]);
    }
  }

  return (
    <Grid container>
      <Grid
        item
        lg={2}
        borderRight={2}
        borderColor="#e5e5e5"
        textAlign="center"
        my={5}
      >
        <Typography variant="h4" mb={3} textTransform="uppercase">
          Filter
        </Typography>
        <Stack alignItems="center">
          <FormLabel>By Price:</FormLabel>
          <RadioGroup sx={{ p: 2 }}>
            <FormControlLabel
              value="0-100"
              control={<Radio />}
              label="0-$100"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="101-200"
              control={<Radio />}
              label="$101-$200"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="201-300"
              control={<Radio />}
              label="$201-$300"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="301-400"
              control={<Radio />}
              label="$301-$400"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="401-500"
              control={<Radio />}
              label="$401-$500"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="501-600"
              control={<Radio />}
              label="$501-$600"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="601-700"
              control={<Radio />}
              label="$601-$700"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="701-800"
              control={<Radio />}
              label="$701-$800"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="801-900"
              control={<Radio />}
              label="$801-$900"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="901-1000"
              control={<Radio />}
              label="$901-$1000"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="1001-1000000"
              control={<Radio />}
              label="more than $1000"
              onClick={(e) => filterByPrice(e)}
            />
          </RadioGroup>
        </Stack>
      </Grid>
      <Grid item lg={10}>
        {isLoading && <Typography variant="body1">Loading ...</Typography>}
        {isError && <Typography variant="body1">Error</Typography>}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            my: 5,
            fontSize: "3rem",
            textTransform: "uppercase",
            textDecoration: "underline",
            textDecorationOffset: "8px",
          }}
        >
          {removeHyphens(category)}
        </Typography>
        <Box
          component="section"
          sx={{
            p: 4,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 5,
          }}
        >
          {filterData ? (
            filterData.length !== 0 ? (
              filterData?.map((item: any) => (
                <CardComp key={item.id} data={item} />
              ))
            ) : (
              <Typography variant="body1">No products found</Typography>
            )
          ) : data && data?.length > 0 ? (
            data?.map((item: any) => <CardComp key={item.id} data={item} />)
          ) : (
            <Typography variant="body1">No products found</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CategoriesTemplate;
