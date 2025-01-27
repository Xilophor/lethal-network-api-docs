---
prev: false
next: false
description: Basic overview of LethalNetworkAPI.
---

# LethalNetworkAPI Docs

This is a brief installation and usage guide. For more specifics, look to the left at the sidebar for more detailed information. If you want to see all available methods and properties you can access - look at the [API docs](/api/) via the button in the top right.

## Referencing

This API can be referenced in your project in two different ways.

### NuGet

I recommend using the NuGet package manager. This will help keep your reference up-to-date, and will work with any GitHub workflows without any additional work.

There are a few methods of referencing the LethalNetworkAPI package in your project:

#### Via IDE UI

In your IDE, there should be some sort of "NuGet Package Manager" UI. In this UI, you can search for `Xilophor.LethalNetworkAPI` and find & install the package. At that point, the API is referenced and you can add the following above your Plugin class:

```csharp {2}
[BepInPlugin(MyPluginInfo.PLUGIN_GUID, MyPluginInfo.PLUGIN_NAME, MyPluginInfo.PLUGIN_VERSION)]
[BepInDependency("LethalNetworkAPI")]
public class ExamplePlugin : BaseUnityPlugin
```

#### Via .csproj File

Another way of adding the NuGet package is by adding a line into your `.csproj` file. All you need to add is the following line in a `<ItemGroup>` section:

```xml {9}
<ItemGroup>
    <PackageReference Include="BepInEx.Analyzers" Version="1.*" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.AssemblyPublicizer.MSBuild" Version="0.4.1" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.Core" Version="5.*" PrivateAssets="all"/>
    <PackageReference Include="BepInEx.PluginInfoProps" Version="2.1.0" PrivateAssets="all"/>
    <PackageReference Include="UnityEngine.Modules" Version="2022.3.9" PrivateAssets="all"/>
    <PackageReference Include="MinVer" Version="4.*" PrivateAssets="all" />

    <PackageReference Include="Xilophor.LethalNetworkAPI" Version="3.*" PrivateAssets="all"/>
</ItemGroup>
```

::: note
The `Version="3.*"` in the reference tells your IDE that you want the latest version of the package under the `v3.x.x` major version. This will keep your package reference up-to-date when coding & compiling your mod.
:::

At this point, the API is referenced and you can add the following above your Plugin class:

```csharp {2}
[BepInPlugin(MyPluginInfo.PLUGIN_GUID, MyPluginInfo.PLUGIN_NAME, MyPluginInfo.PLUGIN_VERSION)]
[BepInDependency("LethalNetworkAPI")]
public class ExamplePlugin : BaseUnityPlugin
```

#### Via the Terminal/Command Line

The last method of adding the NuGet package to your project is via the terminal in your project directory:

```shell
dotnet add package Xilophor.LethalNetworkAPI --version 3.*
```

::: note
The `--version 3.*` in the reference tells your IDE that you want the latest version of the package under the `v3.x.x` major version. This will keep your package reference up-to-date when coding & compiling your mod.
:::

At this point, the API is referenced and you can add the following above your Plugin class:

```csharp {2}
[BepInPlugin(MyPluginInfo.PLUGIN_GUID, MyPluginInfo.PLUGIN_NAME, MyPluginInfo.PLUGIN_VERSION)]
[BepInDependency("LethalNetworkAPI")]
public class ExamplePlugin : BaseUnityPlugin
```

### DLL Reference
