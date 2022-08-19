import React from "react";
// import {Triangle} from 'react-loader-spinner';
import {sendRequest} from './DataProvider';


const resParams = sendRequest(
    "/api/me/",
    'GET',
    {}
);

// if (resParams.loading) {
//     return <div className="preloader-box"><Triangle wrapperClass="preloader"/></div>
// }

const data = resParams.body;

export const UserContext = React.createContext(data);