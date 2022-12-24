import React from 'react'
import { Container, Heading, Image } from '@chakra-ui/react'
import LayoutTwo from './LayoutTwo'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


export default function Faq() {
  return (
    <>
        <LayoutTwo>
            <Box className='faq_main'>
                <Container maxW="container.xl">
                    <Box className='faq_prnt'>
                        <Heading as="h3">Frequently Asked Question</Heading>
                    </Box>
                    <Box className='faq_accordians_prnt'>
                        <Accordion defaultIndex={[0]} allowMultiple className='main_accordian'>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>01</Heading>
                                        </Box>
                                        {/* <Image src="img/road_map_img01.png" alt='' className='road_map_img_faq'/> */}
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>02</Heading>
                                        </Box>
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>03</Heading>
                                        </Box>
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>04</Heading>
                                        </Box>
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>05</Heading>
                                        </Box>
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam donec vitae risus ipsum viverra id.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='boedrd_faq'>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Box className='num_green_color'>
                                            <Heading>06</Heading>
                                        </Box>
                                        Some about platfrorm and how it works 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum sapien felis, laoreet facilisis sed. Ultricies gravida a, consequat lacus, dictum vitae sit. Sit ut mattis felis ac, praesent nisl justo, volutpat. Ut aliquam
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Container>
            </Box>
        </LayoutTwo>
    </>
  )
}
