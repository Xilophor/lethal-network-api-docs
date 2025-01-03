---
prev: false
next: false
description: LethalNetworkAPI namespace
---

LethalNetworkAPI Namespace {.h2 .no-border .no-top .no-underline-link}

## Classes

&emsp;[LethalNetworkAPIPlugin](/api/LethalNetworkAPI.LethalNetworkAPIPlugin)
<br>&emsp;&emsp;The BepInEx plugin class.

&emsp;[LNetworkEvent](/api/LethalNetworkAPI.LNetworkEvent)
<br>&emsp;&emsp;Used to invoke events between clients (and the server/host).

&emsp;[LNetworkMessage&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkMessage)
<br>&emsp;&emsp;Used to send data between clients (and the server/host).

&emsp;[LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable)
<br>&emsp;&emsp;A variable that can be used to send data between clients.

:::details Deprecated
&emsp;[LethalClientEvent](/api/LethalNetworkAPI.LethalClientEvent)

&emsp;[LethalClientMessage&lt;TData&gt;](/api/LethalNetworkAPI.LethalClientMessage)

&emsp;[LethalNetworkExtensions](/api/LethalNetworkAPI.LethalNetworkExtensions)
<br>&emsp;&emsp;Additional tools to help with networking.

&emsp;[LethalNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LethalNetworkVariable)

&emsp;[LethalServerEvent](/api/LethalNetworkAPI.LethalServerEvent)

&emsp;[LethalServerMessage&lt;TData&gt;](/api/LethalNetworkAPI.LethalServerMessage)

&emsp;[PublicNetworkVariableAttribute](/api/LethalNetworkAPI.PublicNetworkVariableAttribute)
<br>&emsp;&emsp;Declare [LethalNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LethalNetworkVariable) as public.
:::

## Enums

&emsp;[LNetworkVariableWritePerms](/api/LethalNetworkAPI.LNetworkVariableWritePerms)
<br>&emsp;&emsp;The allowed write permissions for a [LNetworkVariable&lt;TData&gt;](/api/LethalNetworkAPI.LNetworkVariable)