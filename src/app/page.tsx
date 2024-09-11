'use client'

import {Box, MenuItem, Select, useColorScheme} from '@mui/material'


export default function Home() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }


    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 0,
                m:0,
                minHeight: '100vh'
            }}
        >
            <Select
                value={mode}
                onChange={(event) =>
                    setMode(event.target.value as 'system' | 'light' | 'dark')
                }
            >
                <MenuItem value="system">System</MenuItem>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select>
        </Box>
    );
}