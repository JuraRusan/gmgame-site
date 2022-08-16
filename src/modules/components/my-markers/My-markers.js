import {React, useState} from "react";
import useAxios from '../../../DataProvider';
import { Audio } from  'react-loader-spinner';
import EditAddMarker from './EditAddMarker';

import "./My-markers.scss";

import SvgAddMarker from "../../../bases/icons/SvgAddMarker.js";

const MyMarkers = () => {
    let [isShowMarker, setIsShowMarker] = useState(false);
    let [markerId, setMarkerId] = useState(null);

    const resParams = useAxios(
        "/api/get_markers/",
        'GET',
        {}
    );

    const data = resParams.data;

    function showMarker(id) {
        setMarkerId(id);
        setIsShowMarker(true);
    }

    if (resParams.loading) {
        return < Audio />
    }

    if (isShowMarker) {
        return <EditAddMarker markerId={markerId} />
    }

    return (
        <div className="col-2">
            <div className="box-marker">
                <div className="box-searth">
                    <input className="search-input" />
                    <h4 className="nomer-list">{data.count} количиство</h4>
                </div>
                <div className="box-list">
                    <a href="/#" className="str" onClick={() => showMarker()}>
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
                                <button className="str-bt" onClick={() => showMarker(el.id)}>Настроить</button>
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
