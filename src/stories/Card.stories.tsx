import { Card, CardDescription, CardHeader, CardTitle } from "../components/Card";

export default { title: "Surfaces/Card", component: Card };

export const Default = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader>
        <div>
          <CardTitle>Weekly summary</CardTitle>
          <CardDescription>Revenue and signups for the last 7 days.</CardDescription>
        </div>
      </CardHeader>
    </Card>
  ),
};
export const Raised = {
  render: () => (
    <Card variant="raised" style={{ width: 320 }}>
      <CardTitle>Raised card</CardTitle>
      <CardDescription>Floats on a soft shadow.</CardDescription>
    </Card>
  ),
};
