// List of messages to display (with three dots that will blink)
const messages = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."
];

// Helper function to return a random delay between 1 and 7 seconds
function randomDelay() {
    return Math.floor(Math.random() * 7000) + 1000;
}

// Sleep helper that returns a promise resolved after ms milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Dummy fetch function that uses the Fetch API to simulate an async network call.
// It fetches a dummy JSON resource.
async function fakeFetch(message) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        // For demonstration, we log the fetched data to console.
        console.log(`Fetched data for "${message}":`, data);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Main async function to run the hacking simulator
async function runHackingSimulator() {
    const terminal = document.getElementById("terminal");

    for (const msg of messages) {
        // Create a new div for each message.
        const messageElem = document.createElement("div");
        // Replace the literal "..." with blinking dots wrapped in a span.
        const formattedMsg = msg.replace("...", "<span class='blinking'>...</span>");
        messageElem.innerHTML = formattedMsg;
        terminal.appendChild(messageElem);

        // Optional: Scroll the terminal to the bottom as new messages appear.
        terminal.scrollTop = terminal.scrollHeight;

        // Perform a dummy fetch call (demonstrates using the Fetch API with async/await)
        await fakeFetch(msg);

        // Wait for a random delay before showing the next message.
        await sleep(randomDelay());
    }
}

// Start the simulator.
runHackingSimulator();