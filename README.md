# valorant-fantasy-poc

First attempt at building a real-time draft-based fantasy application for valorant tournaments

Project structure:

- entrypoint file: index.js
  - This file starts the backend and imports all other files to link everything together
- routes folder:
  - folder to hold all routes for backend. Try to keep it to 1 file per route type. For example, all account related routes could go in account.js, while all league related routes could go in league.js, etc
- models folder:
  - folder to hold model/schema definitions for database (MongoDB for now, subject to change)
- services folder:
  - folder to hold all other logic, for example scraping VLR for player data, etc
- config
  - contains keys and passwords etc for database. Main file in here will be keys.js, and will not be committed to git for security reasons, if you make a change send it in discord so everyone has it.

General Project Guildelines:
- Make all changes on separate branch associated with task card in the project organization board(create new branch with "git checkout -b {branch name}" (without the curly braces))
- Once done, let me know and I'll merge it in and move the card to merged
- DO NOT TOUCH MAIN/MASTER BRANCH


