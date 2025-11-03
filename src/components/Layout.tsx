import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Electron + shadcn/ui</h1>
            <div className="flex items-center gap-2">
              <Button
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                size="sm"
                asChild
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                variant={location.pathname === '/about' ? 'default' : 'ghost'}
                size="sm"
                asChild
              >
                <Link to="/about">About</Link>
              </Button>
              <Button
                variant={location.pathname === '/settings' ? 'default' : 'ghost'}
                size="sm"
                asChild
              >
                <Link to="/settings">Settings</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}