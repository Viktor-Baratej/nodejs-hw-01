import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is corrupted!');
    }

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    // Видаляємо останній елемент
    contacts.pop();

    // Записуємо оновлений список контактів у файл
    await writeContacts(contacts);

    console.log('🗑️ Last contact has been removed!');
  } catch (error) {
    console.error('❌ Error removing last contact:', error.message);
  }
};

removeLastContact();
