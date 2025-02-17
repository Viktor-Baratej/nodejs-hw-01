import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // Отримуємо список контактів
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is corrupted!');
    }

    const count = contacts.length;
    console.log(`📊 Total contacts: ${count}`);
    return count;
  } catch (error) {
    console.error('❌ Error counting contacts:', error.message);
    return 0;
  }
};

console.log(await countContacts());
