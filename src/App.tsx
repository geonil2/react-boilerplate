import React from "react";

import Router from "@src/routes";

import ScrollToTop from "@src/components/common/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
}

export default App;
