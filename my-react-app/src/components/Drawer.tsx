import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";

import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from "@mui/icons-material/Search";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FilterListIcon />
          <Typography variant="h6" sx={{ m: 2 }}>
            Filter By
          </Typography>
        </Box>
        <IconButton onClick={toggleDrawer} sx={{ marginLeft: 'auto' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {['Active Filters'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box px={1}>
        <TextField
          fullWidth
          variant="standard"
          placeholder='Search by Clinic'
          slotProps={{
            input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }
          }}
        />
      </Box>
      <List>
        {['Clinics', 'Satus'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer} variant="outlined" sx={{ minWidth: '150px', borderRadius: 8 }}>
        <FilterListIcon />Filter By
      </Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
