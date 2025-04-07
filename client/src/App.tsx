import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Set title
  useEffect(() => {
    document.title = "My Personal Portfolio";
  }, []);

  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
