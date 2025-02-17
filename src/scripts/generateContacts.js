import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count) => {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: count }, createFakeContact);

    // Додаємо нові контакти до вже існуючих
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо оновлений список контактів у файл
    await writeContacts(updatedContacts);

    console.log(`✅ Successfully added ${count} new contacts!`);
  } catch (error) {
    console.error('❌ Error generating contacts:', error.message);
  }
};

// Отримуємо кількість контактів з аргументів командного рядка
const count = parseInt(process.argv[2], 10);

if (!isNaN(count) && count > 0) {
  generateContacts(count);
} else {
  console.log('❌ Please provide a valid number of contacts to generate.');
}
