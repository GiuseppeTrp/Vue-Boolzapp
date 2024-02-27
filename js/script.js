// Definizione di un'applicazione Vue
const app = Vue.createApp({
    // Definizione dei dati dell'applicazione
    data() {
        return {
            // Array contenente i contatti
            contacts: [
                { name: 'Michele', lastMessageTime: '12:30', image: "img/avatar_1.jpg", messages: [
                    { message: "Ciao Michele, come stai?", date: "2024-02-27 10:00:00", status: "received", deleted: false },
                    { message: "Ciao! Sto bene, grazie!", date: "2024-02-27 10:05:00", status: "sent", deleted: false },
                    { message: "Che hai fatto oggi?", date: "2024-02-27 10:10:00", status: "received", deleted: false }
                ] },
                { name: 'Fabio', lastMessageTime: '12:45', image: "img/avatar_2.jpg", messages: [] },
                { name: 'Samuele', lastMessageTime: '12:45', image: "img/avatar_3.jpg", messages: [] },
                { name: 'Alessandro B.', lastMessageTime: '11:45', image: "img/avatar_4.jpg", messages: [] },
                { name: 'Alessandro L.', lastMessageTime: '11:45', image: "img/avatar_5.jpg", messages: [] },
                { name: 'Claudia', lastMessageTime: '11:00', image: "img/avatar_6.jpg", messages: [] },
                { name: 'Federico', lastMessageTime: '11:00', image: "img/avatar_7.jpg", messages: [] },
                { name: 'Davide', lastMessageTime: '11:30', image: "img/avatar_8.jpg", messages: [] },
            ],
            // Indice del contatto selezionato
            currentChat: 0,
            // Oggetto contenente il messaggio inviato dall'utente
            messageSent: { message: "" },
            // Stringa contenente l'input di ricerca dell'utente
            searchInput: "",
            // Array contenente risposte casuali
            randomReplies: ["Ok", "Va bene", "Capito", "Perfetto", "Sì", "No"],
        };
    },
    // Definizione dei metodi dell'applicazione
    methods: {
        // Metodo per filtrare i contatti in base all'input di ricerca
        filterContacts() {
            // Inizializzazione di variabili
            const filteredContacts = []; // Array che conterrà i contatti filtrati
            const searchInputLower = this.searchInput.toLowerCase(); // Converti l'input di ricerca in minuscolo( NON case-sensitive)
        
            // Iterazione attraverso tutti i contatti
            this.contacts.forEach((contact) => {
                // Verifica se il nome del contatto corrente include l'input di ricerca
                if (contact.name.toLowerCase().includes(searchInputLower)) {
                    filteredContacts.push(contact); // Aggiungi il contatto filtrato all'array risultante
                }
            });
        
            return filteredContacts; // Restituisci l'array dei contatti filtrati
        },
        // Metodo per selezionare una chat specifica
        selectChat(index) {
            this.currentChat = index; // Imposta l'indice del contatto selezionato
        },
        // Metodo per inviare un nuovo messaggio
        sendNewMessage() {
            // Verifica se il messaggio inviato non è vuoto
            if (this.messageSent.message.trim() === "") return;

            // Creazione di un nuovo messaggio inviato dall'utente
            const newMessage = {
                message: this.messageSent.message, // Testo del messaggio
                status: "sent", // Stato del messaggio
                date: new Date().toLocaleTimeString(), // Data e ora di invio
            };
            // Aggiunta del nuovo messaggio alla lista dei messaggi del contatto attuale
            this.contacts[this.currentChat].messages.push(newMessage);

            // Simulazione di una risposta casuale dopo un secondo
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * this.randomReplies.length); // Genera un indice casuale
                const replyMessage = {
                    message: this.randomReplies[randomIndex], // Selezione di una risposta casuale
                    status: "received", // Stato del messaggio
                    date: new Date().toLocaleTimeString(), // Data e ora di ricezione
                };
                this.contacts[this.currentChat].messages.push(replyMessage); // Aggiunta della risposta casuale
            }, 1000);

            // Reset dell'input del messaggio
            this.messageSent.message = "";
        },
        // Metodo per eliminare un messaggio
        deleteMessage(contactIndex, messageIndex) {
            // Modifica del testo del messaggio eliminato e impostazione dello stato a "deleted"
            this.contacts[contactIndex].messages[messageIndex].message = "messaggio eliminato!";
            this.contacts[contactIndex].messages[messageIndex].deleted = true;
        },
    }
});

// Montaggio dell'applicazione Vue all'interno dell'elemento con id "app"
app.mount("#app");
