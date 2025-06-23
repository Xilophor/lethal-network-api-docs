---
prev: false
next: false
description: DEPRECATED. LethalClientEvent class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalClientEvent Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkEvent](/api/LethalNetworkAPI.LNetworkEvent) instead.
:::

```csharp
public sealed class LethalClientEvent : LethalNetworkAPI.LNetworkEventDepricated
```

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; [LethalNetworkAPI.Old.LethalNetworkDeprecated](/api/deprecated/LethalNetworkAPI.Old.LethalNetworkDeprecated)
<br>&emsp;&emsp;&rdsh; [LethalNetworkAPI.LNetworkEventDepricated](/api/deprecated/LethalNetworkAPI.LNetworkEventDepricated)
<br>&emsp;&emsp;&emsp;&rdsh; LethalNetworkAPI.LethalClientEvent

## Constructors

### LethalClientEvent(string, Action, Action&lt;ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Create a new network event for clients.

Declaration {.h5}

```csharp
public LethalClientEvent(string identifier, Action? onReceived = null, Action<ulong>? onReceivedFromClient = null)
```

Parameters {.h5}

| Type             | Name                 | Description                                                             |
|:-----------------|:---------------------|:------------------------------------------------------------------------|
| `string`         | identifier           | An identifier for the event.                                            |
| `Action?`        | onReceived           | [Opt.] The method to run when an event is received from the server.     | 
| `Action<ulong>?` | onReceivedFromClient | [Opt.] The method to run when an event is received from another client. | 

Remarks {.h5}

Identifiers are specific to a per-mod basis.

## Methods

### ClearSubscriptions() <Badge type="danger" text="DEPRECATED" />

<br>Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### InvokeAllClients(bool, bool) <Badge type="danger" text="DEPRECATED" />
Invoke event to all clients.

Declaration {.h5}

```csharp
public void InvokeAllClients(bool includeLocalClient = true, bool waitForServerResponse = false)
```

Parameters {.h5}

| Type     | Name                  | Description                                                                                                                           |
|:---------|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| `bool`   | includeLocalClient    | [Opt.] If the local client event should be invoked.                                                                                   | 
| `bool`   | waitForServerResponse | [Opt.] If the local client should wait for a server response before invoking the [OnReceivedFromClient](#onreceivedfromclient) event. | 

Remarks {.h5}

'waitForServerResponse' will only be considered if 'includeLocalClient' is set to true.

### InvokeAllClientsSynced() <Badge type="danger" text="DEPRECATED" />
Invoke synchronized event to all clients.

Declaration {.h5}

```csharp
public void InvokeAllClientsSynced()
```

### InvokeServer() <Badge type="danger" text="DEPRECATED" />
Invoke event to the server/host.

Declaration {.h5}

```csharp
public void InvokeServer()
```

## Events

### OnReceived <Badge type="danger" text="DEPRECATED" />
The callback to invoke when an event is received from the server.

Declaration {.h5}

```csharp
public event Action? OnReceived;
```

### OnReceivedFromClient <Badge type="danger" text="DEPRECATED" />
The callback to invoke when an event is received from another client.

Declaration {.h5}

```csharp
public event Action<ulong>? OnReceivedFromClient;
```

Type Parameters {.h4}

| Type    | Description           |
|:--------|:----------------------|
| `ulong` | The origin client ID. |
