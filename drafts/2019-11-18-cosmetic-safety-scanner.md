---
layout: post
title: "Cosmetic safety scanner"
date: 2019-11-18
description: "Find out what dangerous chemicals might be lurking in your cosmetics."
image: assets/images/hackathons/hacktams/cosmetic-safety-scanner-screenshot.png
author: anthony
categories: [hackathon]
tags: [html, css, javascript, cosmetics]
---
**Role**: Frontend and Database Engineer

This project, created by my roommate and I, took first place overall at HackTAMS. Here is our Devpost submission:

## Inspiration
Cosmetics are always full of unpronounceable chemicals with sketchy health risks. A useful app would allow consumers to quickly see which products are safe and reliable.

## What it does
The Cosmetic Safety Scanner scans the ingredients lists of cosmetics and cross-references them with lists of hazardous chemicals to determine the risk level of a product.

## How I built it
We used Google Cloud Platform's optical character recognition (GCP OCR) software to read in the ingredients lists, Wolfram's chemical database API to help determine chemical toxicity, and deployed the technology as a Flask server.

## Challenges I ran into
In using so many disparate technologies, one challenge was allowing all the platforms to communicate. We encountered some merge conflicts, but GitKraken was helpful in resolving those.

## Accomplishments that I'm proud of
Implementing OCR, using Flask and querying multiple APIs, including the Wolfram databases and some of our own custom data.

## What I learned
As this was the first time for us to use any of these technologies (Flask, GCP OCR, Wolfram chemical database), we learned how to use them through this project.

## What's next for Cosmetic Safety Scanner
In addition to improving the UI, we'd like to expand our database of dangerous chemicals, so that the information we supply gets better and better. We'd also like to store the toxicity properties that have already been reported, so that the app runs faster, even on slow connection speeds.

## Built With
flask, gcp, gitkraken, html5, machine-learning, python, wolfram-technologies