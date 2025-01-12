---
prev: false
next: false
description: DEPRECATED. LethalServerEvent class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalServerEvent Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkEvent](/api/LethalNetworkAPI.LNetworkEvent) instead.
:::

```csharp
public sealed class LethalServerEvent : LethalNetworkAPI.LNetworkEventDepricated
```

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; [LethalNetworkAPI.Old.LethalNetworkDeprecated](/api/deprecated/LethalNetworkAPI.Old.LethalNetworkDeprecated)
<br>&emsp;&emsp;&rdsh; [LethalNetworkAPI.LNetworkEventDepricated](/api/deprecated/LethalNetworkAPI.LNetworkEventDepricated)
<br>&emsp;&emsp;&emsp;&rdsh; LethalNetworkAPI.LethalServerEvent

## Constructors

### LethalServerEvent(string, Action&lt;ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Create a new network event for the server.

Declaration {.h5}

```csharp
public LethalServerEvent(string identifier, Action<ulong>? onReceived = null)
```

Parameters {.h5}

| Type             | Name       | Description                                                       |
|:-----------------|:-----------|:------------------------------------------------------------------|
| `string`         | identifier | An identifier for the event.                                      |
| `Action<ulong>?` | onReceived | [Opt.] The method to run when an event is received from a client. | 

Remarks {.h5}

Identifiers are specific to a per-mod basis.

## Methods

### ClearSubscriptions() <Badge type="danger" text="DEPRECATED" />

<br>Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### InvokeAllClients(bool) <Badge type="danger" text="DEPRECATED" />
Invoke event to all clients.

Declaration {.h5}

```csharp
public void InvokeAllClients(bool receiveOnHost = true)
```

Parameters {.h5}

| Type   | Name          | Description                                            |
|:-------|:--------------|:-------------------------------------------------------|
| `bool` | receiveOnHost | [Opt.] Whether the host client should receive as well. |


### InvokeClient(ulong) <Badge type="danger" text="DEPRECATED" />
Invoke event to a specific client.

Declaration {.h5}

```csharp
public void InvokeClient(ulong clientId)
```

Parameters {.h5}

| Type    | Name     | Description                        |
|:--------|:---------|:-----------------------------------|
| `ulong` | clientId | The client to invoke the event to. |

### InvokeClients(IEnumerable&lt;ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Invoke event to specific clients.

Declaration {.h5}

```csharp
public void InvokeClients(IEnumerable<ulong> clientIds)
```

Parameters {.h5}

| Type                 | Name      | Description                         |
|:---------------------|:----------|:------------------------------------|
| `IEnumerable<ulong>` | clientIds | The clients to invoke the event to. |

## Events

### OnReceived <Badge type="danger" text="DEPRECATED" />
The callback to invoke when an event is received by the server.

Declaration {.h5}

```csharp
public event Action<ulong>? OnReceived;
```

Type Parameters {.h5}

| Type    | Description           |
|:--------|:----------------------|
| `ulong` | The origin client ID. |


