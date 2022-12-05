import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jaypatel149-b38a50208/" ><LinkedInIcon/></a>
        <a href="https://github.com/jaypatel149" ><GitHubIcon/></a>
    </div>
  )
}
