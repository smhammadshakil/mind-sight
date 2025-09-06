# Interview Test Project

This repository contains both frontend (React) and backend (NestJS) applications.

## Project Structure

```
interview-test/
├── my-react-app/    # Frontend React application
└── my-nest-app/     # Backend NestJS application
```

## Frontend Application (React)

Navigate to the frontend directory:

```bash
cd my-react-app
```

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173`

## Backend Application (NestJS)

Navigate to the backend directory:

```bash
cd my-nest-app
```

### Install dependencies
```bash
npm install
```

### Run the application

```bash
# development
npm run start

# watch mode (recommended during development)
npm run start:dev

# production mode
npm run start:prod
```

The backend API will be available at `http://localhost:3000`

## Running Both Applications

Terminal 1 (Frontend):
```bash
cd my-react-app
npm run dev
```

Terminal 2 (Backend):
```bash
cd my-nest-app
npm run start:dev
```

## CORS Configuration

The backend application needs CORS configuration to accept requests from the frontend. Add the following code to your `main.ts` file in the NestJS application:

```typescript
// filepath: my-nest-app/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend application
  app.enableCors({
    origin: 'http://localhost:5173', // React application URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
```

This configuration allows the React frontend running on `http://localhost:5173` to make API calls to the NestJS backend