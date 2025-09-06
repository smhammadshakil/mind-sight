import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function CircularProgressWithLabel({ value }: { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={80}
        thickness={2}
        sx={{ color: "#117964" }}
      />
      <Box
        sx={{
          top: 2,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="div" color="text.primary">
          {`${Math.round(value)}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel
