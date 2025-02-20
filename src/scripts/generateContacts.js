import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  // Перевірка, чи number є коректним числом
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error('Кількість має бути додатним цілим числом!');
  }

  // Зчитуємо список існуючих контактів з файлу
  const contacts = await readContacts();

  // Створюємо нові контакти
  const newContacts = Array.from({ length: number }, createFakeContact);

  // Додаємо нові контакти до існуючих та записуємо в файл db.json.
  await writeContacts([...contacts, ...newContacts]);

  console.log(`✅ Додано ${number} нових контактів!`);
};

generateContacts(3);
