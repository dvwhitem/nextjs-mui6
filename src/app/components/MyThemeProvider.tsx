'use client'

import {createTheme, extendTheme, ThemeProvider, useMediaQuery} from '@mui/material'

export  default function MyThemeProvider({children}: Readonly<{ children: React.ReactNode }>) {
    // const theme = createTheme({
    //     colorSchemes: {
    //         dark: true,
    //     },
    //     cssVariables: {
    //         colorSchemeSelector: 'class'
    //     }
    // });

    const theme = extendTheme({ colorSchemes: { light: true, dark: true, }, colorSchemeSelector: "class", });

    return (
        <ThemeProvider theme={theme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}