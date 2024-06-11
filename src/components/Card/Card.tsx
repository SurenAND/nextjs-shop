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
            {/* <Image
              className="h-60 w-full rounded-md object-cover flex-grow"
              src={`${data?.image}`}
              alt={data?.name}
            /> */}
            <img
              className="h-60 w-full rounded-md object-cover flex-grow"
              src={data?.image}
              alt={data?.name}
            />
            <Typography variant="body1">${data?.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
      {/* <article className="flex flex-col gap-4 border border-gray-400 rounded-lg shadow-lg p-3 min-h-96">
        <h5 className="text-lg font-semibold text-center">{data?.name}</h5>
        <img
          className="h-60 w-full rounded-md object-cover flex-grow"
          src={data?.image}
          alt={data?.name}
        />
        <span>${data?.price}</span>
      </article> */}
    </Link>
  );
};

export default CardComp;
