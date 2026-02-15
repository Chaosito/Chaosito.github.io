/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
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
export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

// Доходы
export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

export type Operation = Cost | Profit;

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomChars(pref = '', len = 16): string {
  const buffer = window.crypto.getRandomValues(new Uint8Array(len));
  return (
    pref +
    Array.from(buffer)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  );
}

export function getRandomPhotoUrl(): string {
  const photos = [
    'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg',
    'https://sonycenter.kz/image/cache/catalog/products/old/PS719999591-Sony-PlayStation-Classic/PS719999591-Sony-PlayStation-Classic-7694-600x600.png',
    'https://www.euronics.lv/UserFiles/Products/Images/368452-554932-medium.png',
  ];
  return photos[getRandomNumber(0, photos.length - 1)];
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const prod: Product = {
    id: getRandomNumber(1, 100000).toString(),
    name: getRandomChars('name-', 8),
    photo: getRandomPhotoUrl(),
    desc: getRandomChars('desc-', 8),
    createdAt,
    oldPrice: getRandomNumber(1, 100000),
    price: getRandomNumber(1, 100000),
    category: { id: getRandomNumber(1, 100000).toString(), name: getRandomChars('cat-name-', 4) },
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
    name: getRandomChars('name-', 8),
    desc: getRandomChars('desc-', 8),
    createdAt,
    amount: getRandomNumber(500, 3000),
    category: { id: getRandomNumber(1, 100000).toString(), name: getRandomChars('cat-name-', 4) },
    type: getRandomNumber(0, 1) ? 'Cost' : 'Profit',
  };
  console.log('rndOp', op);
  return op;
};
