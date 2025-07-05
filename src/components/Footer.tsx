import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { GIT_HUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "../utils/Constants";

function Footer() {
  return (
    <footer>
      <div>
        <a href={GIT_HUB_PROFILE_URL} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;