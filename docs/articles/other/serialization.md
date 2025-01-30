---
prev: false
next: false
description: An in-depth view of serialization in LethalNetworkAPI.
---

# Serialization

Serialization is the process of turning data, like a string, into a compact array of bytes (a buffer) that can be sent over the network and turned back into the original data. 
It is a deceptively simple process; while some data formats can easily be represented in a buffer - like Unicode for strings - not all data can be converted so easily.

In order to simplify the serialization process, LethalNetworkAPI uses [OdinSerializer](https://github.com/TeamSirenix/odin-serializer) to serialize data. The library was originally designed to be used for the Unity Editor, to allow
more complex data types to be used in the Editor UI of components. LethalNetworkAPI instead leverages this ability to handle complex data types to send
practically any data over the network.

## Basic Data Types

Basic data types that are very easy for the serializer to handle. These are typically the built-in types that don't contain multiple data points, 
such as `string`, `int`, `long`, `ulong`, and many others. A lot of times, these are already in byte form and thus are quickly and easily be added into the buffer.
