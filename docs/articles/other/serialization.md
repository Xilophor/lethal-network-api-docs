---
prev: false
next: false
description: An in-depth view of serialization in LethalNetworkAPI.
---

# Serialization

Serialization is the process of an object, like a string, into a compact array of bytes (a buffer) that can be sent over the network and turned back into the original data. It is a deceptively simple process; while some objects can easily be represented in a buffer - like Unicode for strings - not all objects can be stored so easily.

In order to simplify the serialization process, LethalNetworkAPI uses [OdinSerializer](https://github.com/TeamSirenix/odin-serializer) to serialize data. The library was originally designed to be used for the Unity Editor, to allow more complex data types to be used in the Editor UI of components. LethalNetworkAPI instead leverages this ability to handle complex data types to send practically any data over the network.

## Value Types

Value types, or primitives, that are very easy for the serializer to handle. This is because these data types don't really have any state, and contain just one value. These mostly are just numerical types, such as `byte`, `int`, and `ulong`, but can include other types, such as `bool`, `char`, and `Enum`s. 

Because they are only their value and nothing else, the serializer can store them as-is in the buffer - a practically effortless procedure.

## Reference Types

Reference types *(objects)* are types that may contain several points of data; either value or other reference types. The serializer has to decide on how to store this data efficiently. 

It first looks to see if there are pre-defined serialization methods, or "formatters", that can turn these types into their base primitives, which are then serialized into the buffer. If it fails to find these, it then guesses on what information needs to be serialized, based on established rules.

::: info
There is a special reference type that is considered primitive by OdinSerializer, due to its common and optimized nature. `string` is essentially an optimized read-only list of `char`s, which are stored in a standardized format - most commonly UTF-8. Because of its common use and consistent structure, the developers of OdinSerializer made a serializer specifically for it.
:::

When de-serializing an object, it then uses those primitives to re-create the original object. This works great for immutable *(read-only)* data types that cannot be modified, but can become an issue when dealing with synchronized mutable *(modifiable)* objects. This is particularly true for `GameObject`s, as serializing the `GameObject` and deserializing it will create a duplicate `GameObject` that will not be synchronized with the original `GameObject`.

Instead, references can be used to know what object is being used when that object is on both sides of the network. Unity's NGO has types just for this: `NetworkObjectReference` and `NetworkBehaviourReference`; both of which have formatters defined in this API.

## Custom Reference Types

Sometimes, OdinSerializer is not able to correctly guess what needs to be serialized in your custom reference types. You may notice this if your custom types coming out with zero-values, instead of the values they were originally.

To inform OdinSerializer of values that need to be serialized, you can just add the `[SerializedField]` attribute to and fields or properties that are not being serialized, like so:

```csharp
readonly struct ExampleType {
    [SerializeField] public string Name { get; }
    [SerializeField] public int Value { get; }
    [SerializeField] public bool Enabled { get; }

    ExampleType(string name, int val, bool enabled) 
    {
        Name = name;
        Value = val;
        Enabled = enabled;
    }
}
```

Your type will then be correctly serialized when transmitted over the network.