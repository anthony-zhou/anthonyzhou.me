---
title: "Psychophysics"
pubDate: 2024-01-25
description: "Measuring the limits of human vision"
categories: [perception, psychology, essays, science]
---

What is the dimmest light a person can see? Though this question seems simple enough, it is quite complicated to answer. First, we need to define what we mean by “seeing.” To put it simply, let’s say that something (say Object A) can be seen when it can be reliably distinguished from the background. That is: if you could tell the difference between Object A and nothing, then you have “seen” Object A. While this point may seem pedantic, this definition implies that, even if light reaches the retina, it is not necessarily “seen” unless the viewer can become consciously aware of it.   
 
The idea of determining the dimmest light a person can see is the same as determining the threshold for visual perception. Naively, we might assume that the answer is a single number (let’s say, 5 photons per millisecond per square millimeter). Brightness levels lower than that threshold are undetectable, and brightness levels above that threshold are detectable. But this assumption of a discrete threshold is wrong.  
 
To test the discrete-threshold hypothesis, you could try taking a light and shining it into a person’s eye at increasing levels of brightness. At some point, the person will start reporting that there is a light there, and you define that level of brightness as the threshold. Over one trial, the evidence seems to align with the idea that there is a single lower-bound threshold for visual perception. But then you run the experiment again, and again, and again, and you find that the probability of your subject detecting light does not, in fact, jump abruptly at a single point, but rises gradually as the brightness increases, until at some point the existence of light is basically unambiguous, following the shape of an S-curve.  
 
This S-curve result has been confirmed in numerous studies using variations on the basic method. Some studies show flashes of light at random intensities instead of in a sequence, and others have observers adjust a dial until a point of light is visible or invisible. These studies can introduce biases in different ways, but the broad result of an S-curve tends to hold true.  
 
The fact that there exists no discrete threshold value – and that the probability of detecting light instead increases gradually with brightness – implies that there is some amount of probabilistic noise between the time that photons enter the pupil and the decision a person makes in these studies (“light” or “no light”).  
 
But what’s the point of all this noise? Why can’t we just have a perfect visual system that detects every single photon?  
 
Imagine if we erased all of our biological knowledge and decided to construct a seeing machine from scratch. Assume we wanted to achieve the highest sensitivity possible – that is, the lowest possible threshold for vision. Because light is quantized (that is, it contains discrete packets of energy), the smallest detectable unit of light energy is a single photon. So, a highly sensitive seeing machine should in theory be able to count a level of light intensity corresponding to a single photon reliably – that is, the threshold for vision would be a single photon.  
 
However, such a machine is impossible (under our current knowledge of quantum physics). Even if the intensity of a light source is held constant, that in fact applies that the corresponding particles – the photons – only appear at that intensity on average. Their real position and motion of any particular photon is subject to a probability distribution. This applies both when the light is emitted from the source and when it reacts with whatever photoreceptor molecule we are using.  
 
As a result, our goal of a single-photon seeing machine is doomed from the start, in the sense that the single photon may randomly interact or not interact with the photoreceptor we are using. There is an unavoidable source of noise here, arising from the probabilistic nature of the photon.  
 
If we hold that this particle-level noise is unavoidable, then we can try fitting the observed psychophysical measurements to a model of random photon arrival and see how much variability remains – this additional variability would correspond to all the noise contributed by spontaneous firing rates, photons not reaching the rods at all, and other biological factors.  
 
This is exactly what Hecht, Shlaer, and Pirenne did in 1942. In their study, they had participants view a flashing light at a consistent (510 nm) wavelength and angle (20 degrees off center) determined to be optimal for rod vision (which is more sensitive to dim lights than cone vision). By adjusting the brightness of each flash, they could adjust the intensity of the light reaching the subjects.  
 
Given this setup, Hecht et al graphed the number of flashes seen by the participants in each trial with respect to the log of light intensity. As noted before, they observed an S-shaped curve, where probability of seeing the flash increases gradually, then suddenly, and then tops out with respect to increasing intensity.  
 
