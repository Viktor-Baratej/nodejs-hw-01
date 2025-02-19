import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async () => {
  try {
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new Error('Contacts data is corrupted!');
    }

    // Фіксована кількість контактів для генерації
    const count = 5; // У ТЗ не вказано, що має бути динамічний аргумент

    // Генеруємо контакти
    const newContacts = Array.from({ length: count }, createFakeContact);

    // Додаємо нові контакти до вже існуючих
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо новий масив у файл
    await writeContacts(updatedContacts);

    console.log(`✅ Successfully added ${count} new contacts!`);
  } catch (error) {
    console.error('❌ Error generating contacts:', error.message);
  }
};

// Виконуємо функцію
generateContacts();
