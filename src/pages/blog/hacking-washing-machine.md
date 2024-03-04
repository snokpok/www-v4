---
layout: ../../layouts/Post.astro
title: Reverse engineering my washing machines
description: I'm honestly bored so why not.
# publishDate: Sun, Feb 8 2024
author: "Vincent Vu"
---

My apartment complex have a shared laundry unit, with these old-ass washers and dryers that still run on pennies. With that one, we paid $0 in total for the last 7 months by buying a key that opens the backdoor of these machines, and doing some small button presses to override the switch and activate them.

Our landlord probably have caught on to our BS, so they installed new machines that can only be activated with our mobile app. This app was trash; every time you go into the home screen it takes 5 seconds to load:

<div style="text-align:center;">
    <img src="/assets/blog/washing-machine-app.jpeg" alt="Washing machine app" width="300" style="border: 1px solid black;">
</div>

What's worse is that it's now 2x more expensive than the pennies one (if we do actually pay those pennies). One drying + washing was $2, and now it's $4.25. Seems like inflation arrived all the way home.

Being the hacker that I am, I want to see if it's possible to find a backdoor, some way, somehow, for this, or at the very least, figure out the APIs the mobile app calls to make me not have to use this dreadful app to do my laundry. These apps for household appliances often aren't that well protected, so there might be a way for me to work with something here.

### About this app

The app works by communicating with the specified laundry machine, over Bluetooth; each machine in our unit has a number. You add funds to your account through the app via your credit card.

### The hack

When you pay for the machine, I assume there must be a transaction happening to check your bank account balance, then deduct the amount from your funds, and then the machine gets activated. Digging into this would require figuring out the Bluetooth connection that happens. So I would have to setup Bluetooth tracing on my phone.

Having never done this before, I followed [this](https://www.bluetooth.com/blog/a-new-way-to-debug-iosbluetooth-applications/).
