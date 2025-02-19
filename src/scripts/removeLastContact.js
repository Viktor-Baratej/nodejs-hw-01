import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Дані контактів пошкоджено!');
    }

    if (contacts.length === 0) {
      console.log('Немає контактів для видалення.');
      return;
    }

    // Видаляємо останній елемент
    contacts.pop();

    // Записуємо оновлений список контактів у файл
    await writeContacts(contacts);

    console.log('🗑️ Останній контакт видалено!');
  } catch (error) {
    console.error('❌ Помилка видалення останнього контакту:', error.message);
  }
};

removeLastContact();
