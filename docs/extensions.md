---
prev: false
next: false
description: Extension Methods for LethalNetworkAPI
---

# Lethal Network Extensions

These are a few extension methods to aid your programming with this API.

## Get Player Controller from Id {#get-player-controller}

The method `GetPlayerController()` allows you to get a `PlayerContollerB` from a `ulong` id. This is an extension to `ulong`, so using it is as simple as shown:

```csharp
ulong clientId = 1;

PlayerControllerB player = clientId.GetPlayerController(); // [!code highlight]
```

::: warning REMARKS
If no player is found from the id, the method will return `null`.
:::

## Get Client Id from Player {#get-client-id}

The method `GetClientId()` allows you to get the client Id from a `PlayerControllerB`.

```csharp
PlayerControllerB player;

ulong player = player.GetClientId(); // [!code highlight]
```

## Create/Reference Network Variables

You can use `NetworkVariable<TData>(string identifier)` on any GameObject, NetworkObject, or NetworkBehaviour that has a Network Object component on the (parent) GameObject.

```csharp
PlayerControllerB networkBehaviourInstance;
GameObject gameObjectInstance = networkBehaviourInstance.gameObject;
NetworkObject networkObjectInstance = gameObjectInstance.GetComponent<NetworkObject>();

LethalNetworkVariable<string> customStringOne = instance.NetworkVariable<string>("customString");
LethalNetworkVariable<string> customStringTwo = instance.NetworkVariable<string>("customString");
LethalNetworkVariable<string> customStringThree = instance.NetworkVariable<string>("customString");
```