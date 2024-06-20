import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UploadFileButton({ handleFile }: { handleFile: (a: any) => void }) {
  return (
    <Button
      component="label"
      variant="contained"
      tabIndex={-1}
      onChange={handleFile}
      sx={{ width: "fit-content", bgcolor: "#a29bfe", px: 2, py: 1 }}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}

export default UploadFileButton;
