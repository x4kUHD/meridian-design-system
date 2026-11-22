import { StatCard } from "../components/StatCard";

export default { title: "Display/StatCard", component: StatCard };

export const Positive = { args: { label: "Total revenue", value: "$94,320", delta: "+12.4%", trend: "positive" } };
export const Negative = { args: { label: "Refunds", value: "$1,204", delta: "+3.1%", trend: "negative" } };
