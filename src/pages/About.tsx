import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Link } from 'react-router';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

// Mock API function for React Query demo
const fetchAppStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  return {
    version: '1.0.0',
    buildDate: new Date().toLocaleDateString(),
    components: 45,
    features: 12,
    status: 'healthy'
  };
};

export default function About() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // React Query example
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['appStats'],
    queryFn: fetchAppStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setFormSubmitted(true);
    reset();
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">📖 About This Template</CardTitle>
            <CardDescription>
              A modern Electron + React template with powerful features
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary">⚛️ React 19.2</Badge>
                <Badge variant="secondary">🚀 Electron 39.0</Badge>
                <Badge variant="secondary">🔷 TypeScript 5.3</Badge>
                <Badge variant="secondary">⚡ Vite 5.4</Badge>
                <Badge variant="secondary">🎨 shadcn/ui</Badge>
                <Badge variant="secondary">🎭 Tailwind 3.4</Badge>
                <Badge variant="secondary">🛣️ React Router v7</Badge>
                <Badge variant="secondary">📝 Hook Form 7.66</Badge>
                <Badge variant="secondary">✅ Zod 4.1</Badge>
                <Badge variant="secondary">🔄 TanStack Query</Badge>
              </div>
            </CardContent>
          </Card>

          {/* App Statistics with React Query */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 App Statistics
                <Badge variant="outline" className="text-xs">
                  React Query Demo
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading stats...
                </div>
              )}
              {error && (
                <div className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-4 w-4" />
                  Failed to load stats
                </div>
              )}
              {stats && (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <Badge>{stats.version}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Build Date:</span>
                    <span className="text-sm">{stats.buildDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Components:</span>
                    <Badge variant="secondary">{stats.components}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Features:</span>
                    <Badge variant="secondary">{stats.features}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-sm text-green-600">{stats.status}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form with React Hook Form + Zod */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📝 Contact Form
              <Badge variant="outline" className="text-xs">
                React Hook Form + Zod Demo
              </Badge>
            </CardTitle>
            <CardDescription>
              Try the form validation with TypeScript-first schema validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            {formSubmitted ? (
              <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700 dark:text-green-300">
                  Form submitted successfully! (This is just a demo)
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    {...register('message')}
                    placeholder="Enter your message (min 10 characters)"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card>
          <CardContent className="pt-6">
            <Separator className="mb-4" />
            <div className="flex gap-2 justify-center">
              <Button asChild>
                <Link to="/">🏠 Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/settings">⚙️ Settings</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}