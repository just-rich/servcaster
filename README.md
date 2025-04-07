# ServCaster (Servers Message Broadcast)

A simple bot that sends a predefined message into each server it's in.

### How It Works
- The bot searches for a channel with keywords like **main**, **chat**, **lounge**, etc.
- If no matching channel is found, it falls back to the first channel it has permission to send messages in (in tests, this sometimes ends up being the bottom-most channel).
- The message is logged in the console for each server.

### Console Log Statuses
- ✅ **SUCCESS** – Found a channel with a keyword and sent the message.
- 🟡 **GOOD ENOUGH** – No keyword found, but sent the message in a channel it had permissions in.
- ❌ **FAILED** – Couldn’t send the message in any channel.

### 🔁 Running the Bot
Run `node index.js` manually whenever you need to broadcast a message (e.g., bot updates or removal notices).

> **IMPORTANT:** Don’t forget to **update the message** inside `index.js` before running it, and ensure you’re using the correct bot token.

### 📜 Servers List (`servlist/index.js`)
Lists all servers the bot is in via console logs.  
If the bot has permission to create invite links, it will include one next to the server name.
