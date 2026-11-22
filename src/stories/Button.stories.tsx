import { Button } from "../components/Button";

export default { title: "Actions/Button", component: Button };

export const Primary = { args: { variant: "primary", children: "Save changes" } };
export const Secondary = { args: { variant: "secondary", children: "Cancel" } };
export const Ghost = { args: { variant: "ghost", children: "Learn more" } };
export const Danger = { args: { variant: "danger", children: "Delete project" } };
export const Large = { args: { variant: "primary", size: "lg", children: "Get started" } };
