# Electron + shadcn/ui Template

A modern Electron application template built with React, TypeScript, Vite, and shadcn/ui components. This template provides a solid foundation for building beautiful desktop applications with a complete UI component system and theme support.

## 📸 Screenshot

![Electron + shadcn/ui Template](media/screenshot.png)

*Modern Electron application with shadcn/ui components, featuring theme toggle and responsive design*

## ✨ Features

### Core Framework
- **⚡ Electron 39.0** - Cross-platform desktop app framework
- **⚛️ React 19.2** - Modern React with latest features and concurrent rendering
- **🔷 TypeScript 5.9** - Type-safe development with advanced type inference
- **🚀 Rolldown Vite 7.1.20** - Next-generation Rust-based bundler replacing traditional Vite for enhanced performance

### UI & Styling
- **🎨 shadcn/ui** - Complete component library with 50+ components built on Radix UI primitives
- **🎭 Tailwind CSS 4.1.16** - Latest utility-first CSS framework with enhanced performance
- **🌙 Advanced Theme System** - Light, dark, and system theme modes with intelligent toggle and persistence
- **📱 Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **🎯 Lucide React 0.552** - Beautiful, customizable SVG icons (1000+ icons)
- **🎨 CSS Variables** - Dynamic theming with CSS custom properties

### Complete UI Component Set
- **Layout Components**: Button, Card, Dialog, Sheet, Tabs, Accordion, Sidebar
- **Form Controls**: Input, Label, Select, Checkbox, Radio Group, Switch, Slider, Textarea
- **Navigation**: Navigation Menu, Breadcrumb, Pagination, Command Palette
- **Feedback**: Alert, Toast, Progress, Skeleton, Sonner notifications
- **Data Display**: Table, Avatar, Badge, Separator, Calendar, Charts (Recharts)
- **Overlay Components**: Popover, Tooltip, Hover Card, Context Menu, Drawer
- **Advanced Components**: Carousel, Resizable Panels, Input OTP, Date Picker

### State Management & Forms
- **🔄 TanStack Query 5.90** - Powerful data fetching, caching, and synchronization
- **📝 React Hook Form 7.66** - Performant forms with minimal re-renders
- **✅ Zod 4.1** - TypeScript-first schema validation with runtime type checking
- **🎛️ Class Variance Authority** - Type-safe component variants and styling
- **🔗 Hookform Resolvers** - Seamless integration between forms and validation

### Routing & Navigation
- **🧭 React Router v7.9** - Latest client-side routing with modern patterns
- **📍 Nested Routes** - Hierarchical routing with layout components and error boundaries
- **🔗 Type-safe Navigation** - Full TypeScript support for routes and parameters
- **❌ Error Handling** - Comprehensive error boundaries with user-friendly error pages
- **🎯 Active Route Detection** - Smart navigation highlighting and state management

### Theme & Accessibility
- **🌙 Multi-Theme Support** - Light, dark, and system preference detection
- **🔄 Theme Toggle** - Intuitive cycling through theme modes with visual indicators
- **♿ Accessibility First** - WCAG compliant components with proper ARIA attributes
- **🎨 Design Tokens** - Consistent spacing, colors, and typography system
- **📱 Responsive Breakpoints** - Mobile, tablet, and desktop optimized layouts

### Development Tools
- **🔧 Electron Forge 7.10** - Complete build and packaging toolchain
- **⚡ React Compiler** - Automatic React optimizations with babel-plugin-react-compiler
- **📦 Modern Tooling** - ESLint 9.39 with flat config, Rolldown Vite bundler
- **🎯 Developer Experience** - Hot reload, TypeScript path mapping, and comprehensive linting
- **🚀 GitHub Actions** - Automated CI/CD with cross-platform builds
- **📋 Type Safety** - End-to-end TypeScript with strict configuration
- **🔍 Path Aliases** - Clean imports with @ prefix for better code organization

### Testing & Quality Assurance
- **🧪 Vitest 4.0** - Fast unit testing with native ES modules support
- **🎭 Playwright 1.56** - End-to-end testing across multiple browsers
- **💅 Prettier 3.6** - Consistent code formatting with automatic styling
- **🔍 Testing Library** - React component testing utilities with user-centric queries
- **📊 Coverage Reports** - Comprehensive test coverage analysis and reporting
- **🎯 Multi-Browser E2E** - Chromium, Firefox, and WebKit testing support

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone this template**
   ```bash
   git clone https://github.com/rohitsoni007/electron-shadcn.git my-electron-app
   cd my-electron-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm start
   ```

## 📦 Available Scripts

