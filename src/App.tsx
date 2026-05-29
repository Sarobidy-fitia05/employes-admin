// import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// import { Layout } from "./Layout";
import { Admin, Resource } from 'react-admin';
import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";

export const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="employes" list={EmployeeList} />   
  </Admin>
);
