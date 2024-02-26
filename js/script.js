const app = Vue.createApp({
    // Definizione di dati iniziali
    data() {
        return {
            // Lista dei contatti
            contacts: [
                { name: 'Michele', lastMessageTime: '12:30', image: "img/avatar_1.jpg", messages: [] }, // Contatto Michele
                { name: 'Fabio', lastMessageTime: '12:45', image: "img/avatar_2.jpg", messages: [] }, // Contatto Fabio
                { name: 'Samuele', lastMessageTime: '12:45', image: "img/avatar_3.jpg", messages: [] }, // Contatto Samuele
                { name: 'Alessandro B.', lastMessageTime: '11:45', image: "img/avatar_4.jpg", messages: [] }, // Contatto Alessandro B.
                { name: 'Alessandro L.', lastMessageTime: '11:45', image: "img/avatar_5.jpg", messages: [] }, // Contatto Alessandro L.
                { name: 'Claudia', lastMessageTime: '11:00', image: "img/avatar_6.jpg", messages: [] }, // Contatto Claudia
                { name: 'Federico', lastMessageTime: '11:00', image: "img/avatar_7.jpg", messages: [] }, // Contatto Federico
                { name: 'Davide', lastMessageTime: '11:30', image: "img/avatar_8.jpg", messages: [] }, // Contatto Davide
                // Aggiungi altri contatti qui
            ],
            // Indice del contatto corrente
            currentChat: 0,
            // Messaggio inviato dall'utente
            messageSent: { message: "tra un pò torno a casa" }, // Messaggio iniziale vuoto
            
            // Testo di ricerca per filtrare i contatti
            searchInput: ""
        };
    },
    // Metodi per interazioni dell'utente
    methods: {
        // Metodo per filtrare i contatti in base alla ricerca dell'utente
        filterContacts: function() {
            var filteredContacts = [];
            var searchInput = this.searchInput.toLowerCase();
            
            for (var i = 0; i < this.contacts.length; i++) {
                var contactName = this.contacts[i].name.toLowerCase();
                if (contactName.includes(searchInput)) {
                    filteredContacts.push(this.contacts[i]);
                }
            }
            
            return filteredContacts;
        },
        // Seleziona un contatto per visualizzare la conversazione
       // Seleziona un contatto per visualizzare la conversazione
selectChat: function(index) {
        this.currentChat = index;
    },
    // Invia un nuovo messaggio
    sendNewMessage: function() {
        // Controlla se il messaggio non è vuoto
        if (this.messageSent.message.trim() !== '') {
            // Crea un nuovo messaggio con data attuale
            var newMessage = {
                message: this.messageSent.message, // Testo del messaggio
                status: 'sent', // Stato iniziale: inviato
                date: new Date().toLocaleTimeString() // Ottiene l'ora corrente
            };
            // Aggiungi il nuovo messaggio alla conversazione corrente
            this.contacts[this.currentChat].messages.push(newMessage);

            // Simula una risposta dall'interlocutore dopo 1 secondo
            var self = this;
            setTimeout(function() {
                var replyMessage = {
                    message: 'Ok', // Messaggio di risposta
                    status: 'received', // Stato: ricevuto
                    date: new Date().toLocaleTimeString() // Ottiene l'ora corrente
                };
                // Aggiungi la risposta alla conversazione corrente
                self.contacts[self.currentChat].messages.push(replyMessage);
            }, 1000);

            // Resetta il campo di input
            this.messageSent.message = '';
        }
    }
   

    }
});

// Monta l'applicazione Vue sull'elemento con id "app"
app.mount('#app');