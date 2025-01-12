---
prev: false
next: false
description: DEPRECATED. LethalClientMessage class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalClientMessage&lt;TData&gt; Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkMessage&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkMessage) instead.
:::

```csharp
public sealed class LethalClientMessage<TData> : LethalNetworkAPI.LNetworkMessageDeprecated
```

Type Parameters {.h4}

| Type    | Description                                |
|:--------|:-------------------------------------------|
| `TData` | The serializable data type of the message. |

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; [LethalNetworkAPI.Old.LethalNetworkDeprecated](/api/deprecated/LethalNetworkAPI.Old.LethalNetworkDeprecated)
<br>&emsp;&emsp;&rdsh; [LethalNetworkAPI.LNetworkMessageDeprecated](/api/deprecated/LethalNetworkAPI.LNetworkMessageDeprecated)
<br>&emsp;&emsp;&emsp;&rdsh; LethalNetworkAPI.LethalClientMessage&lt;TData&gt;

## Constructors

### LethalClientMessage(string, Action&lt;TData&gt;, Action&lt;TData,ulong&gt;) <Badge type="danger" text="DEPRECATED" />
Create a new network message for clients.

Declaration {.h5}

```csharp
public LethalClientMessage(string identifier, Action<TData>? onReceived = null, Action<TData, ulong>? onReceivedFromClient = null)
```

Parameters {.h5}

| Type                    | Name                 | Description                                                              |
|:------------------------|:---------------------|:-------------------------------------------------------------------------|
| `string`                | identifier           | An identifier for the message.                                           |
| `Action<TData>?`        | onReceived           | [Opt.] The method to run when a message is received from the server.     | 
| `Action<TData, ulong>?` | onReceivedFromClient | [Opt.] The method to run when a message is received from another client. | 

Remarks {.h5}

Identifiers are specific to a per-mod basis.

## Methods

### ClearSubscriptions() <Badge type="danger" text="DEPRECATED" />

<br>Declaration {.h5}

```csharp
public void ClearSubscriptions()
```

### SendAllClients(TData, bool, bool) <Badge type="danger" text="DEPRECATED" />
Send data to the server/host.

Declaration {.h5}

```csharp
public void SendAllClients(TData data, bool includeLocalClient = true, bool waitForServerResponse = false)
```

Parameters {.h5}

| Type    | Name                  | Description                                                                                                                           |
|:--------|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| `TData` | data                  | The data to send.                                                                                                                     |
| `bool`  | includeLocalClient    | [Opt.] If the local client event should be invoked.                                                                                   | 
| `bool`  | waitForServerResponse | [Opt.] If the local client should wait for a server response before invoking the [OnReceivedFromClient](#onreceivedfromclient) event. | 

Remarks {.h5}

'waitForServerResponse' will only be considered if 'includeLocalClient' is set to true.

### SendServer(TData) <Badge type="danger" text="DEPRECATED" />
Invoke event to the server/host.

Declaration {.h5}

```csharp
public void SendServer(TData data)
```

Parameters {.h5}

| Type    | Name | Description       |
|:--------|:-----|:------------------|
| `TData` | data | The data to send. |

## Events

### OnReceived <Badge type="danger" text="DEPRECATED" />
The callback to invoke when a message is received from the server.

Declaration {.h5}

```csharp
public event Action<TData>? OnReceived;
```

Type Parameters {.h5}

| Type    | Description        |
|:--------|:-------------------|
| `TData` | The received data. |

### OnReceivedFromClient <Badge type="danger" text="DEPRECATED" />
The callback to invoke when a message is received from another client.

Declaration {.h5}

```csharp
public event Action<TData, ulong>? OnReceivedFromClient;
```

Type Parameters {.h5}

| Type    | Description           |
|:--------|:----------------------|
| `TData` | The received data.    |
| `ulong` | The origin client ID. |
