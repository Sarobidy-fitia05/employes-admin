import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
    SelectInput,
    required,
    minValue
} from "react-admin";

const departmentChoices = [
    { id: "Informatique", name: "Informatique" },
    { id: "Marketing", name: "Marketing" },
    { id: "RH", name: "RH" },
    { id: "Finance", name: "Finance" }
];

export const EmployeeCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput
                source="prenom"
                label="Prénom"
                validate={required()}
            />

            <TextInput
                source="nom"
                label="Nom"
                validate={required()}
            />

            <TextInput
                source="email"
                label="Email"
                validate={required()}
            />

            <SelectInput
                source="departement"
                label="Département"
                choices={departmentChoices}
                validate={required()}
            />

            <NumberInput
                source="salaire"
                label="Salaire"
                validate={[
                    required(),
                    minValue(1500)
                ]}
            />

            <BooleanInput
                source="actif"
                label="Actif"
                defaultValue={true}
            />
        </SimpleForm>
    </Create>
);