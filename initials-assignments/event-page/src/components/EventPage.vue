<template>
    <div class="event-page">
      <h1>Upcoming Concert Events!</h1>
      <div class="event-cards">
        <!-- Concert Event 1 (Adele) -->
        <div class="event-card">
          <img src="@/assets/Adele-Picture.webp" alt="Adele Concert" class="event-image" />
          <div class="event-details">
            <h2>Adele</h2>
            <p>Pop</p>
            <p>November 15, 2023 - 8:00 PM</p>
            <button @click="showPrice('Adele', 50)" class="buy-button">Get Ticket</button>
          </div>
        </div>
        <!-- Concert Event 2 (Atif Aslam) -->
        <div class="event-card">
          <img src="@/assets/Atif-Picture.jpeg" alt="Atif Aslam Concert" class="event-image" />
          <div class="event-details">
            <h2>Atif Aslam</h2>
            <p>Bollywood/Pop</p>
            <p>November 22, 2023 - 7:30 PM</p>
            <button @click="showPrice('Atif Aslam', 60)" class="buy-button">Get Ticket</button>
          </div>
        </div>
        <!-- Concert Event 3 (Roddy Ricch) -->
        <div class="event-card">
          <img src="@/assets/Roddy-Picture.jpeg" alt="Roddy Ricch Concert" class="event-image" />
          <div class="event-details">
            <h2>Roddy Ricch</h2>
            <p>Rap/Hip-Hop</p>
            <p>December 5, 2023 - 9:00 PM</p>
            <button @click="showPrice('Roddy Ricch', 70)" class="buy-button">Get Ticket</button>
          </div>
        </div>
        <!-- Concert Event 4 (Central Cee) -->
        <div class="event-card">
          <img src="@/assets/Cee-Picture.avif" alt="Central Cee Concert" class="event-image" />
          <div class="event-details">
            <h2>Central Cee</h2>
            <p>UK Rap</p>
            <p>December 18, 2023 - 7:00 PM</p>
            <button @click="showPrice('Central Cee', 80)" class="buy-button">Get Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showPrice(musician, price) {
        alert(`Musician: ${musician}, Ticket Price: $${price}`);
      },
    },
  };
  </script>
  
  <style scoped>
  h1{
    font-family: 'Orbitron', sans-serif;
    font-weight: 700; /* Make sure to specify the correct font weight */
    font-size: 34px; /* Adjust the font size as needed */
  }
  .event-page {
    font-family: sans-serif;
    text-align: center;
    align-items: center;
    background-color: #f4f4f4;
    margin-left: 160px;
    margin-top: 40px;
  }
  
  .event-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Display two cards per row */
    gap: 20px; /* Add some spacing between cards */
    justify-content: center; /* Center the cards horizontally */
    margin-top: 40px;
  }
  
  .event-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;
    height: 100%;
    width: 400px; /* Adjust the width as needed */
    margin: 0 auto; /* Center the cards horizontally */
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-image {
    border-radius: 5px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  
  .event-details h2 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  .event-details p {
    color: #666;
  }
  
  .buy-button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .buy-button:hover {
    background-color: #ff3300;
  }
  </style>  