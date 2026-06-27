import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClientInstance } from "@/lib/query-client";
import { Toaster } from "@/components/ui/toaster";

import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./lib/PageNotFound";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import OneWayCargoLashing from "./pages/OneWayCargoLashing";
import RatchetLashing from "./pages/RatchetLashing";
import LiftingSlings from "./pages/LiftingSlings";
import Hardware from "./pages/Hardware";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          <Route
            path="/products/one-way-cargo-lashing"
            element={<OneWayCargoLashing />}
          />

          <Route
            path="/products/ratchet-lashing"
            element={<RatchetLashing />}
          />

          <Route
            path="/products/lifting-slings"
            element={<LiftingSlings />}
          />

          <Route
            path="/products/hardware"
            element={<Hardware />}
          />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;