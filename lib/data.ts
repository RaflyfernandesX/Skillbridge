import type { Mentor, Session } from "@/types";

export const logoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cfJVSfxRBwtFgUZJSomYU7nU8Uk2CXqISjfx6IgsYpgWrvAWzINrV50G6hV0SSafV62XWptJlG23VROr8SxEAFilHbvl2DVt06rDzsaUmOTd34ECb6d8rgx4eAGDI_cMp5h96aSRMFcdn-unG8JMzjBSqghAdJ6rEDh4g0MVM3z4P6-NXrFTLlIt3kT1n6Rkc14jxgunT2sPi2cCnahPZk4rUktsFzYhyN4e24oNIcv-Z4887A3g3Hov-pbsG-dtEkSguzBBKiV-";

export const user = {
  name: "Rafly Fernandes",
  role: "Frontend Developer",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEu-4GL3NLXJ2OoIphaWGgORJeEe_aWdPl5q1jypGGqKONZ5Y3LZL4n2DF2dkyAXUpMeR7V4TrQEHbL1BZhO48hGhxMq_6VRzOpEjkFcpR9p1lUvniu3NLxlI5Gm6PynnrYLC-_GZ5j18XS2PwJxnPfUPVAotY-TCpYXI-xELMDKIm74_PNde6Bldn5eXHOz9CRFmD8Qp4uhNIjUo3aSTBH9brMuNIIjSgL1Pl_1XaTiq3s1vH0jYNK0Bs7gekCXqH-2sOYFsDD3nj",
};

