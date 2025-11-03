import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router';

export default function Settings() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">⚙️ Settings</CardTitle>
          <CardDescription className="text-center">
            Configure your application preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Theme</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Light</Button>
              <Button variant="outline" size="sm">Dark</Button>
              <Button variant="outline" size="sm">System</Button>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Notifications</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Enabled</Button>
              <Button variant="outline" size="sm">Disabled</Button>
            </div>
          </div>
          <div className="flex gap-2 justify-center pt-4">
            <Button asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">About</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}