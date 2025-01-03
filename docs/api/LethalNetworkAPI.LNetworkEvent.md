---
prev: false
next: false
description: LNetworkEvent class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LNetworkEvent Class {.h2 .no-border .no-top .no-underline-link}

Used to invoke events between clients (and the server/host).

```csharp
public sealed class LNetworkEvent
```

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') 
<br>&emsp;&rdsh; LNetworkEvent

Remarks {.h3}

Will not interact with [LNetworkMessage&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkMessage), 
[LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable), nor with other mods - even if the identifier is not unique.

### Methods

### ClearSubscriptions()
Clear all subscriptions to all callbacks on this <a class="no-underline-link">LNetworkEvent</a>.

Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### Connect(string, Action&lt;ulong&gt;?, Action?, Action&lt;ulong&gt;?)
Creates a new <a class="no-underline-link">LNetworkEvent</a> if it doesn't already exist, otherwise returns the existing event of the same identifier.

Declaration {.h5}

```csharp
public static LNetworkEvent Connect(string identifier, Action<ulong>? onServerReceived = null, Action? onClientReceived = null, Action<ulong>? onClientReceivedFromClient = null)
```

Parameters {.h5}

| Type             | Name                       | Description                                                                     |
|:-----------------|:---------------------------|:--------------------------------------------------------------------------------|
| `string`         | identifier                 | The identifier of the <a class="no-underline-link">LNetworkEvent</a>.           |
| `Action<ulong>?` | onServerReceived           | [Opt.] The method to run when the server receives an event.                     | 
| `Action?`        | onClientReceived           | [Opt.] The method to run when the client receives an event.                     | 
| `Action<ulong>?` | onClientReceivedFromClient | [Opt.] The method to run when the client receives an event from another client. | 

Returns {.h5}

| Type            | Description                                         |
|:----------------|:----------------------------------------------------|
| `LNetworkEvent` | The <a class="no-underline-link">LNetworkEvent</a>. |

### Create(string, Action&lt;ulong&gt;, Action, Action&lt;ulong&gt;)
Creates a new <a class="no-underline-link">LNetworkEvent</a>. If it already exists, an exception will be thrown.

Declaration {.h5}

```csharp
public static LNetworkEvent Connect(string identifier, Action<ulong>? onServerReceived = null, Action? onClientReceived = null, Action<ulong>? onClientReceivedFromClient = null)
```

Parameters {.h5}

| Type             | Name                       | Description                                                                     |
|:-----------------|:---------------------------|:--------------------------------------------------------------------------------|
| `string`         | identifier                 | The identifier of the <a class="no-underline-link">LNetworkEvent</a>.           |
| `Action<ulong>?` | onServerReceived           | [Opt.] The method to run when the server receives an event.                     | 
| `Action?`        | onClientReceived           | [Opt.] The method to run when the client receives an event.                     | 
| `Action<ulong>?` | onClientReceivedFromClient | [Opt.] The method to run when the client receives an event from another client. | 

Returns {.h5}

| Type            | Description                                         |
|:----------------|:----------------------------------------------------|
| `LNetworkEvent` | The <a class="no-underline-link">LNetworkEvent</a>. |

Exceptions {.h5}

| Type                        | Description                                                                                 |
|:----------------------------|:--------------------------------------------------------------------------------------------|
| `InvalidOperationException` | Thrown if the <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a> already exists. |

### InvokeClient(int)
Server-only method to invoke the event on a specific client.

Declaration {.h5}

```csharp
public void InvokeClient(int playerId)
```

Parameters {.h5}

| Type  | Name     | Description                                           |
|:------|:---------|:------------------------------------------------------|
| `int` | playerId | The in-game ids of the client to invoke the event on. | 

### InvokeClient(ulong)
Server-only method to invoke the event on a specific client.

Declaration {.h5}

```csharp
public void InvokeClient(ulong clientGuid)
```

Parameters {.h5}

| Type    | Name       | Description                                        |
|:--------|:-----------|:---------------------------------------------------|
| `ulong` | clientGuid | The NGO guid of the client to invoke the event on. | 

### InvokeClients()
Server-only method to invoke the event on all clients.

Declaration {.h5}

```csharp
public void InvokeClients()
```

### InvokeClients(int[])
Server-only method to invoke the event on the specified clients.

Declaration {.h5}

```csharp
public void InvokeClients(int[] playerIdArray)
```

Parameters {.h5}

| Type    | Name          | Description                                            |
|:--------|:--------------|:-------------------------------------------------------|
| `int[]` | playerIdArray | The in-game ids of the clients to invoke the event on. | 

### InvokeClients(ulong[])
Server-only method to invoke the event on the specified clients.

Declaration {.h5}

```csharp
public void InvokeClients(ulong[] clientGuidArray)
```

Parameters {.h5}

| Type      | Name            | Description                                          |
|:----------|:----------------|:-----------------------------------------------------|
| `ulong[]` | clientGuidArray | The NGO guids of the clients to invoke the event on. | 

### InvokeOtherClients()
Client method to invoke the event on all other clients.

Declaration {.h5}

```csharp
public void InvokeOtherClients()
```

### InvokeOtherClients(int[])
Client method to invoke the event on the specified clients.

Declaration {.h5}

```csharp
public void InvokeOtherClients(int[] playerIdArray)
```

Parameters {.h5}

| Type    | Name          | Description                                            |
|:--------|:--------------|:-------------------------------------------------------|
| `int[]` | playerIdArray | The in-game ids of the clients to invoke the event on. | 

### InvokeOtherClients(ulong[])
Client method to invoke the event on the specified clients.

Declaration {.h5}

```csharp
public void InvokeOtherClients(ulong[] clientGuidArray)
```

Parameters {.h5}

| Type      | Name            | Description                                          |
|:----------|:----------------|:-----------------------------------------------------|
| `ulong[]` | clientGuidArray | The NGO guids of the clients to invoke the event on. | 

### InvokeServer()
Client method to invoke the event on the server/host.

Declaration {.h5}

```csharp
public void InvokeServer()
```

## Events

### OnClientReceived
A callback that runs when the client receives an event.

Declaration {.h5}

```csharp
public event Action? OnClientReceived;
```

### OnClientReceivedFromClient
A callback that runs when the client receives an event from another client.

Declaration {.h5}

```csharp
public event Action<ulong>? OnClientReceivedFromClient;
```

### OnServerReceived
A callback that runs when the server receives an event.

Declaration {.h5}

```csharp
public event Action<ulong>? OnServerReceived;
```
