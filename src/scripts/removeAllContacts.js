import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // Очищуємо список контактів
    const emptyContacts = [];

    // Записуємо порожній масив у файл
    await writeContacts(emptyContacts);

    console.log('🗑️ Усі контакти видалено!');
  } catch (error) {
    console.error('❌ Помилка видалення контактів:', error.message);
  }
};

removeAllContacts();
