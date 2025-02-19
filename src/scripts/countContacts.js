import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Дані контактів пошкоджено!');
    }

    const count = contacts.length;
    console.log(`📊 Всього контактів: ${count}`);
    return count;
  } catch (error) {
    console.error('❌ Помилка підрахунку контактів:', error.message);
    return 0;
  }
};

console.log(await countContacts());
