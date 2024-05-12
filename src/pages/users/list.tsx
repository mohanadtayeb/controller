import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    EmailField,
    DateField,
    TagField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Checkbox } from "@mui/material";

export const UsersList = () => {
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "firstName",
                flex: 1,
                headerName: "First Name",
                minWidth: 200,
            },
            {
                field: "lastName",
                flex: 1,
                headerName: "Last Name",
                minWidth: 200,
            },
            {
                field: "email",
                flex: 1,
                headerName: "Email",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <EmailField value={value} />;
                },
            },
            {
                field: "status",
                headerName: "Status",
                minWidth: 100,
                renderCell: function render({ value }) {
                    return <Checkbox checked={!!value} />;
                },
            },
            {
                field: "birthday",
                flex: 1,
                headerName: "Birthday",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "skills",
                flex: 1,
                headerName: "Skills",
                minWidth: 200,
                renderCell: function render({ row }) {
                    return (
                        <>
                            {row?.skills?.map((item: any) => (
                                <TagField value={item} key={item} />
                            ))}
                        </>
                    );
                },
            },
            {
                field: "avatar",
                flex: 1,
                headerName: "Avatar",
                minWidth: 100,
                renderCell: function render({ value }) {
                    return (
                        <>
                            {value?.map((item: any, index: number) => (
                                <img
                                    src={item?.url}
                                    key={index}
                                    style={{
                                        height: "50px",
                                        maxWidth: "100px",
                                    }}
                                />
                            ))}
                        </>
                    );
                },
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};

