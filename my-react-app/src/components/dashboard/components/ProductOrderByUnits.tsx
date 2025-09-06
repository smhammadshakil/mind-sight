import Box from "@mui/material/Box";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type Series = { name: string; data: number[] };
const options: ApexOptions = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
    },
  },
  colors: ["#117964", "#c7c7c7", "#a29fe4", "#556db7"],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "12px",
      colors: ["#fff"],
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: [
      "Jan 2025",
      "Feb 2025",
      "Mar 2025",
      "Apr 2025",
      "May 2025",
      "Jun 2025",
      "Jul 2025",
      "Aug 2025",
      "Sep 2025",
      "Oct 2025",
      "Nov 2025",
      "Dec 2025",
    ],
  },
  yaxis: {
    labels: {
      formatter: (val: number) => val.toFixed(0),
    },
    min: 0,
    max: 1000,
    tickAmount: 5,
  },
  legend: {
    position: "bottom",
    markers: {
      shape: "circle",
    },
  },
} 

function ProductOrderByUnits({ data = [] }: { data: Series[] }) {
  if (data.length === 0) {
    return <Box>No data available</Box>;
  }
  return (
    <Box sx={{ p: 2, background: "white", borderRadius: 4 }}>
      <Box sx={{ mb: 2, fontWeight: "bold" }}>Product Order By Units</Box>
      <ReactApexChart
        options={options}
        series={data}
        type="bar"
        height={400}
      />
    </Box>
  );
}

export default ProductOrderByUnits;