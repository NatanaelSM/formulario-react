import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    IconButton
} from '@chakra-ui/react'
import { DeleteIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const ListaClientes = ({ clientes, setClientes }) => {

    const deletarCliente = (clienteId) => {
        const newClientes = clientes.filter(cliente => cliente.id !== clienteId);
        setClientes(newClientes);
        localStorage.setItem('clientes', JSON.stringify(newClientes));
    } 

    return (
        <TableContainer
            bg='linear-gradient(133deg, #80D8FF -16.16%, rgba(155, 121, 252, 0.61) 48.96%, rgba(76, 0, 125, 0.63) 112.26%)'
            borderRadius='10px'
            h='100%'
            w='100%'
            overflowY='auto'
            overflowX='auto'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th color='yellow'>ID</Th>
                        <Th color='white'>Nome Completo</Th>
                        <Th color='white'>CPF</Th>
                        <Th color='white'>Sexo</Th>
                        <Th color='white'>Data De Nascimento</Th>
                        <Th color='white'>Email</Th>
                        <Th color='white'>Celular</Th>
                        <Th color='white'></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {clientes.map((cliente) =>
                        <Tr key={cliente.id}>
                            <Td>{cliente.id}</Td>
                            <Td>{cliente.nomeCompleto}</Td>
                            <Td>{cliente.cpf}</Td>
                            <Td>{cliente.sexo}</Td>
                            <Td>{cliente.dataAniversario}</Td>
                            <Td>{cliente.email}</Td>
                            <Td>{cliente.celular}</Td>
                            <Td>
                                <IconButton
                                    colorScheme='red'
                                    aria-label='Call Segun'
                                    size='lg'
                                    icon={<DeleteIcon />}
                                    onClick={() => deletarCliente(cliente.id)}
                                />
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

ListaClientes.propTypes = {
    clientes: PropTypes.array,
    setClientes: PropTypes.func
}

export default ListaClientes;
