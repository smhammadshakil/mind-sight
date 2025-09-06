import Box from "@mui/material/Box";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  chart: {
    type: "polarArea",
    toolbar: {
      show: false,
    },
  },
  colors: ["#117964", "#c7c7c7", "#a29fe4", "#556db7"],
  stroke: {
    colors: ["#fff"],
  },
  fill: {
    opacity: 0.9,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
}

function ProductOrderAnalysis({ data = [] }: { data: number[] }) {
  if (data.length === 0) {
    return <Box>No data available</Box>;
  }
  return (
    <Box sx={{ p: 2, background: "white", borderRadius: 4 }}>
      <Box sx={{ mb: 2, fontWeight: "bold" }}>Product Order Analysis</Box>
      <ReactApexChart
        options={options}
        series={data}
        type="polarArea"
        height={330}
      />
    </Box>
  );
}

export default ProductOrderAnalysis;