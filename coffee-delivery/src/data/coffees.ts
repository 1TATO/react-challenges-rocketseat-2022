import expressoTradicional from '../assets/expressoTradicional.png';
import expressoAmericano from '../assets/expressoAmericano.png';
import expressoCremoso from '../assets/expressoCremoso.png';
import expressoGelado from '../assets/expressoGelado.png';
import cafeComLeite from '../assets/cafeComLeite.png';
import latte from '../assets/latte.png';
import capuccino from '../assets/capuccino.png';
import macchiato from '../assets/macchiato.png';
import mocaccino from '../assets/mocaccino.png';
import chocolateQuente from '../assets/chocolateQuente.png';
import cubano from '../assets/cubano.png';
import havaiano from '../assets/havaiano.png';
import arabe from '../assets/arabe.png';
import irlandes from '../assets/irlandes.png';

export const coffees = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoTradicional,
    price: 9.9,
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: expressoAmericano,
    price: 9.9,
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 9.9,
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
    price: 9.9,
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 9.9,
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.9,
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.9,
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.9,
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 9.9,
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 9.9,
  },
  {
    id: 11,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.9,
  },
  {
    id: 12,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.9,
  },
  {
    id: 13,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.9,
  },
  {
    id: 14,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 9.9,
  },
];