### Development
- `npm start` - Start the Electron app in development mode
- `npm run lint` - Run ESLint with modern flat config
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing
- `npm run test` - Run unit tests with Vitest
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:ui` - Run unit tests with UI interface
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:e2e:ui` - Run E2E tests with interactive UI
- `npm run test:e2e:headed` - Run E2E tests with visible browser

### Build & Distribution
- `npm run build` - Build the application
- `npm run package` - Package the app for distribution
- `npm run make` - Create distributable packages
- `npm run publish` - Publish the app

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Main layout component
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx # Theme toggle button
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── Settings.tsx
├── test/               # Unit test setup and utilities
├── App.tsx             # Main App component
├── main.ts             # Electron main process
├── router.tsx          # React Router configuration
└── index.css           # Global styles

tests/
└── e2e/                # End-to-end tests
    └── example.spec.ts # Playwright E2E tests

Configuration Files:
├── eslint.config.mts   # ESLint 9 flat configuration
├── playwright.config.ts # Playwright E2E test configuration
├── vitest.config.ts    # Vitest unit test configuration
└── .prettierrc         # Prettier formatting rules
```

## 🎨 UI Components

This template includes a complete set of shadcn/ui components and modern libraries:

### Complete shadcn/ui Component Library (50+ Components)
- **Layout & Structure**: Button, Card, Dialog, Sheet, Tabs, Accordion, Sidebar, Resizable Panels
- **Form Controls**: Input, Textarea, Label, Select, Checkbox, Radio Group, Switch, Slider, Input OTP
- **Navigation**: Navigation Menu, Breadcrumb, Pagination, Command Palette, Menubar
- **Feedback & Status**: Alert, Alert Dialog, Toast, Progress, Skeleton, Sonner notifications
- **Data Display**: Table, Avatar, Badge, Separator, Calendar, Charts (Recharts integration)
- **Overlay & Interaction**: Popover, Tooltip, Hover Card, Context Menu, Drawer (Vaul)
- **Advanced Components**: Carousel (Embla), Collapsible, Toggle, Toggle Group, Aspect Ratio
- **Form Integration**: Form wrapper components with React Hook Form integration

### Integrated Libraries & Tools
- **React Hook Form 7.66** - Form state management with minimal re-renders and validation
- **Zod 4.1** - Runtime type validation and schema parsing with TypeScript inference
- **TanStack Query 5.90** - Server state management, caching, and background updates
- **Lucide React 0.552** - Consistent icon system with 1000+ customizable SVG icons
- **Tailwind Merge** - Intelligent class merging for dynamic styles and conditional classes
- **Class Variance Authority** - Type-safe component variant system with IntelliSense
- **Next Themes** - Advanced theme management with system preference detection
- **Sonner** - Beautiful toast notifications with stacking and positioning
- **Recharts** - Composable charting library for data visualization
- **Embla Carousel** - Lightweight, extensible carousel with touch support
- **Vaul** - Drawer component for mobile-first interactions

## ⚡ React Compiler

This template includes the React Compiler for automatic performance optimizations:

- **Automatic Memoization** - Eliminates the need for manual `useMemo`, `useCallback`, and `React.memo`
- **Smart Re-rendering** - Reduces unnecessary component re-renders automatically
- **Zero Configuration** - Works out of the box with your existing React code
- **Better Performance** - Optimizes your components without code changes

The React Compiler is configured in `vite.renderer.config.mts` and will automatically optimize your React components during the build process.

## 🌙 Theme System

The template includes a complete theme system with:

- **Light Mode** - Clean, bright interface
- **Dark Mode** - Easy on the eyes
- **System Mode** - Follows OS preference
- **Theme Toggle** - Easy switching between modes
- **Persistent Settings** - Theme preference saved to localStorage

### Using Themes

```tsx
import { useTheme } from "@/components/ThemeProvider";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme("dark")}>
      Switch to Dark Mode
    </button>
  );
}
```

## 🧭 Routing

The template uses React Router v7 for navigation:

```tsx
// Add new routes in src/router.tsx
{
  path: "/my-page",
  element: <MyPage />,
}
```

## 🧪 Testing

This template includes a comprehensive testing setup with both unit and end-to-end testing capabilities.

### Unit Testing with Vitest

Vitest provides fast unit testing with native ES modules support:

```tsx
// src/test/example.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

**Features:**
- **Fast execution** with native ES modules
- **React Testing Library** integration
- **jsdom environment** for DOM testing
- **Coverage reports** with built-in coverage
- **Watch mode** for development

### End-to-End Testing with Playwright

Playwright enables comprehensive E2E testing across multiple browsers:

