import GeneralRules from "../../../modules/components/[0_grouped_0]-Regulations/general-rules/GeneralRules.js";
import AllMainRules from "../../../modules/components/[0_grouped_0]-Regulations/all-main-rules/AllMainRules.js";
import Whitelist from "../../../modules/components/[0_grouped_0]-Regulations/whitelist/Whitelist.js";
import Rest from "../../../modules/components/[0_grouped_0]-Regulations/rest/Rest.js";

export const regulationsAllListAndComponents = [
  {
    id: 1,
    name: "Общее",
    content: <GeneralRules/>
  },
  {
    id: 2,
    name: "Правила",
    content: <AllMainRules/>
  },
  {
    id: 3,
    name: "Вайтлист",
    content: <Whitelist/>
  },
  {
    id: 4,
    name: "Добровольный бан/мут",
    content: <Rest/>
  }
]