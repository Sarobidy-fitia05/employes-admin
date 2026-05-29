import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    SearchInput,
    TextInput,
} from "react-admin";

const employeeFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput source="nom" label="Nom" />,
    <TextInput source="departement" label="Département" />,
];

export const EmployeeList = () => (
    <List filters={employeeFilters}>
        <Datagrid rowClick="edit">
            <TextField source="prenom" />
            <TextField source="nom" />
            <TextField source="email" />
            <TextField source="departement" />
            <NumberField source="salaire" />
            <BooleanField source="actif" />
        </Datagrid>
    </List>
);