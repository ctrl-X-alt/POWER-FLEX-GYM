
import { Program, Trainer, PricePlan, Testimonial, ScheduleItem } from './types';

export const GYM_DETAILS = {
  name: "POWER FLEX GYM",
  location: "Al Raffa Residence",
  address: "Residence - Al Raffa - Dubai - United Arab Emirates",
  phone: "+971 56 578 8754",
  hours: "Open · Closes 1 AM",
  rating: 4.6,
  reviewCount: 35
};

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'CrossFit',
    description: 'High-intensity functional movements designed for elite fitness levels.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Bodybuilding',
    description: 'Hypertrophy focused training with expert guidance on form and volume.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Yoga & Mobility',
    description: 'Improve flexibility, balance, and mental clarity with our expert yogis.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'MMA & Combat',
    description: 'Learn self-defense and striking from professional martial artists.',
    image: 'https://www.combatsportscentre.co.uk/images/magazine/mma-2.jpg'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Ahmed Mansoor',
    specialty: 'Head Strength Coach',
    bio: '10+ years of experience in transformation and powerlifting.',
    image: 'https://cdn.onefc.com/wp-content/uploads/2023/07/Amir-Aliakbari-Dustin-Joynson-ONE-Fight-Night-12-44.jpg'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    specialty: 'Yoga & Pilates',
    bio: 'Certified in Hatha Yoga with a focus on core stability and posture.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimwt3y7ZubLYimDTxUMHPy5-B_zRRepAE5Q&s'
  },
  {
    id: '3',
    name: 'Marcus Bell',
    specialty: 'Combat Arts',
    bio: 'Former pro MMA fighter specializing in Muay Thai and BJJ.',
    image: 'https://media.istockphoto.com/id/502096902/photo/mma-fighter-on-a-smokey-background.jpg?s=612x612&w=0&k=20&c=vG4ziCyWXP3VivL92YPeG3YrhhMXGw0mJEbtQ9x7vg0='
  }
];

export const PRICING: PricePlan[] = [
  {
    id: '1',
    name: 'Monthly',
    price: '299',
    period: '/month',
    features: ['Unlimited Gym Access', '1 Free PT Session', 'Locker Access', 'Mobile App Access']
  },
  {
    id: '2',
    name: 'Annual Pass',
    price: '2499',
    period: '/year',
    features: ['Everything in Monthly', '12 Free PT Sessions', 'Guest Passes', 'Nutrition Consultation'],
    isPopular: true
  },
  {
    id: '3',
    name: 'Day Pass',
    price: '50',
    period: '/day',
    features: ['Full Gym Access', 'Sauna Access', 'Shower Facility']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Miller',
    rating: 5,
    text: "The best gym in Al Raffa. The equipment is top-notch and the vibe is unmatched!",
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: '2',
    name: 'Fatima Al-Sayed',
    rating: 5,
    text: "Professional trainers and a very clean environment. Highly recommend the yoga classes.",
    avatar: 'https://i.pravatar.cc/150?u=fatima'
  },
  {
    id: '3',
    name: 'Jason Statham',
    rating: 4,
    text: "Great community. Open late, which is perfect for my busy schedule.",
    avatar: 'https://i.pravatar.cc/150?u=jason'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '07:00 AM', monday: 'CrossFit', tuesday: 'Yoga', wednesday: 'CrossFit', thursday: 'Yoga', friday: 'Cardio', saturday: 'Bootcamp', sunday: 'Closed' },
  { time: '10:00 AM', monday: 'Bodybuilding', tuesday: 'MMA', wednesday: 'Bodybuilding', thursday: 'MMA', friday: 'HIIT', saturday: 'Yoga', sunday: 'Closed' },
  { time: '05:00 PM', monday: 'HIIT', tuesday: 'CrossFit', wednesday: 'HIIT', thursday: 'CrossFit', friday: 'Powerlifting', saturday: 'MMA', sunday: 'Open Gym' },
  { time: '08:00 PM', monday: 'Combat', tuesday: 'Bodybuilding', wednesday: 'Combat', thursday: 'Bodybuilding', friday: 'Yoga', saturday: 'Cardio', sunday: 'Open Gym' },
];