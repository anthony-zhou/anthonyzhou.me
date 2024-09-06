---
title: "Cognitive control"
pubDate: 2024-05-16
description: "The neural correlates of goal-directed thinking."
categories: [cognition, psychology, essays, science]
---

One of the mysteries of human cognition is general intelligence – the flexible ability to pursue different goals. Because of our generality, humans are supposed to be able to resist their automatic tendencies and pursue goals through deliberate actions. For example, when presented with a marshmallow, your automatic tendency might be to eat the marshmallow. If you are on a diet, however, you would exercise restraint and prevent yourself from eating the marshmallow. Another example is solving a math problem. When presented with a problem, you must determine a plan for solving the problem – for example, you might first translate the problem into another problem you know how to solve (say, a system of equations), and then solve the problem, and reinterpret the answer in the context of the problem.  

What is the cognitive resource that accounts for impulse control, planning, and the execution of plans? The answer is cognitive control, which is kind of a catch-all term for any kind of goal-oriented thinking. Cognitive control involves the inhibition of non-relevant actions, the representation and maintenance of relevant goals, and the execution of these goals via action selection. On the way to achieving these goals, humans encounter large amounts of information, which must be selectively filtered and processed based on what’s relevant. This is the role of selective attention, which is the ability to perceptually focus on a behaviourally relevant stimulus while ignoring distractors.  

From a purely theoretical perspective, by virtue of the way I’ve defined them, a major role of cognitive control should be to orchestrate attention based on current goals. But definitions alone provide limited usefulness unless they help us explain behaviour. If our definitions of cognitive control and selective attention are to be useful, we should observe that they each have specific neural correlates in the brain that can be damaged or modulated separately – and that cognitive control regions exert a causative influence on selective attention regions.  

One attempt at addressing the neural correlates of cognitive control comes from John Duncan in 1986, who synthesized the results from many studies of frontal lobe damage [1]. Frontal lobe damage often left people (and monkeys) with disorganized behaviour, including repetition of aimless movements and intrusion of irrelevant actions while attempting to complete a task. Using this observation, Duncan proposes the theory that people with this specific kind of frontal lobe damage and disorganized behaviour suffer from a “defect in goal-based search” -- that is, in a model of human behaviour that involves forming goal lists and pursuing specific actions from a vast action store, these people experience the inability of goals to control action, especially the inability of goals to inhibit irrelevant actions. Taken together with the result that such patients have no trouble completing repetitive tasks – and indeed have trouble stopping – the inability to pursue goal-based behaviour is taken to contrast with automatic and repetitive behaviour, which seems to be undamaged.  

Duncan’s theory tells us that the frontal lobe does something important in helping goals exert influence over actions. But what exactly does the frontal lobe do? While Duncan left the specific implicated area of the frontal lobe unspecified, later researchers have focused on the prefrontal cortex as the critical area involved in cognitive control. For an example of a more specific theory, Katsuyuki Sakai conceptualizes the prefrontal cortex as a network involved in task sets – that is, a “configuration cognitive processes that is actively maintained for subsequent task performance.” [2] Sakai’s explicit goal, much like the goal of our early definitions, is to see if neural data can fully explain the behavioural patterns we call “the establishment of task sets.” The answer seems to be yes. In a 2003 fMRI study, Sakai and Passingham instructed participants to either remember a sequence of spatial positions or sequence of letters, either in forward or backward order [3]. Unsurprisingly, the four different tasks activated different regions in the participants brains – but the interesting question was whether anything would stay in common. Indeed, neurons in the anterior PFC responded to all four of the tasks, remaining strongly activated throughout the period between the delivery of the instruction and the start of the task, suggesting their role in maintaining task sets through the instruction delay period. Taken together with single-neuron recording results showing that single neurons in monkey PFCs seem to encode task operations at various levels of abstraction, this human neuroimaging data provides a relatively convincing association between the anterior PFC and the establishment of task sets.  

How do task sets manifest themselves through changes in selective attention? The logical explanation would be that parts of the PFC project onto lower sensory areas, thus biasing perception in favour of the attended stimuli. Indeed, Paneri and Gregorian review evidence that the lateral PFC and frontal eye fields (FEF) both play a major role in attention [4]. In particular, the frontal eye fields seem heavily involved with spatial attention. The frontal eye fields are normally involved with the movement of the eyes, so it is fitting that they would be involved with spatial attention. In fact, their involvement is causal, as Moore and Fallah demonstrated in a 2001 monkey study. By employing electrical microsimulation to specific regions of the frontal eye fields, they replicated the effects of FEF activity and observed increased task performance in the corresponding visual fields [5]. According to simultaneous neural recordings in different brain regions during spatial attention tasks, FEF activation generally precedes LPFC activation, suggesting that the frontal eye fields may be involved in shifts of attention while searching for a target, while LPFC helps identify the target once selected and direct behaviour accordingly [6]. Thus, it may be that the FEF performs search and the LPFC performs selection. 

