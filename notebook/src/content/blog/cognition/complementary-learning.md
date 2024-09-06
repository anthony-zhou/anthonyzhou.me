---
title: "Complementary Learning Systems"
pubDate: 2024-06-13
description: "A connectionist theory of declarative learning and memory"
categories: [cognition, psychology, essays, science]
---

In 2024, Microsoft announced a new feature rolling out to a subset of Windows users: Windows Recall. The goal of this tool is to give users enhanced memory of what happens on their computer, by taking a screenshot every five seconds and making the information searchable using AI. One can imagine using the tool to search for the name of the restaurant your friend recommended over text last week, or for the article about time management that you forgot you read. Windows Recall builds upon the work of another company, Rewind AI, who began promising a vision of personalized AI in 2020 by offering not just screenshots but also complete screen and video call recordings. If given access to a variety of devices over time, such a system could eventually recall the full scope of your informational input and output, forming a perfect picture of your needs. Need to book a hotel or send an email? Rewind will remember your hotel preferences from past bookings and your writing style from past emails, providing a personalized intelligent system.  

But why should we need such recording systems in the first place? Why can’t we just remember everything and retrieve memories perfectly? The answer, probably, is that storing and retrieving memories requires a lot of energy, and our evolutionary conditions simply did not demand perfect retrieval. In many cases, storing generalities can provide most of the benefits of storing all the specifics. For example, why remember whether each convenience store you have ever been to has beef jerky when you can remember the rule that “most convenience stores sell beef jerky?” The latter is a much simpler piece of information that is probably good enough for most purposes. And yet there are other cases where remembering the specifics is indeed useful. For example, remembering the route from your house to the closest convenience store, or remembering the name of your favorite brand of beef jerky – it's hard to imagine how else you would get yourself from your house to the convenience store or retrieve the correct brand of beef jerky without remembering the specifics. Clearly, some memories are more useful to remember in detail – but how are these priorities determined? 

One way to understand memory is by making computational models of the brain. Soon after computers were initially developed, Rosenblatt figured out that you could make artificial neural networks – consisting of mathematical “neurons” that take in synaptic inputs, sum them, and fire an action potential if those inputs exceed an activation threshold – that successfully performed shape recognition [1]. Performing shape recognition requires seemingly human-like general sense of what shapes are – this is surprising, because one might expect computers only to remember exact shapes. Such connectionist models were later used to model the memory of word pairs, only to suffer from a problem called catastrophic interference [2]. Catastrophic interference was most readily observed in the AB-AC task, in which participants first learn associations between words in list A and list B, and then are forced to learn new associations from words in list A to words in list C. While humans gracefully transitioned from one set of associations to another, the connectionist models of the time had to collapse to zero knowledge before they could learn the new associations – thus exhibiting catastrophic interference. When presented with this evidence, one could either conclude that connectionist models were doomed to fail, or that the brain might implement a more complicated connectionist model. Indeed, the latter approach, as presented by McClelland and colleagues, brought forth a new theory called Complementary Learning Systems (CLS), which framed catastrophic interference as a special case of a more general conflict between the representational mechanisms ideal for fast learning of specifics and slow learning of generalities [2]. Traditional connectionist models tended to have highly distributed representations of memories, such that each neuron made a small contribution to each memory. Such an architecture makes it hard to learn new representations, because they will tend to interfere with existing representations. CLS solves this problem by framing the hippocampus as the center of fast learning – employing sparse representation of specifics like word pairs – and the neocortex as the center of slow learning – employing distributed representation of general knowledge.  

To address the question of catastrophic interference, McClelland and colleagues considered the example where learning that penguins can’t fly interferes with the learned idea that birds can fly. They compared the performance of a connectionist model trained using focused learning – in which the model was trained first on the existing penguin-free facts and then trained only on facts about penguins being birds who cannot fly – with a model trained using interleaved learning – in which the penguin facts were interspersed with the other facts. In the first case, the model exhibited catastrophic interference, as expected. In the second case, the model learned to differentiate penguins as a special case of a bird that couldn’t fly.  

Beyond demonstrating a method for avoiding catastrophic interference, this study also illuminated a potential role for the hippocampus. Perhaps the hippocampus serves as an interference-free buffer between the stream of real-world experience and the store of neocortical memories, then provides interleaved training to the neocortex to form long-term memories. This explains why consolidation – the process by which memories enter long-term memory – should be gradual, because rapid consolidation into neocortex would be equivalent to the focused learning case from their experiment.  

In further support of this theoretical framework, O’Reilly and colleagues demonstrated that complementary learning systems explained participant behavior in a fear conditioning task. In this study, they repeatedly transported rats using a specific black bucket to some environment (call it environment A). Then they transported the rats using the same bucket to environment C, and delivered a shock. As expected, the rats froze up – a sign of fear – only in environment A and not environment C, because they had learned to associate the bucket and environment A as the chain of events leading to a shock. On the other hand, rats with hippocampal lesions did not freeze in either environment, implying that the hippocampus was key to learning this association. Moreover, when the pre-exposures to environment A were presented more slowly, three times over the course of 6 minutes, it appeared that these rats were instead relying on the neocortex (or some non-hippocampal region), because they successfully froze in fear when reintroduced to environment A. This study provided some behavioral evidence that converged with the theory that the hippocampus performs fast learning and the neocortex performs slow learning – while also demonstrating how the neocortex alone can learn important fear associations when presented with repeated pre-exposures [3]. Taken together with evidence from amnesiacs with hippocampal damage, this suggest a picture of the hippocampus as not just a center of episodic or spatial memory, but as a region for creating non-overlapping representations of specific memories – a necessary function for learning from single experiences but not from repeated exposure [4].  

