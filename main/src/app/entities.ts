export class Location{
    lat: number;
    long: number;
    address: string;
};

export class Contact {
  name: string;
  phone: string;
};

export class Pin {
  type_of: number;
  subject: string;
  category: string;
  status: boolean;
  priority: number;
  location = new Location();
  contact: Contact;
  notes: string;
};
