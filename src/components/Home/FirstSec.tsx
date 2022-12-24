import React from 'react'
import { Box, SimpleGrid, GridItem, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Element } from 'react-scroll'
// import { motion, useMotionValue, useTransform } from "framer-motion";

export default function FirstSec() {
    // const x = useMotionValue(200);
    // const y = useMotionValue(200);

    // const rotateX = useTransform(y, [0, 400], [5, -5]);
    // const rotateY = useTransform(x, [0, 400], [-5, 5]);

    // function handleMouse(event:any) {
    //     const rect = event.currentTarget.getBoundingClientRect();

    //     x.set(event.clientX - rect.left);
    //     y.set(event.clientY - rect.top);
    // }
  return (
    <>
        <Element name="Introdusction">
            <Box className='bagrd_img'>
                <Box className='upcro_launch_main'>
                    <Box className='width_full'>
                        <SimpleGrid columns={12} columnGap={3} rowGap={2} >
                            <GridItem colSpan={[12, 12, 12, 6]}>
                                <Box className='launch_text_box'>
                                    <Box className='launch_text_box_inn' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                        <Heading as="h3">upTether</Heading>
                                        <Text>
                                            The first ERC-31337 token paired against a stablecoin, USDT.
                                        </Text>
                                        <Text>
                                            upTether is a 2<sup>nd</sup> layer speculative asset that combines the stability of fiat backed Tether, with the utility of the “ELITE” protocol to create an asset sturdy enough to prosper even during the most bearish of markets.
                                        </Text>
                                        <Box className='launch_btns'>
                                            <Button as="a" href='#'className='glow-on-hover'>BUY NOW</Button>
                                            <Button as="a" href='#' className='entr_a glow-on-hover'>ENTER APP</Button>
                                            <Button as="a" href='#' className='glow-on-hover'>CHART</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 12, 6]}>
                                <Box className='launch_text_box' data-aos="zoom-in" data-aos-delay="500">
                                {/* <motion.div onMouseMove={handleMouse}
                                        style={{
                                            display: "flex",
                                            placeItems: "center",
                                            placeContent: "center",
                                            width: "100%",
                                            perspective: 400
                                        }}>
                                        <motion.div 
                                        style={{
                                            width: "100%",
                                            rotateX: rotateX,
                                            rotateY: rotateY
                                        }}> */}
                                            <Image src='img/first_cls_img.png' className='upcro_first_img' />

                                        {/* </motion.div>
                                    </motion.div> */}
                                    {/* <Image src='img/uptether_first_img.png' className='upcro_first_img' /> */}
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        </Element>
        
    </>
  )
}
