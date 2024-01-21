---
prev: false
next: false
description: How to reference and use LethalNetworkAPI.
---

# Referencing Lethal Network API

With either method, you must add the following before your `Plugin` class to ensure BepInEx loads this API before your mod:

```csharp
[BepInDependency("LethalNetworkAPI")]
```

## Via NuGet (Recommended) {#nuget}

Add the following line to your `.csproj` file:

```xml
<PackageReference Include="Xilophor.LethalNetworkAPI" Version="1.*" PrivateAssets="all"/>
```

## Via the `.dll` {#dll}

Add a reference to the dll assembly.