// import jsonServerProvider from "ra-data-json-server";
// import { Dataprovider } from "react-admin";
// const apiUrl = import.meta.env.VITE_JSON_SERVER_URL || "http://localhost:3002"
// const baseProvider = jsonServerProvider(apiUrl)
// export const dataProvider: DataProvider {
// }

import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
    import.meta.env.VITE_JSON_SERVER_URL
);