const phases = [
  ['00','Setup & Tooling','Set up your AI engineering workstation and learn the workflow.', ['Environment setup','Git & GitHub for AI projects','Python project structure','Virtual environments','CLI fundamentals']],
  ['01','Math Foundations','Build the mathematical intuition behind ML and neural networks.', ['Vectors and matrices','Dot products and geometry','Derivatives intuitively','Gradients and optimization','Probability essentials']],
  ['02','ML Fundamentals','Learn classical machine learning before deep learning.', ['Datasets and features','Linear regression','Logistic regression','Decision trees','Model evaluation']],
  ['03','Deep Learning Core','Understand neural networks from first principles.', ['Perceptrons','Forward propagation','Loss functions','Backpropagation','Optimizers']],
  ['04','Computer Vision','Learn how machines work with images and visual data.', ['Image representation','Convolution intuition','CNN from scratch','Data augmentation','Vision evaluation']],
  ['05','NLP Foundations','Move from text processing to learned representations.', ['Text normalization','Tokenization','Bag of words','Embeddings','Sequence models']],
  ['06','Speech & Audio','Understand signals, features and modern audio AI.', ['Audio as a signal','Sampling and FFT','Spectrograms','Speech recognition','Audio evaluation']],
  ['07','Transformers Deep Dive','Understand attention and the architecture behind modern AI.', ['Self-attention','Multi-head attention','Positional encoding','Transformer blocks','Attention visualization']],
  ['08','Generative AI','Understand generation, decoding and controllable outputs.', ['Autoregressive generation','Sampling strategies','Prompt design','Structured outputs','Generation evaluation']],
  ['09','Reinforcement Learning','Learn through actions, rewards and feedback.', ['States and actions','Rewards','Q-learning','Policy gradients','RL evaluation']],
  ['10','LLMs from Scratch','Build a tiny language model to understand the stack.', ['Tokenizer','Dataset pipeline','Embeddings','Tiny transformer','Training loop']],
  ['11','LLM Engineering','Turn foundation models into useful applications.', ['Prompt architecture','Tool calling','Embeddings and retrieval','RAG pipeline','LLM application testing']],
  ['12','Multimodal AI','Build systems that reason across text, image and audio.', ['Vision-language models','Image prompting','Multimodal embeddings','Document understanding','Multimodal evaluation']],
  ['13','Tools & Protocols','Give models reliable ways to interact with systems.', ['Tool schemas','MCP concepts','MCP server basics','Agent Skills','Tool security']],
  ['14','Agent Engineering','Design agents that plan, act, observe and recover.', ['Agent loop','Planning strategies','Memory','Tool use','Agent evaluation']],
  ['15','Autonomous Systems','Move from single agents toward robust autonomous workflows.', ['State machines','Retries and recovery','Human-in-the-loop','Long-running tasks','Safety boundaries']],
  ['16','Multi-Agent & QE','Coordinate agents and verify AI behavior systematically.', ['Agent roles','Orchestration patterns','Evaluation datasets','AI quality gates','Regression evaluation']],
  ['17','Infrastructure & Production','Deploy AI systems with reliability and observability.', ['Serving architecture','Caching','Observability','Cost controls','Production release']],
  ['18','Safety & Responsible AI','Build systems with security, safety and accountability.', ['Threat modeling','Prompt injection','Data privacy','Guardrails','Incident response']],
  ['19','Capstone Projects','Prove the skills by building end-to-end systems.', ['RAG application','AI agent','Evaluation harness','Production AI service','Final portfolio project']]
];

const glossary = [
  ['Agent','A software system that can decide which actions to take toward a goal.'],
  ['Attention','A mechanism that lets a model weight different parts of its input when computing a representation.'],
  ['Embedding','A numeric vector representing an item so semantic relationships can be measured.'],
  ['Evaluation','A systematic method for measuring whether an AI system behaves as intended.'],
  ['Hallucination','A generated claim that is unsupported, incorrect or not grounded in available evidence.'],
  ['MCP','A protocol for connecting AI applications with tools, resources and prompts in a standardized way.'],
  ['RAG','Retrieval-Augmented Generation: retrieving relevant evidence and providing it to a generative model.'],
  ['Tokenization','The process of converting text into discrete units used by a language model.'],
  ['Transformer','A neural architecture built around attention mechanisms, widely used for language and multimodal models.'],
  ['Vector database','A system optimized for storing and retrieving vector representations by similarity.']
];

const assessments = phases.reduce((acc, p) => {
  acc[p[0]] = [
    {q:`What is the main goal of Phase ${p[0]} — ${p[1]}?`, options:[`Build intuition and practical skills in ${p[1].toLowerCase()}.`,`Skip all prerequisites and use an API immediately.`,`Only memorize terminology.`,`Avoid testing and evaluation.`], answer:0},
    {q:'What should a learner do after implementing a concept?', options:['Assume it works because the code runs.','Verify expected behavior with a small test or evaluation.','Delete the implementation.','Move to production immediately.'], answer:1},
    {q:'What is the learning loop used throughout this platform?', options:['Copy → Paste → Deploy','Read → Forget → Repeat','Learn → Practice → Prove → Progress','Watch → Skip → Finish'], answer:2}
  ];
  return acc;
}, {});

function lessonData(id) {
  const [pi, name, desc, lessons] = phases.find(p => p[0] === id.split('-')[0]) || phases[0];
  return lessons.map((title, i) => ({
    id:`${pi}-${i+1}`, phase:pi, phaseName:name, title,
    summary:`Understand ${title.toLowerCase()}, implement the smallest useful example, and verify what you built.`,
    body:`This lesson is part of ${name}. Start with intuition, inspect the mechanics, build a small artifact, and finish by checking whether the behavior matches your expectation.`,
    takeaways:[
      `Explain the core idea behind ${title.toLowerCase()}.`,
      'Implement a minimal version without hiding the important mechanics.',
      'Define at least one test or evaluation signal.',
      'Identify where this concept appears in a production AI system.'
    ],
    code:`# ${title}\n# Start small and inspect every intermediate value.\n\ndef main():\n    print("Build: ${title}")\n\nif __name__ == "__main__":\n    main()`
  }));
}

function phaseLessons(phaseId) { return lessonData(`${phaseId}-1`); }
