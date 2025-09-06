import Box from '@mui/material/Box'
import CircularProgressWithLabel from './CircularProgress';

function SummaryCards({ data= [] }: { data: number[] }) {
  return (
    <Box>
      {data.map((item: number, index: number) => (
        <Box
          sx={{
            display: 'flex',
            background: 'white',
            // padding: 1,
            borderRadius: 12,
            alignItems: 'center',
            gap: 2,
            fontSize: 18,
            mt: index === 0 ? 0 : 1,
          }}
        >
          <Box ml={3} mt={1}><CircularProgressWithLabel value={item} /></Box>
          <Box>Open Invoices</Box>
        </Box>
      ))}
    </Box>
  );
}

export default SummaryCards;