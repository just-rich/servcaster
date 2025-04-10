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

### Installation
1. **Clone or Download the Repo**
   If you haven’t already, clone or download the repository to your local machine.

   ```bash
   git clone <repo-url>
   cd servcaster

2. Install dependencies
   ```bash
   npm install

### 🔁 Running the Bot
Run `npm run start` or `node index.js` manually whenever you need to broadcast a message (e.g., bot updates or removal notices).

> **IMPORTANT:** Don’t forget to **update the message** inside `index.js` before running it, and ensure you’re using the correct bot token.

### 📜 Servers List (`servlist/index.js`)
Lists all servers the bot is in via console logs.  
If the bot has permission to create invite links, it will include one next to the server name.

## To Do
- If there are 2 channels matching any of the keywords, and bot doesn't have perms to send in the 1st channel matching a keyword, it fails and doesn't think to try to the next channel. This needs fixed.

### Author
slapped together by [rich](https://richw.xyz) to notify servers of bot's switching to other applications
