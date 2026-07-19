export type Mentor = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  status: "Online" | "Away";
  experience: string;
  skills: string[];
  bio: string;
};

export type Session = {
  id: string;
  title: string;
  mentor: string;
  role: string;
  time: string;
  date: string;
  status: "upcoming" | "completed" | "cancelled";
  action: string;
};
