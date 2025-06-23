---
prev: true
next: false
description: A glossary of common Lethal Company networking terms.
---

- **Netcode for GameObjects (NGO)** : *The networking library/backend proveded by Unity; it is the code that allows the game to be networked.*
- **Client ID** : *The Global Unique Identifier (GUID) for a client, as determined by Netcode for GameObjects. Can be found in `PlayerContollerB.actualClientId`*
- **Player ID** : *The position of the player's script in the `StartOfRound.allPlayerScripts` list, as determined by the host on join. In vanilla, this value is only ever 0-3. Can be found in `PlayerControllerB.playerClientId`*
