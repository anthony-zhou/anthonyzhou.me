---
title: "3D Perception"
pubDate: 2024-02-01
description: "How we perceive depth and distance."
categories: [perception, psychology, essays, science]
---

There’s a famous story in Edwin Abbott’s Flatland where our protagonist, a lowly 2-dimensional square, gets taken by a sphere into the third dimension. In the 3-dimensional world of Spaceland, he sees his home of Flatland for what it is – a 2D plane within a 3D world – and sees the insides of his fellow polygons. Afterwards, he returns to Flatland and attempts to convince the Flatlanders (all polygons) of the existence of the third dimension, only to be imprisoned as a heretic.  

While we may chuckle at the Flatlanders’ inability to comprehend the third dimension, we are equally unable to imagine the fourth. In Flatland, the Square only sees one-dimensional lines, and infers their shapes based on cues like motion and fog, with no conception for the third dimension. In our world (as in Spaceland), we receive a two-dimensional image, and infer a 3-dimensional world from that image, with no conception for the fourth.  

Would it be possible to “see” the 3-dimensional world in the way that the Square sees Flatland from Spaceland?  Probably not for humans. Despite our perception of a 3-dimensional world, our retinas only supply our brains with a 2-dimensional projection of that world. As a result, visual media like movies – and perhaps even mental imagery – work primarily with 2D projections of 3D scenes.  

What’s remarkable, then, is how we navigate a 3-dimensional world when our vision and imagination fail to directly capture the 3rd dimension. Beyond being difficult, recovering the 3D image is an ill-specified problem – many 3D worlds could result in the same 2D image. Just like Edwin Abbott’s Square, we must make educated guesses based on cues from the environment.  

To understand 3D perception is to be a reverse engineer. By taking what we know about the structure of the brain and observing how it reacts to certain inputs, we can guess at the underlying algorithms and their implementation. This kind of approach is often taken in hardware engineering. Andrew “bunnie” Huang, a notable hardware hacker, describes one method for reverse engineering a computer: first, list all the components in the machine. As you work, you can reconstruct parts of the schematic using these components, leaving to one side a list of “unknown” components. The goal, eventually, is to form a schematic incorporating all the components you’ve listed into a single logical diagram.  

When it comes to the visual system, these components are called “cues.” As one might expect, the early days of vision science were all about listing out these components and figuring out if they mattered to the system. For example, consider the random-dot stereogram, which consists of a grid of random single-color dots – displayed differently to the two eyes – that could lead to the perception of a 3-dimensional image. In 1964, Bela Julesz observed that participants saw a 3-dimensional image as soon as the correlation between the two eyes’ images was greater than chance, implying that the visual system can perceive depth using binocular disparity alone (since other cues like shadows and perspective were all missing) – that is, the two eyes show slightly different images due to their different viewing positions, providing information about an object’s depth and distance. Another demonstration of binocular disparity comes from autostereograms – pictures that show a 3-dimensional image with only one screen, by showing a different image to each eye.  

Outside of binocular disparity, other relevant cues for depth and distance include motion parallax, vergence, accommodation, and pictorial cues like occlusion, linear perspective, and shadows. Each of these factors in isolation leads to some perception of depth; combining them all even more so.  

In pursuing these results, however, researchers observed some strange effects. For example, there was the specific distance tendency, in which observers lacking cues for an object's distance would report it being 2-4 meters away. Another illusion was the equidistance tendency, in which observers (again lacking cues) would judge objects close together in left-to-right distance as also being close in front-to-back distance, regardless of their real distance. In theory, these objects should be no closer together than random chance would dictate. It seems, then, that we hold subconscious beliefs about where objects “should” be without any cues at all. These beliefs do have some real-world implications. For example, take the Moon illusion, in which the moon appears bigger near the horizon than higher up in the sky, despite not changing its angular size in the visual field. While the exact explanation is debated, this illusion likely reflects a combination of these underlying perceptual tendencies.  

In all these tendencies, the brain holds prior views about the distances of objects in the environment. One way to explain illusions of distance is that they arise from a geometric model for estimating distances, which is only flawed because of incomplete information. But this theory does a poor job of explaining why we perceive specific distances even in the absence of other cues.  

