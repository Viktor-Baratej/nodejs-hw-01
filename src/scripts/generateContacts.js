import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async () => {
  try {
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new Error('Дані контактів пошкоджено!');
    }

    // Фіксована кількість контактів для генерації
    const count = 5;

    // Генеруємо контакти
    const newContacts = Array.from({ length: count }, createFakeContact);

    // Додаємо нові контакти до вже існуючих
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо новий масив у файл
    await writeContacts(updatedContacts);

    console.log(`✅ Успішно додано ${count} нових контактів!`);
  } catch (error) {
    console.error('❌ Помилка створення контактів:', error.message);
  }
};

// Виконуємо функцію
generateContacts();
