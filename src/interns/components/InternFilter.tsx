import { SearchInput, SelectInput } from "react-admin";

export const InternFilters = [
    <SearchInput source="q" alwaysOn/>,
    <SelectInput 
    source="departmeent"
    label="Département"
    choices={[
        { id: "Informatique", name: "Informatique" },
        { id: "Marketing", name: "Marketing" },
        { id: "RH", name: "RH" },
    ]}
    />,
];