Instead of using a model that is optimal in general, we may perceive depth using biases based on the properties of the world we live in. If so, then we should be able to predict perceptual tendencies based on data from real-world environments. Indeed, a statistical analysis by Yang and Purves of Duke University showed that specific distance tendency and equidistance tendency can both be explained in this way. They call this view Bayesian, in that (like Bayes theorem) it involves learning base rates from the environment and making judgments that incorporate both the base rates and new evidence. Figuratively speaking, the brain contains a miniature image of the Earth, part learned and part innate, and it is through this image that we make judgments of depth.  

This Bayesian view of the brain has two important implications – first, if we indeed rely on preconceptions for depth perception, then changing these preconceptions (e.g. via raising a person in a house of mirrors or even changing their mood) should change the perception of depth and distance. Second, it raises the question: if even a process as basic as vision is subject to biased preconceptions, how can we possibly trust the rest of our thinking? In the visual context, these preconceptions are useful because they help us efficiently judge distances in a 3D world. In contrast, many of our priors about social concepts may be not just wrong but even repulsive.  

As such, a seemingly simple question – how humans can perceive the world in 3 dimensions – reveals a fundamental gap between precise perception and our real bias-dependent brains. As Kant noted, “all knowledge begins with experience, but it does not follow that all knowledge arises from experience.” In Kant’s view, perceptual experiences alone cannot explain how we come to truths. How, for example, can one chair and another chair both be defined as “chairs” based on their physical characteristics alone? Kant uses this explanatory gap to argue for a priori sensibilities, which are the modes of processing that modulate our perceptual experiences. Some examples include a conception of 3D space or an intuitive relation between objects. Results like those of Yang and Purves can be thought of as identifying such a priori sensibilities, by demonstrating how perceptual experiences are bound to the physical structure of our 3D world. Since there are many possible such worlds, experiences alone cannot explain the nature of our beliefs.  

Beyond its philosophical implications, the study of 3D vision has yielded significant insights for display technology. In line with the Julesz-inspired autostereograms, virtual reality (VR) displays have taken heavy inspiration from vision science. For example, one of the problems uncovered by studies of VR was vergence-accommodation conflict, in which depth cues from the angle between the eyes (vergence) doesn’t match with those from the focal length of the lenses (accommodation). In response to this challenge, Meta Reality Labs has developed a display that solves for vergence-accommodation conflict by dynamically adjusting the focal distance of its display using eye tracking – thereby tuning accommodation cues to match vergence cues for distance.  

While an experience in VR is no match for the Flatland Square’s interdimensional journey, understanding how 3D perception works in humans empowers us to think about better ways to engineer our reality. In the near term, this could involve designing virtual worlds and experiences (like the Moon Illusion) that play with our sense of distance and depth. In the long term, we might even consider synthetic intelligences that could perceive in more than 3 spatial dimensions, by training their base rates in higher-dimensional virtual worlds. After all, our perception (and likely our mental imagery) is limited by the dimensionality of our vision. Should these creations become self-aware, we might unlock intelligence with an extraordinary familiarity for higher-dimensional space – and a mirror of an unknown world.  

 

### References 

Abbott, Edwin Abbott (1885). Flatland: a romance of many dimensions. New York: Dover Publications. 

Pinker S. (1980). Mental imagery and the third dimension. Journal of experimental psychology. General, 109(3), 354–371. https://doi.org/10.1037//0096-3445.109.3.354 

Huang, A (2019). The Hardware Hacker: Adventures in Making and Breaking Hardware 

Kim, H. R., Angelaki, D. E., & DeAngelis, G. C. (2016). The neural basis of depth perception from motion parallax. Phil. Trans. R. Soc. B, 371(1697), 20150256. 

Bridge, H. (2016). Effects of cortical damage on binocular depth perception. Phil. Trans. R. Soc. B, 371(1697), 20150254. 

Lee, D. N. (1980). The optic flow field: The foundation of vision. Philosophical Transactions of the Royal Society of London. B, Biological Sciences, 290(1038), 169-179. 

Julesz, B. (1964). Binocular depth perception without familiarity cues. Science, 145, 356–62. 

Gogel, W. C. (1965). Equidistance tendency and its consequences. Psychological Bulletin, 64(3), 153–163. https://doi.org/10.1037/h0022197 

Yang, Z., & Purves, D. (2003). A statistical explanation of visual space. Nature Neuroscience, 6(6), 632–640. https://doi.org/10.1038/nn1059 

Kant, I. (2003). Critique of pure reason (M. Weigelt, Trans.). 

My own paper on this topic (2021): How Vision Science Can Help Us Design Better Displays.  