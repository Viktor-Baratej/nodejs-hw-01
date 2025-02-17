import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new Error('Existing contacts data is corrupted!');
    }

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву
    const updatedContacts = [...existingContacts, newContact];

    console.log('📝 Adding new contact:', newContact); // Додаємо лог для перевірки

    // Записуємо оновлений список контактів у файл
    await writeContacts(updatedContacts);

    console.log(`✅ Successfully added a new contact!`);
  } catch (error) {
    console.error('❌ Error adding contact:', error.message);
  }
};

// Виконуємо функцію
addOneContact();