If the FEF and LPFC truly control attentional behaviour, then they should also have a causal influence on early visual areas like V4, where attention is supposed to resolve a competition between target stimuli and distractors. Once again, microsimulation in monkey FEFs proved useful, because it resulted in the corresponding attentional biases in V4 [7]. On the other hand, there exists no similar causal demonstration for the influence of LPFC – although LPFC is harder to study because of its hypothesized role in feature-based rather than spatial attention.  

By this point, then, we have established a theory that the brain achieves cognitive control (the computational goal) via the execution of task sets (the algorithm), using areas of the frontal lobe like LPFC and FEF that convey top-down signals to sensorimotor areas (the neuronal implementation). But this theory leaves a bit of a chicken-and-egg problem, because it’s unclear how the frontal lobe itself establishes its task sets. To answer this question, many have looked to the anterior cingulate cortex (ACC), which sits between limbic and frontal areas, in its role both as an integrator of reward signals and a conflict monitor.   

On one hand, the ACC was long considered a centre for the integration of reward signals [8]. In fact, studies of the ACC helped inspire ideas in reinforcement learning: the algorithms that plan actions to achieve a goal state (e.g. a sequence of moves to win a game of chess or a sequence of folds to replicate the 3D structure of a protein) by learning associations between sequences of actions and reward signals. If the ACC indeed learns to plan action based on past experience, then it would clearly play an important role in cognitive control.  

On the other hand, some have considered ACC in the context of the conflict monitoring theory, a theory that explains cognitive control by proposing that the ACC monitors for conflicts in information processing, and then conveys this information to the lateral PFC so that it can resolve the conflict via top-down signalling (which we can also call selective attention) [8]. Indeed, the ACC does seem to activate more strongly in experimental conditions characterized by sensory conflict, but activates less strongly on repeated trials, implying that the conflict has been resolved. Challenging the conflict monitoring theory, however, is the lack of cross-species evidence – for example, monkeys more often lose their conflict adaptation abilities due to LPFC lesions than to ACC lesions. In contrast, the reinforcement learning account has been supported by analogous cross-species evidence. Perhaps, then, conflict monitoring is really a special case of a broader optimization algorithm implemented in the ACC, which codes for both internal and behavioural prediction errors – the exact computational algorithm is still unknown.  

Research in cognitive control is complicated because there is no simple way to disentangle representation from processing, or motivation from control. Studying the system through each lens reveals different insights – for example, through the representation of task sets in LPFC neurons, or the processing of conflict in the ACC. Still, it does seem quite plausible that the mechanisms of all the aforementioned brain regions obey a kind of recursive design principle, communicating to subsequent brain regions (perhaps via oscillatory synchrony), modulating downstream signals based on the sense of relevance that the upstream neurons represent. Understood this way, selective attention is not just the instrument of cognitive control for achieving tasks – instead, cognitive control may itself be a form of attentional signal, generalized to include perception, action, and abstract thought, which forms the basis of our adaptable behaviour.  

 

References 

[1] Duncan J (1986). Disorganisation of behaviour after frontal lobe damage. Cognitive Neuropsychology, 3(3), 271-290. 

[2] Sakai K (2008) Task set and prefrontal cortex. Annual Review of Neuroscience, 31, 219-245. 

[3] Sakai, K., & Passingham, R. E. (2003). Prefrontal interactions reflect future task operations. Nature neuroscience, 6(1), 75-81. 

[4] Paneri, S., Gregoriou, G. G. (2017). Top-down control of visual attention by prefrontal cortex. Functional specialization and long-range interaction. Frontiers in Neuroscience, 11, 545(1-16). 

[5] Moore, T., & Fallah, M. (2001). Control of eye movements and spatial attention. Proceedings of the National Academy of Sciences of the United States of America, 98(3), 1273–1276. https://doi.org/10.1073/pnas.98.3.1273 

[6] Buschman, T. J., & Miller, E. K. (2007). Top-down versus bottom-up control of attention in the prefrontal and posterior parietal cortices. Science (New York, N.Y.), 315(5820), 1860–1862. https://doi.org/10.1126/science.1138071 

[7] Moore, T., & Armstrong, K. M. (2003). Selective gating of visual signals by microstimulation of frontal cortex. Nature, 421(6921), 370–373. https://doi.org/10.1038/nature01341 

[8] Yeung N (2014) Conflict monitoring and cognitive control. In: Ochsner KN, Kosslyn SM (eds) The Oxford Handbook of Cognitive Neuroscience, Volume 2: The Cutting Edges. OUP, Oxford, pp 275-299 