The purely physical noise model – ignoring all sources of biological noise – would try to fit this data to a Poisson distribution. Specifically, to model Hecht et al’s graph we want to plot the probability of reaching some threshold number of photons n given an arrival rate m (proportional to intensity). If P(n|m) for some n matches up well to the experimental data, this would imply that the Poisson model explains most of the underlying noise (i.e. “smoothness”) in the S-curve.   
 
In the end, the experimenters found that the data did match up quite well to the quantum noise model. Even though people previously thought that the smoothness of the lower threshold corresponded to internal noise, this study provides evidence that the variation in detection probability depends heavily on the variability of the stimulus itself, acting at the order of magnitude of 5 to 8 photons.  
 
However, this is not to say that internal noise does not matter at all. Even if the Poisson distribution of incoming photons explains broadly the curved shape of the psychometric function, it doesn’t explain the specific placement of that function, as measured through its slope and threshold of 50% probability.  
 
In real life, we do care about these details. For example, why is a frog able to see dimmer lights than a human can? In fact, the earlier analysis fitting the psychometric function to a Poisson distribution worked by defining an arbitrary value for internal noise. Changing the amount of internal noise would not change the broad shape of the function, but it could change the slope or shift the function left or right – and this is indeed what happens for a frog.  
 
To start from the ground up, internal noise in the rod cells begins with background shifts in voltage, which are happening all the time. Much of this change happens due to thermal noise – an effect where conductors at a higher temperature see more movement of their internal electrons, contributed to fluctuations in observed current. Since the human body is warm-blooded, it functions at a relatively high temperature, making the baseline level of thermal noise rather large. Indeed, you could quantify the level of thermal noise as it depends on body temperature and determine a theoretical lower limit for distinguishing a signal from thermal noise – that is, the dimmest light detectable given that we have photoreceptors at a particular temperature. Indeed, experiments seem to confirm that we are close to this optimal lower bound.  
 
Frogs, meanwhile, are cold-blooded, meaning they should have lower thermal noise in their photoreceptor cells and should be able to see dimmer lights. This has led to the famous and probably erroneous idea that frogs can “see” single photons. While frog rods are technically responsive to single photons, the activation of a photoreceptor does not imply that the frog “sees” the light in its conscious experience. One way to check if the frog actually sees the light is by shining a worm-shaped light and seeing if it responds to it. Studies of this sort suggest that frogs do have a lower threshold for dim light than humans do, just as predicted by their lower levels of thermal noise. Frogs may not see single photons, but they’re a whole lot better than humans.  
 
Exploring these two ideas – quantum noise and internal noise – and their implications for the psychometric function also brings up some broader questions about psychological observations. Do the observations about quantum noise generalize to explaining not just absolute thresholds but also just-noticeable differences? If we really have the resolution to see at the level of ~10 photons or less, how does all the noise get filtered out in higher-level cognition? Perhaps techniques like spatial and temporal summation can explain all the signal processing that occurs, but these seemingly near-optimal mathematical processes must also be explainable as arising incrementally via evolution.  
 
More broadly, results from psychophysics reveal that physics can help explain observed behaviors like detecting dim lights, while also refuting assumptions about the brain. Discussing perception in a physical context leads to a natural next step of asking how physics might affect cognition, memory, and other kinds of higher-level processing.  
 
### References 
 
“Sensation  &  Perception”  E.  Bruce  Goldstein.  Wadsworth,  Cengage  Learning,  USA.  
Chapter 1, 3 
 
Cornsweet TN (1970) Visual perception. New York: Academic Press. pp 6-26, 27-36, 42-48, 62-67, 76-80.  
 
William Bialek (2012). Biophysics: Searching for Principles 
 
Selig Hecht, Simon Shlaer, and Maurice Henri Pirenne (1942). Energy, Quanta, and Vision (From the Laboratory of Biophysics, Columbia University, New York) 