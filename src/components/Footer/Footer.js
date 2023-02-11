import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>DM me at Linkedin</LinkTitle>
          <LinkItem href="www.linkedin.com/in/shubhammasang">Shubham Masang</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shubhammasang36@gmail.com">
            shubhammasang36@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>In search for internship.<br /> Get in touch to colaborate on projects or career opportunities</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/masangshubham">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com/in/shubhammasang">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/shubham_masang/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;