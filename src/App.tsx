import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import InitiativeDetail from "./pages/InitiativeDetail";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WorkInNumbers from "./pages/WorkInNumbers";
import Platforms from "./pages/Platforms";
import Research from "./pages/Research";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Media from "./pages/Media";
import Team from "./pages/Team";

import { ThemeProvider } from "./components/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="neecop-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/initiatives/:id" element={<InitiativeDetail />} />
              <Route path="/news/:id" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work-in-numbers" element={<WorkInNumbers />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/research" element={<Research />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/media" element={<Media />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