```tsx
// tests/e2e/app.spec.ts
import { test, expect } from '@playwright/test';

test('app loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Electron/);
  
  // Test navigation
  await page.click('text=About');
  await expect(page).toHaveURL(/.*about/);
});
```

**Features:**
- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **Auto-wait** for elements and network requests
- **Screenshots and videos** on test failures
- **Trace viewer** for debugging
- **Parallel execution** for faster test runs

### Running Tests

```bash
# Unit tests
npm run test              # Run once
npm run test:watch        # Watch mode
npm run test:ui           # Interactive UI
npm run test:coverage     # With coverage

# E2E tests
npm run test:e2e          # Headless mode
npm run test:e2e:ui       # Interactive mode
npm run test:e2e:headed   # Visible browser
```

## 🎯 Adding New Components

### Using shadcn/ui CLI

```bash
npx shadcn@latest add [component-name]
```

### Manual Component Creation

1. Create component in `src/components/`
2. Use TypeScript and follow the existing patterns
3. Import and use in your pages


### Vite Configuration

Modify build settings in `vite.renderer.config.mjs`:

```ts
export default defineConfig({
  // Your custom Vite config
});
```

## 📱 Building for Production

### Local Build

#### Package the App

```bash
npm run package
```

#### Create Distributables

```bash
npm run make
```

This will create platform-specific distributables in the `out/` directory.

### Automated Builds (GitHub Actions)

This template includes GitHub Actions workflows for automated building and releasing:

#### Build Workflow
- **Triggers**: Push to main, pull requests, and tags
- **Platforms**: Windows, macOS, and Linux
- **Outputs**: Executable files for all platforms
- **Artifacts**: Automatically uploaded and stored for 30 days
- **Note**: Regular pushes to main only build and test - no release is created

#### Release Workflow
- **Triggers**: Manual trigger from GitHub Actions interface or git tags
- **Features**: 
  - Cross-platform builds
  - Manual GitHub releases
  - Release notes generation
  - Custom or timestamped versions

#### Manual Releases

The workflow supports manual release creation through GitHub Actions interface:

1. **Create a manual release**:
   - Go to **Actions** tab in your GitHub repository
   - Select **"Build and Release"** workflow
   - Click **"Run workflow"** button
   - Choose options:
     - ✅ **Create a release**: Check this box
     - 📝 **Release tag**: Enter custom tag (e.g., `v1.0.0`) or leave empty for auto-generated

2. **Alternative: Git tag releases**:
   ```bash
   # Create and push a version tag for automatic release
   git tag v1.0.0
   git push origin v1.0.0
   # → This triggers build and release automatically
   ```

3. **GitHub Actions will**:
   - Build for all platforms (Windows, macOS, Linux)
   - Create distributable packages (.exe, .dmg, .deb, .rpm, .zip)
   - Create a GitHub release with all artifacts
   - Generate release notes from commits

4. **Release naming options**:
   - **Custom tag**: `v1.0.0` (if specified in manual trigger)
   - **Git tag**: Uses the pushed tag name
   - **Auto-generated**: `v1.0.0-20241103-183045` (version + timestamp)

5. **Release artifacts include**:
   - **Windows**: `.exe` installer and `.zip` portable
   - **macOS**: `.dmg` installer and `.zip` portable  
   - **Linux**: `.deb` and `.rpm` packages, plus `.zip` portable

**Manual control** - create releases when you're ready!

#### Code Signing Setup (Optional)

For production releases, you can set up code signing by adding these secrets to your GitHub repository:

**macOS Code Signing:**
- `APPLE_CERTIFICATE` - Base64 encoded .p12 certificate
- `APPLE_CERTIFICATE_PASSWORD` - Certificate password
- `APPLE_ID` - Apple ID for notarization
- `APPLE_APP_SPECIFIC_PASSWORD` - App-specific password
- `APPLE_TEAM_ID` - Apple Developer Team ID
- `KEYCHAIN_PASSWORD` - Keychain password

**Windows Code Signing:**
- `WINDOWS_CERTIFICATE` - Base64 encoded certificate
- `WINDOWS_CERTIFICATE_PASSWORD` - Certificate password

## 🛠️ Development Tips

1. **Hot Reload** - The development server supports hot reload for fast iteration
2. **TypeScript** - Use TypeScript for better development experience
3. **Component Library** - Leverage the included shadcn/ui components
4. **Theme Consistency** - Use CSS variables for consistent theming
5. **Path Aliases** - Use `@/` imports for cleaner code organization

## 📚 Learn More

- [Electron Documentation](https://www.electronjs.org/docs)
- [React Documentation](https://react.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🚀**

Built with ❤️ using Electron + shadcn/ui