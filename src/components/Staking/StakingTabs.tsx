import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import StakeTabOne from './StakeTabOne'
import StakeTabTwo from './StakeTabTwo'


export default function StakingTabs() {
  return (
    <>
        <Box className='staking_tab_prnt'>
            <Tabs variant='unstyled'>
                <TabList className='tab_btn_prnt'>
                    <Box className='tab_border'>
                        <Tab bg={'#00FF73'} _selected={{ color: '#FFFFFF', bg: 'transparent' }} className="staktab01">Staking</Tab>
                        <Tab bg={'#00FF73'} _selected={{ color: '#FFFFFF', bg: 'transparent' }} className="staktab02">Vault Staking</Tab>
                    </Box>
                </TabList>
                <TabPanels className='pasdd_00'>
                    <TabPanel className='padding_0'>
                        <StakeTabOne/>
                    </TabPanel>
                    <TabPanel>
                        <StakeTabTwo />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </>
  )
}
