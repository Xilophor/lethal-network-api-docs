---
prev: false
next: false
description: DEPRECATED. LethalClientMessage class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalNetworkExtensions Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkUtils](/api/LethalNetworkAPI.Utils.LNetworkUtils) instead.
:::

Additional tools to help with networking.

```csharp
public static class LethalNetworkExtensions
```

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; LethalNetworkAPI.LethalNetworkExtensions

## Methods

### GetClientId(this PlayerControllerB)
Gets the `ulong` from a given `PlayerControllerB`.

Declaration {.h5}

```csharp
public static ulong GetClientId(this PlayerControllerB player)
```

Parameters {.h5}

| Type                | Name   | Description            |
|:--------------------|:-------|:-----------------------|
| `PlayerControllerB` | player | The player controller. |

Returns {.h5}

| Type    | Description             |
|:--------|:------------------------|
| `ulong` | The player's client id. |

### GetNetworkVariable&lt;TData&gt;(this GameObject, string, bool)
Get a NetworkVariable with the identifier specific to the NetworkObject. If one doesn't exist, it creates a new one on all clients.

Declaration {.h5}

```csharp
public static LethalNetworkVariable<TData>? GetNetworkVariable<TData>(this GameObject gameObject, string identifier, bool serverOwned = false)
```

Parameters {.h5}

| Type         | Name        | Description                                                                       |
|:-------------|:------------|:----------------------------------------------------------------------------------|
| `GameObject` | gameObject  | The `GameObject` to attach the variable to. Only networked objects are permitted. |
| `string`     | identifier  | An identifier for the variable. Specific to the network object.                   |
| `bool`       | serverOwned | [Opt.] Set to true if only the server should be able to write to it.              |

Type Parameters {.h4}

| Type    | Description                                 |
|:--------|:--------------------------------------------|
| `TData` | The serializable data type of the variable. |

Returns {.h5}

| Type                            | Description           |
|:--------------------------------|:----------------------|
| `LethalNetworkVariable<TData>?` | The network variable. |

Remarks {.h5}

The variable is set to only allow writing by the object's owner client. In order to sync on all clients, the host must also run this method on the same GameObject with the same identifier.

### GetNetworkVariable&lt;TData&gt;(this NetworkBehaviour, string, bool)
Get a NetworkVariable with the identifier specific to the NetworkObject. If one doesn't exist, it creates a new one on all clients.

Declaration {.h5}

```csharp
public static LethalNetworkVariable<TData>? GetNetworkVariable<TData>(this NetworkBehaviour networkBehaviour, string identifier, bool serverOwned = false)
```

Parameters {.h5}

| Type               | Name             | Description                                                          |
|:-------------------|:-----------------|:---------------------------------------------------------------------|
| `NetworkBehaviour` | networkBehaviour | The `NetworkBehaviour` to attach the variable to.                    |
| `string`           | identifier       | An identifier for the variable. Specific to the network object.      |
| `bool`             | serverOwned      | [Opt.] Set to true if only the server should be able to write to it. |

Type Parameters {.h4}

| Type    | Description                                 |
|:--------|:--------------------------------------------|
| `TData` | The serializable data type of the variable. |

Returns {.h5}

| Type                            | Description           |
|:--------------------------------|:----------------------|
| `LethalNetworkVariable<TData>?` | The network variable. |

Remarks {.h5}

The variable is set to only allow writing by the object's owner client. In order to sync on all clients, the host must also run this method on the same GameObject with the same identifier.

### GetNetworkVariable&lt;TData&gt;(this NetworkObject, string, bool)
Get a NetworkVariable with the identifier specific to the NetworkObject. If one doesn't exist, it creates a new one on all clients.

Declaration {.h5}

```csharp
public static LethalNetworkVariable<TData>? GetNetworkVariable<TData>(this NetworkObject networkObject, string identifier, bool serverOwned = false)
```

Parameters {.h5}

| Type            | Name          | Description                                                          |
|:----------------|:--------------|:---------------------------------------------------------------------|
| `NetworkObject` | networkObject | The `NetworkObject` to attach the variable to.                       |
| `string`        | identifier    | An identifier for the variable. Specific to the network object.      |
| `bool`          | serverOwned   | [Opt.] Set to true if only the server should be able to write to it. |

Type Parameters {.h4}

| Type    | Description                                 |
|:--------|:--------------------------------------------|
| `TData` | The serializable data type of the variable. |

Returns {.h5}

| Type                            | Description           |
|:--------------------------------|:----------------------|
| `LethalNetworkVariable<TData>?` | The network variable. |

Remarks {.h5}

The variable is set to only allow writing by the object's owner client. In order to sync on all clients, the host must also run this method on the same GameObject with the same identifier.

### GetPlayerController(this ulong)
Gets the `PlayerControllerB` from a given clientId.

Declaration {.h5}

```csharp
public static PlayerControllerB? GetPlayerController(this ulong clientId)
```

Parameters {.h5}

| Type    | Name     | Description    |
|:--------|:---------|:---------------|
| `ulong` | clientId | The client id. |

Returns {.h5}

| Type                 | Description                      |
|:---------------------|:---------------------------------|
| `PlayerControllerB?` | The player controller component. |

Remarks {.h5}

Will return `null` if the controller is not found.
