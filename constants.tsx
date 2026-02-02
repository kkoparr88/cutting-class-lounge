
import { Service, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'The Executive Cut',
    description: 'Precision haircut followed by a relaxing hot towel treatment and razor line-up.',
    price: '₱500',
    duration: '45m',
    image: 'https://images.unsplash.com/photo-1599351431247-f10b21ce9e13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Beard Sculpting',
    description: 'Custom beard shaping, trim, and conditioning with premium oils.',
    price: '₱350',
    duration: '30m',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Royal Shave',
    description: 'Old-school straight razor shave with multiple hot towels and essential oil treatment.',
    price: '₱450',
    duration: '40m',
    image: 'https://images.unsplash.com/photo-1512690118275-1aa3c2419ba7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Class & Glass',
    description: 'Full haircut, beard trim, and a luxury skin facial. The complete lounge experience.',
    price: '₱1200',
    duration: '90m',
    image: 'https://images.unsplash.com/photo-1621605815841-aa88014b9a59?auto=format&fit=crop&q=80&w=800'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Marco "The Blade"',
    role: 'Master Barber',
    bio: '15 years of precision engineering in the hair game. Specializes in sharp fades.',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800',
    specialties: ['Skin Fades', 'Razor Line-ups']
  },
  {
    id: 'b2',
    name: 'Elias Thorne',
    role: 'Lead Stylist',
    bio: 'Combining classic techniques with modern urban aesthetics.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    specialties: ['Modern Pomps', 'Color Texturing']
  },
  {
    id: 'b3',
    name: 'Jax Valez',
    role: 'Senior Barber',
    bio: 'The king of beard transitions and intricate design work.',
    image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800',
    specialties: ['Beard Design', 'Classic Tapers']
  }
];

export const ANIMATED_LOGO_VIDEO = 'https://res.cloudinary.com/dsctrukyq/video/upload/v1770009481/Recording_2026-02-01_211143_snfle1.mp4';
export const STATIC_LOGO = 'https://res.cloudinary.com/dsctrukyq/image/upload/v1770010787/CuttingClass_Logo_ypixfc.png';
