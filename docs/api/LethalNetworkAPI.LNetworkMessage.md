---
prev: false
next: false
description: LNetworkMessage class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LNetworkMessage&lt;TData&gt; Class {.h2 .no-border .no-top .no-underline-link}

Used to send data between clients (and the server/host).

```csharp
public sealed class LNetworkMessage<TData>
```
Type Parameters {.h4}

`TData` | The type of data to send.

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; LNetworkMessage&lt;TData&gt;

Remarks {.h3}

Will not interact with [LNetworkEvent](/api/LethalNetworkAPI.LNetworkEvent), [LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable),  
nor with other mods - even if the identifier is not unique.

## Methods

### ClearSubscriptions()
Clear all subscriptions to all callbacks on this <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>.

Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### Connect(string, Action&lt;TData,ulong&gt;?, Action&lt;TData&gt;?, Action&lt;TData,ulong&gt;?)
Create a new <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a> if it doesn't already exist, otherwise return the existing message of the same identifier.

Declaration {.h5}

```csharp
public static LNetworkMessage<TData> Connect(string identifier, Action<TData, ulong>? onServerReceived = null, Action<TData>? onClientReceived = null, Action<TData, ulong>? onClientReceivedFromClient = null)
```

Parameters {.h5}

| Type                    | Name                       | Description                                                                          |
|:------------------------|:---------------------------|:-------------------------------------------------------------------------------------|
| `string`                | identifier                 | The identifier of the <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>. |
| `Action<TData, ulong>?` | onServerReceived           | [Opt.] The method to run when the server receives a message.                         | 
| `Action<TData>?`        | onClientReceived           | [Opt.] The method to run when the client receives a message.                         | 
| `Action<TData, ulong>?` | onClientReceivedFromClient | [Opt.] The method to run when the client receives a message from another client.     | 

Returns {.h5}

| Type                     | Description                                                        |
|:-------------------------|:-------------------------------------------------------------------|
| `LNetworkMessage<TData>` | The <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>. |

### Create(string, Action&lt;TData,ulong&gt;, Action&lt;TData&gt;, Action&lt;TData,ulong&gt;)
Create a new <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>. If it already exists, an exception will be thrown.

Declaration {.h5}

```csharp
public static LNetworkMessage<TData> Create(string identifier, Action<TData, ulong>? onServerReceived = null, Action<TData>? onClientReceived = null, Action<TData, ulong>? onClientReceivedFromClient = null)
```

Parameters {.h5}

| Type                    | Name                       | Description                                                                          |
|:------------------------|:---------------------------|:-------------------------------------------------------------------------------------|
| `string`                | identifier                 | The identifier of the <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>. |
| `Action<TData, ulong>?` | onServerReceived           | [Opt.] The method to run when the server receives a message.                         | 
| `Action<TData>?`        | onClientReceived           | [Opt.] The method to run when the client receives a message.                         | 
| `Action<TData, ulong>?` | onClientReceivedFromClient | [Opt.] The method to run when the client receives a message from another client.     | 

Returns {.h5}

| Type                     | Description                                                        |
|:-------------------------|:-------------------------------------------------------------------|
| `LNetworkMessage<TData>` | The <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a>. |

Exceptions {.h5}

| Type                        | Description                                                                                 |
|:----------------------------|:--------------------------------------------------------------------------------------------|
| `InvalidOperationException` | Thrown if the <a class="no-underline-link">LNetworkMessage&lt;TData&gt;</a> already exists. |

### SendClient(TData, int)
Server-only method to send data to a specific client.

Declaration {.h5}

```csharp
public void SendClient(TData data, int playerId)
```

Parameters {.h5}

| Type    | Name     | Description                                        |
|:--------|:---------|:---------------------------------------------------|
| `TData` | data     | The data to send.                                  |
| `int`   | playerId | The in-game ids of the client to send the data to. | 

### SendClient(TData, ulong)
Server-only method to send data to a specific client.

Declaration {.h5}

```csharp
public void SendClient(TData data, ulong clientGuid)
```

Parameters {.h5}

| Type    | Name       | Description                                     |
|:--------|:-----------|:------------------------------------------------|
| `TData` | data       | The data to send.                               |
| `ulong` | clientGuid | The NGO guid of the client to send the data to. | 

### SendClients(TData, int[])
Server-only method to send data to the specified clients.

Declaration {.h5}

```csharp
public void SendClients(TData data, int[] playerIdArray)
```

Parameters {.h5}

| Type    | Name          | Description                                         |
|:--------|:--------------|:----------------------------------------------------|
| `TData` | data          | The data to send.                                   |
| `int[]` | playerIdArray | The in-game ids of the clients to send the data to. | 

### SendClients(TData, ulong[])
Server-only method to send data to the specified clients.

Declaration {.h5}

```csharp
public void SendClients(TData data, ulong[] clientGuidArray)
```

Parameters {.h5}

| Type      | Name            | Description                                       |
|:----------|:----------------|:--------------------------------------------------|
| `TData`   | data            | The data to send.                                 |
| `ulong[]` | clientGuidArray | The NGO guids of the clients to send the data to. | 

### SendClients(TData)
Server-only method to send data to all clients.

Declaration {.h5}

```csharp
public void SendClients(TData data)
```

Parameters {.h5}

| Type    | Name | Description       |
|:--------|:-----|:------------------|
| `TData` | data | The data to send. |

### SendOtherClients(TData, int[])
Client method to send data to the specified clients.

Declaration {.h5}

```csharp
public void SendOtherClients(TData data, int[] playerIdArray)
```

Parameters {.h5}

| Type    | Name          | Description                                         |
|:--------|:--------------|:----------------------------------------------------|
| `TData` | data          | The data to send.                                   |
| `int[]` | playerIdArray | The in-game ids of the clients to send the data to. | 

### SendOtherClients(TData, ulong[])
Client method to send data to the specified clients.

Declaration {.h5}

```csharp
public void SendOtherClients(TData data, ulong[] clientGuidArray)
```

Parameters {.h5}

| Type      | Name            | Description                                       |
|:----------|:----------------|:--------------------------------------------------|
| `TData`   | data            | The data to send.                                 |
| `ulong[]` | clientGuidArray | The NGO guids of the clients to send the data to. | 

### SendOtherClients(TData)
Client method to send data to all clients.

Declaration {.h5}

```csharp
public void SendOtherClients(TData data)
```

Parameters {.h5}

| Type    | Name | Description       |
|:--------|:-----|:------------------|
| `TData` | data | The data to send. |

### SendServer(TData)
Client method to send data to the server/host.

Declaration {.h5}

```csharp
public void SendServer(TData data)
```

Parameters {.h5}

| Type    | Name | Description       |
|:--------|:-----|:------------------|
| `TData` | data | The data to send. |

## Events

### OnClientReceived
A callback that runs when the client receives a message.

Declaration {.h5}

```csharp
public event Action<TData>? OnClientReceived;
```

### OnClientReceivedFromClient
A callback that runs when the client receives a message from another client.

Declaration {.h5}

```csharp
public event Action<TData, ulong>? OnClientReceivedFromClient;
```

### OnServerReceived
A callback that runs when the server receives a message.

Declaration {.h5}

```csharp
public event Action<TData, ulong>? OnServerReceived;
```