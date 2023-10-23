import { Container, Logo, ToggleHamburger, Links, Link } from './styles'
import { useState } from 'react'

import logoRKI from '../../assets/logoRKI.svg'

/**
 * Render burger component.
 * @param {boolean} $opened - Check the status of the burger.
 * @param {void} onChange - Handles burger state.
 * @return {JSX.Element} The rendered animated burger component.
 */

function Hamburger({ $opened, ...rest }) {
  return (
    <ToggleHamburger $opened={$opened}>
      <input id="checkbox" type="checkbox" {...rest} />
      <label htmlFor="checkbox">
        <span />
        <span />
        <span />
      </label>
    </ToggleHamburger>
  )
}

/**
 * Renders a header component  - with a quote and an optional author.
 *
 * @param {string} quote - .
 * @param {string | undefined} author - .
 * @return {JSX.Element} The rendered header component.
 */
export function Header() {
  const [openMenuHambuger, setOpenMenuHambuger] = useState(false)
  function handleOpenMenuHambuger() {
    return setOpenMenuHambuger(!openMenuHambuger)
  }
  return (
    <Container $opened={openMenuHambuger}>
      <Logo>
        <img src={logoRKI} alt="Logo da RK Imóveis" />
      </Logo>
      <Hamburger $opened={openMenuHambuger} onChange={handleOpenMenuHambuger} />
      <Links $opened={openMenuHambuger}>
      </Links>
    </Container>
  )
}
