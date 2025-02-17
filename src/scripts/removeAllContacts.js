import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // Очищуємо список контактів
    const emptyContacts = [];

    // Записуємо порожній масив у файл
    await writeContacts(emptyContacts);

    console.log('🗑️ All contacts have been removed!');
  } catch (error) {
    console.error('❌ Error removing contacts:', error.message);
  }
};

removeAllContacts();
