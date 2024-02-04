document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    
    // Функція для збереження значень полів у локальне сховище
    function saveFormState() {
        const formData = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
    
    // Функція для заповнення полів форми зі значень локального сховища
    function populateFormFromStorage() {
        const storedData = localStorage.getItem('feedback-form-state');
        if (storedData) {
            const formData = JSON.parse(storedData);
            emailInput.value = formData.email;
            messageInput.value = formData.message;
        }
    }
    
    // Викликаємо функцію populateFormFromStorage при завантаженні сторінки
    populateFormFromStorage();
    
    // Відстежуємо події input на формі і зберігаємо значення полів
    form.addEventListener('input', () => {
        saveFormState();
    });
    
    // Обробник події submit форми
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Перевіряємо, чи обидва поля заповнені перед відправленням
        if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
            const formData = {
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };
            console.log(formData); // Виводимо об'єкт з полями у консоль
            
            // Очищаємо сховище і поля форми
            localStorage.removeItem('feedback-form-state');
            emailInput.value = '';
            messageInput.value = '';
        } else {
            alert('Please fill in both fields before submitting.');
        }
    });
});
