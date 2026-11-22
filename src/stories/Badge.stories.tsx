import { Badge } from "../components/Badge";

export default { title: "Display/Badge", component: Badge };

export const Neutral = { args: { children: "Draft" } };
export const Success = { args: { tone: "success", children: "Active" } };
export const Warning = { args: { tone: "warning", children: "Pending" } };
export const Danger = { args: { tone: "danger", children: "Failed" } };
