// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import PhotoList from './PhotoList';
// import PhotoListItem from './PhotoListItem';

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   const imgsrc = `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`;


//   return (
//     <div>
//       <div aria-describedby={id} onClick={handleClick}>
//         <PhotoList/>
//       </div>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'center',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'center',
//           horizontal: 'center',
//         }}
//       >
//         {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
//         <div>Hello</div>
//         <div>Hello</div>
//         <img src={imgsrc} />
        

//       </Popover>
//     </div>
//   );
// }