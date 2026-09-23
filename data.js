/* Public curriculum index. Authoritative lesson content and assessment keys are server-side. */
const phases = [["00","Setup & Engineering Workflow","Set up a reproducible AI engineering environment and the habits that make work inspectable.",["Python runtime & package management","Git fundamentals & branching","Command-line & filesystem skills","Project structure & reproducibility","HTTP & API fundamentals","Secrets & configuration","Documentation & reproducibility"]],["01","Python for AI","Learn the Python needed to build, test and maintain AI software.",["Python syntax & control flow","Functions & modules","Collections & comprehensions","Exceptions & debugging","Files, JSON & CSV","Typing & dataclasses","Testing with pytest","Python project patterns"]],["02","Data & Math Foundations","Learn the minimum data and mathematical foundations needed to reason about models and AI systems.",["NumPy arrays & vectorization","Pandas & data preparation","SQL for AI data work","Vectors, matrices & dot products","Probability & statistics","Gradients & optimization","Distance, similarity & embeddings intuition","Data quality & measurement"]],["03","Machine Learning Foundations","Build reliable classical ML workflows before moving into deep learning.",["Datasets, features & targets","Splits, leakage & baselines","Regression","Classification","Trees & ensembles","Feature engineering & regularization","Model evaluation & error analysis","Build a small ML system"]],["04","Deep Learning with PyTorch","Understand neural networks and learn to train and debug them with PyTorch.",["Tensors, datasets & autograd","Forward pass & loss","Backpropagation","Optimizers & activation functions","DataLoaders & batching","Training loops & validation","Debugging training experiments","Build a neural network"]],["05","Computer Vision","Optional specialization: build practical intuition for image models and visual evaluation.",["Image representation & preprocessing","Convolution & CNNs","Augmentation & transfer learning","Image classification & detection","Vision evaluation & mini-project"]],["06","NLP & Representation","Learn the language-processing foundations that make modern language models easier to reason about.",["Text normalization & tokenization","Bag-of-words & TF-IDF","Embeddings & representation","Pretrained NLP workflows","Text classification","NLP evaluation","Build a small text system"]],["07","Transformers","Understand the architecture behind modern language models and use pretrained Transformers correctly.",["Self-attention","Queries, keys, values & scaled attention","Multi-head attention & positional information","Transformer blocks","Encoder vs decoder architectures","Causal & attention masking","Inference mechanics","Use and fine-tune a pretrained Transformer"]],["08","LLM Foundations & Inference","Understand how modern LLM applications depend on generation, context, model choice and failure behavior.",["Autoregressive generation","Decoding: temperature, top-k & top-p","Instruction tuning & alignment overview","Context windows & context limits","Model selection, latency & cost","LLM capabilities & limitations","Generation failure modes","Build a small LLM application"]],["09","LLM Internals & Training","Optional specialization: go deeper into how language models are trained and optimized.",["Tokenization, data & pretraining objectives","Tiny Transformer implementation","Training loop & checkpoints","Memory, compute & scaling trade-offs","Build a tiny language model"]],["10","LLM Application Engineering","Turn foundation models into dependable application components.",["Prompt & instruction architecture","Context engineering","Structured outputs & validation","Model/tool API integration","Caching & cost-aware design","LLM application testing","Failure handling & fallbacks","Build an LLM application"]],["11","RAG Engineering","Build retrieval-augmented systems that ground answers in evidence and can be evaluated.",["RAG architecture & data flow","Document ingestion & normalization","Chunking strategies","Embeddings & vector search","Hybrid retrieval, metadata & reranking","Citations, grounding & answerability","RAG evaluation","Build a production-style RAG system"]],["12","Multimodal AI","Optional specialization: extend AI systems across vision, documents and audio.",["Vision-language models","Document understanding & OCR","Multimodal embeddings","Audio & cross-modal retrieval","Build and evaluate a multimodal application"]],["13","Tools & Protocols","Give models reliable, bounded interfaces to software and external systems.",["Tool contracts & schemas","Tool selection & routing","MCP concepts & control model","MCP server basics","Authentication & authorization boundaries","Tool security & trust boundaries","Tool error handling","Build a safe tool-enabled application"]],["14","Agent Engineering","Design agents as bounded, observable systems rather than unconstrained model loops.",["Harness engineering","Loop engineering & termination","Context engineering for agents","Tool design & recovery","Memory architecture","Orchestration patterns","Guardrails & permissions","Agent evaluation","Human-in-the-loop design","Observability & tracing"]],["15","AI Systems & Reliability","Turn agentic demos into durable workflows that survive retries, concurrency and partial failure.",["State machines & explicit workflow state","Workflow orchestration","Queues & background jobs","Retries, backoff & idempotency","Long-running tasks & checkpoints","Caching & concurrency","Failure recovery & compensation","Design a reliable AI workflow"]],["16","AI Quality Engineering","Treat evaluation as engineering: datasets, regression, behavior, safety and release gates.",["AI test strategy","Evaluation datasets & golden cases","Outcome vs trajectory evaluation","LLM-as-judge: use and limitations","RAG & grounding evaluation","Agent/tool-call testing","Regression & change detection","Evaluation validity, reward hacking & contamination","Safety, hallucination & adversarial testing","Build an AI evaluation harness"]],["17","Production & LLMOps","Deploy, operate and improve AI systems with observability, reliability and cost discipline.",["Serving architecture & APIs","Containers & dependency control","CI/CD for AI applications","Observability & tracing","Latency & performance","Caching & cost controls","Configuration, secrets & rollout","Incident response, rollback & recovery"]],["18","Security & Responsible AI","Design AI systems around explicit trust boundaries, least privilege, privacy and risk controls.",["Threat modeling for AI systems","Prompt injection & indirect injection","Sensitive information & privacy","Improper output handling","Supply chain & dependency risk","Permissions, excessive agency & tool security","Abuse cases, incident response & human oversight"]],["19","Capstone & Portfolio","Combine the core skills into one defensible, runnable engineering project.",["Choose the problem & define success","Architecture & threat model","Build the smallest end-to-end system","Evaluation, regression & failure analysis","Production readiness & runbook","Portfolio documentation & technical defense"]]];
const lessonSpecs = [
  {
    "id": "00-1",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Python runtime & package management",
    "summary": "A project can work on one laptop and fail on another because runtime and dependency assumptions are hidden. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-2",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Git fundamentals & branching",
    "summary": "AI projects change quickly; without recoverable history, an experiment can destroy a working system. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-3",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Command-line & filesystem skills",
    "summary": "AI engineering tools are often driven from terminals, scripts and file paths; weak shell skills turn simple failures into guesswork. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-4",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Project structure & reproducibility",
    "summary": "A working prototype is not reusable if another engineer cannot tell where code, tests, data and configuration belong. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-5",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "HTTP & API fundamentals",
    "summary": "Most AI applications are networks of requests, responses and failure states, not just model calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-6",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Secrets & configuration",
    "summary": "Putting API keys in source code or committing them creates a preventable security incident. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-7",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Documentation & reproducibility",
    "summary": "Future-you and other engineers need to know what was run, with which inputs, and why the result should be trusted. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-1",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Python syntax & control flow",
    "summary": "AI code is built from ordinary program logic; model libraries cannot rescue unclear control flow. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-2",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Functions & modules",
    "summary": "Reusable AI systems depend on small units with clear inputs and outputs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-3",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Collections & comprehensions",
    "summary": "Data pipelines constantly transform lists, dictionaries and sets; poor choices create bugs or unnecessary complexity. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-4",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Exceptions & debugging",
    "summary": "AI failures often surface far from their root cause; reading tracebacks is a core engineering skill. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-5",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Files, JSON & CSV",
    "summary": "AI applications move data between files and services; malformed input is normal, not exceptional. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-6",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Typing & dataclasses",
    "summary": "As AI systems grow, implicit dictionaries become difficult to reason about and easy to misuse. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-7",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Testing with pytest",
    "summary": "A test that only checks that code runs is weak evidence; good tests encode expected behavior and failure boundaries. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "01-8",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Python project patterns",
    "summary": "A maintainable Python project needs predictable entry points, configuration boundaries, tests and import discipline. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-1",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "NumPy arrays & vectorization",
    "summary": "AI data is numerical and large; Python loops become awkward and slow when every value is handled individually. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-2",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Pandas & data preparation",
    "summary": "Real AI datasets contain missing values, duplicate rows, mixed types and awkward tables before modeling even begins. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-3",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "SQL for AI data work",
    "summary": "Many model inputs originate in relational systems; pulling the wrong rows can invalidate an otherwise perfect model. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-4",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Vectors, matrices & dot products",
    "summary": "Embeddings, linear layers and similarity search all rely on vector and matrix operations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-5",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Probability & statistics",
    "summary": "AI decisions involve uncertainty, distributions and noisy measurements; a single average can hide important behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-6",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Gradients & optimization",
    "summary": "Training is repeated adjustment; the useful question is not “what is a gradient?” but “which direction reduces the objective?” This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-7",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Distance, similarity & embeddings intuition",
    "summary": "Retrieval and semantic matching depend on how representations are compared, not on magic “AI similarity.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "02-8",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Data quality & measurement",
    "summary": "Bad labels, missingness and inconsistent measurement can dominate model quality long before architecture matters. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-1",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Datasets, features & targets",
    "summary": "A model cannot learn a well-defined task if inputs and targets are ambiguous. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-2",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Splits, leakage & baselines",
    "summary": "A high score can be meaningless when information crosses the train/test boundary or when no simple baseline exists. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-3",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Regression",
    "summary": "Regression is about predicting a numeric quantity while understanding residual error and the consequences of being wrong. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-4",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Classification",
    "summary": "Classification systems trade different error types; the threshold is part of the product decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-5",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Trees & ensembles",
    "summary": "Tree models can expose useful feature interactions and ensembles can reduce variance or improve predictive performance. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-6",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Feature engineering & regularization",
    "summary": "The representation and constraints you choose can matter more than swapping algorithms. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-7",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Model evaluation & error analysis",
    "summary": "A single aggregate metric cannot tell you where a model fails or whether the failure matters. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "03-8",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Build a small ML system",
    "summary": "The engineering task is to connect data, preprocessing, model, evaluation and reproducibility into one repeatable path. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-1",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Tensors, datasets & autograd",
    "summary": "Deep learning bugs often start as shape/device/data-contract mistakes before the model ever learns. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-2",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Forward pass & loss",
    "summary": "A neural network learns by turning inputs into predictions and measuring how wrong those predictions are. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-3",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Backpropagation",
    "summary": "Backpropagation is the mechanism that tells each parameter how its local change affected the final loss. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-4",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Optimizers & activation functions",
    "summary": "Training behavior depends on both how gradients update parameters and where nonlinear transformations occur. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-5",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "DataLoaders & batching",
    "summary": "Batching affects memory, throughput and the statistical behavior of gradient updates. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-6",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Training loops & validation",
    "summary": "A training loop is an experiment controller, not a sacred code template. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-7",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Debugging training experiments",
    "summary": "When loss does not move, random architecture changes are slower than systematic diagnosis. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "04-8",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Build a neural network",
    "summary": "The goal is to own the complete training loop rather than only call a high-level helper. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "05-1",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Image representation & preprocessing",
    "summary": "An image model receives numbers; resizing, normalization and channel order change those numbers before inference. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "05-2",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Convolution & CNNs",
    "summary": "CNNs exploit local spatial structure instead of treating every pixel as unrelated. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "05-3",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Augmentation & transfer learning",
    "summary": "Limited image data often benefits from realistic variation and pretrained visual representations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "05-4",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Image classification & detection",
    "summary": "Classification answers “what is here?” while detection also answers “where?”; the evaluation contract changes with the task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "05-5",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Vision evaluation & mini-project",
    "summary": "A vision system can look impressive while failing on lighting, viewpoint or class imbalance. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-1",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Text normalization & tokenization",
    "summary": "Text that looks identical to a human can be different to a program; representation choices affect downstream behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-2",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Bag-of-words & TF-IDF",
    "summary": "Simple sparse representations remain useful baselines and reveal what information a representation keeps or throws away. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-3",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Embeddings & representation",
    "summary": "Modern NLP systems compare dense representations because semantic relationships are difficult to capture with word counts alone. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-4",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Pretrained NLP workflows",
    "summary": "Using a pretrained model is an engineering workflow: tokenize correctly, run inference, inspect outputs and respect model limitations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-5",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Text classification",
    "summary": "Classification quality depends on labels, imbalance, thresholding and representative language—not only model choice. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-6",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "NLP evaluation",
    "summary": "Text quality cannot always be captured by one score; the evaluation set must reflect real language and failure costs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "06-7",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Build a small text system",
    "summary": "A useful NLP system connects preprocessing, model inference, evaluation and failure handling. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-1",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Self-attention",
    "summary": "Attention lets a token construct a representation using information from other tokens instead of a fixed local window. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-2",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Queries, keys, values & scaled attention",
    "summary": "The Q/K/V split explains what is being asked, what matches, and what information is retrieved. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-3",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Multi-head attention & positional information",
    "summary": "One attention head is a limited view; multiple heads and position signals let the model represent different relationships and order. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-4",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Transformer blocks",
    "summary": "A Transformer block is a repeatable computation pattern, not a single “attention layer.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-5",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Encoder vs decoder architectures",
    "summary": "Architecture follows the task: understanding a whole sequence differs from generating the next token. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-6",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Causal & attention masking",
    "summary": "Masks are control logic over information flow; a wrong mask can leak future information or hide needed context. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-7",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Inference mechanics",
    "summary": "Generation is an iterative process with context growth, token selection and stopping behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "07-8",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Use and fine-tune a pretrained Transformer",
    "summary": "The engineering choice is often between using a pretrained model as-is, adapting it lightly, or training more deeply. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-1",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Autoregressive generation",
    "summary": "LLM text generation is repeated conditional prediction: each new token changes the context for the next decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-2",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Decoding: temperature, top-k & top-p",
    "summary": "Decoding settings change how the model samples from its probability distribution; they do not change the model’s learned knowledge. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-3",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Instruction tuning & alignment overview",
    "summary": "A pretrained model and an instruction-following assistant are not the same behaviorally; post-training changes how the model responds to tasks and constraints. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-4",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Context windows & context limits",
    "summary": "More context is not automatically better; long context has cost, latency and relevance trade-offs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-5",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Model selection, latency & cost",
    "summary": "Choosing an LLM is an engineering decision across quality, latency, cost, context, reliability and operational constraints. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-6",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "LLM capabilities & limitations",
    "summary": "LLMs can produce useful language while remaining uncertain, non-deterministic and sensitive to context. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-7",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Generation failure modes",
    "summary": "Hallucination, omission, repetition, refusal and instruction conflict are observable failure classes, not mysterious model personality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "08-8",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Build a small LLM application",
    "summary": "An LLM app is a system around the model: inputs, instructions, context, output handling, evaluation and failure paths all matter. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "09-1",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Tokenization, data & pretraining objectives",
    "summary": "A language model learns from a representation and an objective; understanding both clarifies what “training on text” actually means. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "09-2",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Tiny Transformer implementation",
    "summary": "A small implementation makes architecture concrete because every tensor and operation is visible. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "09-3",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Training loop & checkpoints",
    "summary": "Training is an experiment over time; checkpoints preserve evidence and recovery points. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "09-4",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Memory, compute & scaling trade-offs",
    "summary": "Model size, sequence length, batch size and precision change resource use; scaling is not free. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "09-5",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Build a tiny language model",
    "summary": "The goal of this optional track is mechanistic understanding, not competing with large-scale training. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-1",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Prompt & instruction architecture",
    "summary": "A reliable instruction is an interface: it defines role, task, constraints, inputs and expected output rather than hoping wording alone solves ambiguity. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-2",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Context engineering",
    "summary": "Useful model context is curated, not merely accumulated; irrelevant history can consume budget and confuse the task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-3",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Structured outputs & validation",
    "summary": "Generated text is unsafe to treat as a data contract until it is parsed and validated. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-4",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Model/tool API integration",
    "summary": "External model and tool APIs fail through timeouts, rate limits, schema drift and partial responses. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-5",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Caching & cost-aware design",
    "summary": "Repeated model calls can add latency and cost without adding value; caching only works when freshness and scope are correct. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-6",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "LLM application testing",
    "summary": "AI outputs vary, so a handful of manual examples cannot protect a changing application. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-7",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Failure handling & fallbacks",
    "summary": "A model/API failure should become a controlled system state, not an unexplained user error or silent wrong answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "10-8",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Build an LLM application",
    "summary": "A production-minded LLM feature needs contracts, context, validation, tests and failure behavior around the model. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-1",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "RAG architecture & data flow",
    "summary": "When the model lacks current/private knowledge, retrieval changes the system by supplying external evidence at runtime. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-2",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Document ingestion & normalization",
    "summary": "Retrieval quality starts before embeddings; messy extraction can create missing, duplicated or misleading evidence. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-3",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Chunking strategies",
    "summary": "Chunk boundaries determine what evidence can be retrieved and what context the model sees. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-4",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Embeddings & vector search",
    "summary": "Vector retrieval is useful because semantic similarity can find relevant text beyond exact keyword overlap. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-5",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Hybrid retrieval, metadata & reranking",
    "summary": "No single retrieval signal handles every query; lexical, semantic and metadata constraints solve different problems. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-6",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Citations, grounding & answerability",
    "summary": "A fluent answer is not evidence that the retrieved material supports it. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-7",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "RAG evaluation",
    "summary": "RAG has at least two quality surfaces: retrieval quality and generation/grounding quality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "11-8",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Build a production-style RAG system",
    "summary": "A usable RAG system needs ingestion, retrieval, generation, citations, evaluation and failure handling as one loop. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "12-1",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Vision-language models",
    "summary": "Multimodal models map information across text and visual inputs; the interface and failure modes differ from text-only models. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "12-2",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Document understanding & OCR",
    "summary": "Documents mix layout, text, tables and visual structure; OCR alone can lose the relationships that matter. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "12-3",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Multimodal embeddings",
    "summary": "Cross-modal retrieval requires representations that make related text/images comparable under a defined embedding space. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "12-4",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Audio & cross-modal retrieval",
    "summary": "Audio can become text, embeddings or acoustic features; the right representation depends on the retrieval task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "12-5",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Build and evaluate a multimodal application",
    "summary": "Multimodal systems need explicit input preprocessing, provenance and evaluation across each modality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-1",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool contracts & schemas",
    "summary": "A model can only use a tool reliably when the tool interface is explicit about inputs, outputs and failures. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-2",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool selection & routing",
    "summary": "More tools can increase ambiguity and attack surface; the system should choose the smallest sufficient capability. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-3",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "MCP concepts & control model",
    "summary": "Protocols matter because tools, resources and prompts need predictable boundaries between client, server and user-controlled actions. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-4",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "MCP server basics",
    "summary": "A protocol server should expose a narrow capability with predictable schemas, errors and lifecycle behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-5",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Authentication & authorization boundaries",
    "summary": "Identity proves who is calling; authorization decides what that identity may do. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-6",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool security & trust boundaries",
    "summary": "Tool calls can cross from model-generated intent into real systems, so prompts cannot be the only security boundary. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-7",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool error handling",
    "summary": "Agents need errors that distinguish retryable, invalid, unauthorized and permanent failures. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "13-8",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Build a safe tool-enabled application",
    "summary": "A tool-enabled app becomes useful only when selection, authorization, validation and recovery work together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "14-1",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Harness engineering",
    "summary": "As agents write more code, the engineer’s leverage shifts toward repository knowledge, tests, observability and feedback loops. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-01.svg"
  },
  {
    "id": "14-2",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Loop engineering & termination",
    "summary": "An agent loop is a control system; without explicit progress and termination rules it can repeat work, spend budget or take unnecessary actions. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-02.svg"
  },
  {
    "id": "14-3",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Context engineering for agents",
    "summary": "Agent context includes instructions, tools, history, state and retrieved information; poor curation can cause wrong actions even when each component works. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-03.svg"
  },
  {
    "id": "14-4",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Tool design & recovery",
    "summary": "Agent reliability depends heavily on whether tools expose clear contracts and recoverable errors. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-04.svg"
  },
  {
    "id": "14-5",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Memory architecture",
    "summary": "Memory is not one database; short-lived state, durable facts and retrieval history have different lifetimes and privacy risks. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-05.svg"
  },
  {
    "id": "14-6",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Orchestration patterns",
    "summary": "Multiple agents or steps add coordination cost; parallelism only helps when dependencies permit it. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-06.svg"
  },
  {
    "id": "14-7",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Guardrails & permissions",
    "summary": "The safest agent is not the one with the most warnings; it is the one whose high-impact actions are bounded by enforceable controls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-07.svg"
  },
  {
    "id": "14-8",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Agent evaluation",
    "summary": "Agents can fail in their final answer, intermediate reasoning, tool use or state transitions; one final score can hide the cause. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-08.svg"
  },
  {
    "id": "14-9",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Human-in-the-loop design",
    "summary": "Human review is most useful when it is placed at the right risk boundary with enough context to make a decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-09.svg"
  },
  {
    "id": "14-10",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Observability & tracing",
    "summary": "Without traces, an agent incident becomes a guess about which model call, tool, retry or state transition caused the result. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "originalVisual": "assets/agent-systems-original/agent-10.svg"
  },
  {
    "id": "15-1",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "State machines & explicit workflow state",
    "summary": "Long-running AI workflows become safer when state and allowed transitions are explicit instead of hidden in prompts or mutable flags. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-2",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Workflow orchestration",
    "summary": "A multi-step workflow needs durable coordination, not just a chain of function calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-3",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Queues & background jobs",
    "summary": "Long or bursty AI tasks should not block request/response paths; queues separate producers from workers and absorb uneven load. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-4",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Retries, backoff & idempotency",
    "summary": "Retries improve resilience only when repeated work is safe and the retry schedule avoids amplifying an outage. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-5",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Long-running tasks & checkpoints",
    "summary": "AI workflows can outlive a request, process or machine; checkpoints turn interruption into resumable state. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-6",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Caching & concurrency",
    "summary": "Concurrent AI workloads can waste resources or corrupt shared state when cache and synchronization rules are implicit. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-7",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Failure recovery & compensation",
    "summary": "Distributed operations can partially succeed; “retry everything” is not a recovery strategy. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "15-8",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Design a reliable AI workflow",
    "summary": "Reliability comes from explicit state, bounded retries, durable work, observability and tested recovery paths working together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-1",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "AI test strategy",
    "summary": "AI systems need layered tests because deterministic code, model behavior and system outcomes fail differently. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-2",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Evaluation datasets & golden cases",
    "summary": "Evaluation quality depends on whether the cases represent real work and have clear success criteria. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-3",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Outcome vs trajectory evaluation",
    "summary": "An agent can reach the correct outcome through different valid paths, while a harmful intermediate action can be hidden by the final answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-4",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "LLM-as-judge: use and limitations",
    "summary": "Model-based judges can scale semantic evaluation but can also share biases, be inconsistent or reward superficial patterns. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-5",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "RAG & grounding evaluation",
    "summary": "A RAG answer can be fluent but unsupported; evaluation must separate retrieval, evidence use and final response quality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-6",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Agent/tool-call testing",
    "summary": "Tools create stateful side effects and multi-step behavior that ordinary output tests cannot fully cover. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-7",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Regression & change detection",
    "summary": "Prompts, models, retrieval settings and code can change behavior even when the application still “works.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-8",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Evaluation validity, reward hacking & contamination",
    "summary": "A test can be precise yet invalid if the task is broken, the answer is leaked, or the system learns to exploit the grader. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-9",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Safety, hallucination & adversarial testing",
    "summary": "AI systems face failure inputs that ordinary happy-path tests never exercise. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "16-10",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Build an AI evaluation harness",
    "summary": "A harness turns scattered test cases into a repeatable engineering process with tasks, trials, traces, graders and reports. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-1",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Serving architecture & APIs",
    "summary": "A model feature becomes a service only when request boundaries, concurrency, timeouts and versioning are explicit. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-2",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Containers & dependency control",
    "summary": "Reproducible AI services need the same runtime and dependencies in development and deployment. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-3",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "CI/CD for AI applications",
    "summary": "AI releases change code, prompts, models and evaluation behavior; CI must test more than compilation. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-4",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Observability & tracing",
    "summary": "Production debugging needs traces, metrics and logs that connect user-visible failures to internal work. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-5",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Latency & performance",
    "summary": "Users experience the whole path, not just model inference time; retrieval, tools, queues and serialization all contribute. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-6",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Caching & cost controls",
    "summary": "Operational cost can grow through retries, large contexts, repeated embeddings and unnecessary model calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-7",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Configuration, secrets & rollout",
    "summary": "Production changes fail when configuration, credentials and rollout state are mixed together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "17-8",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Incident response, rollback & recovery",
    "summary": "A production incident is an engineering workflow: detect, contain, diagnose, recover and learn. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-1",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Threat modeling for AI systems",
    "summary": "AI introduces trust boundaries around models, prompts, retrieved data, tools and users that ordinary diagrams can hide. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-2",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Prompt injection & indirect injection",
    "summary": "Untrusted text can contain instructions that conflict with the application’s intended behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-3",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Sensitive information & privacy",
    "summary": "AI systems can expose sensitive data through prompts, logs, retrieval, memory or outputs even when the model itself is not malicious. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-4",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Improper output handling",
    "summary": "Model output becomes dangerous when it is treated as trusted code, HTML, SQL or a business decision without validation. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-5",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Supply chain & dependency risk",
    "summary": "AI systems depend on models, packages, containers, datasets and external services that can change or introduce risk. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-6",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Permissions, excessive agency & tool security",
    "summary": "Giving an agent more permissions than its task needs turns model mistakes into larger system incidents. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "18-7",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Abuse cases, incident response & human oversight",
    "summary": "Responsible AI is operational: teams need abuse scenarios, escalation paths and human accountability where automation can cause harm. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-1",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Choose the problem & define success",
    "summary": "A strong AI project starts with a measurable problem, not a model or framework. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-2",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Architecture & threat model",
    "summary": "The capstone architecture should make data flow, model boundaries, tools, storage, evaluation and security assumptions visible. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-3",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Build the smallest end-to-end system",
    "summary": "The goal is a thin vertical slice that proves the core value before adding advanced features. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-4",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Evaluation, regression & failure analysis",
    "summary": "A capstone becomes defensible when its quality claims are backed by repeatable evidence and known failure modes. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-5",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Production readiness & runbook",
    "summary": "A demo is not production-ready until an operator can deploy, observe, recover and roll it back. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "19-6",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Portfolio documentation & technical defense",
    "summary": "A portfolio should show engineering judgment, not just a screenshot of an AI answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  }
];
const optionalPhases = new Set(["05","09","12"]);
function lessonData(id){ return lessonSpecs.filter(x=>x.id===id); }
function phaseLessons(phaseId){ return lessonSpecs.filter(x=>x.phase===phaseId); }
const glossary = [
  [
    "API",
    "A defined interface through which software exchanges requests and responses."
  ],
  [
    "Autograd",
    "Automatic differentiation that computes gradients through a recorded computation graph."
  ],
  [
    "Backpropagation",
    "The process of propagating loss derivatives backward through a neural network to obtain parameter gradients."
  ],
  [
    "Baseline",
    "A simple reference system used to judge whether additional complexity creates useful improvement."
  ],
  [
    "Batch",
    "A group of examples processed together in one model step."
  ],
  [
    "Batch size",
    "The number of examples processed together before a training update."
  ],
  [
    "Causal mask",
    "An attention mask that prevents a token from using information from future positions during autoregressive generation."
  ],
  [
    "Chunking",
    "Splitting source documents into retrievable units for a retrieval system."
  ],
  [
    "Context window",
    "The finite amount of model input context available for a request or generation process."
  ],
  [
    "Embedding",
    "A learned numeric representation whose geometry can be useful for similarity or downstream tasks."
  ],
  [
    "Evaluation dataset",
    "A versioned collection of representative tasks or examples used to measure system behavior."
  ],
  [
    "Grounding",
    "Constraining or supporting a generated answer with relevant evidence or external information."
  ],
  [
    "Hallucination",
    "A model output that presents unsupported or fabricated information as if it were reliable."
  ],
  [
    "Idempotency",
    "A property where repeating the same operation does not create unintended additional effects."
  ],
  [
    "Inference",
    "Using a trained model to produce outputs for new inputs."
  ],
  [
    "LLM",
    "Large language model: a model trained on large-scale text/token data to predict or generate language."
  ],
  [
    "MCP",
    "Model Context Protocol, a protocol for connecting AI applications with tools and contextual resources through defined interfaces."
  ],
  [
    "RAG",
    "Retrieval-Augmented Generation: retrieving external information and supplying it to a model at runtime."
  ],
  [
    "Reranking",
    "Reordering retrieved candidates with a stronger relevance signal before final context selection."
  ],
  [
    "Regression test",
    "A repeatable check that protects behavior that previously worked from breaking after a change."
  ],
  [
    "Retrieval",
    "Selecting potentially relevant information from a larger collection for a task."
  ],
  [
    "Schema",
    "A machine-readable contract describing the expected structure and constraints of data."
  ],
  [
    "Temperature",
    "A decoding control that changes how probability mass is distributed during sampling; it does not retrain the model."
  ],
  [
    "Token",
    "A model-facing unit of text or other serialized input used by a tokenizer."
  ],
  [
    "Tool calling",
    "A model/application interaction where the model requests a defined external function or capability."
  ],
  [
    "Trace",
    "A recorded execution path showing steps, timing, calls, errors and other telemetry for one operation."
  ],
  [
    "Vector search",
    "Searching for items using similarity between vector representations."
  ],
  [
    "Virtual environment",
    "An isolated Python environment containing project-specific installed packages."
  ],
  [
    "Golden case",
    "A representative evaluation case with explicit success criteria used as a stable quality reference."
  ],
  [
    "Prompt injection",
    "An attempt to manipulate an AI system by placing instructions in input or untrusted content that conflict with intended behavior."
  ],
  [
    "Least privilege",
    "Granting a user, service or tool only the permissions required for its task."
  ],
  [
    "Guardrail",
    "An enforceable control that constrains system behavior, data access or actions."
  ],
  [
    "Agent",
    "A system that uses a model and other components to pursue a goal through multiple controlled steps."
  ],
  [
    "Agent loop",
    "The repeated cycle of state/context, model decision, action, observation and termination."
  ],
  [
    "Harness",
    "The surrounding repository, tests, tooling, documentation and feedback mechanisms that make automated engineering work inspectable."
  ],
  [
    "Observability",
    "The ability to understand system behavior from emitted telemetry such as logs, metrics and traces."
  ],
  [
    "Latency",
    "Elapsed time between a request and a defined response or processing milestone."
  ],
  [
    "Idempotency key",
    "A unique identifier used to recognize repeated attempts of the same side-effecting operation."
  ],
  [
    "Data leakage",
    "Information entering training or evaluation that would not legitimately be available at the prediction or decision time."
  ],
  [
    "Overfitting",
    "When a model fits training data well but generalizes poorly to relevant unseen data."
  ],
  [
    "Precision",
    "Among predicted positives, the fraction that are actually positive."
  ],
  [
    "Recall",
    "Among actual positives, the fraction that the system correctly identifies."
  ],
  [
    "Regularization",
    "A technique or constraint that discourages overly complex model behavior and can improve generalization."
  ],
  [
    "Gradient",
    "A vector of partial derivatives indicating how an objective changes with respect to parameters."
  ],
  [
    "Vectorization",
    "Expressing numerical operations over arrays so they can be executed efficiently without explicit Python loops for each element."
  ],
  [
    "Normalization",
    "Transforming values into a chosen scale or distribution; the exact operation depends on the task."
  ],
  [
    "OCR",
    "Optical character recognition: extracting machine-readable text from visual document content."
  ],
  [
    "Multimodal",
    "An AI system that processes or generates information across more than one modality, such as text, images or audio."
  ],
  [
    "CI/CD",
    "Continuous integration and continuous delivery/deployment practices that automate validation and release workflows."
  ],
  [
    "Rollback",
    "Returning a system to a previously known-good version or configuration after a bad change."
  ],
  [
    "Threat model",
    "A structured description of assets, actors, trust boundaries, threats and mitigations."
  ],
  [
    "Supply chain risk",
    "Risk introduced through dependencies, models, containers, datasets or external artifacts used by a system."
  ],
  [
    "Human-in-the-loop",
    "A design where a person has a defined review or approval role at an identified decision boundary."
  ]
];
