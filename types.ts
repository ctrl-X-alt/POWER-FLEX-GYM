
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface PricePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface ScheduleItem {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}
