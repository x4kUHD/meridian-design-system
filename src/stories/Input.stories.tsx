import { Input, Label } from "../components/Input";

export default { title: "Forms/Input", component: Input };

export const Default = {
  render: () => (
    <div style={{ width: 280 }}>
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@company.com" />
    </div>
  ),
};
export const Invalid = { args: { "aria-invalid": true, defaultValue: "not-an-email" } };
