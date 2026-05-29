import { SearchInput, SelectInput } from "react-admin";

export const EmployeeFilters = [
    <SearchInput source="q" alwaysOn />,

    <SelectInput
        source="departement"
        label="Département"
        choices={[
            { id: "Informatique", name: "Informatique" },
            { id: "Marketing", name: "Marketing" },
            { id: "RH", name: "RH" },
            { id: "Finance", name: "Finance" },
        ]}
    />,
];