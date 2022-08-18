import React from "react";

import "./Svg-list.scss";

import SvgFilles1 from "../../../bases/icons/SvgFilles1.js";
import SvgFilles2 from "../../../bases/icons/SvgFilles2.js";
import SvgFilles3 from "../../../bases/icons/SvgFilles3.js";
import SvgFilles4 from "../../../bases/icons/SvgFilles4.js";
import SvgFilles5 from "../../../bases/icons/SvgFilles5.js";
import SvgFilles6 from "../../../bases/icons/SvgFilles6.js";
import SvgDiscord from "../../../bases/icons/SvgDiscord.js";
import SvgHotMc from "../../../bases/icons/SvgHotMc.js";
import SvgHoverMe from "../../../bases/icons/SvgHoverMe.js";
import SvgInstagram from "../../../bases/icons/SvgInstagram.js";
import SvgLinkHref from "../../../bases/icons/SvgLinkHref.js";
import SvgLogout from "../../../bases/icons/SvgLogout.js";
import SvgMap from "../../../bases/icons/SvgMap.js";
import SvgMap3D from "../../../bases/icons/SvgMap3D.js";
import SvgMinecraftrating from "../../../bases/icons/SvgMinecraftrating.js";
import SvgMinecraftStatistic from "../../../bases/icons/SvgMinecraftStatistic.js";
import SvgMonitiring from "../../../bases/icons/SvgMonitiring.js";
import SvgMyProfile from "../../../bases/icons/SvgMyProfile.js";
import SvgSettings from "../../../bases/icons/SvgSettings.js";
import SvgVk from "../../../bases/icons/SvgVk.js";
import SvgWarn from "../../../bases/icons/SvgWarn.js";
import SvgAddMarker from "../../../bases/icons/SvgAddMarker.js";

const SvgList = () => {
  const all = [
    {
      id: 1,
      name: "SvgFilles1",
      link: <SvgFilles1/>,
    },
    {
      id: 2,
      name: "SvgFilles2",
      link: <SvgFilles2/>,
    },
    {
      id: 3,
      name: "SvgFilles3",
      link: <SvgFilles3/>,
    },
    {
      id: 4,
      name: "SvgFilles4",
      link: <SvgFilles4/>,
    },
    {
      id: 5,
      name: "SvgFilles5",
      link: <SvgFilles5/>,
    },
    {
      id: 6,
      name: "SvgFilles6",
      link: <SvgFilles6/>,
    },
    {
      id: 7,
      name: "SvgDiscord",
      link: <SvgDiscord/>,
    },
    {
      id: 8,
      name: "SvgHotMc",
      link: <SvgHotMc/>,
    },
    {
      id: 9,
      name: "SvgHoverMe",
      link: <SvgHoverMe/>,
    },
    {
      id: 10,
      name: "SvgInstagram",
      link: <SvgInstagram/>,
    },
    {
      id: 11,
      name: "SvgLinkHref",
      link: <SvgLinkHref/>,
    },
    {
      id: 12,
      name: "SvgLogout",
      link: <SvgLogout/>,
    },
    {
      id: 13,
      name: "SvgMap",
      link: <SvgMap/>,
    },
    {
      id: 14,
      name: "SvgMap3D",
      link: <SvgMap3D/>,
    },
    {
      id: 15,
      name: "SvgMinecraftrating",
      link: <SvgMinecraftrating/>,
    },
    {
      id: 16,
      name: "SvgMinecraftStatistic",
      link: <SvgMinecraftStatistic/>,
    },
    {
      id: 17,
      name: "SvgMonitiring",
      link: <SvgMonitiring/>,
    },
    {
      id: 18,
      name: "SvgMyProfile",
      link: <SvgMyProfile/>,
    },
    {
      id: 19,
      name: "SvgSettings",
      link: <SvgSettings/>,
    },
    {
      id: 20,
      name: "SvgVk",
      link: <SvgVk/>,
    },
    {
      id: 21,
      name: "SvgWarn",
      link: <SvgWarn/>,
    },
    {
      id: 22,
      name: "SvgAddMarker",
      link: <SvgAddMarker/>,
    },
  ];

  return (
    <div className="svg-block">
      {all.map((el) => {
        return (
          <div className="one-block" key={el.id}>
            {el.link}
          </div>
        );
      })}
    </div>
  );
};

export default SvgList;
