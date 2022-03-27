import Image from 'next/image'
import { NextPage } from 'next'
import { FooterBlock, FooterLogo } from './Footer.style'

const Footer: NextPage = () => (
  <FooterBlock>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <FooterLogo>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </FooterLogo>
    </a>
  </FooterBlock>
)

export default Footer
