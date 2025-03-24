
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Importando páginas para a navegação da sidebar
import ProfilePage from "./pages/ProfilePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import InventoryPage from "./pages/InventoryPage";
import CalendarPage from "./pages/CalendarPage";
import DocumentsPage from "./pages/DocumentsPage";
import TeamPage from "./pages/TeamPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THIS LINE */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
