import { Flex } from "@chakra-ui/react"
import Painel from "../containers/Painel"

const Page = () => {

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            w='100vw'
            h='100vh'
            bg='white'>
            <Painel />
        </Flex>
    )
}

export default Page