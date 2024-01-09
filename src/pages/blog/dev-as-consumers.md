---
layout: ../../layouts/Post.astro
title: On the devtools market
description: Unique market calls for unique methods.
publishDate: Monday, Jan 8 2024
author: "Vincent Vu"
---

Devtool/dev-infra startups are getting crazy out here. Though how this became popular reminds me of an old adage in startup products--that is "you never kind of know how to solve your own pain"; it's what Stripe came out of, actually--devs had to deal with understanding the glory hole of how credit transactions and ACH stuff works, along with reading financial handbooks that they never thought they had to do for their job. It only took Stripe efforts to actually solve their own problems to become a massive success. The current trend in devtools reflect how devs are now only realizing how time-consuming their daily job is, e.g. most of a product's code is actually boilerplate, and no one wants to write boilerplates, hence Github Copilot and other code completion tools hoarding devs' money like crazy.

Besides from the clear value devtools bring, selling devtools is an equally interesting journey, starting with the marketing strat and the sales pipeline. 

Open-source is a legit marketing strategy. Open-sourcing your product is important, and you need not to concern about how people would steal your product because software laws are taken very seriously nowadays. In fact, the question often becomes why your devtool is *not* open-sourced, because open-source is now a real marketing technique--historic events in tech suggest distrust upon proprietary products, and devs prefer using a service they know has the voice of their community in it. The distribution problem thus kind of solves itself if you just go ahead and open-source your product. Of course, building in open-source has its own set of problems, but many companies were able to do it without sacrificing the desired startup-esque velocity or NPS (e.g. [cal.com](https://cal.com)), and frankly, the benefits heavily outweigh the costs. Therefore, devtool companies should try to be very in-touch with open-source, considering most of your audience would participate there, directly or indirectly.

Regarding how to actually sell your devtools, after researching and talking to many devtool companies, I realized that for most cases, you have to employ a bottom-up-top-down strategy. Most of the time, devs work at jobs, and unless that tool has a revolutionary value-add, and that their lives would be on Expert mode instead of Easy mode without it (some examples: ChatGPT Pro, Github Copilot), then most of the time their company pays for it. So the strategy here is to market to devs, and devs found it so good they convince their managers to buy it for them. It's a B2C2B triangle, which leads to a B2B sale:

```
[Your company]----->[devs]
    ^                 /
     \               /
      \             /
       \           /
        \         V
     [devs' companies]
```

And because it's a B2B sale, you can now afford to price in the higher ranges, say $30/seat/month, or hit them with an enterprise license. Considering if you already open-sourced your product, hosting enterprise should be frictionless, because a part of your initial open-sourcing initiative includes having clear and easy self-hosting methods that anyone could easily reproduce given enough resources.

Now, that's for devs with jobs. For those that are self-employed, it's the same story of appealing to devs, but your price range will have to be much lower i.e around 1-2x a cup of coffee (take Copilot as an example: $10/m for coding at 2x one's normal speed is super appealing even for an independent dev). Obviously, this is a basic B2C sale.

There's no definite reason you would choose to sell your devtool B2C or B2B because it ultimately depends on the nature of your product. Both sales model will have their own unique set of challenges, and one is not definitely better than the other.

Moving on to the product. An important aspect I found about devtools is that it takes a fair bit of time to secure a sale. This is because at the core, you're building a **productivity tool**, and productivity tools tend to require the users to change the way they work. For many devs, especially old school ones who have gotten used to their 9 years old Vim setup, and searches through code via `rg`. Introducing a new interface for them to write code would be a big challenge, and if you decide to introduce that interface it needs to be done well i.e. the product needs to have a *great* user experience. Considering that introducing a new interface is hard, maybe a good way is to integrate into their working system--hence why often times people like a product's VSCode extension more, or the CLI version of the product more. Of course, different devs use different interfaces, so your optimal solution might actually be to just *provide many options accommodating to many types of devs*, which requires a good understanding of how devs work in the first place. This is the reason why I think only devs can build for devs--the market is still niche right now, and the barrier to entry is literally just to be an *experienced dev yourself*, which is what makes this market very unique compared to other more common markets.

All in all, devtools market is an exciting space, and only lately made even more exciting with the introduction of LLMs. I'm excited to see where devtools will go in 2024--there will be a ton of innovation on developer's experience this year.
