import React from 'react';
import {SvgLinkIcon} from "./SvgLinkIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {NavLink} from "react-router-dom";

export const NavComponent = ({}) => {
    return (
        <>
            {renderMainLink()}
            <div className={'flex-center small-text nav-bar'}>
                {renderInternalLink('PROJECTS', '/projects')}
                {renderExternalLinks()}
                {renderInternalLink('ABOUT', '/about')}
            </div>
        </>
    );
}
function renderMainLink() {
    return (
        <div className={'large-text name-container'}>
            <NavLink className={'nav-link'} to={"/"}>JOSEPH O'SULLIVAN</NavLink>
        </div>
    );
}
function renderInternalLink(linkName, linkPath) {
    return (
        <NavLink
            className={({ isActive }) => (isActive ? 'selected-nav-link link-spacing nav-link' : 'nav-link link-spacing internal-link')}
            to={linkPath} activeStyle={'selected-nav-link'}>{linkName}
        </NavLink>
    )
}
function renderExternalLinks() {
    return (
        <>
            <SvgLinkIcon url={'https://github.com/JosephOSulliv'}>
                <GitHubIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/joseph-o-sullivan-63a08360/'}>
                <InstagramIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/joseph-o-sullivan-63a08360/'}>
                <LinkedInIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
        </>
    )
}