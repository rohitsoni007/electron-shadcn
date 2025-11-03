import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router';

export default function Home() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">💖 Hello World!</CardTitle>
                    <CardDescription className="text-center">
                        Welcome to your Electron + React + shadcn/ui application.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">
                        This app is built with Electron, React, React Router v7, and shadcn/ui components.
                    </p>
                    <div className="flex gap-2 justify-center">
                        <Button asChild>
                            <Link to="/about">About Page</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link to="/settings">Settings</Link>
                        </Button>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <Button variant="destructive" size="sm">Delete</Button>
                        <Button variant="ghost" size="sm">Cancel</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}