import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import PageNotFound from "./lib/PageNotFound";

import Home from "./pages/Home";
import LashingBelt from "./pages/LashingBelt";
import WebSling from "./pages/WebSling";
import Contact from "./pages/Contact";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>

        {/* Auto Scroll to Top on Route Change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lashing-belt" element={<LashingBelt />} />
          <Route path="/web-sling" element={<WebSling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </Router>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;