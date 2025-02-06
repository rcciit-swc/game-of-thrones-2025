export interface Link {
  title: string;
  url: string;
}

export interface Coordinator {
  name: string;
  phone: string;
}

export interface Event {
  name: string;
  price: string;
  prize: string;
  imagePath: string;
  minTeamSize: number;
  maxTeamSize: number;
  schedule: string;
  description: string;
  rules: string;
  coordinators: Coordinator[];
  links: Link[];
}

export const events: Event[] = [
  {
    name: "BADMINTON",
    price: "₹500/- (Team)",
    prize: "₹5000/-",
    imagePath: "BADMINTON",
    minTeamSize: 1,
    maxTeamSize: 2,
    schedule: "14TH-15TH FEBRUARY 2025",
    description: "A thrilling badminton tournament for all skill levels.",
    rules: "Standard badminton rules apply.",
    coordinators: [
      { name: "John Doe", phone: "1234567890" },
      { name: "Jane Smith", phone: "9876543210" }
    ],
    links: [
      { title: "Registration", url: "https://example.com/badminton" }
    ]
  },
  {
    name: "CRICKET",
    price: "₹700/- (Team)",
    prize: "₹7000/-",
    imagePath: "CRICKET",
    minTeamSize: 7,
    maxTeamSize: 11,
    schedule: "14TH-15TH FEBRUARY 2025",
    description: "A competitive cricket tournament for teams.",
    rules: "ICC standard rules apply.",
    coordinators: [
      { name: "Rahul Sharma", phone: "1122334455" },
      { name: "Amit Verma", phone: "5566778899" }
    ],
    links: [
      { title: "Registration", url: "https://example.com/cricket" }
    ]
  }
];

export const getEventByName = (name: string) => {
  return events.find(event => event.name === name);
};
