/* Puneeth AI Engineering — curriculum data
   Free-core curriculum. Lessons are structured for guided progression.
*/
const phases = [
  ['00','Setup & Tooling','Build a clean, reproducible AI engineering workstation and learn the developer workflow.', ['How the roadmap works','Install and verify Python','Virtual environments and pip','Git fundamentals','GitHub workflow','Command-line essentials','Project structure','Environment variables and secrets','Read documentation effectively','First AI-ready project']],
  ['01','Python for AI','Learn the Python you actually need for data, machine learning and AI engineering.', ['Python syntax essentials','Functions and modules','Lists, dictionaries and sets','Comprehensions and iteration','Exceptions and debugging','Files, JSON and CSV','Classes and dataclasses','NumPy fundamentals','Pandas fundamentals','Python project patterns']],
  ['02','Math Foundations','Build mathematical intuition for machine learning and neural networks.', ['Vectors and matrices','Dot products and geometry','Functions and graphs','Derivatives intuitively','Gradients','Optimization','Probability essentials','Statistics essentials','Distance and similarity','Math for model evaluation']],
  ['03','ML Fundamentals','Learn classical machine learning before deep learning.', ['Datasets and features','Train/validation/test splits','Linear regression','Logistic regression','Decision trees','Ensembles','Feature engineering','Overfitting and regularization','Model evaluation','Build a small ML project']],
  ['04','Deep Learning Core','Understand neural networks from first principles.', ['Perceptrons','Forward propagation','Loss functions','Backpropagation','Optimizers','Activation functions','PyTorch tensors','Training loops','Debugging training','Build a neural network']],
  ['05','Computer Vision','Learn how machines work with images and visual data.', ['Image representation','Convolution intuition','CNNs','Pooling','Data augmentation','Transfer learning','Image classification','Object detection concepts','Vision evaluation','Build a vision project']],
  ['06','NLP Foundations','Move from text processing to learned representations.', ['Text normalization','Tokenization','Bag of words','TF-IDF','Embeddings','Sequence models','Attention intuition','Text classification','NLP evaluation','Build a text project']],
  ['07','Transformers Deep Dive','Understand the architecture behind modern language and multimodal models.', ['Self-attention','Queries keys and values','Scaled dot-product attention','Multi-head attention','Positional information','Transformer blocks','Encoder and decoder','Causal masking','Inference mechanics','Attention visualization']],
  ['08','Generative AI','Understand generation, decoding and controllable outputs.', ['Autoregressive generation','Temperature','Top-k and top-p','Prompt structure','Structured outputs','Function and tool calling','Context windows','Generation failure modes','Output evaluation','Build a small generative app']],
  ['09','LLMs from Scratch','Build a tiny language model to understand the stack underneath an LLM.', ['Tokenizers','Training data','Embeddings','Attention implementation','Transformer block','Loss and targets','Training loop','Checkpointing','Inference','Tiny language model project']],
  ['10','LLM Engineering','Turn foundation models into reliable applications.', ['Prompt architecture','System and user instructions','Embeddings and retrieval','Chunking','RAG pipeline','Reranking','Tool use','Caching','LLM application testing','Build an LLM application']],
  ['11','RAG Engineering','Build retrieval-augmented systems that ground generation in evidence.', ['RAG architecture','Document ingestion','Chunking strategies','Embedding models','Vector search','Metadata filters','Reranking','Citations and grounding','RAG evaluation','Build a production-style RAG app']],
  ['12','Multimodal AI','Build systems that work across text, images, audio and documents.', ['Vision-language models','Image prompting','Document understanding','OCR concepts','Multimodal embeddings','Audio inputs','Cross-modal retrieval','Multimodal pipelines','Evaluation','Build a multimodal application']],
  ['13','Tools & Protocols','Give models reliable ways to interact with software and external systems.', ['Tool schemas','Tool selection','MCP concepts','MCP server basics','Resources and prompts','Agent Skills','Authentication boundaries','Tool security','Tool error handling','Build a tool-enabled AI app']],
  ['14','Agent Engineering','Design agents that plan, act, observe and recover.', ['Agent loop','Planning strategies','State','Memory','Tool use','Routing','Retries and recovery','Human-in-the-loop','Agent evaluation','Build an agent']],
  ['15','AI Systems Engineering','Move from demos to robust AI workflows and services.', ['State machines','Workflow orchestration','Queues','Retries','Idempotency','Long-running tasks','Caching','Concurrency','Failure handling','Design an AI workflow']],
  ['16','AI Quality Engineering','Test AI systems systematically instead of trusting demos.', ['AI test strategy','Prompt test cases','LLM-as-judge limitations','RAG evaluation','Agent testing','Regression datasets','Hallucination testing','Safety testing','Quality gates','Build an AI evaluation harness']],
  ['17','Infrastructure & Production','Deploy AI systems with reliability, observability and cost awareness.', ['Serving architecture','APIs','Containers','CI/CD','Observability','Tracing','Latency','Caching','Cost controls','Production release checklist']],
  ['18','Safety & Responsible AI','Build AI systems with security, privacy and responsible-use practices.', ['Threat modeling','Prompt injection','Data leakage','Privacy basics','Guardrails','Access control','Abuse cases','Incident response','Human oversight','Responsible AI checklist']],
  ['19','Capstone Projects','Combine the skills into portfolio-ready end-to-end systems.', ['RAG application','AI agent','Evaluation harness','AI QE dashboard','Multimodal assistant','Production AI service','Final architecture','Testing strategy','Portfolio documentation','Final capstone']],
];

