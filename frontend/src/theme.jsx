import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Tahoma',
                fontSize: '1rem',
            },
            button: {
                fontWeight: 'bold',
            },
            td: {
                fontSize: '22px',
            },
        },
    },
});
