import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';
import HeadShot from '../assets/images/headshot_avatar.jpg';
import { GIT_HUB_PROFILE_URL, LINKEDIN_PROFILE_URL, FULL_NAME, JOB_TITLE, MAIN_BUTTON_TEXT, RESUME_URL } from "../utils/Constants";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={HeadShot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={GIT_HUB_PROFILE_URL} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{FULL_NAME}</h1>
          <p>{JOB_TITLE}</p>

          <div className="mobile_social_icons">
            <a href={GIT_HUB_PROFILE_URL} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <Button id="main-button" sx={{ mt: '15px', background: 'rgb(80, 0, 202)' }} variant="contained" endIcon={<DescriptionIcon />} href={RESUME_URL} target='_blank'>
              {MAIN_BUTTON_TEXT}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Main;