---
prev: false
next: false
description: LNetworkUtils class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).[Utils](/api/LethalNetworkAPI.Utils).LNetworkUtils Class {.h2 .no-border .no-top .no-underline-link}

```csharp
public static class LNetworkUtils
```

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')
<br>&emsp;&rdsh; LNetworkUtils

## Properties

### AllConnectedClients
All connected clients' GUIDs. This will be empty if not connected to a server.

Declaration {.h5}

```csharp
public static ulong[] AllConnectedClients;
```

Returns {.h5}

| Type      | Description                                 |
|:----------|:--------------------------------------------|
| `ulong[]` | An array of all connect clients' NGO guids. |

### IsConnected
Whether the client is connected to a server.

Declaration {.h5}

```csharp
public static bool IsConnected;
```

Returns {.h5}

| Type   | Description                                                                              |
|:-------|:-----------------------------------------------------------------------------------------|
| `bool` | True if the client is currently connected to a server (or hosting it) - otherwise False. |

### IsHostOrServer
Whether the client is the host or server.

Declaration {.h5}

```csharp
public static bool IsHostOrServer;
```

Returns {.h5}

| Type   | Description                                              |
|:-------|:---------------------------------------------------------|
| `bool` | True if the client is hosting a lobby - otherwise False. |

### OtherConnectedClients
All connected clients' GUIDs, except this client.

Declaration {.h5}

```csharp
public static ulong[] OtherConnectedClients;
```

Returns {.h5}

| Type      | Description                                                                  |
|:----------|:-----------------------------------------------------------------------------|
| `ulong[]` | An array of all connect clients' NGO guids - except the current client guid. |

## Methods

### AllConnectedClientsExcept(ulong)
All connected clients' GUIDs, except the specified client.

Declaration {.h5}

```csharp
public static ulong[] AllConnectedClientsExcept(ulong clientId)
```

Parameters {.h5}

| Type    | Name     | Description            |
|:--------|:---------|:-----------------------|
| `ulong` | clientId | The client to exclude. |

Returns {.h5}

| Type      | Description                                                         |
|:----------|:--------------------------------------------------------------------|
| `ulong[]` | An array of all connect clients' NGO guids - except the given guid. |

Remarks {.h5}

This will be empty if not connected to a server.

### AllConnectedClientsExcept(ulong[])
All connected clients' GUIDs, except the specified client.

Declaration {.h5}

```csharp
public static ulong[] AllConnectedClientsExcept(params ulong[] clientIds)
```

Parameters {.h5}

| Type      | Name      | Description             |
|:----------|:----------|:------------------------|
| `ulong[]` | clientIds | The clients to exclude. |

Returns {.h5}

| Type      | Description                                                          |
|:----------|:---------------------------------------------------------------------|
| `ulong[]` | An array of all connect clients' NGO guids - except the given guids. |

Remarks {.h5}

This will be empty if not connected to a server.

### GetClientGuid(int)
Get the client's GUID from the player ID.

Declaration {.h5}

```csharp
public static ulong GetClientGuid(int playerId)
```

Parameters {.h5}

| Type  | Name     | Description            |
|:------|:---------|:-----------------------|
| `int` | playerId | The in-game player ID. |

Returns {.h5}

| Type    | Description            |
|:--------|:-----------------------|
| `ulong` | The client's NGO GUID. |

### GetPlayerId(ulong)
Get the client's player ID from the client's GUID.

Declaration {.h5}

```csharp
public static int GetPlayerId(ulong clientGuid)
```

Parameters {.h5}

| Type    | Name     | Description            |
|:--------|:---------|:-----------------------|
| `ulong` | playerId | The client's NGO GUID. |

Returns {.h5}

| Type  | Description                     |
|:------|:--------------------------------|
| `int` | The client's in-game player ID. |

## Events

### OnNetworkStart
Called when the local client establishes a connection to, or starts up, a server.

Declaration {.h5}

```csharp
public static event Action<bool> OnNetworkStart;
```

Type Parameters {.h5}

| Type   | Description                                    |
|:-------|:-----------------------------------------------|
| `bool` | Whether the local client is the server or not. |
