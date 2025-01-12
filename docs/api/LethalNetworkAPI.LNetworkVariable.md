---
prev: false
next: false
description: LNetworkVariable class docs.
---

[LethalNetworkAPI](/api/LethalNetworkAPI).LNetworkVariable&lt;TData&gt; Class {.h2 .no-border .no-top .no-underline-link}

A variable that can be used to send data between clients.

```csharp
public class LNetworkVariable<TData> : LethalNetworkAPI.Internal.LNetworkVariableBase
```

Type Parameters {.h4}

`TData` | The type of data to send.

Inheritance {.h4}

&rdsh; [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') 
<br>&emsp;&rdsh; [LNetworkVariableBase](/api/LethalNetworkAPI.Internal.LNetworkVariableBase)
<br>&emsp;&emsp;&rdsh; LNetworkVariable&lt;TData&gt;

Remarks {.h4}

The type should not be mutable, otherwise you will have to manually use [MakeDirty()](#makedirty) upon modification (e.g. add, remove) of the mutable value.

## Properties

### OfflineValue
The "default" value of the variable. This value will be used when starting a new game.

Declaration {.h5}

```csharp
public TData OfflineValue { get; set; }
```

### Value
The current value of the variable.

Declaration {.h5}

```csharp
public TData Value { get; set; }
```

Remarks {.h5}

This value cannot be modified when disconnected. To change the "default" value, use [OfflineValue](#offlinevalue).

## Methods

### Connect(string, TData, LNetworkVariableWritePerms, Action&lt;TData,TData&gt;)
Create a new <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a> if it doesn't already exist, otherwise return the existing variable of the same identifier.

Declaration {.h5}

```csharp
public static LNetworkVariable<TData> Connect(string identifier, TData offlineValue = default!, LNetworkVariableWritePerms writePerms = LNetworkVariableWritePerms.Server, Action<TData, TData>? onValueChanged = null)
```

Parameters {.h5}

| Type                         | Name           | Description                                                                                                                                                                                                             |
|:-----------------------------|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `string`                     | identifier     | The identifier of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>.                                                                                                                                   |
| `TData`                      | offlineValue   | [Opt.] The default value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. This value will be used when starting a new game.                                                                       | 
| `LNetworkVariableWritePerms` | writePerms     | [Opt.] Who can modify the value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. Defaults to <see cref="LNetworkVariableWritePerms.Server"/>. Will be ignored if the variable is already created. | 
| `Action<TData, TData>?`      | onValueChanged | [Opt.] The method to run when the value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a> changes.                                                                                                  | 

Returns {.h5}

| Type                      | Description                                                         |
|:--------------------------|:--------------------------------------------------------------------|
| `LNetworkVariable<TData>` | The <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. |

Remarks {.h5}

If you set the 'writePerms' to [LNetworkVariableWritePerms.Owner](), only the owner of the variable can modify it. See [UpdateOwner(int[])]() to update ownership.

### Create(string, TData, LNetworkVariableWritePerms, Action&lt;TData,TData&gt;)
Create a new <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a> if it doesn't already exist. If it already exists, an exception will be thrown.

Declaration {.h5}

```csharp
public static LNetworkVariable<TData> Create(string identifier, TData offlineValue = default!, LNetworkVariableWritePerms writePerms = LNetworkVariableWritePerms.Server, Action<TData, TData>? onValueChanged = null)
```

Parameters {.h5}

| Type                         | Name           | Description                                                                                                                                                                                                             |
|:-----------------------------|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `string`                     | identifier     | The identifier of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>.                                                                                                                                   |
| `TData`                      | offlineValue   | [Opt.] The default value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. This value will be used when starting a new game.                                                                       | 
| `LNetworkVariableWritePerms` | writePerms     | [Opt.] Who can modify the value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. Defaults to <see cref="LNetworkVariableWritePerms.Server"/>. Will be ignored if the variable is already created. | 
| `Action<TData, TData>?`      | onValueChanged | [Opt.] The method to run when the value of the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a> changes.                                                                                                  | 

Returns {.h5}

| Type                      | Description                                                         |
|:--------------------------|:--------------------------------------------------------------------|
| `LNetworkVariable<TData>` | The <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a>. |

Exceptions {.h5}

| Type                        | Description                                                                                  |
|:----------------------------|:---------------------------------------------------------------------------------------------|
| `InvalidOperationException` | Thrown if the <a class="no-underline-link">LNetworkVariable&lt;TData&gt;</a> already exists. |

Remarks {.h5}

If you set the 'writePerms' to [LNetworkVariableWritePerms.Owner](/api/LethalNetworkAPI.LNetworkVariableWritePerms#owner), only the owner of the variable can modify it. See [UpdateOwner(int[])](#updateownerint) to update ownership.

### Dispose()
Dispose of the NetworkVariable. Updates will no longer be sent or received, and any internal references to the variable will be removed.

Declaration {.h5}

```csharp
public void Dispose()
```

Remarks {.h5}

Only use this if you are sure you no longer need the variable.

### MakeDirty()
Force the variable to send an update throughout the network.

Declaration {.h5}

```csharp
public void MakeDirty()
```

Remarks {.h5}

This will not trigger the [OnValueChanged](#onvaluechanged) event.

### UpdateOwner(int[])
Update the owner of the variable.

Declaration {.h5}

```csharp
public void UpdateOwner(params int[] playerIdArray)
```

Parameters {.h5}

| Type    | Name          | Description                                                              |
|:--------|:--------------|:-------------------------------------------------------------------------|
| `int[]` | playerIdArray | The in-game id(s) of the client(s) to make the owner(s) of the variable. |

Remarks {.h5}

Can only be used by the server, and will be ignored if the [LNetworkVariableWritePerms](/api/LethalNetworkAPI.LNetworkVariableWritePerms) is not [LNetworkVariableWritePerms.Owner](/api/LethalNetworkAPI.LNetworkVariableWritePerms#owner).

### UpdateOwner(ulong[])
Update the owner of the variable.

Declaration {.h5}

```csharp
public void UpdateOwner(params ulong[] clientGuidArray)
```

Parameters {.h5}

| Type      | Name            | Description                                                            |
|:----------|:----------------|:-----------------------------------------------------------------------|
| `ulong[]` | clientGuidArray | The NGO guid(s) of the client(s) to make the owner(s) of the variable. |

Remarks {.h5}

Can only be used by the server, and will be ignored if the [LNetworkVariableWritePerms](/api/LethalNetworkAPI.LNetworkVariableWritePerms) is not [LNetworkVariableWritePerms.Owner](/api/LethalNetworkAPI.LNetworkVariableWritePerms#owner).

## Events

### OnValueChanged
A callback that runs when the value of the variable changes.

Declaration {.h5}

```csharp
public event Action<TData, TData>? OnValueChanged;
```
