# Redux Data Flow in Next.js Application

## Overview

This application is a budget tracker built with Next.js using the App Router pattern and Redux for state management. It demonstrates how to integrate Redux with Next.js, including Redux Persist for maintaining state between page refreshes.

## Project Structure
app/
├── components/
│ └── balance.tsx # UI component for displaying balance
├── containers/
│ └── main.tsx # Connected container component
├── redux/
│ ├── actions.ts # Redux action creators and types
│ ├── reducer.ts # State reducer functions
│ ├── store.ts # Redux store configuration
│ └── types.ts # TypeScript type definitions
├── globals.css # Global styles
├── layout.tsx # Root layout component
├── page.tsx # Main page component
└── providers.tsx # Redux provider setup


## Redux Data Flow

The data flows through the application in the following sequence:

1. **Redux Store Initialization**
   - `reducer.ts` defines the initial state e.g `transactions: [{id: 1}]`
   - `store.ts` configures the Redux store with the reducer and Redux Persist

2. **Provider Integration**
   - `providers.tsx` wraps the application with Redux `Provider` and `PersistGate`
   - Makes the Redux store accessible to all components in the component tree

3. **Component Hierarchy**
   - `layout.tsx` serves as the root component and includes `Providers`
   - `page.tsx` is the main page component, rendering the `Main` container

4. **Connected Components**
   - `main.tsx` connects to Redux via `connect()` from react-redux
   - Uses `mapStateToProps` to access the transactions from the store
   - Renders UI components like `Balance` with the data from Redux



## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

2. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

3. Open the application in your browser


## Notes

- The application uses Next.js 13+ App Router pattern
- Redux state is persisted using redux-persist
- Components using Redux must be wrapped with 'use client' directive