import { Flex, Tab, TabList, Tabs, TabPanels, TabPanel, TabIndicator } from "@chakra-ui/react"
import Formulario from "../components/Formulario"
import ListaClientes from "../components/ListaClientes"

const Painel = () => {

    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    return (
        <Flex
            boxShadow='lg'
            w='70%'
            h='70%'
            bg='linear-gradient(282deg, #80D8FF -34.64%, rgba(155, 121, 252, 0.56) 55.43%, rgba(76, 0, 125, 0.00) 118.89%)'
            borderRadius='20px'
            justifyContent='center'>
            <Tabs
                align="center"
                w="95%"
                h='100%'
                position="relative"
                variant="unstyled">
                <TabList
                >
                    <Tab>Cadastrar Cliente
                    </Tab>
                    <Tab>Lista De Clientes</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels
                    h='90%'>
                    <TabPanel
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='100%'
                        h='100%'>
                        <Formulario />
                    </TabPanel>
                    <TabPanel
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='100%'
                        h='100%'>
                        <ListaClientes clientes={clientes}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default Painel