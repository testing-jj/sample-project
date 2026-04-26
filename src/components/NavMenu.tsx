export function NavMenu() {
  return (
    <nav className="flex items-center gap-4">
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/profile">Profile</a>
      <a href="/settings">Settings</a>
    </nav>
  );
}