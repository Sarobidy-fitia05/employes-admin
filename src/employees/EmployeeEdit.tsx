// import {
//     Edit,
//     SimpleForm,
//     TextInput,
//     NumberInput,
//     BooleanInput,
//     SelectInput,
//     required,
//     minValue,
//     useRecordContext
// } from "react-admin";

// const departmentChoices = [
//     { id: "Informatique", name: "Informatique" },
//     { id: "Marketing", name: "Marketing" },
//     { id: "RH", name: "RH" },
//     { id: "Finance", name: "Finance" }
// ];

// const EmployeeTitle = () => {
//     const record = useRecordContext();

//     return (
//         <span>
//             Modifier :
//             {record
//                 ? ` ${record.firstname} ${record.lastname}`
//                 : ""}
//         </span>
//     );
// };

// export const EmployeeEdit = () => (
//     <Edit title={<EmployeeTitle />}>
//         <SimpleForm>

//             <TextInput
//                 source="prenom"
//                 label="Prénom"
//                 validate={required()}
//             />

//             <TextInput
//                 source="nom"
//                 label="Nom"
//                 validate={required()}
//             />

//             <TextInput
//                 source="email"
//                 label="Email"
//                 validate={required()}
//             />

//             <SelectInput
//                 source="departement"
//                 label="Département"
//                 choices={departmentChoices}
//                 validate={required()}
//             />

//             <NumberInput
//                 source="salaire"
//                 label="Salaire"
//                 validate={[
//                     required(),
//                     minValue(1500)
//                 ]}
//             />

//             <BooleanInput
//                 source="actif"
//                 label="Actif"
//             />

//         </SimpleForm>
//     </Edit>
// );
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
    SelectInput,
    required,
    minValue,
    useRecordContext
} from "react-admin";

const EmployeeTitle = () => {
    const record = useRecordContext();

    return (
        <span>
            {record
                ? `Modifier : ${record.firstname} ${record.lastname}`
                : ""}
        </span>
    );
};

export const EmployeeEdit = () => (
    <Edit title={<EmployeeTitle />}>
        <SimpleForm>

            <TextInput source="prenom" validate={required()} />
            <TextInput source="nom" validate={required()} />
            <TextInput source="email" validate={required()} />

            <SelectInput
                source="departement"
                choices={[
                    { id: "Informatique", name: "Informatique" },
                    { id: "Marketing", name: "Marketing" },
                    { id: "RH", name: "RH" },
                    { id: "Finance", name: "Finance" }
                ]}
                validate={required()}
            />

            <NumberInput
                source="salaire"
                validate={[required(), minValue(1500)]}
            />

            <BooleanInput source="active" />

        </SimpleForm>
    </Edit>
);