const detailed = {
  '00-1': {summary:'Understand the learning system and how to move through it.',body:'This platform uses a guided progression: learn the concept, practice it, prove your understanding, then unlock the next phase. You can preview future phases, but progression is earned through completion and assessment.',takeaways:['Know the order of the curriculum.','Understand what “complete” means.','Use previews without skipping prerequisites.'],code:'// Your first task\nconsole.log("Learn → Practice → Prove → Progress");'},
  '00-2': {summary:'Install Python and verify that your interpreter and package manager work.',body:'Use an official Python installation and verify both the interpreter and pip from a terminal. Record the version because reproducible engineering starts with knowing your runtime.',takeaways:['Run Python from the command line.','Verify pip.','Record your Python version.'],code:'python --version\npython -m pip --version\n\nprint("Python is ready")'},
  '00-3': {summary:'Create isolated Python environments so projects do not fight over dependencies.',body:'A virtual environment gives each project its own installed packages. This prevents one project upgrade from silently breaking another.',takeaways:['Create a virtual environment.','Activate it.','Install a package into the environment.'],code:'python -m venv .venv\n# Windows\n.venv\\Scripts\\activate\npython -m pip install --upgrade pip'},
  '00-4': {summary:'Learn the Git mental model: working tree, staging area and commits.',body:'Git records deliberate snapshots of your project. Learn to inspect changes before committing them rather than treating Git as a file backup.',takeaways:['Initialize a repository.','Inspect changes.','Create meaningful commits.'],code:'git init\ngit status\ngit add .\ngit commit -m "Initial project"'},
  '00-5': {summary:'Use GitHub to store and collaborate on your project history.',body:'A remote repository gives your project a shared source of truth. Learn the basic push/pull workflow and keep secrets out of the repository.',takeaways:['Connect a remote.','Push a branch.','Read the repository history.'],code:'git remote add origin <repository-url>\ngit branch -M main\ngit push -u origin main'},
  '00-6': {summary:'Use the command line confidently for everyday engineering work.',body:'AI engineering involves scripts, package managers, Git, containers and cloud CLIs. Learn navigation, file inspection and command composition before adding complex tooling.',takeaways:['Navigate directories.','Create and inspect files.','Understand exit codes.'],code:'pwd\ncd project\nls\npython script.py\necho %ERRORLEVEL%  # Windows cmd'},
  '00-7': {summary:'Create a project structure that keeps code, tests, data and documentation understandable.',body:'A clear structure reduces cognitive load and makes automation easier. Start simple, then add folders only when a real need appears.',takeaways:['Separate source and tests.','Keep documentation discoverable.','Avoid unnecessary nesting.'],code:'project/\n  src/\n  tests/\n  data/\n  README.md\n  requirements.txt'},
  '00-8': {summary:'Handle configuration and secrets without committing credentials.',body:'Environment variables are useful for configuration, but they are not a complete security model. Never commit API keys, passwords or tokens to Git.',takeaways:['Separate config from code.','Use local environment files carefully.','Rotate exposed credentials.'],code:'# .env (never commit secrets)\nAI_PROVIDER=local\nMODEL_NAME=example\n\n# application reads configuration at runtime'},
  '00-9': {summary:'Learn how to turn documentation into an engineering workflow.',body:'Good AI engineers read primary documentation, verify versions and test the smallest example before building abstractions around a library.',takeaways:['Check the version.','Run the official minimal example.','Record assumptions and limitations.'],code:'# Documentation checklist\n# 1. Version\n# 2. Installation\n# 3. Minimal example\n# 4. Limits\n# 5. Test result'},
  '00-10': {summary:'Combine the setup skills into your first reproducible AI-ready project.',body:'Create a repository, virtual environment, README and small Python entry point. The objective is not advanced AI yet; it is a clean foundation you can reuse for every later project.',takeaways:['Create a reproducible project.','Document how to run it.','Commit the working baseline.'],code:'python -m venv .venv\npython main.py\ngit add .\ngit commit -m "Create reproducible AI project"'},
  '01-1': {summary:'Learn the Python syntax used constantly in AI code.',body:'Focus on variables, expressions, conditions, loops and functions. You do not need every corner of Python before starting AI; you need a dependable core.',takeaways:['Read basic Python confidently.','Write small functions.','Trace control flow.'],code:'def mean(values):\n    return sum(values) / len(values)\n\nprint(mean([2, 4, 6]))'},
  '01-2': {summary:'Break programs into reusable functions and modules.',body:'Functions make behavior testable. Modules make code reusable. Prefer small units with clear inputs and outputs.',takeaways:['Design functions around inputs and outputs.','Import modules cleanly.','Avoid giant scripts.'],code:'def normalize(x, minimum, maximum):\n    return (x - minimum) / (maximum - minimum)\n\nprint(normalize(7, 0, 10))'},
  '01-3': {summary:'Use lists, dictionaries and sets to represent AI data and configuration.',body:'These structures appear everywhere in preprocessing, model configuration and test datasets. Learn when each representation is appropriate.',takeaways:['Use lists for ordered collections.','Use dictionaries for key/value data.','Use sets for uniqueness.'],code:'sample = {"text": "hello", "label": "greeting"}\nlabels = {"greeting", "question"}\nprint(sample["label"], labels)'},
  '01-4': {summary:'Use comprehensions and iteration without hiding important logic.',body:'Comprehensions are concise, but readability wins. If a transformation becomes difficult to read, use an ordinary loop or a named function.',takeaways:['Transform collections clearly.','Filter data intentionally.','Prefer readable code.'],code:'scores = [0.2, 0.8, 0.5]\npassed = [s for s in scores if s >= 0.5]\nprint(passed)'},
  '01-5': {summary:'Handle expected failures and debug problems systematically.',body:'AI pipelines fail for ordinary software reasons too: malformed data, missing files, wrong types and dependency mismatches. Learn to make failures observable.',takeaways:['Catch only expected exceptions.','Read tracebacks from the bottom up.','Debug with small reproductions.'],code:'try:\n    value = int("not-a-number")\nexcept ValueError as exc:\n    print("Invalid input:", exc)'},
  '01-6': {summary:'Read and write common data formats used in AI projects.',body:'JSON and CSV are simple but foundational. Validate inputs instead of assuming every file has the expected schema.',takeaways:['Read JSON.','Process CSV rows.','Validate required fields.'],code:'import json\n\nrecord = {"id": 1, "label": "demo"}\ntext = json.dumps(record)\nprint(json.loads(text)["label"])'},
  '01-7': {summary:'Use classes and dataclasses when a domain object has state and behavior.',body:'Classes are useful for structured components, but not every function needs one. Dataclasses are a readable option for data-centric objects.',takeaways:['Model stable concepts.','Keep responsibilities focused.','Avoid unnecessary abstraction.'],code:'from dataclasses import dataclass\n\n@dataclass\nclass Example:\n    text: str\n    label: str'},
  '01-8': {summary:'Learn NumPy arrays as the basic numerical building block for AI.',body:'NumPy introduces vectorized numerical operations and shapes. Understanding shapes will pay off throughout ML and deep learning.',takeaways:['Create arrays.','Inspect shape and dtype.','Use vectorized operations.'],code:'import numpy as np\n\nx = np.array([1.0, 2.0, 3.0])\nprint(x.shape)\nprint(x * 2)'},
  '01-9': {summary:'Use Pandas for tabular datasets and quick inspection.',body:'Pandas is useful for loading, filtering and summarizing tabular data before it reaches a model pipeline.',takeaways:['Load a dataset.','Inspect columns and missing values.','Filter rows deliberately.'],code:'import pandas as pd\n\nframe = pd.DataFrame({"score": [0.2, 0.8, 0.5]})\nprint(frame.describe())'},
  '01-10': {summary:'Combine Python fundamentals into a maintainable AI project pattern.',body:'Use modules, tests, configuration and a clear entry point. The goal is to write AI code that another engineer can understand and verify.',takeaways:['Separate logic from entry points.','Keep data transformations testable.','Document how to run the project.'],code:'src/\n  pipeline.py\ntests/\n  test_pipeline.py\nmain.py\nREADME.md'},
};

