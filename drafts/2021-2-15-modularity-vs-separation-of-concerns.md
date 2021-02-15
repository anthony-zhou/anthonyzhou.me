---
layout: post
title: "Modularity vs. Separation of Concerns"
date: 2021-2-15
description: "Designing scalable software and organizations"
image: assets/images/2020/8/browserscenario.png
author: anthony
categories: [programming, tutorials]
tags: [startups, software architecture, business, microservices]
---

// NOTE: this is formatted to go in the projects folder
// If I want it to go in posts I'll probably need to change the front matter slightly. 

Imagine you're running a restaurant. But this isn't just any restaurant. This is the high-end superbuffet at the Aria hotel and casino in Las Vegas. As executive chef, your job is to coordinate a team of dozens of chefs to prepare hundreds of courses for the thousands of customers dining here each day. You specialize in everything from sashimi to filet mignon to chocolate lava cake. How do you organize your team?

Broadly speaking, there's two ways to go about this. 

Option one is to treat the kitchen as an assembly line. Assign one team to cutting, one team to roasting, one team to grilling, and so on. Then assign product line managers to coordinate the passage of each dish through the various stations according to a standard recipe. For that filet mignon, the product manager would make sure the cutting team cuts the steak neatly and sends it to the marinating team, who lather the meat with salt, pepper, and olive oil. After the meat is done marinating, it gets sent to the grillers, who cook the steaks to order and send a tray to the plating team. After placing the meat on a warm plate with a sprig of rosemary, the plating team gives the steak to the serving team, who bring the plate to its spot on the buffet line. 

Option two is to treat the kitchen as a group of high-caliber chefs. Let each team be responsible for a set of dishes. In this system, you have a sashimi team, a steak team, and a lava cake team. This time, the filet undergoes the same set of procedures--cut, marinate, grill, plate, and serve--but all of the prep works happens on the same team. 

Which system is better? It depends. The assembly-line system works well if you don't change the menu often, because each group gets really good at their specific task. But what if you need to change the recipe? 

// go on to describe how the cross-functional system allows you to iterate faster, because everyone is closely involved with the end result. People also feel more fulfilled to have a direct role in the product's success, and recipe designers don't have to be isolated from the prep chefs doing the work (i.e., program managers won't set unreasonable goals for the software engineers to execute).

// Describe how this also applies to code, and how Conway's law means you should probably enforce this kind of structure with both your organization and your product.

// Close by tying back into the cooking example with a successful kitchen. 