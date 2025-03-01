# Progress Bar Application

A web-based customizable progress bar application built with React, TypeScript, and Framer Motion.

## Features

- Customizable duration input
- Real-time progress visualization
- Start/Pause/Reset functionality
- Smooth animations using Framer Motion
- Material Design-inspired UI components

## Prerequisites

- Node.js (v20.x or later recommended)
- npm (comes with Node.js)

## Local Development Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5000

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── custom/    # Custom components
│   │   │   └── ui/       # UI components
│   │   ├── pages/        # Page components
│   │   └── lib/          # Utility functions
├── server/                # Express backend
└── shared/               # Shared types and schemas
```

## Tech Stack

- React 18 with TypeScript
- Framer Motion for animations
- Express.js backend
- TailwindCSS for styling
- shadcn/ui components

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Runs the production build
- `npm run check` - Runs TypeScript type checking

## Styling

The application uses a custom theme with the following color palette:
- Primary: #2196F3 (blue)
- Progress: #4CAF50 (green)
- Background: #F5F5F5 (light grey)
- Text: #333333 (dark grey)
- Disabled: #9E9E9E (medium grey)

## Browser Support

The application is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.