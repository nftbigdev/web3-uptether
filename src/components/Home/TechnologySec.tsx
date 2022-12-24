import React from 'react'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'

export default function TechnologySec() {
  return (
    <>
    <Element name="Technology">
      <Box className="technology_main">
          <Box className='tech_bg_box'>
            <Heading as="h6" data-aos="fade" data-aos-delay="200">Technology</Heading>
            <Heading as="h3" data-aos="fade" data-aos-delay="300">All the way upTether</Heading>
            <Text data-aos="fade" data-aos-delay="400">UpTokens are highly volatile speculative assets that allow for price exposure to a paired asset while incorporating our ERC-31337 <i>Pumpanomics</i> for maximum value extraction. Using AMM pricing mechanisms, permanently locked liquidity pools and a fixed supply currency we are able to establish a price floor (or minimum lifetime value) for our token. Our ERC-31337 “ELITE” standard then allows us to sweep the tokens under the price floor and recapture that value in our vault, allowing for the reuse of the USDT within our system multiple times. </Text>
            <Box className='techno_img_prnt' data-aos="zoom-in" data-aos-delay="500">
              <Image src="img/token_img.png" alt='' className='token_img' />
              <Image src="img/token_center_img.png" alt='' className='token_center_img pulse' />
            </Box>
            <Box className='darkbg_btn_bx'>
              <Button as="a" href='#' className='enter_btn glow-on-hover'>ENTER APP</Button>
            </Box>
          </Box>
        </Box>
    </Element>
    </>
  )
}
