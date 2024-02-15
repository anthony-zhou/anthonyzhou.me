---
title: "Active Inference"
pubDate: 2024-02-15
description: "Towards a unified theory of the mind."
categories: [perception, psychology, essays, science]
---

Developing a computational theory of the mind would unlock important practical and conceptual innovations. For example, we might want to know how visual inputs are coded in the retina, so that we can design a visual prosthetic. Or we might want to know how memories are represented and retrieved, such that one could measure a brain recording and recover or fix someone’s memories.  

Asking computational questions has revealed many piecemeal theories of how the brain works. For example, take 3D vision. In this domain, our working theory is that the brain reconstructs a 3D picture of the world using physical cues from the eyes (like focus depth, angle of convergence, and binocular disparity) together with pictorial cues like shadow, occlusion, and perspective. How exactly does it combine these cues? Some evidence points us towards a “Bayesian” combination of cues, in which we have certain priors about the 3D distribution of the world and integrate new cues based on their reliability in the moment.  

This leads us to one popular conception of what the brain might be doing – Bayesian inference. Bayesian inference involves learning a model that maximizes the posterior probability of real-world outcomes and applying this model to all real-world stimuli. But this perspective seems to miss out on something important – action. For example, how do you track the position of a flying baseball as you run out to catch it? If relying on Bayesian cue combination alone, you might argue that we compute a moment-to-moment estimate of the distance of the baseball. But do we really compute an estimate of the distance, or do we simply compute the speed we need to reach that ball at the correct time? 

Another challenge to the purely Bayesian view is the critique that understanding the computation alone is insufficient to explain the conscious experience of 3D vision. Consider Searle’s Chinese Room experiment, in which a man without any knowledge of Chinese is locked in a room with a single slot to the outside. When a piece of paper is entered through the slot, the man uses a set of rule books to identify new Chinese characters to respond with. All the while, the man has no understanding of Chinese, but an observer of the system sees a fluent Chinese conversation. How would a Bayesian psychologist explain the lack of true understanding in the system if all Bayesian evidence points towards internal understanding?  

It is the need to resolve these explanatory gaps – the role of action in mediating perception, and the existence of conscious experience in the mind – that prompts us to seek a new theory. One promising candidate for such a theory is active inference. First described by Karl Friston in the early 2000s, active inference is a framework for understanding the cognition and behavior of any living organism by formalizing it as an agent that minimizes the difference between its sensory observations and its preferred states, through both perception and action.  

Active inference is a special case of the free energy principle, which states more broadly that any self-preserving system must have some defining boundary (aka a Markov Blanket) between itself and the environment, and that the maintenance of this boundary can be approximated by the minimization of free energy. At an intuitive level, this is a statistical principle stating that, if a system (say, a slug) wants to be independent from its environment, it must have some statistical model of that environment. If that model is simple (as in a slug), the organism doesn’t have to do much to maximize its model evidence. However, this is not the case with a more complex organism, which requires a proportionately more complex generative model to represent its internal states and those of the outside world.  

In reinforcement learning, specifically deep reinforcement learning, the system separates values from beliefs. That is, there are beliefs, such as where pieces are placed on a Go Board and where they can be moved, and then there are values, such as which moves will yield the best rewards. Active inference frames both quantities as beliefs, in the sense that values about the best rewards are prior beliefs about what the agent expects to do in the future.  

Thus, active inference is mostly a way of thinking of the mind, as an agent that uses perception and action to minimize its variational free energy. To implement this goal, it must define a generative model that makes world predictions. Where organisms differ is in the specific generative model that they use.  

The usefulness of the active inference model is that it provides a general framework for thinking about the mind. Because the mind is a complex system, it is hard to imagine an exact analogue to this model that would represent a “template” for thinking about the mind. Perhaps a good analogy is a programming paradigm: any program can be thought of in an object-oriented lens or a functional lens or a procedural lens. Technically, all are doing the same thing – Turing-complete computation – but each way of thinking yields different ways of designing and deconstructing systems.  

Active inference has mainly been applied in three domains: mental health, motor control, and machine learning. To understand these applications, however, it’s useful to establish the way most active inference thinkers currently see the implementation of active inference in the brain, which is through predictive coding.  

Predictive coding is a hypothesis stating that the brain forms a generative model of the world and updates this model with both perceptions and actions. While the details of the statistical models are heavily mathematical, the key features are message passing and hierarchical structure – these features align quite nicely with synaptic message passing and brain structure, respectively, making the model of predictive coding seem biologically plausible.  

