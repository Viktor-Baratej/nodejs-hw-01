import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Дані контактів пошкоджено!');
    }

    console.log('📋 Всі контакти:', contacts);
    return contacts;
  } catch (error) {
    console.error('❌ Помилка читання контактів:', error.message);
    return [];
  }
};
console.log(await getAllContacts());
