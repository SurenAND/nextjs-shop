import { useAddProduct } from "@/src/hooks/dashboardHooks";
import { generate_token } from "@/src/lib/helper";
import { FormDataType } from "@/src/types/types";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function AddProduct() {
  const { register, handleSubmit, reset } = useForm();
  const [img, setImg] = useState<string>("");

  const { mutate } = useAddProduct();

  function handleForm(data: FieldValues) {
    const formData = data as FormDataType;
    formData.price = Number(formData.price);
    mutate({ ...formData, id: generate_token(3), image: img });
    reset();
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event?.target?.result;
        setImg(fileData as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <Stack spacing={5} alignItems="center">
      <Typography variant="h4" fontWeight={900} textTransform="uppercase">
        Add Product
      </Typography>
      <Card sx={{ width: 800 }}>
        <CardContent>
          <form onSubmit={handleSubmit(handleForm)}>
            <Stack spacing={2}>
              <FormControl>
                <label style={{ marginBottom: 10 }}>Product Name :</label>
                <TextField {...register("name")} />
              </FormControl>
              <FormControl>
                <label style={{ marginBottom: 10 }}>Product Price :</label>
                <TextField {...register("price")} />
              </FormControl>
              <FormControl>
                <InputLabel id="select-label">Product Category :</InputLabel>
                <Select
                  {...register("category")}
                  labelId="select-label"
                  id="select"
                  label="Product Category"
                >
                  <MenuItem value="furniture">Furniture</MenuItem>
                  <MenuItem value="hand-bag">Hand-bag</MenuItem>
                  <MenuItem value="books">Books</MenuItem>
                  <MenuItem value="tech">Tech</MenuItem>
                  <MenuItem value="sneakers">Sneakers</MenuItem>
                  <MenuItem value="travels">Travels</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <label style={{ marginBottom: 10 }}>
                  Product Description :
                </label>
                <TextField {...register("description")} />
              </FormControl>
              <FormControl>
                <label style={{ marginBottom: 10 }}>Product Image :</label>
                <TextField type="file" onChange={handleFile} />
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#5e35b0",
                  py: 2,
                  "&:hover": { bgcolor: "#4527a0" },
                }}
              >
                Add New Product
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default AddProduct;
