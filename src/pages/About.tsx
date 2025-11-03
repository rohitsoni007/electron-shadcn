import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">📖 About</CardTitle>
          <CardDescription className="text-center">
            Learn more about this application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            This is a modern Electron application built with:
          </p>
          <ul className="text-sm space-y-1 text-center">
            <li>⚛️ React 19</li>
            <li>🚀 Electron</li>
            <li>🎨 shadcn/ui</li>
            <li>🎯 Tailwind CSS</li>
            <li>🛣️ React Router v7</li>
            <li>⚡ Vite</li>
          </ul>
          <div className="flex gap-2 justify-center">
            <Button asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/settings">Settings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}