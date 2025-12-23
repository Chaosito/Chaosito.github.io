const crypto = require('crypto');
/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

// Траты
type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

// Доходы
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomChars(pref = '', len = 16): string {
  const buffer = crypto.randomBytes(len);
  return pref + buffer.toString('hex');
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const prod: Product = {
    id: getRandomNumber(1, 100000).toString(),
    name: getRandomChars('name-'),
    photo: getRandomChars('photo-'),
    desc: getRandomChars('desc-'),
    createdAt,
    oldPrice: getRandomNumber(1, 100000),
    price: getRandomNumber(1, 100000),
    category: { id: getRandomNumber(1, 100000).toString(), name: getRandomChars('cat-name-') },
  };
  console.log('rndProd', prod);
  return prod;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const op: Operation = {
    id: getRandomNumber(1, 100000).toString(),
    name: getRandomChars('name-'),
    desc: getRandomChars('desc-'),
    createdAt,
    amount: getRandomNumber(1, 100000),
    category: { id: getRandomNumber(1, 100000).toString(), name: getRandomChars('cat-name-') },
    type: 'Cost',
  };
  console.log('rndOp', op);
  return op;
};
