import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    SearchInput,
    TextInput,
    EditButton,
    DeleteButton,
} from "react-admin";
import { EmployeeFilters } from "./component/EmployeeFilters";
const employeeFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput source="nom" label="Nom" />,
    <TextInput source="departement" label="Département" />,
];

export const EmployeeList = () => (
    <List filters={employeeFilters} perPage={5}>
        <Datagrid rowClick="show">
            <TextField source="prenom" />
            <TextField source="nom" />
            <TextField source="email" />
            <TextField source="departement" />
            <NumberField source="salaire" />
            <BooleanField source="actif" />

             <EditButton />
            <DeleteButton />    
        </Datagrid>
    </List>
);