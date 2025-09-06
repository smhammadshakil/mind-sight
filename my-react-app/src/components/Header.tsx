
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TemporaryDrawer from './Drawer';

const dateRanges = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month', 'Last month', 'Date: All Time'];

function Header() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h4" component="h1">
        Dashboard
      </Typography>
      <Box gap={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Select
          defaultValue="Date: All Time"
          variant="outlined"
          size="small"
          sx={{
            minWidth: '130px',
            borderRadius: 8,
            background: 'linear-gradient(135deg, #1d4d75 0%, #117864 100%)',
            color: '#fff',
            '& .MuiSvgIcon-root': {
              color: '#fff',
            },
          }}
        >
          {dateRanges.map((dateRange) => (
            <MenuItem key={dateRange} value={dateRange}>
              {dateRange}
            </MenuItem>
          ))}
        </Select>
        <TemporaryDrawer />
      </Box>
    </Box>
  );
}

export default Header;