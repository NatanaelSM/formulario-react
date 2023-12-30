import { FormControl, FormLabel, Input, Stack, InputGroup, InputLeftAddon, HStack, Radio, RadioGroup, Box, Button } from '@chakra-ui/react'
import { useState } from 'react'


const Formulario = () => {

    const [form, setForm] = useState({
        id: 1,
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
        
        const novoCliente = { ...form };
        clientes.push(novoCliente);

        localStorage.setItem('clientes', JSON.stringify(clientes));

        setForm({
            id: form.id + 1, 
            nomeCompleto: '',
            cpf: '',
            sexo: '',
            dataAniversario: '',
            email: '',
            celular: ''
        });

        alert('Cliente cadastrado com sucesso!');
        e.target.reset()
    }

    return (
        <Box
            w='100%'
            h='100%'>
            <form onSubmit={handleSubmit}>
                <Stack
                    spacing='15px'
                    w='50%'>
                    <FormControl>
                        <FormLabel htmlFor="nome" >Nome Completo</FormLabel>
                        <Input onChange={handleChange} bg='white' type='text' placeholder='Digite aqui...' size='md' id='nome' name='nomeCompleto' />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <Input onChange={handleChange} bg='white' placeholder='123.456.789-10' type='number' size='md' id='cpf' name='cpf' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Sexo</FormLabel>
                        <RadioGroup name="sexo">
                            <HStack
                                spacing='5px'>
                                <Radio onChange={handleChange} value='Masculino'>Masculino</Radio>
                                <Radio onChange={handleChange} value='Feminino'>Feminino</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='data'>Data De Nascimento</FormLabel>
                        <Input bg='white' onChange={handleChange} type='date' size='md' id='data' name='dataAniversario' />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <InputGroup>
                            <InputLeftAddon>@</InputLeftAddon>
                            <Input onChange={handleChange} bg='white' type='email' placeholder='email@email.com' size='md' id='email' name='email' />
                        </InputGroup>
                    </FormControl>

                    <FormControl>
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
    )
}

export default Formulario