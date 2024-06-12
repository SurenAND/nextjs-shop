import { Card, CardContent, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CardComp = ({ data }: any) => {
  return (
    <Link href={`${data?.category}/${data?.id}`}>
      <Card elevation={20}>
        <CardContent>
          <Stack gap={2} p={1} minHeight="384px">
            <Typography variant="h5" fontWeight="600" fontSize="1.125rem">
              {data?.name}
            </Typography>
            <img
              className="h-60 w-full rounded-md object-cover flex-grow"
              src={data?.image}
              alt={data?.name}
            />
            <Typography variant="body1">${data?.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardComp;
