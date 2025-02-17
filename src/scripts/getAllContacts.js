import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is corrupted!');
    }

    console.log('📋 All contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('❌ Error reading contacts:', error.message);
    return [];
  }
};
console.log(await getAllContacts());
