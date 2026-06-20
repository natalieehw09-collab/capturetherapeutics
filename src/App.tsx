import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/capture/AboutPage";
import ServicesPage from "./pages/capture/ServicesPage";
import VocationalPage from "./pages/capture/VocationalPage";
import EmployersPage from "./pages/capture/EmployersPage";
import ClinicOwnersPage from "./pages/capture/ClinicOwnersPage";
import CareersPage from "./pages/capture/CareersPage";
import CommunityPage from "./pages/capture/CommunityPage";
import LocationsPage from "./pages/capture/LocationsPage";
import BlogPage from "./pages/capture/BlogPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vocational-services" element={<VocationalPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/clinic-owners" element={<ClinicOwnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/capture-talks" element={<BlogPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
