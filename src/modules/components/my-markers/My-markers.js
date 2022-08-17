import {React} from "react";
import {useAxios} from '../../../DataProvider';
import { Triangle } from  'react-loader-spinner';
import {Link} from 'react-router-dom';

import "./My-markers.scss";

import SvgAddMarker from "../../../bases/icons/SvgAddMarker.js";

const MyMarkers = () => {
    const resParams = useAxios(
        "/api/get_markers/",
        'GET',
        {}
    );

    if (resParams.loading) {
        return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
    }

    const data = resParams.data;

    return (
        <div className="col-2">
            <div className="box-marker">
                <div className="box-searth">
                    <input className="search-input" />
                    <h4 className="nomer-list">{data.count} количиство</h4>
                </div>
                <div className="box-list">
                    {/* eslint-disable-next-line */}
                    <a className="str">
                    <div className="margin-add">
                    <SvgAddMarker width="100%" height="100%" color="#f4f4f4" />
                    </div>
                    </a>
                    {data.markers.map((el, index) => {
                        return (
                            <div key={el.id} className="str">
                            <div className="colums-1">
                                <p className="str-p">{index + 1}</p>
                                <h3 className="str-h3">{el.description}</h3>
                            </div>
                            <div className="colums-2">
                                <Link to={`edit_add_marker/${el.id}`}>Настроить</Link>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyMarkers;
