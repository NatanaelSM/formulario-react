import { FormControl, FormLabel, Input, Stack, InputGroup, InputLeftAddon, Select, Flex, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import PropTypes from "prop-types";


const Formulario = ({ reloadClientes }) => {

    const [form, setForm] = useState({
        nomeCompleto: '',
        cpf: '',
        sexo: '',
        dataAniversario: '',
        email: '',
        celular: ''
    })

    const handleChange = (e) => {
        const auxForm = { ...form }
        auxForm[e.target.name] = e.target.value
        setForm(auxForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

        console.log(clientes);
        let idCliente
        if (clientes.length > 0) {
            idCliente = clientes[clientes.length - 1].id + 1
        } else {
            idCliente = 1
        }

        const novoCliente = { ...form, id: idCliente };
        clientes.push(novoCliente);

        localStorage.setItem('clientes', JSON.stringify(clientes));

        console.log(clientes);
        setForm({
            id: '',
            nomeCompleto: '',
            cpf: '',
            sexo: '',
            dataAniversario: '',
            email: '',
            celular: ''
        });

        alert('Cliente cadastrado com sucesso!');
        e.target.reset()
        reloadClientes()
    }

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='100%'>
            <Box
                width="100%"
                maxWidth="500px">
                <form
                    onSubmit={handleSubmit}>
                    <Stack
                        spacing='15px'
                        w='100%'>
                        <FormControl isRequired>
                            <FormLabel htmlFor="nome" >Nome Completo</FormLabel>
                            <Input onChange={handleChange} bg='white' type='text' placeholder='Digite aqui...' size='md' id='nome' name='nomeCompleto' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="cpf">CPF</FormLabel>
                            <Input onChange={handleChange} bg='white' placeholder='123.456.789-10' type='number' size='md' id='cpf' name='cpf' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Sexo</FormLabel>
                            <Select onChange={handleChange} name='sexo' bg='white' placeholder='Selecione uma opção...'>
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                            </Select>
                        </FormControl>


                        <FormControl isRequired>
                            <FormLabel htmlFor='data'>Data De Nascimento</FormLabel>
                            <Input bg='white' onChange={handleChange} type='date' size='md' id='data' name='dataAniversario' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>@</InputLeftAddon>
                                <Input onChange={handleChange} bg='white' type='email' placeholder='email@email.com' size='md' id='email' name='email' />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="cel">Celular</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>+55</InputLeftAddon>
                                <Input onChange={handleChange} bg='white' type='tel' placeholder='12 999999999' size='md' id='cel' name='celular' />
                            </InputGroup>
                        </FormControl>

                        <Button type='submit' colorScheme='blue' variant='solid'>
                            Cadastrar
                        </Button>
                    </Stack>
                </form>
            </Box>

        </Flex>
    )
}

Formulario.propTypes = {
    reloadClientes: PropTypes.func
}

export default Formulario