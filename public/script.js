const messageForm = document.getElementById('messageForm');
const messagesList = document.getElementById('messagesList');

// Fetch and display messages
async function fetchMessages() {
    try {
        const response = await fetch('/api/messages');
        const messages = await response.json();
        
        messagesList.innerHTML = '';
        
        if (messages.length === 0) {
            messagesList.innerHTML = '<div class="loading">No hay mensajes aún. ¡Sé el primero!</div>';
            return;
        }

        messages.forEach((msg, index) => {
            const date = new Date(msg.timestamp).toLocaleString();
            const item = document.createElement('div');
            item.className = 'message-item';
            item.style.animationDelay = `${index * 0.1}s`;
            item.innerHTML = `
                <div class="message-header">
                    <span class="message-name">${escapeHTML(msg.name)}</span>
                    <span class="message-date">${date}</span>
                </div>
                <div class="message-content">${escapeHTML(msg.content)}</div>
            `;
            messagesList.appendChild(item);
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        messagesList.innerHTML = '<div class="loading" style="color: #ef4444">Error al cargar mensajes. ¿Está el servidor encendido?</div>';
    }
}

// Post new message
messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;

    submitBtn.disabled = true;
    submitBtn.innerText = 'Enviando...';

    try {
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, content })
        });

        if (response.ok) {
            messageForm.reset();
            fetchMessages();
        }
    } catch (error) {
        console.error('Error posting message:', error);
        alert('No se pudo enviar el mensaje.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Enviar Mensaje';
    }
});

// Helper to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Initial load
fetchMessages();
