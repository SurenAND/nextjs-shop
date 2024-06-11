import { generate_token } from "@/src/lib/helper";
import { postProductData } from "@/src/services/postData";
import { FormData } from "@/src/types/types";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function AddForm() {
  const { register, handleSubmit } = useForm();
  const [img, setImg] = useState<string>("");

  function handleForm(data: FieldValues) {
    const formData = data as FormData;
    formData.price = Number(formData.price);
    postProductData({ ...formData, id: generate_token(3), image: img });
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
    <Card sx={{ width: 800 }}>
      <CardHeader title="Add Card" />
      <CardContent>
        <form onSubmit={handleSubmit(handleForm)}>
          <Stack spacing={2}>
            <FormControl>
              <label>Name</label>
              <TextField {...register("name")} />
            </FormControl>
            <FormControl>
              <label>Price</label>
              <TextField {...register("price")} />
            </FormControl>
            <FormControl>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                {...register("category")}
                labelId="select-label"
                id="select"
                label="Category"
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
              <label>Description</label>
              <TextField {...register("description")} />
            </FormControl>
            <FormControl>
              <label>image</label>
              <TextField type="file" onChange={handleFile} />
            </FormControl>

            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddForm;
