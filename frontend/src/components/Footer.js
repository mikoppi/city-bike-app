import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'





const Footer = () => {
  

  return (
    <div className='footer'>
      Made by mikoppi
      <GithubLink
        href="https://github.com/mikoppi"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink>
      <a href='https://unsplash.com/@tap5a'>Background pic by Tapio Haaja</a>
    </div>
  )
}

const GithubLink = styled.a`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-left: 0.3rem;
  font-size: 1.3rem;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }`

export default Footer