---
prev: false
next: false
description: LNetworkVariableWritePerms enum docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LNetworkVariableWritePerms Enum {.h2 .no-border .no-top .no-underline-link}

The allowed write permissions for a [LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable)

```csharp
public enum LNetworkVariableWritePerms
```

## Fields

### Server

Only the server/host can write to the variable.

Declaration {.h5}

```csharp
Server = 0,
```

### Owner

Only the owner(s) of the variable can write to it.

Declaration {.h5}

```csharp
Owner = 1,
```

### Everyone

Any client can write to the variable.

Declaration {.h5}

```csharp
Everyone = 2,
```
