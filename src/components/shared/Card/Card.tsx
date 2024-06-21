import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
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
            <Box height={240} flexGrow={1} position="relative">
              <Image
                style={{ borderRadius: 6 }}
                src={data?.image}
                alt={data?.name}
                fill
                objectFit="cover"
              />
            </Box>
            <Typography variant="body1">${data?.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardComp;