Despite its success in explaining the behavior of people and rats with hippocampal lesions, as well as the catastrophic interference exhibited by connectionist models trained with focused learning, CLS failed to fully explain the edge cases. Why, for example, should we be able to learn regularities rapidly, if the slow-learning neocortex is required for learning generalities? To answer this seeming contradiction, Schapiro and colleagues presented computational models based on known hippocampal properties that simulate the hippocampus as a combination of both a monosynaptic pathway that learns statistical regularities and a trisynaptic pathway that learns individual episodes. While the regularities learned by the hippocampus are less robust than those stored in neocortex – as sparse architectures use less neurons to represent each idea – they would help explain the fast learning of regularities within the framework of Complementary Learning Systems theory [5].  

Even with a picture of the hippocampus as a fast learner and the neocortex as a slow learner, we are left with an open question: what determines what information is consolidated in the neocortex? An obvious answer is “whatever is adaptively useful.” But what information is adaptively useful to remember in neocortex? Probably the information that is useful to generalize. The information that is most useful for generalization, as captured by a 2023 formalization by Sun and colleagues, is exactly the information that minimizes expected future prediction error. For example, it’s probably good to consolidate the information that birds fly in general, whereas knowing what color shirt your friend wore yesterday should not necessarily be consolidated [6]. In their paper, Sun and colleagues develop a computational model, called Go-CLS, implementing what they see as the optimal form of consolidation, in which memories that aid generalization are consolidated. Simulations with Go-CLS demonstrate that unregulated memory consolidation can harm generalization performance, which might explain why the hippocampus seems to store certain permanent memories itself – such as, perhaps, the memory of your friend’s shirt color yesterday – rather than consolidating everything it can into neocortex.  

Neuronally, one function of the hippocampus seems to be scene construction, activating higher cortical regions to create the experience of a coherent scene. Within the complementary learning systems framework, scene construction can be thought of as the mechanism by which the hippocampus teaches the neocortex to remember certain memories, by rehearsing goal-relevant scenes [7]. In a computational vindication of this view, a group of AI researchers working on the deep-Q network (DQN) employed an “episodic buffer” during training – that is, when training a reinforcement learning agent to play Atari games, they randomly interleaved scenes from past games with the current games, simulating the function of the hippocampus in rehearsing past scenes during learning. The DQN without an episodic buffer performed at best around ~30% of the level of the DQN with an episodic buffer, empirically demonstrating that an episodic buffer can benefit an artificial connectionist architecture.  

In the human brain, despite the general evidence supporting CLS, it is unlikely that the division between fast-updating hippocampal and slow neocortical-updating systems is an exact dichotomy – instead, the forms of learning likely form a continuum depending on where you draw the anatomical lines, with parts of the hippocampus also participating in long-term memory. What is key here is that the original tradeoff proposed by McClelland and colleagues (and perhaps even earlier by Marr) holds true in both biological and artificial systems – that is, the best way to represent memories in a neural architecture depends on whether you care about remembering specifics or generalities: the former is sparse and the latter is distributed. Just as tradeoffs between read and write efficiency inform the design of so many databases, and tradeoffs between short and long-term goals influence the planning of organizations, so the tradeoff between specific and general memory representations leads to many implications for the design of both the brain and of artificial memory systems that aspire to replicate it.  

 

References 

[1] Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. Psychological Review, 65(6), 386-408. 

[2] McClelland, J. L., McNaughton, B. L., & O'Reilly, R. C. (1995). Why there are complementary learning systems in the hippocampus and neocortex: insights from the successes and failures of connectionist models of learning and memory. Psychological review, 102(3), 419. 

[3] O’Reilly RC, Norman KA (2002). Hippocampal and neocortical contributions to memory: advances in the complementary learning systems framework. Trends in Cognitive Sciences, 6, 505-510. 

[4] O’Reilly, R. C., Bhattacharyya, R., Howard, M. D., & Ketz, N. (2014). Complementary learning systems. Cognitive science, 38(6), 1229-1248. 

[5] Schapiro, A. C., Turk-Browne, N. B., Botvinick, M. M., & Norman, K. A. (2017). Complementary learning systems within the hippocampus: a neural network modelling approach to reconciling episodic memory with statistical learning. Philosophical Transactions of the Royal Society B: Biological Sciences, 372(1711), 20160049. 

[6] Sun, W., Advani, M., Spruston, N., Saxe, A., & Fitzgerald, J. E. (2023). Organizing memories for generalization in complementary learning systems. Nature neuroscience, 26(8), 1438-1448. 

[7] Kumaran D, Hassabis D, McClelland JL (2016). What learning systems do intelligent agents need? Complementary learning systems theory updated. Trends in Cognitive Sciences, 20, 512-534. 