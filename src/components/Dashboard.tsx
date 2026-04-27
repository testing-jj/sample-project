export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Widget title="Analytics" />
      <Widget title="Recent Activity" />
      <Widget title="Quick Actions" />
    </div>
  );
}