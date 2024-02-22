



const { createApp } = Vue;
createApp({

  data() {
    // Inizializzo la lista degli indirizzi email come un array vuoto
    return {
        chats: [
            {   name: 'Michele', 
                lastMessageTime: '12:30',
                image:"img/avatar_1.jpg" },

            {   name: 'Fabio',
                lastMessageTime: '12:45',
                image: "img/avatar_2.jpg" },
            {   name: 'Samuele',
                lastMessageTime: '12:45',
                image: "img/avatar_3.jpg" },
            {    name: 'Alessandro B.',
                 lastMessageTime: '11:45',
                 image: "img/avatar_4.jpg"},
            {   name: 'Alessandro L.', 
                lastMessageTime: '11:45',
                image: "img/avatar_5.jpg" },
            {   name: 'Claudia',
                lastMessageTime: '11:00',
                image: "img/avatar_6.jpg" },
            {   name: 'Federico', 
                lastMessageTime: '11:00',
                image: "img/avatar_7.jpg" },
            {   name: 'Davide', 
                lastMessageTime: '11:30',
                image: "img/avatar_8.jpg" },

            // Aggiungi altri utenti qui
            // Puoi aggiungere altre chat manualmente o tramite un ciclo for
          ],
        //   inizializzo una varaibile vuota per la chat che selezionerò
          selectedChat: ""
            }
        },
        methods: {
            selectChat(index) {
                    // Imposta la chat selezionata (in base a quale chat premo l'index verrà sostituito con la posizione della chat nell array)

                this.selectedChat = this.chats[index];
            }
        }
    }).mount('#app');