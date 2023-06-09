import React from 'react'
import {BottomNavigation, BottomNavigationAction, Box} from '@mui/material'
import { AiFillHome} from 'react-icons/ai';
import { BsSearch} from 'react-icons/bs';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import { BsDownload} from 'react-icons/bs';
import { RxHamburgerMenu} from 'react-icons/rx';

// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const NavBarBottom = () => {
  return (
    <Box sx={{ width: 500, background: 'white', margin: 'auto auto'  }}>
      <BottomNavigation
      sx={{ width: 500, background: 'arch' }}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction  label="Home" icon={<AiFillHome />} />
        <BottomNavigationAction label="Search" icon={<BsSearch />} />
        <BottomNavigationAction label="Coming soon" icon={<BsFillPlayCircleFill />} />
        <BottomNavigationAction label="Downloads" icon={<BsDownload />} />
        <BottomNavigationAction label="More" icon={<RxHamburgerMenu />} />
      </BottomNavigation>
    </Box>
  )
}

export default NavBarBottom