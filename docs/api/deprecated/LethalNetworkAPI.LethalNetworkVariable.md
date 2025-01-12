---
prev: false
next: false
description: DEPRECATED. LethalNetworkVariable class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LethalNetworkVariable&lt;TData&gt; Class {.h2 .no-border .no-top .no-underline-link}

:::danger OBSOLETE
This class is deprecated. Please use [LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable) instead.
:::

```csharp
public sealed class LethalNetworkVariable<TData> : LethalNetworkAPI.Old.LethalNetworkDeprecated
```

Type Parameters {.h4}

| Type    | Description                                 |
|:--------|:--------------------------------------------|
| `TData` | The serializable data type of the variable. |

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)
<br>&emsp;&rdsh; [LethalNetworkAPI.Old.LethalNetworkDeprecated](/api/deprecated/LethalNetworkAPI.Old.LethalNetworkDeprecated)
<br>&emsp;&emsp;&rdsh; LethalNetworkAPI.LethalNetworkVariable&lt;TData&gt;

## Constructors

### LethalNetworkVariable(string) <Badge type="danger" text="DEPRECATED" />
Create a new server-owned network variable, unless otherwise specified with [`[PublicNetworkVariable]`](/api/deprecated/LethalNetworkAPI.PublicNetworkVariableAttribute).

Declaration {.h5}

```csharp
public LethalNetworkVariable(string identifier)
```

Parameters {.h5}

| Type     | Name       | Description                     |
|:---------|:-----------|:--------------------------------|
| `string` | identifier | An identifier for the variable. |

Remarks {.h5}

Identifiers are specific to a per-mod basis. MUST be used outside of patches.

## Properties

### Value <Badge type="danger" text="DEPRECATED" />
Get or set the value of the variable.

Declaration {.h5}

```csharp
public TData Value { get; set; }
```

## Events

### OnValueChanged <Badge type="danger" text="DEPRECATED" />
The callback to invoke when the variable's value changes.

Declaration {.h5}

```csharp
public event Action<TData>? OnValueChanged;
```

Type Parameters {.h5}

| Type    | Description        |
|:--------|:-------------------|
| `TData` | The received data. |
