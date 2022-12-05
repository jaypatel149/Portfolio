import React,{useState} from 'react'
import './navbar.css';
import {Box,Container, Link,IconButton} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ChatIcon from '@mui/icons-material/Chat';


const Navbar = () => {
    const [navbar, setNavbar] = useState('#')
  return (
    <Container>
        <Box className='nav'>
        <Link href='#' underline="none"  onClick={()=>setNavbar('#about')} className={navbar==="#" ? 'active' : ''}>
            <IconButton className='redius'><HomeIcon/></IconButton>
        </Link> 
        <Link href='#about' underline="none" onClick={()=>setNavbar('#about')} className={navbar==="#about" ? 'active' : ''}>
            <IconButton className='redius'><PersonIcon/></IconButton>
        </Link> 
        <Link href='#experience' underline="none" onClick={()=>setNavbar('#experience')} className={navbar==="#experience" ? 'active' : ''}>
            <IconButton className='redius'><LibraryBooksIcon/></IconButton>
        </Link> 
        <Link href='#portfolio' underline="none" onClick={()=>setNavbar('#portfolio')} className={navbar==="#portfolio" ? 'active' : ''}>
            <IconButton className='redius'><HandshakeIcon/></IconButton>
        </Link> 
        <Link href='#contact' underline="none" onClick={()=>setNavbar('#contact')} className={navbar==="#contact" ? 'active' : ''}>
            <IconButton className='redius'><ChatIcon/></IconButton>
        </Link> 
        </Box>
    </Container>
    
  )
}

export default Navbar;