export const mentors: Mentor[] = [
  {
    id: "budi-akbar",
    name: "Budi Akbar",
    role: "Senior Frontend Engineer",
    company: "Gojek",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_leEFs5T9jl_NFCC0cUTB3P-JgvyqqH1Vt9tKVp4gi3TeBFUKzk_GiiGCbjjaQJmDJ8-uRFoQrdW3nOzPmyzgMjIwiH_K_l4wjcSrMypLiOjPUIpb6QLRyRJA1wqvC8Gx0-HX5N0RRUtN6Z-TSMfBfjKqVUbrHPFMZHZ0IXj83v3L-5V5psuKLPzwesg-ZocJm1oQbmGFE2AVlSo4JkbmoO4yt5BMAvobYYeypkAP1RPzAROgfBR_LBVuUKJR1yFXjVank1I7TjJQ",
    rating: 4.9,
    reviews: 186,
    price: 180000,
    status: "Online",
    experience: "9 tahun",
    skills: ["React", "Next.js", "TypeScript"],
    bio: "Berpengalaman membangun aplikasi web berskala besar menggunakan React, Next.js, dan TypeScript. Aktif membimbing developer junior hingga level menengah."
  },
  {
    id: "siti-aisyah",
    name: "Siti Aisyah",
    role: "Senior UI/UX Designer",
    company: "Tokopedia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJrqPWpb_7b3EhCGY4WKirtrg_EwW-bvWPZoGWC-pHwqJ1-PRmFIwY--bpP0DI1yzwZpBqbL9yxi4pQs2t_RS20tVCghYWXpO8tybr46ioQwXHf16WsN5q5TwASUXP57sBzmp9el_V8pgxzfspAQaY-EpDhi51WjwEF-z2H2rUqrmeDhg5bsojoxm9y-FpbpzORhzYNfPsSxLVC3dgxD-D0jEj4hn8sDx6CZ46mjI_Tgn7tIrWhrLWIyD4OVkP-hzh19hBlmT8KKf3",
    rating: 4.8,
    reviews: 154,
    price: 170000,
    status: "Online",
    experience: "8 tahun",
    skills: ["Figma", "Design System", "UX Research"],
    bio: "Membantu desainer membangun portofolio yang menarik dan memahami proses desain produk digital dari riset hingga implementasi."
  },
  {
    id: "andika-pratama",
    name: "Andika Pratama",
    role: "Backend Engineer",
    company: "Traveloka",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkxLwEOPR7Q-KQ6KYdeAyHfqMEC56-XyUnX8C2yjyVBMKHygAW5qyvpZvkxlesi8-ZFLI_e__pRx6WLWMskJjvOf3q62yVdMPL4iodEaO8ur_QTTELnDbeFY2EnzXLTmRA_Ij8HVu0nI3u7ceWE95WYpzysYyGuzGMEymaeJ0gUxVCTZTRr9FEZGNinJdlIyI58SMlnmrYKZs0O9aAqMc3z-gsYN9qOkVLWn63u21cGs8_EHhme-E4LsUFm6Df5AmlTQ3f0v6lQ2dp",
    rating: 4.9,
    reviews: 121,
    price: 200000,
    status: "Online",
    experience: "10 tahun",
    skills: ["Node.js", "Go", "PostgreSQL"],
    bio: "Fokus pada pengembangan backend, arsitektur microservices, dan optimasi performa sistem berskala besar."
  },
  {
    id: "putri-maharani",
    name: "Putri Maharani",
    role: "Product Manager",
    company: "Ruangguru",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCB-C_Gd0dgLvryaeHvhjKHacCy9VvzPrRaZkQT-_hROjprOaRGWwFIkeuZD55tJ2pxneqcAdkbfCDGcdpf_dW2FJIIb1bTl5jlZdCeUVwcJqZvDgvOrFBUoAx6E8KFHUe6GNA0U7xs7ecUD6NMJocMB5y3lTAHSo54o_0lIvc-RgdV5Z_r3xcLZW-WXTxUbtfusP7A_IA5lApVR9Tro50d6C9E0GGuQSPMvjlWyestBxa_TL16Ae6Zp_p_OPpROOjvhoGiebxWvkQ",
    rating: 4.9,
    reviews: 137,
    price: 190000,
    status: "Online",
    experience: "7 tahun",
    skills: ["Product Strategy", "Agile", "Roadmap"],
    bio: "Berpengalaman memimpin pengembangan produk digital dan membantu calon Product Manager memahami proses end-to-end product development."
  }
];
export const sessions: Session[] = [
  {
    id: "1",
    title: "Review Portofolio Frontend",
    mentor: "Budi Akbar",
    role: "Senior Frontend Engineer",
    date: "Hari Ini",
    time: "19.00 - 20.00 WIB",
    status: "upcoming",
    action: "Gabung",
  },
  {
    id: "2",
    title: "Membangun Design System dengan Figma",
    mentor: "Siti Aisyah",
    role: "Senior UI/UX Designer",
    date: "Besok",
    time: "13.00 - 14.00 WIB",
    status: "upcoming",
    action: "Lihat Detail",
  },
  {
    id: "3",
    title: "Membangun REST API dengan Node.js",
    mentor: "Andika Pratama",
    role: "Backend Engineer",
    date: "25 Juli 2026",
    time: "20.00 - 21.00 WIB",
    status: "completed",
    action: "Lihat Ringkasan",
  },
];

export const categories = [
  {
    title: "Frontend Development",
    description: "React, Next.js, Vue, TypeScript",
    count: "120+ Mentor",
  },
  {
    title: "Backend Development",
    description: "Node.js, Go, Laravel, PostgreSQL",
    count: "90+ Mentor",
  },
  {
    title: "UI/UX Design",
    description: "Figma, UX Research, Design System",
    count: "75+ Mentor",
  },
  {
    title: "Data & AI",
    description: "Python, SQL, Machine Learning",
    count: "50+ Mentor",
  },
  {
    title: "Mobile Development",
    description: "Flutter, Android, React Native",
    count: "65+ Mentor",
  },
  {
    title: "Product Management",
    description: "Product Strategy, Agile, Scrum",
    count: "35+ Mentor",
  },
];


