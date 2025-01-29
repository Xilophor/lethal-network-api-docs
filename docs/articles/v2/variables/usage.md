---
prev: false
next: false
description: How to use LethalNetworkAPI's Network Variables.
---

# Network Variable Usage

Network Variables sync data between the server and all clients.

They automatically sync when joining the server, and thus are great for consistent information.

## Creating the Variable

There are two ways to make a new network variable, through the constructor or through a helper extension method.

Using the constructor will create a server-owned variable, or if marked, a publicly-owned variable. On the other hand, using one of the helper methods, a client-owned network variable - owned by the client owning the object/behaviour.

To make a new network variable, there are two pieces of information required: the `identifier` and the `type` of the variable.

`TData` is the data type of the message, which can be any serializable type - practically any type. Examples of serializable types are:

- `string`
- `int`
- `Vector3`
- `Color`

:::tip NOTE
This identifier will be shared between all instances of network variables in the mod.

Any other mods with the same identifier or any messages or events of the same identifier will not interact with your variable.
:::

### Constructor

Using the constructor is simple:

```csharp
public static LethalNetworkVariable<TData> customVariable = new LethalNetworkVariable<TData>(identifier: "customIdentifier");
```

If you want to set a value to the network variable while initializing it, you can use object initializers:

```csharp
public static LethalNetworkVariable<string> customString = new LethalNetworkVariable<string>("customString") { Value = "Hello, World!" };
```

### Helper Method

You can use `.GetNetworkVariable<T>(identifier)` on any Network Object or Network Behaviour. This will create a new network variable owned by that object, or get the network variable if it already exists.

```csharp
ForestGiantAI instance;

LethalNetworkVariable<string> customString = instance.GetNetworkVariable<string>("customString");
```

Using this method, variable values will only sync if the host client has created an instance of the variable by using the method as well.

:::tip
If you specify `serverOwned = true` in the helper parameters, it'll define the variable as a server-owned variable and will only be available to be written to by the server.

The `[PublicNetworkVariable]` is not applicable to the helper method.
:::

### Ownership

As mentioned earlier, variables made with the constructor can be made public. It's as simple as adding the `[PublicNetworkVariable]` attribute to the field.

```csharp
[PublicNetworkVariable]
public static LethalNetworkVariable<TData> customVariable = new LethalNetworkVariable<TData>(identifier: "customIdentifier");
```

Doing so will allow any client to modify the variable.

## Getting/Setting the Value

Because the variable is a class and not a type, to get or set the value, you must use `.Value`.

The following code prints the value of a `LethalNetworkVariable` of type `string`:

```csharp
Plugin.Logger.LogDebug(customString.Value);
```

To set the value, it's as simple as setting a normal variable (additionally with `.Value`);

```csharp
customString.Value = "Hasta la vista, baby!";
```

## Event/Delegate

There is a `OnValueChanged` event that runs when the value is changed. The following cases are when it is invoked:

- When setting the variable
- When joining a lobby/game<sup>[1](#fn-1)</sup>
- When creating a variable during playtime (in the lobby)<sup>[1](#fn-1)</sup>
- When a variable is updated over the network
  - This only happens every Network Tick; the following is taken (and adjusted) from [Unity's NGO docs](https://docs-multiplayer.unity3d.com/netcode/1.5.2/learn/rpcvnetvar/#choosing-between-networkvariables-or-rpcs).

![NetworkVariable Network Tick Explanation](/public/articles/v2/variables/usage/networktick.png)

The `OnValueChanged` event is invoked with the parameter `TData data`, where `TData` is the type specified in the [constructor](#constructor).

```csharp
customString.OnValueChanged += NewValue;

private void NewValue(string newValue)
{
    //...
}
```

---

<b id="fn-1" style="color: var(--vp-c-brand-1);">1</b>: These will only happen if the network variable of the same identifier exists on the server/host (if the variable is initialized on the server/host).