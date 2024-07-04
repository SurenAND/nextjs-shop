import {
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FieldValues, useForm } from "react-hook-form";
import UploadFileButton from "@/src/components/template/Dashboard/_ProductManager/_EditProduct/_EditForm/_UploadButton/UploadButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useGetProductById,
  useUpdateProduct,
} from "@/src/api/product/product.queries";
import { ProductDataType } from "@/src/api/product/product.type";

export default function EditForm({
  setShowForm,
  productId,
  setProductId,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  productId: string;
  setProductId: Dispatch<SetStateAction<string>>;
}) {
  const { register, handleSubmit, reset } = useForm();
  const [img, setImg] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const { mutate } = useUpdateProduct();
  const { data } = useGetProductById(productId);

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        price: data.price,
        description: data.description,
      });
      setCategory(data.category);
      setImg(data.image);
    }
  }, [data, reset]);

  function handleForm(data: FieldValues) {
    const formData = data as ProductDataType;
    formData.price = Number(formData.price);
    mutate({
      ...formData,
      id: productId,
      image: img,
      category: category,
    });
    reset();
    setShowForm(false);
    setProductId("");
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
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton
          sx={{
            bgcolor: "#5e35b0",
            borderRadius: "8px",
            transition: "all .2s ease-in-out",
            color: "#ece6f5",
            "&:hover": { bgcolor: "#4527a1", color: "#fff" },
          }}
          onClick={() => {
            setShowForm(false);
            setProductId("");
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" fontWeight={900} textTransform="uppercase">
          Edit Form
        </Typography>
      </Stack>
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
                <InputLabel id="select-label">Product Category </InputLabel>
                <Select
                  {...register("category")}
                  labelId="select-label"
                  id="select"
                  label="Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as string)}
                >
                  <MenuItem value="furniture">Furniture</MenuItem>
                  <MenuItem value="hand-bag">Hand-bag</MenuItem>
                  <MenuItem value="books">Books</MenuItem>
                  <MenuItem value="tech">Tech</MenuItem>
                  <MenuItem value="sneakers">Sneakers</MenuItem>
                  <MenuItem value="travel">Travel</MenuItem>
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
                <UploadFileButton handleFile={handleFile} />
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
                Edit Product
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
}
