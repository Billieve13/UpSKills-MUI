import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

    const columns = [//why did it give TypeScript?
        { field: 'id', headerName: 'ID', width: 90 },
        {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
        },
        {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
        },
        {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
        },
        {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>//why did it give TypeScript?
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
function DataGridApp() {
    
    return (
        <Box height={400} width={800}>
            <DataGrid onCellEditCommit={(params) => console.log(params)} columns={columns} rows={rows} checkboxSelection />
        </Box>
    );
}

export default DataGridApp;