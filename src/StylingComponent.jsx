import React from 'react'
import styled from 'styled-components'
import MyStyle from './MyStyle.module.css'

const StylingComponent = () => {
    const H2 = styled.h2 `
        color:blue
    `
    const H1 = styled.h1 `
        color:green;
        background-color:yellow;
        display:flex;
        align-item:center;
        justify-content:center;
        margin-left:100px
    `
  return (
    <div>
        <H1>styled-component</H1>
      <H2>Let's Make a stylish web-page using styled-component</H2>

      <p className={MyStyle.heading}>here we are going to some module style css adding check it out!! ---//\\ File name . className</p>
    </div>
  )
}

export default StylingComponent