Predictive coding has been applied with some success to understanding mental health conditions. Active inference researchers have hypothesized a range of neurotransmitters as corresponding to specific precision (aka confidence) signals within a predictive coding model – for example, acetylcholine for the precision of likelihood, noradrenaline for the precision of transitions, and dopamine for the precision of policies. Based on this theory, Parr and Friston simulated the outcomes of pharmacological treatments on resulting eye movements, finding, for example, that interfering with the dopaminergic system undermines the brain’s ability to move the eyes in response to a saccadic target. While this study’s predictions still need to be verified empirically, it demonstrates in principle how a computational theory like active inference can yield measurable predictions of the effects of pharmacological interventions, in a way that spans across brain systems.  

Within motor control, active inference helps unify traditional learning schemes, like reinforcement learning, with the seemingly contradictory idea of inference. After all, inference contains no notion of “rewards,” so how might we observe conditioning? In 2016, Friston and Ivan Herreros simulated Pavlovian conditioning, successfully training agents to blink, and discussed how their generative model aligned well with the structure of the cerebellum. They did the latter by performing simulated lesions and showing how they related to empirical results from cerebral lesion studies.  

What Friston and Herreros’s result implies is that Pavlovian conditioning can be formalized without any reference to reinforcement learning. Instead, it can be framed as an active inference process that treats the conditioned responses as learned predictions about the future state of the agent. To advocates of active inference, the latter seems more biologically plausible with respect to the cerebellum and brain stem and comes with an advantage of also explaining perception.  

Finally, there are emerging applications of active inference to machine learning. Currently, machine learning “agents” are either trained as unsupervised learners or reinforcement learners. Unsupervised learners – such as GPT-4 – are trained on a large corpus of text without labels or reward signals. ChatGPT adds a layer on top of GPT-4, which is called reinforcement learning from human feedback (RLHF). In RLHF, the model selects responses based on a reward function learned from human like/dislike labels. Still, both approaches (unsupervised and reinforcement learning) lack any concept of novelty-seeking, curiosity, or sentience, which some think could be better encoded by free energy. The problem with current free energy approaches is that they rely on heavy statistical specification – its generative models require experts to choose the key events, such as puffing some wind into the eye or blinking, as well as the causal arrows between them. In contrast, the latest successes in machine learning have come from very big models with minimal pre-defined structure. Models like variational autoencoders and generative adversarial networks fit nicely into the active inference framework as generative models, but they don’t seem to be biologically plausible. As a result, an open question for active inference researchers in machine learning is whether biologically plausible models, when scaled up on appropriate hardware, will work effectively – or if digital hardware demands non-biological methods to achieve maximum performance. Either way, the free energy conception of intelligence – framing all action and perception as an optimization problem minimizing surprise – is very different from the typical separation between perception and action that characterizes traditional machine learning approaches.  

To put it succinctly: the free energy principle states that all things that exist must minimize their free energy, and therefore their variational free energy (which approximates the former). Active inference applies the free energy principle to living organisms, stating that a living organism is an agent that minimizes the difference between its sensory observations and its preferred states, through both perception and action. Minimizing this difference is equivalent to minimizing variational free energy or maximizing the evidence of its own existence. Predictive coding is a biologically plausible implementation of active inference in the human brain, in which neural firing rates encode updates to the brain’s generative model of the world. The roles of each neurotransmitter in inference, the choice of generative model, and the reframing of rewards as prior beliefs has yielded actionable insights for pharmacology, motor control, and reinforcement learning.  

Although the free energy principle is heavily mathematized, it is philosophically simple: organisms seek to maintain preferred states of being, and they do this by modelling the world in service of actions that will keep them alive.  

 

### References 

Pezzulo, G., Friston, K. J., & Parr, T. (2022). Active Inference. The MIT Press. https://doi.org/10.7551/mitpress/12441.001.0001 

Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11, 127–138. https://doi.org/10.1038/nrn2787 

Friston, K (2009). The free-energy principle: a rough guide to the brain? 

Parr, T., & Friston, K. J. (2019). The computational pharmacology of oculomotion. Psychopharmacology, 236(8), 2473–2484. https://doi.org/10.1007/s00213-019-05240-0 

Friston, K., & Herreros, I. (2016). Active Inference and Learning in the Cerebellum. Neural computation, 28(9), 1812–1839. https://doi.org/10.1162/NECO_a_00863 

Fletcher, P., & Frith, C. (2009). Perceiving is believing: A Bayesian approach to explaining the positive symptoms of schizophrenia. Nature Reviews Neuroscience, 10, 48–58. https://doi.org/10.1038/nrn2536 

Friston, K., & Kiebel, S. (2009). Predictive coding under the free-energy principle. Philosophical Transactions of the Royal Society B, 364, 1211–1221. https://doi.org/10.1098/rstb.2008.0300 

Feldman, H., & Friston, K. (2010). Attention, uncertainty, and free-energy. Frontiers in Human Neuroscience, 4. https://doi.org/10.3389/fnhum.2010.00215 