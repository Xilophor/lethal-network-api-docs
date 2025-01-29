---
prev: false
next: false
description: Basic overview of LethalNetworkAPI.
---

# LethalNetworkAPI Docs

This is a brief installation and usage guide. For more specifics, look to the left at the sidebar for more detailed information. If you want to see all available methods and properties you can access - look at the [API docs](/api/) via the button in the top right.

::: warning
If you are making a mod using .NET Framework (`net472`, `net48`, or `net481`), ensure that you do not copy the `LethalNetworkAPI.dll` from the bin folder - this dll is only to allow your mod to compile, but will not work in runtime. Instead, use the `netstandard2.1` version, available on [Thunderstore](https://thunderstore.io/c/lethal-company/p/xilophor/LethalNetworkAPI) or on [GitHub](https://github.com/Xilophor/LethalNetworkAPI/releases).
:::

## Referencing

I recommend using the NuGet package manager. This will help keep your reference up-to-date, and will work with any GitHub workflows without any additional work.

There are a few methods of referencing the LethalNetworkAPI package in your project:

### Via IDE UI

In your IDE, there should be some sort of "NuGet Package Manager" UI. In this UI, you can search for `Xilophor.LethalNetworkAPI` and find & install the package.

### Via .csproj File

Another way of adding the NuGet package is by adding a line into your `.csproj` file. All you need to add is the following line in a `<ItemGroup>` section:

```xml
<ItemGroup>
    <PackageReference Include="BepInEx.Analyzers" Version="1.*" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.AssemblyPublicizer.MSBuild" Version="0.4.1" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.Core" Version="5.*" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.PluginInfoProps" Version="2.1.0" PrivateAssets="all"/>
    <PackageReference Include="UnityEngine.Modules" Version="2022.3.9" PrivateAssets="all"/>

    <PackageReference Include="Xilophor.LethalNetworkAPI" Version="3.*" PrivateAssets="all"/> // [!code focus]
</ItemGroup>
```

::: tip
The `Version="3.*"` in the reference tells your IDE that you want the latest version of the package under the `v3.x.x` major version. This will keep your package reference up-to-date when coding & compiling your mod.
:::

### Via the Terminal/CMD

The last method of adding the NuGet package to your project is via the terminal in your project directory:

```shell
dotnet add package Xilophor.LethalNetworkAPI --version 3.*
```

::: tip
The `--version 3.*` in the reference tells your IDE that you want the latest version of the package under the `v3.x.x` major version. This will keep your package reference up-to-date when coding & compiling your mod.
:::

### DLL Reference

This is done without using the NuGet Package Manager, and is not recommended. To add the reference, just add it in the same way you add the game assemblies.

## Adding the Dependency

To ensure that your mod loads after the API and only if it is installed, add the following line:

```csharp
[BepInPlugin(MyPluginInfo.PLUGIN_GUID, MyPluginInfo.PLUGIN_NAME, MyPluginInfo.PLUGIN_VERSION)]
[BepInDependency("LethalNetworkAPI")] // [!code focus]
public class ExamplePlugin : BaseUnityPlugin
```

## Basic Usage

Now that you've referenced the API, you can use it's messaging capabilities to add networking to your mod. 

### Creating a Network Message

To create a networked message, event, or variable, you must use the `Connect` or `Create` method:

```csharp
LNetworkMessage<string> ExampleMessage = LNetworkMessage<string>.Connect(identifier: "ExampleMessage");
LNetworkEvent ExampleEvent = LNetworkEvent.Connect(identifier: "ExampleEvent");
LNetworkVariable<string> ExampleVariable = LNetworkVariable<string>.Connect(identifier: "ExampleVariable");
```

::: tip
The identifiers are both unique to your mod, and each *type* of networked class - that is, a message with the identifier `"Test"` will not cause any collision with an event with the same identifier.
:::

### Linking a Method to the Message

There are two ways of linking a method. You can either add it when creating the message, event, or variable; or subscribe after it's been created:

```csharp
// inside the creation method
LNetworkMessage<string> ExampleMessage = LNetworkMessage<string>.Connect(identifier: "ExampleMessage", onClientReceived: ClientReceivedMessage);
LNetworkEvent ExampleEvent = LNetworkEvent.Connect(identifier: "ExampleEvent", onClientReceived: ClientReceivedMessage);
LNetworkVariable<string> ExampleVariable = LNetworkVariable.Connect(identifier: "ExampleVariable", onValueChanged: VariableChanged);

// via subscribing
ExampleMessage.OnServerReceived += ServerReceivedMessage;
ExampleEvent.OnServerReceived += ServerReceivedEvent;
ExampleVariable.OnValueChanged += VariableChanged;
```

### Sending Over the Network

Once you have a message, event, or variable that can receive over the network, you can send over the network:

```csharp
ExampleMessage.SendServer("Hello, world!");
ExampleEvent.InvokeServer();
ExampleVariable.Value = "Hello, world!";

void ServerReceivedMessage(string msg) {
    Logger.LogInfo(msg);
}

void ServerReceivedEvent() {
    Logger.LogInfo("Event Received on Server!");
}

void VariableChanged(string oldVal, string newVal) {
    Logger.LogInfo(newVal);
}
```
