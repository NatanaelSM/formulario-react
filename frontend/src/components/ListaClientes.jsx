import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

import PropTypes from "prop-types";


const ListaClientes = ({ clientes }) => {

    return (
        <TableContainer
            bg='linear-gradient(133deg, #80D8FF -16.16%, rgba(155, 121, 252, 0.61) 48.96%, rgba(76, 0, 125, 0.63) 112.26%)'
            border='solid black px'
            borderRadius='10px'
            h='100%'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th color='white'>Nome Completo</Th>
                        <Th color='white'>CPF</Th>
                        <Th color='white'>Sexo</Th>
                        <Th color='white'>Data De Nascimento</Th>
                        <Th color='white'>Email</Th>
                        <Th color='white'>Celular</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>teste</Td>
                        <Td>teste</Td>
                        <Td>teste</Td>
                        <Td>teste</Td>
                        <Td>teste</Td>
                        <Td>teste</Td>
                    </Tr>

                    {clientes.map((cliente) =>
                        <Tr key={cliente.id}>
                            <Td>{cliente.nomeCompleto}</Td>
                            <Td>{cliente.cpf}</Td>
                            <Td>{cliente.sexo}</Td>
                            <Td>{cliente.dataAniversario}</Td>
                            <Td>{cliente.email}</Td>
                            <Td>{cliente.celular}</Td>
                        </Tr>
                    )}

                </Tbody>
            </Table>
        </TableContainer>
    )
}

ListaClientes.propTypes = {
    clientes: PropTypes.array
}

export default ListaClientes