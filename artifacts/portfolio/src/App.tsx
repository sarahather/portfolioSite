import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ExperiencePage from "@/pages/ExperiencePage";
import TravelsPage from "@/pages/TravelsPage";
import SpeakingPage from "@/pages/SpeakingPage";
import CraftsPage from "@/pages/CraftsPage";
import WritingPage from "@/pages/WritingPage";
import ContactPage from "@/pages/ContactPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/experience" component={ExperiencePage} />
      <Route path="/travels" component={TravelsPage} />
      <Route path="/speaking" component={SpeakingPage} />
      <Route path="/crafts" component={CraftsPage} />
      <Route path="/writing" component={WritingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="noise-overlay" />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
