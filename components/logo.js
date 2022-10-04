import Link from 'next/link'
import { FinnTheHuman } from 'phosphor-react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  padding: 10px 0px 10px 10px;
  color: #A82428 !important;
  gap: 0;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
        <FinnTheHuman size={32} />       
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo