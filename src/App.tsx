import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Support from "./pages/Support";
import MyStore from "./pages/MyStore";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import DSADisclosure from "./pages/DSADisclosure";
import FoodwasteSources from "./pages/FoodwasteSources";
import Status from "./pages/Status";
import AboutFoodWaste from "./pages/AboutFoodWaste";
import Business from "./pages/business/Business";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pb-8">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/support" element={<Support />} />
              <Route path="/mystore" element={<MyStore />} />
              <Route path="/about-food-waste" element={<AboutFoodWaste />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dsa-disclosure" element={<DSADisclosure />} />
              <Route path="/foodwaste-sources" element={<FoodwasteSources />} />
              <Route path="/status" element={<Status />} />
              <Route path="/business" element={<Business />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