const assessmentBank = {
  '00': [
    ['Why use a virtual environment?', ['To isolate project dependencies','To increase monitor brightness','To replace Git','To store passwords'], 0],
    ['What does Git primarily track?', ['Project history and changes','Internet speed','CPU temperature','Cloud billing'], 0],
    ['Which file should normally stay out of Git?', ['A source file','A README','A file containing API secrets','A test'], 2],
    ['What is a good first step when a library example fails?', ['Add more abstractions','Check version, docs and reproduce the smallest example','Delete the project','Ignore the error'], 1],
    ['What is the recommended learning loop on this platform?', ['Learn → Practice → Prove → Progress','Skip → Copy → Ship','Deploy → Guess → Repeat','Read → Forget → Move on'], 0]
  ],
  '01': [
    ['Which structure is naturally key/value based?', ['List','Dictionary','Tuple only','String'], 1],
    ['Why use functions?', ['To make code less testable','To create reusable units with clear inputs and outputs','To avoid variables','To hide errors'], 1],
    ['What does a NumPy array shape describe?', ['Its file name','Its dimensions','Its Git branch','Its API key'], 1],
    ['What should you do with a traceback?', ['Ignore it','Read it to locate the failure and reproduce the problem','Commit it as code','Delete Python'], 1],
    ['What is Pandas commonly used for?', ['Tabular data manipulation and inspection','GPU driver installation','DNS configuration','Video editing'], 0]
  ],
  '02': [
    ['What does a dot product combine?', ['Two vectors into a scalar','Two files into a ZIP','Two models into a server','Two passwords into a key'], 0],
    ['What does a derivative describe?', ['How a quantity changes with respect to another','How to store JSON','How to create a Git branch','How to encrypt a file'], 0],
    ['What is a gradient?', ['A vector of partial derivatives','A database table','A tokenizer','A deployment manifest'], 0],
    ['Why is optimization important in ML?', ['It helps find model parameters that reduce an objective','It replaces testing','It removes training data','It disables inference'], 0],
    ['Why learn probability and statistics for AI?', ['They provide tools for uncertainty and data reasoning','They are only useful for UI design','They replace Python','They are unrelated to evaluation'], 0]
  ],
  '03': [
    ['Why split data into train and test sets?', ['To estimate generalization on unseen data','To make files smaller','To remove all features','To avoid validation'], 0],
    ['What does overfitting mean?', ['A model fits training data too closely and generalizes poorly','A model has no parameters','A dataset has no rows','A model cannot train'], 0],
    ['What is regularization used for?', ['Controlling model complexity','Creating Git commits','Compressing images','Serving HTTP'], 0],
    ['Which task is logistic regression commonly used for?', ['Classification','Image rendering','File compression','Container orchestration'], 0],
    ['Why use a validation set?', ['To guide model or hyperparameter choices before final testing','To replace the training set','To store secrets','To deploy APIs'], 0]
  ],
  '04': [
    ['What does forward propagation do?', ['Computes predictions through the network','Deletes gradients','Creates a Git branch','Indexes a database'], 0],
    ['What is backpropagation used to compute?', ['Gradients of the loss with respect to parameters','HTTP status codes','File paths','Vector database indexes'], 0],
    ['Why use an activation function?', ['To introduce useful nonlinear behavior','To save passwords','To create containers','To replace datasets'], 0],
    ['What does an optimizer update?', ['Model parameters using gradient information','The operating system','The training dataset filename','The API URL'], 0],
    ['What is a training loop?', ['A repeated process of forward pass, loss, backward pass and parameter update','A network cable','A Git workflow only','A database migration'], 0]
  ],
  '05': [
    ['What does a convolution learn from an image?', ['Local spatial patterns','Git history','API credentials','Database schemas'], 0],
    ['Why use pooling in CNNs?', ['To reduce spatial dimensions and summarize features','To create tokens','To encrypt images','To install Python'], 0],
    ['What is data augmentation?', ['Creating varied training examples from existing data','Deleting labels','Replacing the model','Compressing Git history'], 0],
    ['What is transfer learning?', ['Starting from a model trained on a related task or dataset','Moving files between folders','Transferring Git ownership','Changing image formats only'], 0],
    ['What should vision evaluation measure?', ['Performance on representative unseen visual data','Only training loss','CPU temperature','Number of Git commits'], 0]
  ],
  '06': [
    ['What is tokenization?', ['Splitting text into model-friendly units','Encrypting a database','Deploying a container','Compressing images'], 0],
    ['What does TF-IDF estimate?', ['The importance of terms in documents','GPU temperature','Network latency','Model parameter count'], 0],
    ['What is an embedding?', ['A learned numeric representation of an item','A Git commit','A password file','A deployment script'], 0],
    ['What does attention help a model do?', ['Weight relationships between tokens or representations','Install packages','Store secrets','Create DNS records'], 0],
    ['Why evaluate NLP systems on representative text?', ['To measure behavior on the language and tasks they will actually encounter','To avoid test data','To replace tokenization','To increase file size'], 0]
  ],
  '07': [
    ['What are queries, keys and values used for?', ['Computing attention relationships','Managing Git branches','Encrypting files','Starting containers'], 0],
    ['Why use multi-head attention?', ['To learn different relationship patterns in parallel','To reduce all inputs to one token','To replace embeddings','To avoid training'], 0],
    ['Why does a Transformer need positional information?', ['Attention alone does not inherently encode token order','It stores API keys','It replaces the tokenizer','It compresses weights'], 0],
    ['What does causal masking prevent?', ['A token from attending to future tokens during autoregressive training','A model from using embeddings','A server from logging','A user from reading docs'], 0],
    ['What is a Transformer block?', ['A repeated neural architecture containing attention and feed-forward components','A Git repository','A vector database','A Python package manager'], 0]
  ],
  '08': [
    ['What does temperature influence in generation?', ['The randomness of token selection','The CPU temperature','The model file size','The network port'], 0],
    ['What is top-k sampling?', ['Restricting sampling to the k highest-probability candidates','Selecting k database rows','Training k models','Creating k containers'], 0],
    ['Why use structured outputs?', ['To make generated results conform to a predictable schema','To hide prompts','To replace testing','To remove context'], 0],
    ['What is tool calling?', ['Allowing a model to request an external function or capability','Calling a human by phone','Calling Git commands automatically','Calling a database without validation'], 0],
    ['What is a common generative AI failure mode?', ['Plausible but incorrect output','A faster keyboard','A shorter README','A larger monitor'], 0]
  ],
  '09': [
    ['Why build a tiny language model from scratch?', ['To understand the mechanisms underneath larger models','To avoid learning Python','To replace evaluation','To create a web browser'], 0],
    ['What do token embeddings represent?', ['Tokens as learned numeric vectors','Passwords as hashes','Files as URLs','Images as HTML'], 0],
    ['What is the training target in autoregressive language modeling?', ['Predict the next token from prior context','Predict CPU usage','Predict Git branches','Predict file permissions'], 0],
    ['Why save checkpoints during training?', ['To resume or inspect training from known model states','To store user passwords','To replace datasets','To disable inference'], 0],
    ['What is inference?', ['Using a trained model to produce outputs','Updating Git','Creating a dataset','Installing a package'], 0]
  ],
  '10': [
    ['What is prompt architecture?', ['Designing instructions, context and outputs systematically','Designing CSS only','Creating Git branches','Choosing monitor settings'], 0],
    ['Why chunk documents for retrieval?', ['To create useful searchable units that fit retrieval and context constraints','To delete information','To reduce security','To avoid embeddings'], 0],
    ['What is caching useful for in LLM applications?', ['Reducing repeated work, latency and sometimes cost','Increasing hallucinations','Replacing evaluation','Deleting context'], 0],
    ['Why test an LLM application beyond a few examples?', ['Model outputs are variable and need systematic evaluation','Because prompts never change','Because tests are optional','Because APIs cannot fail'], 0],
    ['What makes an LLM application production-oriented?', ['Reliability, evaluation, observability and clear failure handling','Only a polished UI','Only a long prompt','Only a large model'], 0]
  ],
  '11': [
    ['What is the purpose of RAG?', ['Ground generation using retrieved external information','Replace all databases','Remove documents','Train every model from scratch'], 0],
    ['What does vector search retrieve?', ['Items with similar representations','Only exact filenames','Git commits','HTTP headers'], 0],
    ['Why use metadata filters?', ['To restrict retrieval to relevant subsets','To change model weights','To encrypt embeddings','To replace chunking'], 0],
    ['What does reranking do?', ['Reorders retrieved candidates using a stronger relevance signal','Deletes all candidates','Trains the tokenizer','Starts the API'], 0],
    ['Why evaluate grounding?', ['To verify that answers are supported by retrieved evidence','To measure screen size','To avoid citations','To increase token count'], 0]
  ],
  '12': [
    ['What is multimodal AI?', ['AI systems that work across multiple input or output modalities','AI that uses multiple Git branches','AI with multiple passwords','AI that only processes text'], 0],
    ['What can OCR provide?', ['Text extracted from images or documents','Audio generation','Git history','Vector database credentials'], 0],
    ['Why use multimodal embeddings?', ['To represent different modalities in spaces useful for similarity or retrieval','To replace APIs','To delete images','To store secrets'], 0],
    ['What is cross-modal retrieval?', ['Retrieving information across different modalities','Retrieving Git commits','Retrieving CPU metrics only','Retrieving passwords'], 0],
    ['Why evaluate multimodal systems carefully?', ['Different modalities introduce different failure modes','Images never fail','Audio needs no testing','Documents are always correct'], 0]
  ],
  '13': [
    ['What is a tool schema?', ['A defined interface describing tool inputs and outputs','A CSS theme','A Git branch','A database password'], 0],
    ['What is MCP designed to standardize?', ['Connections between AI applications and tools/resources','Image compression','Python syntax','Model training only'], 0],
    ['Why are authentication boundaries important for tools?', ['Tools can expose real capabilities and data','They make prompts shorter','They remove testing','They replace logging'], 0],
    ['What should a tool do when an external operation fails?', ['Return a clear, bounded error the caller can reason about','Silently invent success','Delete the request','Expose secrets'], 0],
    ['Why validate tool inputs?', ['To reduce misuse, unexpected operations and security risk','To increase hallucinations','To avoid schemas','To disable observability'], 0]
  ],
  '14': [
    ['What is an agent loop?', ['A cycle of reasoning or planning, action, observation and continuation','A Git commit loop','A CPU benchmark','A database backup'], 0],
    ['Why does agent state matter?', ['It lets the system retain relevant information across steps','It removes all context','It replaces tools','It prevents evaluation'], 0],
    ['What is human-in-the-loop useful for?', ['Adding human judgment to sensitive or uncertain decisions','Avoiding all testing','Replacing APIs','Increasing token count'], 0],
    ['Why implement retries carefully?', ['Unbounded retries can duplicate work or amplify failures','Retries always fix every error','Retries remove latency','Retries replace validation'], 0],
    ['Why evaluate agents with tasks and traces?', ['Their behavior depends on multi-step actions and tool use','Because agents have no outputs','Because prompts are irrelevant','Because logs are unnecessary'], 0]
  ],
  '15': [
    ['What is idempotency?', ['Repeating an operation does not unintentionally change the result beyond the first successful application','Running code faster','Encrypting a queue','Deleting retries'], 0],
    ['Why use queues for long-running AI work?', ['They decouple producers and workers and help absorb bursts','They remove all failures','They replace databases','They guarantee perfect ordering'], 0],
    ['What is a state machine useful for?', ['Making workflow states and transitions explicit','Generating embeddings','Rendering images','Storing API keys'], 0],
    ['Why design failure handling explicitly?', ['Distributed workflows can fail partially and need recovery paths','Failures never happen','It removes observability','It replaces testing'], 0],
    ['What is concurrency?', ['Multiple operations making progress during overlapping time periods','A model tokenizer','A database index','A Git tag'], 0]
  ],
  '16': [
    ['Why test AI systems with evaluation datasets?', ['To compare behavior consistently across versions and cases','To avoid regression testing','To replace all monitoring','To remove prompts'], 0],
    ['What is hallucination testing?', ['Checking for unsupported or fabricated claims','Testing monitor brightness','Testing Git branches','Testing network cables'], 0],
    ['What is an LLM-as-judge limitation?', ['The judge can share biases or errors with the system being evaluated','It is always deterministic and perfect','It cannot read text','It removes the need for humans'], 0],
    ['What is a quality gate?', ['A condition that must be met before a change progresses','A physical door','A GitHub password','A model architecture'], 0],
    ['Why test agents differently from simple functions?', ['Agents can have multi-step, stateful and tool-dependent behavior','Agents have no observable behavior','Agents cannot fail','Agents never change'], 0]
  ],
  '17': [
    ['Why use observability in production AI?', ['To understand health, latency, errors and behavior after deployment','To replace source control','To remove logs','To avoid testing'], 0],
    ['What does tracing help show?', ['The path and timing of work across components','Only CPU model name','Git commit count','Image resolution'], 0],
    ['Why containerize services?', ['To package applications and dependencies consistently','To replace monitoring','To store secrets publicly','To eliminate APIs'], 0],
    ['Why track AI latency?', ['User experience and infrastructure cost can depend on response time','Latency never matters','It replaces accuracy','It removes retries'], 0],
    ['What belongs in a production release checklist?', ['Tests, configuration, observability, rollback and operational readiness','Only the logo','Only a prompt','Only the README'], 0]
  ],
  '18': [
    ['What is prompt injection?', ['An attempt to manipulate an AI system through untrusted instructions or content','A Python import','A Git merge','A database backup'], 0],
    ['Why protect sensitive data from model inputs?', ['AI systems can expose or transform data in unintended ways','Privacy never matters','Models automatically secure everything','It only affects UI'], 0],
    ['What does least privilege mean?', ['Give users and tools only the access required for their task','Give every tool admin access','Disable all authentication','Store credentials in prompts'], 0],
    ['Why use human oversight for high-impact decisions?', ['Some decisions require accountability and contextual judgment','Humans are never useful','It removes documentation','It guarantees model accuracy'], 0],
    ['What is threat modeling?', ['Systematically identifying assets, threats, attack paths and mitigations','Writing marketing copy','Training a tokenizer','Optimizing CSS'], 0]
  ],
  '19': [
    ['What makes a capstone valuable?', ['It combines multiple skills into a working, documented system','It only contains screenshots','It avoids testing','It uses the largest model available'], 0],
    ['Why document architecture?', ['It helps others understand decisions, boundaries and trade-offs','It replaces code','It hides failures','It makes tests unnecessary'], 0],
    ['What should a portfolio AI project demonstrate?', ['Problem definition, implementation, evaluation and engineering decisions','Only a logo','Only API calls','Only generated text'], 0],
    ['Why include an evaluation harness in an AI project?', ['To measure behavior systematically as the system changes','To make the UI darker','To avoid regression tests','To remove datasets'], 0],
    ['What is the goal of the final capstone?', ['Demonstrate an end-to-end AI engineering workflow from design through validation','Memorize terminology only','Avoid production concerns','Skip testing'], 0]
  ]
};

const assessments = Object.fromEntries(Object.entries(assessmentBank).map(([id, qs]) => [id, qs.map(([q,options,answer])=>({q,options,answer}))]));

function lessonData(id) {
  const [pi, name, desc, lessons] = phases.find(p => p[0] === id.split('-')[0]) || phases[0];
  return lessons.map((title, i) => {
    const lid = `${pi}-${i+1}`;
    const d = detailed[lid] || {};
    return {id:lid, phase:pi, phaseName:name, title, summary:d.summary || `Understand ${title.toLowerCase()}, build a small example, and verify the result.`, body:d.body || `This lesson is part of ${name}. Start with intuition, build the smallest useful example, and finish by checking expected behavior.`, takeaways:d.takeaways || ['Explain the core idea.','Implement a minimal example.','Define a test or evaluation signal.','Connect the concept to a production AI system.'], code:d.code || `# ${title}\nprint("Practice: ${title}")`};
  });
}
function phaseLessons(phaseId) { return lessonData(`${phaseId}-1`); }
