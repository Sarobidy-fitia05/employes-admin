import { 
     List,
    Datagrid,
    TextField,
    NumberField,
    ReferenceField,
    FunctionField,
    EditButton,
    DeleteButton,
    
} from "react-admin";
import { InternFilters } from "./components/InternFilter";

export const InternList = () => (
     <List filters={InternFilters}>
        <Datagrid rowClick="show">
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <TextField source="department" />
            <TextField source="school" />
            <TextField source="paid" />
            <NumberField source="salary" />

             <ReferenceField
                source="manager_id"
                reference="employees"
                label="Manager"
            >
                <FunctionField
                    render={(record) =>
                        `${record.prenom} ${record.nom}`
                    }
                />
            </ReferenceField>

            <EditButton />
            <DeleteButton />   
        </Datagrid>
    </List>

)