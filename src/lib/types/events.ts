export interface Link {
  title: string
  url: string
}

export interface Coordinator {
    name: string
    phone: string
}

export interface events {
  name: string;
  price: string;
  prize: string;
  imagePath: string;
  minTeamSize: number;
  maxTeamSize: number;
  schedule: string;
  description: string;
  rules: string;
  coordinators: {
    name: string;
    phone: string;
  }[];
  links: {
    title: string;
    url: string;
  }[];
}