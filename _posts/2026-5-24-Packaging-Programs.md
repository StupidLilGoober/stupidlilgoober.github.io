---
title: "A Slight Inconvenience with Packages"
layout: post
category: "dev"
date: 2026-5-24
---

One thing that has always bothered me about software distribution is how fragmented packages are across platforms and architectures.

A single application might have separate downloads for:

* Windows
* Linux
* macOS
* x86
* x64
* ARM
* ARM64

And that does not even include debug builds, portable builds, or release variants.

From a developer perspective, this is understandable. Different operating systems and architectures require different binaries. However, from a user perspective, it can feel unnecessarily complicated.

## Existing Solutions

There are already technologies designed to solve this problem. Containers such as Docker are a good example.

However, containers solve the problem differently than traditional packages do. Rather than packaging a program for the user's environment, they package an entire isolated environment alongside the program.

This approach has major advantages:

* reproducibility
* dependency isolation
* platform consistency

But it also changes how applications interact with the host system.

For desktop-style applications, full isolation is not always ideal. Applications often need to integrate with:

* user configuration
* desktop settings
* existing filesystem layouts
* hardware-specific behavior

Containers can handle this, but they are not designed primarily as traditional user-facing package formats.

## The Idea

What I want is something closer to a *smart archive*.

Instead of distributing separate packages for every platform and architecture, a single bundle could contain multiple versions of the same application.

When the bundle is installed or extracted, rules inside the package would determine which files are actually needed on the user's system.

For example:

```lua
if hardware.cpu.architecture("arm") then
    hide("x86-version")
else
    hide("arm-version")
end
```

In this example, the package would automatically discard unnecessary files depending on the user's hardware.

The end result would still behave like a normal package:

* extractable
* installable
* usable without a container runtime

The difference is that the package itself would contain logic for selecting the correct files.

## The Biggest Problem

The obvious issue is size.

If one archive contains:

* multiple operating systems
* multiple architectures
* multiple binaries

then the resulting package could become extremely large.

Compression helps, but it does not completely solve the issue. Even heavily compressed data is still unnecessary if the user never needs it in the first place.

## A Better Approach

A more interesting solution would be selective downloading.

Instead of downloading the entire bundle directly, a server could evaluate the package rules first and generate a reduced archive containing only the required files.

Conceptually, the process would look like this:

```text
BUNDLE
    ↓
evaluate configuration
    ↓
remove unnecessary files
    ↓
download platform-specific archive
```

This would allow developers to maintain a single distributable bundle while users only download what they actually need.

In practice, the user might still receive a normal `.zip` or `.tar.gz` file.

The difference would be entirely in how that archive was generated.

## The Less Obvious Problem

The harder problem is deciding how package rules should work.

My first thought was Lua, because it is:

* lightweight
* embeddable
* flexible

However, a full scripting language introduces problems:

* security
* determinism
* reproducibility
* sandboxing

Another option would be a declarative format such as TOML:

```toml
[target.arm]
include = ["bin/arm/**"]

[target.x86]
include = ["bin/x86/**"]
```

This would be safer and easier to process, but much less flexible.

The tradeoff is essentially:

* flexibility versus simplicity
* scripting versus predictability

And that is probably the most important design decision in the entire format.

## Final Thoughts

At the moment, this is still mostly an idea.

I am not trying to replace containers, package managers, or existing archive formats entirely. The goal is simply to explore whether packages could become:

* more portable
* more intelligent
* less fragmented

without requiring applications to run inside fully isolated environments.

The technical challenges are significant, but I think the concept is interesting enough to explore further.
