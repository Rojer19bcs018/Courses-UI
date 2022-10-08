export interface course {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const courses = [
  {
    id: 1,
    name: 'Maths',
    price: 567,
    description: 'This is good to learn',
  },
  {
    id: 2,
    name: 'Science',
    price: 674,
    description: 'This is good for your life',
  },
  {
    id: 3,
    name: 'Social',
    price: 852,
    description: 'This is good for society',
  },
];
