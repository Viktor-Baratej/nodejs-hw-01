import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new Error('Існуючі дані контактів пошкоджено!');
    }

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву
    const updatedContacts = [...existingContacts, newContact];

    console.log('📝 Додавання нового контакту:', newContact);

    // Записуємо оновлений список контактів у файл
    await writeContacts(updatedContacts);

    console.log(`✅ Успішно додано новий контакт!`);
  } catch (error) {
    console.error('❌ Помилка додавання контакту:', error.message);
  }
};

// Виконуємо функцію
addOneContact();
