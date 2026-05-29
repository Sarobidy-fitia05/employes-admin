import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employes" list={ListGuesser} />   
  </Admin>
);

