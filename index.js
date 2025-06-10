// Define currentUser
const currentUser = 'Grace Hopper';

// Create a welcome message with template literals and exclamation mark
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Convert the welcome message to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using only the first initial of the currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
