
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface BookingState {
  serviceId: string | null;
  barberId: string | null;
  date: string | null;
  time: string | null;
}
