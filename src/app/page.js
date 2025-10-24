"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Autocomplete from "./components/autocomplete";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Autocomplete />
      </QueryClientProvider>
    </main>
  );
}
