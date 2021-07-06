export const NewsLetterNav = (locale) => [
  {
    href: "/our-journey",
    name: locale === "en" ? "Our Journey" : "رحلتنا",
  },
  {
    href: "/download-issues",
    name: locale === "en" ? "Download Issues" : "تحميل الاصدارات",
  },
  {
    href: "/symbols",
    name: locale === "en" ? "Symbols" : "الرموز",
  },
  {
    href: `https://www.ithra.com/${locale}/terms-conditions/`,
    name: locale === "en" ? `Terms & Conditions` : "الشروط والأحكام",
    target: "_blank",
  },
  {
    href: `https://www.ithra.com/${locale}/privacy-policy/`,
    name: locale === "en" ? "Privacy Policy" : "سياسة الخصوصية",
    target: "_blank",
  },
  {
    href: "/contact-us",
    name: locale === "en" ? "Contact Us" : "اتصل بنا",
  },
];

export const HeaderNav = (locale) => [
  {
    href: "/editions",
    name: locale === "en" ? "Editions" : "الاصدارات",
  },
  {
    href: "/stories",
    name: locale === "en" ? "Our Stories" : "القصص",
  },
  {
    href: "/creatives",
    name: locale === "en" ? "Our Creatives" : "الفنانون",
  },
  {
    href: "/join-experience",
    name: locale === "en" ? "Join The Experience" : "انضم إلى التجربة",
  },
  {
    href: "/gallery",
    name: locale === "en" ? "Gallery" : "معرض الصور",
  },
  {
    href: "/contact-us",
    name: locale === "en" ? "Contact Us" : "اتصل بنا",
  },
];
