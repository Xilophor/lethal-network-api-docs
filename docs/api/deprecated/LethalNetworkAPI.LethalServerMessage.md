---
prev: false
next: false
description: DEPRECATED. LethalServerMessage class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalServerMessage&lt;TData&gt; Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkMessage&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkMessage) instead.
:::

```csharp
public sealed class LethalServerMessage<TData> : LethalNetworkAPI.LNetworkMessageDeprecated
```

Type Parameters {.h4}

| Type    | Description                                |
|:--------|:-------------------------------------------|
| `TData` | The serializable data type of the message. |

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; [LethalNetworkAPI.Old.LethalNetworkDeprecated](/api/deprecated/LethalNetworkAPI.Old.LethalNetworkDeprecated)
<br>&emsp;&emsp;&rdsh; [LethalNetworkAPI.LNetworkMessageDeprecated](/api/deprecated/LethalNetworkAPI.LNetworkMessageDeprecated)
<br>&emsp;&emsp;&emsp;&rdsh; LethalNetworkAPI.LethalServerMessage&lt;TData&gt;

## Constructors

### LethalServerMessage(string, Action&lt;TData,ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Create a new network message for the server.

Declaration {.h5}

```csharp
public LethalServerMessage(string identifier, Action<TData, ulong>? onReceived = null)
```

Parameters {.h5}

| Type                    | Name       | Description                                                        |
|:------------------------|:-----------|:-------------------------------------------------------------------|
| `string`                | identifier | An identifier for the message.                                     |
| `Action<TData, ulong>?` | onReceived | [Opt.] The method to run when a message is received from a client. | 

Remarks {.h5}

Identifiers are specific to a per-mod basis.

## Methods

### ClearSubscriptions() <Badge type="danger" text="DEPRECATED" />

<br>Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### SendAllClients(TData, bool) <Badge type="danger" text="DEPRECATED" />
Send data to all clients.

Declaration {.h5}

```csharp
public void SendAllClients(TData data, bool receiveOnHost = true)
```

Parameters {.h5}

| Type    | Name          | Description                                            |
|:--------|:--------------|:-------------------------------------------------------|
| `TData` | data          | The data to send.                                      |
| `bool`  | receiveOnHost | [Opt.] Whether the host client should receive as well. | 

### SendClient(TData, ulong) <Badge type="danger" text="DEPRECATED" />
Send data to a specified client.

Declaration {.h5}

```csharp
public void SendClient(TData data, ulong clientId)
```

Parameters {.h5}

| Type    | Name     | Description                     |
|:--------|:---------|:--------------------------------|
| `TData` | data     | The data to send.               |
| `ulong` | clientId | The client to send the data to. | 

### SendClients(TData, IEnumerable&lt;ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Send data to the specified clients.

Declaration {.h5}

```csharp
public void SendClients(TData data, IEnumerable<ulong> clientIds)
```

Parameters {.h5}

| Type                 | Name      | Description                      |
|:---------------------|:----------|:---------------------------------|
| `TData`              | data      | The data to send.                |
| `IEnumerable<ulong>` | clientIds | The clients to send the data to. | 

## Events

### OnReceived <Badge type="danger" text="DEPRECATED" />
The callback to invoke when a message is received.

Declaration {.h5}

```csharp
public event Action<TData, ulong>? OnReceived;
```

Type Parameters {.h5}

| Type    | Description           |
|:--------|:----------------------|
| `TData` | The received data.    |
| `ulong` | The origin client ID. |

