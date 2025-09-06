
import Grid from '@mui/material/Grid'
import SummaryCards from './components/SummaryCards'
import BenefitsVerifications from './components/BenefitsVerifications'
import ProductOrderAnalysis from './components/ProductOrderAnalysis'
import ProductOrderByUnits from './components/ProductOrderByUnits'
import { useGetDashboardData } from '../../api-hook/useDashboard'

function Dashboard() {
  const { data }= useGetDashboardData();
  console.log("Dashboard data:", data);
  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          lg: 3,
          sm: 5,
          xs: 12,
        }}
      >
        <SummaryCards data={data?.summary}  />
      </Grid>
      <Grid
        size={{
          lg: 5,
          sm: 7,
          xs: 12,
        }}
      >
        <BenefitsVerifications data={data?.benefitsVerificationChart} />
      </Grid>
      <Grid
        size={{
          lg: 4,
          sm: 12,
          xs: 12,
        }}
      >
        <ProductOrderAnalysis data={data?.productOrderAnalysis}  />
      </Grid>
      <Grid
        size={{
          lg: 12,
          sm: 12,
          xs: 12,
        }}
      >
        <ProductOrderByUnits data={data?.productOrderByUnits}  />
      </Grid>
    </Grid>
  )
}

export default Dashboard