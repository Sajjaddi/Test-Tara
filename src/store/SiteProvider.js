import { useState } from "react";

import SiteContext from "./site-context";

const SiteProvider = ({ children }) => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [firstErrorFetch, setFirstErrorFetch] = useState(false);
  const [lang, setLang] = useState({
    current: "en",
    all: ["en", "fa"],
  });

  const siteContext = {
    firstErrorFetch,
    setFirstErrorFetch,
    responsiveNav,
    setResponsiveNav,
    lang,
    setLang,
  };

  return (
    <SiteContext.Provider value={siteContext}>{children}</SiteContext.Provider>
  );
};

export default SiteProvider;
