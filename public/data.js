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


const detailedContentV1 = {
  '02-1': {"summary": "Understand vectors as ordered numerical quantities and matrices as structured collections of numbers. Learn shapes before formulas: most ML bugs involving linear algebra are shape mistakes.", "body": "Vectors can represent features, coordinates or embeddings. Matrices can represent datasets, transformations and model parameters. Always ask: what are the dimensions of each object, and what output shape should the operation produce?", "takeaways": ["Read vector and matrix shapes before calculating.", "Distinguish element-wise multiplication from matrix multiplication.", "Use NumPy arrays for experiments."], "code": "import numpy as np\n\nx = np.array([2., 4., 6.])\nA = np.array([[1., 2.], [3., 4.]])\nprint(\"x shape:\", x.shape)\nprint(\"A shape:\", A.shape)", "practice": "Create a 3-feature vector for a house and a 2x3 matrix that maps three features to two outputs. Predict the output shape before running the multiplication.", "mistakes": ["Confusing a vector with its shape.", "Using * when @ is intended.", "Ignoring dtype and shape."], "resources": [{"label": "N", "url": "u"}, {"label": "h", "url": "t"}]},
  '02-2': {"summary": "Use the dot product as both a calculation and a geometric signal. It combines corresponding components and, with normalized vectors, becomes a similarity measure.", "body": "For vectors a and b, the dot product is the sum of pairwise products. It is large when vectors point in similar directions and zero when they are orthogonal. This idea later reappears in embeddings, attention and linear models.", "takeaways": ["Calculate a dot product by hand.", "Interpret the sign and magnitude.", "Connect dot products to similarity."], "code": "import numpy as np\na = np.array([1., 2., 3.])\nb = np.array([4., 0., 1.])\nprint(np.dot(a, b))\nprint(a @ b)", "practice": "Compute the dot product manually, then verify it with NumPy. Repeat with one vector reversed and explain the change.", "mistakes": ["Assuming a dot product is always a similarity score.", "Forgetting vector direction.", "Mixing element-wise multiplication with a dot product."], "resources": [{"label": "N", "url": "u"}, {"label": "h", "url": "t"}]},
  '02-3': {"summary": "Build intuition for functions as mappings from inputs to outputs and read simple graphs as model behavior.", "body": "A model is a function. Changing its parameters changes the function. Before learning derivatives, learn to ask what happens to output when input changes. This makes later optimization concepts concrete.", "takeaways": ["Identify input, output and parameters.", "Sketch a simple linear function.", "Interpret slope and intercept."], "code": "import numpy as np\nx = np.array([-2., -1., 0., 1., 2.])\ny = 2*x + 1\nprint(list(zip(x, y)))", "practice": "Change the slope from 2 to -2. Describe how the graph and predictions change.", "mistakes": ["Treating parameters as inputs.", "Forgetting that different functions can have the same output at one point.", "Reading a graph without checking axes."], "resources": [{"label": "G", "url": "o"}, {"label": "h", "url": "t"}]},
  '02-4': {"summary": "Understand a derivative as a local rate of change rather than a symbolic rule to memorize.", "body": "If a small change in x produces a positive change in y, the local derivative is positive. If y falls as x rises, it is negative. Optimization uses this direction information to decide how parameters should move.", "takeaways": ["Interpret positive and negative slope.", "Estimate a derivative numerically.", "Connect slope to optimization."], "code": "def f(x):\n    return x*x\n\nx = 2.0\neps = 1e-5\napprox = (f(x + eps) - f(x - eps)) / (2*eps)\nprint(approx)", "practice": "Estimate the derivative of x² at x=3 with finite differences and compare it with the analytic result 6.", "mistakes": ["Using a step size that is too large.", "Confusing function value with derivative.", "Assuming every derivative is constant."], "resources": [{"label": "G", "url": "o"}, {"label": "h", "url": "t"}]},
  '02-5': {"summary": "Move from one derivative to many by understanding gradients as a vector of partial derivatives.", "body": "A model often has thousands or millions of parameters. The gradient tells us how the objective changes with respect to each parameter. Its direction points toward increasing loss; the negative gradient points toward decreasing loss.", "takeaways": ["Read a gradient as a direction vector.", "Understand partial derivatives.", "Relate gradients to parameter updates."], "code": "import numpy as np\n# Loss: L(w1,w2) = (w1-2)^2 + (w2+1)^2\nw = np.array([0., 0.])\ngrad = np.array([2*(w[0]-2), 2*(w[1]+1)])\nprint(\"gradient:\", grad)", "practice": "Take one gradient-descent step with learning rate 0.1 and calculate the new parameters by hand.", "mistakes": ["Thinking the gradient itself is the update.", "Forgetting the negative direction for minimization.", "Ignoring parameter scale."], "resources": [{"label": "G", "url": "o"}, {"label": "h", "url": "t"}]},
  '02-6': {"summary": "Understand optimization as the search for parameters that minimize an objective function.", "body": "Training is an iterative optimization process. Start with parameters, measure loss, compute gradients, update parameters, and repeat. The learning rate controls how large each step is.", "takeaways": ["Define objective and parameters.", "Explain a learning-rate trade-off.", "Trace one optimization step."], "code": "w = 0.0\ntarget = 5.0\nlr = 0.1\nfor step in range(5):\n    grad = 2*(w-target)\n    w -= lr*grad\n    print(step, round(w, 3))", "practice": "Try learning rates 0.01, 0.1 and 1.1. Describe which behavior is slow, stable or unstable and why.", "mistakes": ["Assuming a larger learning rate is always better.", "Optimizing the wrong objective.", "Ignoring the scale of features."], "resources": [{"label": "G", "url": "o"}, {"label": "h", "url": "t"}]},
  '02-7': {"summary": "Use probability to reason about uncertainty, conditional events and model outputs.", "body": "AI systems rarely operate with certainty. Probability lets us express beliefs, likelihoods and uncertainty. Distinguish P(A|B) from P(B|A); they are generally not equal.", "takeaways": ["Read basic probability notation.", "Understand conditional probability.", "Interpret model confidence cautiously."], "code": "from collections import Counter\nlabels = [\"cat\", \"cat\", \"dog\", \"cat\", \"dog\"]\ncounts = Counter(labels)\nprint({k: v/len(labels) for k,v in counts.items()})", "practice": "Create a tiny dataset and estimate the probability of a label. Then explain why class frequency is not the same as a model being correct.", "mistakes": ["Confusing probability with certainty.", "Reversing conditional probabilities.", "Treating confidence as calibrated truth."], "resources": [{"label": "G", "url": "o"}, {"label": "h", "url": "t"}]},
  '02-8': {"summary": "Learn mean, variance, distributions and sampling as tools for understanding data and model behavior.", "body": "Statistics helps you detect scale, spread, skew, noise and sampling problems. A model can fail because the data distribution is different from what you assumed.", "takeaways": ["Compute mean and variance.", "Interpret spread.", "Recognize sampling bias."], "code": "import numpy as np\nscores = np.array([2., 3., 3., 4., 20.])\nprint(\"mean\", scores.mean())\nprint(\"std\", scores.std())", "practice": "Compare the mean and median of the sample. Explain how the outlier changes the mean and what that means for a model feature.", "mistakes": ["Ignoring outliers.", "Assuming the mean always represents a typical value.", "Confusing sample statistics with population truth."], "resources": [{"label": "N", "url": "u"}, {"label": "h", "url": "t"}]},
  '02-9': {"summary": "Understand Euclidean distance, cosine similarity and when each is useful.", "body": "Distance answers “how far apart?” while similarity answers “how aligned or related?” Embedding systems often use cosine similarity because direction can matter more than magnitude.", "takeaways": ["Calculate Euclidean distance.", "Calculate cosine similarity.", "Choose a metric deliberately."], "code": "import numpy as np\na = np.array([1., 2.])\nb = np.array([2., 4.])\ncos = np.dot(a,b)/(np.linalg.norm(a)*np.linalg.norm(b))\nprint(\"cosine:\", cos)", "practice": "Compare [1,2] with [2,4] and [1,0]. Explain why Euclidean distance and cosine similarity tell different stories.", "mistakes": ["Using cosine similarity with zero vectors.", "Assuming one metric is always best.", "Ignoring feature scaling."], "resources": [{"label": "N", "url": "u"}, {"label": "h", "url": "t"}]},
  '02-10': {"summary": "Connect mathematical ideas to practical metrics and error analysis.", "body": "Evaluation is a mathematical description of behavior. Accuracy, precision, recall, mean absolute error and mean squared error answer different questions. Choose the metric based on the cost of mistakes.", "takeaways": ["Match metrics to problem types.", "Explain why averages can hide failure modes.", "Use a metric with a clear interpretation."], "code": "import numpy as np\ny = np.array([1., 2., 3.])\np = np.array([1.5, 1.0, 2.5])\nmae = np.mean(np.abs(y-p))\nmse = np.mean((y-p)**2)\nprint(\"MAE\", mae, \"MSE\", mse)", "practice": "Create a prediction with one large error and compare MAE with MSE. Explain why MSE emphasizes large errors more strongly.", "mistakes": ["Choosing metrics because they are familiar.", "Reporting one aggregate without segment analysis.", "Forgetting the business consequence of errors."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-1': {"summary": "Learn to turn a real problem into a supervised learning dataset with explicit inputs, targets and units of observation.", "body": "A dataset is not just a CSV. Define what one row represents, what the target is, which features are available at prediction time, and what data cannot legitimately be used.", "takeaways": ["Define the unit of observation.", "Separate features from target.", "Check for leakage before modeling."], "code": "import pandas as pd\ndf = pd.DataFrame({\"age\":[22,35,48],\"income\":[30,55,80],\"churn\":[0,1,0]})\nX = df[[\"age\",\"income\"]]\ny = df[\"churn\"]\nprint(X)\nprint(y)", "practice": "Write down the prediction moment for a churn model. List one feature that would be unavailable at that moment and explain why.", "mistakes": ["Including future information.", "Mixing identifiers with predictive features.", "Skipping a target definition."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-2': {"summary": "Use separate datasets for fitting, model selection and final evaluation.", "body": "Training data estimates parameters. Validation data helps choose models and hyperparameters. The test set should remain untouched until you are ready to report final performance.", "takeaways": ["Explain the role of each split.", "Avoid test-set leakage.", "Use stratification when appropriate."], "code": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)", "practice": "Explain why choosing the best model using repeated test-set results makes the test set part of the training process conceptually.", "mistakes": ["Tuning on the test set.", "Using a random split without checking class balance.", "Assuming one split always represents production."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-3': {"summary": "Build intuition for linear regression as a parameterized function that minimizes a loss on continuous targets.", "body": "Linear regression is simple enough to understand end-to-end and important enough to remain a useful baseline. Start with the baseline before reaching for a complex model.", "takeaways": ["Interpret coefficients.", "Understand residuals.", "Use a simple baseline."], "code": "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\nprint(model.coef_, model.intercept_)", "practice": "Fit a linear regression baseline to a small dataset. Inspect a prediction error and explain what the coefficient means in context.", "mistakes": ["Interpreting correlation as causation.", "Ignoring feature scale when comparing coefficients.", "Skipping residual analysis."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-4': {"summary": "Understand logistic regression as a classification model that maps a linear score to a probability-like output.", "body": "Logistic regression is a strong baseline for many classification problems and a good bridge between mathematics and practical ML.", "takeaways": ["Explain logits and probabilities.", "Choose a classification threshold.", "Interpret coefficients cautiously."], "code": "from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression(max_iter=1000)\nclf.fit(X_train, y_train)\nprint(clf.predict_proba(X_test))", "practice": "Change the decision threshold conceptually from 0.5 to 0.8. Describe how precision and recall might change.", "mistakes": ["Treating 0.5 as universally correct.", "Ignoring class imbalance.", "Reading coefficients without considering feature scaling."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-5': {"summary": "Understand how decision trees recursively split data into increasingly homogeneous groups.", "body": "Trees are interpretable compared with many models and form the basis of powerful ensembles. But deep trees can memorize training data.", "takeaways": ["Read a simple split.", "Understand depth and leaf size.", "Recognize overfitting risk."], "code": "from sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=3, random_state=42)\ntree.fit(X_train, y_train)\nprint(tree.get_depth())", "practice": "Train trees with depth 1, 3 and unrestricted depth. Compare train and validation behavior and explain the trade-off.", "mistakes": ["Growing a tree until training accuracy is perfect.", "Ignoring minimum leaf sizes.", "Assuming trees cannot overfit."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-6': {"summary": "Learn why combining multiple weak or varied learners can improve robustness and predictive performance.", "body": "Random forests reduce variance by averaging many randomized trees. Boosting builds models sequentially to focus on errors. The key idea is diversity plus aggregation.", "takeaways": ["Contrast bagging and boosting.", "Explain variance reduction.", "Choose an ensemble deliberately."], "code": "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)", "practice": "Compare one decision tree with a random forest on the same split. Record whether variance in performance changes.", "mistakes": ["Assuming more trees always fix data problems.", "Ignoring leakage in ensemble pipelines.", "Treating feature importance as causal evidence."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-7': {"summary": "Transform raw inputs into representations that make the learning problem easier while respecting the prediction-time boundary.", "body": "Feature engineering can improve simple models dramatically. But every transformation must be reproducible and fit only on allowed data.", "takeaways": ["Encode categorical features.", "Scale numerical features when needed.", "Avoid using future information."], "code": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)", "practice": "Design three features for a customer-churn problem. For each, state when the feature becomes available and whether it risks leakage.", "mistakes": ["Fitting preprocessing on the full dataset.", "Creating features from future events.", "Adding features without measuring value."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-8': {"summary": "Diagnose the gap between training and validation performance and use regularization to control model complexity.", "body": "A model that memorizes training examples may look impressive until it meets unseen data. Regularization adds constraints or penalties that discourage overly complex solutions.", "takeaways": ["Recognize underfitting and overfitting.", "Explain regularization conceptually.", "Use validation curves to reason about complexity."], "code": "from sklearn.linear_model import Ridge\nmodel = Ridge(alpha=1.0)\nmodel.fit(X_train, y_train)", "practice": "Train a model with several regularization strengths. Describe how increasing regularization can move a model from high variance toward higher bias.", "mistakes": ["Choosing alpha from the test set.", "Assuming more regularization is always better.", "Ignoring data quantity and noise."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-9': {"summary": "Select metrics that match the problem and inspect errors instead of relying on one headline number.", "body": "For classification, precision, recall, F1, ROC-AUC and PR-AUC answer different questions. For regression, MAE and RMSE have different sensitivity to large errors. Evaluation is part of problem definition, not an afterthought.", "takeaways": ["Choose metrics from failure costs.", "Inspect confusion matrices.", "Segment errors by relevant cohorts."], "code": "from sklearn.metrics import classification_report, confusion_matrix\nprint(confusion_matrix(y_test, clf.predict(X_test)))\nprint(classification_report(y_test, clf.predict(X_test)))", "practice": "Imagine a fraud model where missing a fraud case is ten times more costly than reviewing a legitimate transaction. Which metric would you emphasize and why?", "mistakes": ["Using accuracy for imbalanced problems.", "Ignoring false positives or false negatives.", "Reporting metrics without a baseline."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '03-10': {"summary": "Complete a reproducible classical ML workflow from problem definition to evaluation and documentation.", "body": "The goal is not a perfect score. The goal is an auditable workflow: define the target, inspect data, split correctly, establish a baseline, train, evaluate, inspect errors and document limitations.", "takeaways": ["Create a baseline before tuning.", "Keep train/test boundaries clean.", "Document assumptions and failure modes."], "code": "# Project checklist\n# 1. Problem + target\n# 2. Dataset audit\n# 3. Split\n# 4. Baseline\n# 5. Model\n# 6. Evaluation\n# 7. Error analysis\n# 8. README", "practice": "Build a small classifier using scikit-learn. Your README must contain the target definition, split strategy, baseline, metrics, three failure examples and one improvement you would test next.", "mistakes": ["Tuning before defining the metric.", "Only reporting the best score.", "Leaving preprocessing and random seeds undocumented."], "resources": [{"label": "s", "url": "c"}, {"label": "h", "url": "t"}]},
  '04-1': {"summary": "Understand a perceptron as a weighted sum followed by a decision rule.", "body": "A perceptron is simple, but it introduces the central neural-network idea: parameters transform inputs into outputs. Modern networks compose many such transformations with nonlinearities.", "takeaways": ["Explain weights and bias.", "Compute a weighted sum.", "Understand a linear decision boundary."], "code": "import numpy as np\nx = np.array([2., 1.])\nw = np.array([0.5, -0.25])\nb = 0.1\nscore = x @ w + b\nprint(score)", "practice": "Change one weight and predict how the score changes before running the code.", "mistakes": ["Treating weights as fixed rules.", "Forgetting the bias.", "Assuming one perceptron solves nonlinear problems."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-2': {"summary": "Trace how inputs move through layers to produce a prediction.", "body": "Forward propagation is simply executing the model from input to output. Understanding it makes loss, gradients and debugging much easier.", "takeaways": ["Track tensor shapes.", "Identify intermediate activations.", "Separate model computation from loss."], "code": "import torch\nfrom torch import nn\nmodel = nn.Sequential(nn.Linear(2, 4), nn.ReLU(), nn.Linear(4, 1))\nx = torch.tensor([[1.0, 2.0]])\ny = model(x)\nprint(y.shape)", "practice": "Draw the shape after each layer for a batch of 8 examples.", "mistakes": ["Ignoring batch dimensions.", "Assuming every layer preserves shape.", "Debugging only the final output."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-3': {"summary": "Understand loss as a numerical signal that tells training how far predictions are from desired behavior.", "body": "Different tasks require different losses. Mean squared error is common for regression; cross-entropy is common for classification. The loss should reflect what the model is being trained to optimize.", "takeaways": ["Match losses to tasks.", "Explain lower loss vs better predictions.", "Inspect individual errors."], "code": "import torch\nfrom torch import nn\nloss_fn = nn.CrossEntropyLoss()\nlogits = torch.tensor([[2.0, 0.5]])\ntarget = torch.tensor([0])\nprint(loss_fn(logits, target).item())", "practice": "Swap the target class and observe how the loss changes. Explain what the logits mean before softmax.", "mistakes": ["Applying softmax manually before CrossEntropyLoss.", "Choosing a loss because it is familiar.", "Optimizing a metric that differs from the actual objective."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-4': {"summary": "Understand backpropagation as efficient computation of gradients through a computation graph.", "body": "Backpropagation applies the chain rule through the model. In PyTorch, autograd records operations and computes gradients when you call backward.", "takeaways": ["Explain the chain rule conceptually.", "Inspect parameter gradients.", "Connect gradients to updates."], "code": "import torch\nx = torch.tensor(2.0, requires_grad=True)\ny = x**2 + 3*x\ny.backward()\nprint(x.grad)", "practice": "Calculate the derivative of x²+3x at x=2 by hand, then verify it with autograd.", "mistakes": ["Calling backward without understanding the graph.", "Forgetting that gradients accumulate.", "Updating parameters before inspecting gradients."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-5': {"summary": "Use SGD and Adam conceptually and understand what the optimizer actually changes.", "body": "An optimizer consumes gradients and updates parameters. Learning rate is one of the most important controls. Adam adapts step sizes using running statistics, while SGD is a simple baseline.", "takeaways": ["Explain optimizer vs loss.", "Understand learning rate.", "Compare SGD and Adam conceptually."], "code": "import torch\nfrom torch import nn\nmodel = nn.Linear(1, 1)\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\nprint(type(optimizer).__name__)", "practice": "Train a tiny model with SGD. Change the learning rate by 10x and observe convergence speed and stability.", "mistakes": ["Thinking the optimizer computes the loss.", "Using an extreme learning rate.", "Forgetting optimizer.zero_grad()."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-6': {"summary": "Understand why nonlinear activations allow neural networks to model more than a single linear transformation.", "body": "Without nonlinear activations, stacking linear layers collapses into another linear function. ReLU, sigmoid and tanh have different properties and historical uses.", "takeaways": ["Explain why nonlinearity matters.", "Know the basic behavior of ReLU, sigmoid and tanh.", "Recognize saturation issues."], "code": "import torch\nx = torch.tensor([-2., -1., 0., 1., 2.])\nprint(torch.relu(x))\nprint(torch.sigmoid(x))", "practice": "Plot or print several activation functions over the same input range and explain which values saturate.", "mistakes": ["Using sigmoid everywhere by default.", "Forgetting activation placement.", "Assuming activation choice never affects optimization."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-7': {"summary": "Use tensors, shapes, dtypes and devices as the basic data structure of deep learning.", "body": "PyTorch tensors resemble NumPy arrays but integrate with automatic differentiation and hardware acceleration. Shape discipline remains essential.", "takeaways": ["Create and reshape tensors.", "Inspect dtype and device.", "Move data deliberately."], "code": "import torch\nx = torch.tensor([[1., 2.], [3., 4.]])\nprint(x.shape, x.dtype, x.device)\nprint(x.reshape(4))", "practice": "Create a batch of 32 examples with 10 features and write down the expected shapes before each operation.", "mistakes": ["Silent dtype conversions.", "Confusing reshape with changing data meaning.", "Moving tensors between CPU and GPU unnecessarily."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-8': {"summary": "Build the canonical training loop: load batch, forward pass, loss, backward pass, optimizer step, repeat.", "body": "The training loop is where the concepts become an engineering system. Make each step visible so you can diagnose data, model, loss and optimizer problems separately.", "takeaways": ["Understand epochs and batches.", "Reset gradients.", "Track training loss."], "code": "for batch_x, batch_y in loader:\n    optimizer.zero_grad()\n    pred = model(batch_x)\n    loss = loss_fn(pred, batch_y)\n    loss.backward()\n    optimizer.step()", "practice": "Add validation after each epoch. Explain why validation should not call optimizer.step().", "mistakes": ["Forgetting zero_grad.", "Backpropagating through validation.", "Logging only the final epoch."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-9': {"summary": "Learn to diagnose common neural-network failures using loss curves, shapes, gradients and tiny datasets.", "body": "When training fails, shrink the problem. Overfit a tiny batch, inspect gradients, verify labels, check shapes, and confirm the loss changes. This is faster than randomly changing hyperparameters.", "takeaways": ["Use a tiny-batch overfit test.", "Inspect gradients and loss.", "Separate data bugs from model bugs."], "code": "# Debugging checklist\n# 1. Can one batch overfit?\n# 2. Are labels correct?\n# 3. Are shapes correct?\n# 4. Are gradients non-zero?\n# 5. Does validation behave differently?", "practice": "Take a small classification dataset and intentionally break the labels. Use loss and accuracy behavior to diagnose the issue.", "mistakes": ["Changing five hyperparameters at once.", "Assuming low training accuracy is an architecture problem.", "Ignoring data preprocessing."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '04-10': {"summary": "Combine tensors, modules, losses, optimizers and evaluation into a small end-to-end deep-learning project.", "body": "Your first deep-learning project should be intentionally small. The engineering goal is a reproducible pipeline that trains, validates, saves the model and explains what failed.", "takeaways": ["Build an nn.Module.", "Train and validate.", "Save and reload the model."], "code": "from torch import nn\n\nclass Classifier(nn.Module):\n    def __init__(self, features, classes):\n        super().__init__()\n        self.net = nn.Sequential(nn.Linear(features, 16), nn.ReLU(), nn.Linear(16, classes))\n    def forward(self, x):\n        return self.net(x)", "practice": "Build a classifier on a small public dataset. Your README must include data preparation, architecture, loss, optimizer, train/validation curves, final metrics and one debugging lesson.", "mistakes": ["Tuning before verifying the pipeline.", "Saving only weights without documenting architecture.", "Reporting training accuracy as the final result."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-1': {"summary": "Understand how images become numerical tensors and why shape, channel order and normalization matter.", "body": "An image is a grid of pixel values. A typical color image can be represented as height × width × channels or channels × height × width. Models need a consistent convention.", "takeaways": ["Read image tensor shapes.", "Distinguish grayscale and RGB.", "Understand normalization."], "code": "import torch\nimage = torch.rand(3, 224, 224)\nprint(\"channels, height, width:\", image.shape)\nprint(\"min/max:\", image.min().item(), image.max().item())", "practice": "Create a synthetic RGB tensor and explain what each axis means. Then describe what would change for a grayscale image.", "mistakes": ["Mixing HWC and CHW.", "Forgetting normalization.", "Assuming pixel values are always 0–255 after preprocessing."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-2': {"summary": "Understand convolution as a learned local pattern detector that slides across an image.", "body": "A convolutional filter examines local neighborhoods and produces a feature map. Early filters often learn edges or simple textures; deeper layers combine these into more complex patterns.", "takeaways": ["Explain receptive fields.", "Interpret a feature map.", "Understand kernel and stride."], "code": "import torch\nfrom torch import nn\nconv = nn.Conv2d(in_channels=3, out_channels=8, kernel_size=3, padding=1)\nx = torch.rand(1, 3, 32, 32)\nprint(conv(x).shape)", "practice": "Predict the output shape for a convolution before running it. Change stride from 1 to 2 and explain the effect.", "mistakes": ["Confusing kernel size with output channels.", "Ignoring padding/stride.", "Thinking the filter is manually designed during training."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-3': {"summary": "Build a small convolutional neural network and understand the role of convolutional blocks.", "body": "A CNN usually combines convolution, nonlinear activation, downsampling and a final prediction head. The architecture controls what spatial information is preserved.", "takeaways": ["Trace CNN tensor shapes.", "Understand feature hierarchy.", "Separate feature extractor from classifier."], "code": "from torch import nn\nmodel = nn.Sequential(\n    nn.Conv2d(3, 16, 3, padding=1), nn.ReLU(),\n    nn.MaxPool2d(2),\n    nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(),\n    nn.AdaptiveAvgPool2d(1)\n)\nprint(model)", "practice": "Build a CNN for a tiny image dataset. Print the shape after every block and explain where spatial resolution changes.", "mistakes": ["Flattening too early.", "Using an oversized model for tiny data.", "Ignoring input normalization."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-4': {"summary": "Understand pooling and downsampling as ways to reduce spatial resolution and increase effective receptive fields.", "body": "Pooling can make representations more compact, but it also discards spatial detail. Modern architectures also use strided convolutions and adaptive pooling.", "takeaways": ["Explain max pooling.", "Understand downsampling.", "Recognize information loss."], "code": "import torch\nfrom torch import nn\nx = torch.rand(1, 8, 32, 32)\npool = nn.MaxPool2d(2)\nprint(pool(x).shape)", "practice": "Compare max pooling with average pooling on a synthetic feature map. Explain which statistic each retains.", "mistakes": ["Thinking pooling is always harmless.", "Forgetting how spatial dimensions change.", "Using excessive downsampling."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-5': {"summary": "Use controlled transformations to improve robustness without changing the task semantics.", "body": "Augmentation creates varied training examples from existing data. It must preserve the label meaning; a transformation that changes the class is not valid augmentation for that task.", "takeaways": ["Distinguish valid and invalid transformations.", "Apply augmentation only to training data.", "Use deterministic validation transforms."], "code": "from torchvision import transforms\ntrain_tf = transforms.Compose([\n    transforms.RandomHorizontalFlip(),\n    transforms.RandomCrop(32, padding=4),\n    transforms.ToTensor(),\n])\nprint(train_tf)", "practice": "For a traffic-sign classifier, list three valid and three risky augmentations. Explain each decision.", "mistakes": ["Augmenting validation/test data randomly.", "Using transformations that change labels.", "Applying too many transformations at once."], "resources": [{"label": "T", "url": "o"}, {"label": "h", "url": "t"}]},
  '05-6': {"summary": "Reuse a pretrained visual representation and adapt it to a new task instead of training from scratch when data is limited.", "body": "Transfer learning can reduce training time and data requirements. Start by freezing the backbone, train a new head, then consider selective fine-tuning if needed.", "takeaways": ["Explain backbone vs head.", "Freeze parameters deliberately.", "Recognize domain mismatch."], "code": "import torch\nfrom torchvision.models import resnet18, ResNet18_Weights\nmodel = resnet18(weights=ResNet18_Weights.DEFAULT)\nfor p in model.parameters():\n    p.requires_grad = False\nprint(\"backbone frozen\")", "practice": "Fine-tune a pretrained classifier on a small dataset. Compare frozen-backbone training with unfreezing the final block.", "mistakes": ["Fine-tuning everything immediately.", "Ignoring label mismatch.", "Using pretrained weights without checking their intended domain."], "resources": [{"label": "T", "url": "o"}, {"label": "h", "url": "t"}]},
  '05-7': {"summary": "Build a complete image-classification pipeline from dataset to metrics.", "body": "Classification needs consistent preprocessing, a model, a loss, training/validation separation and meaningful metrics. Accuracy alone can hide class imbalance.", "takeaways": ["Build a DataLoader pipeline.", "Track class-wise performance.", "Inspect misclassified examples."], "code": "# Minimal project flow\n# dataset -> transforms -> DataLoader -> model\n# -> loss -> optimizer -> validation -> error analysis", "practice": "Train a small classifier and create a table of at least five misclassified examples with the true and predicted labels and a hypothesis for each error.", "mistakes": ["Reporting only aggregate accuracy.", "Leaking augmented test data into training.", "Ignoring class imbalance."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
  '05-8': {"summary": "Understand how object detection differs from classification and the purpose of boxes, labels and confidence scores.", "body": "Classification answers what is in an image. Detection answers what and where. Modern detectors predict candidate boxes and class scores, then use post-processing such as non-maximum suppression.", "takeaways": ["Explain bounding boxes.", "Understand confidence scores.", "Explain NMS at a high level."], "code": "# Detection output concept\nboxes = [[10, 20, 80, 120]]\nscores = [0.91]\nlabels = [\"person\"]\nprint(boxes, scores, labels)", "practice": "Draw two overlapping predicted boxes around one object. Explain why a detector may keep one and suppress the other.", "mistakes": ["Confusing classification with localization.", "Treating confidence as probability without calibration.", "Ignoring IoU."], "resources": [{"label": "T", "url": "o"}, {"label": "h", "url": "t"}]},
  '05-9': {"summary": "Evaluate visual models using metrics that match the task and inspect failure modes by class, object size and image conditions.", "body": "Classification often uses accuracy, precision, recall and F1. Detection adds IoU and mAP. A strong evaluation includes examples, not only one number.", "takeaways": ["Choose metrics for classification vs detection.", "Understand IoU conceptually.", "Perform error slicing."], "code": "def iou(box_a, box_b):\n    # boxes: x1, y1, x2, y2\n    x1 = max(box_a[0], box_b[0])\n    y1 = max(box_a[1], box_b[1])\n    x2 = min(box_a[2], box_b[2])\n    y2 = min(box_a[3], box_b[3])\n    inter = max(0, x2-x1) * max(0, y2-y1)\n    area_a = (box_a[2]-box_a[0])*(box_a[3]-box_a[1])\n    area_b = (box_b[2]-box_b[0])*(box_b[3]-box_b[1])\n    return inter / (area_a + area_b - inter)", "practice": "Compute IoU for two boxes and explain why a small localization error can matter differently for small and large objects.", "mistakes": ["Using accuracy for detection.", "Ignoring class imbalance.", "Evaluating only easy images."], "resources": [{"label": "T", "url": "o"}, {"label": "h", "url": "t"}]},
  '05-10': {"summary": "Ship a small computer-vision project with reproducible preprocessing, training, evaluation and documented failure analysis.", "body": "The goal is to learn the workflow, not to chase a benchmark. A good project explains the dataset, preprocessing, model choice, metrics, examples of failure and what you would change next.", "takeaways": ["Build an end-to-end vision pipeline.", "Record experiments.", "Document limitations."], "code": "# Vision project checklist\n# data audit -> transforms -> baseline -> model\n# -> train -> validate -> error analysis -> README", "practice": "Build a small classifier or detector. Include a reproducible training command, saved weights, metrics by class, five failure examples and a short model-card-style limitations section.", "mistakes": ["Optimizing before establishing a baseline.", "Ignoring dataset bias.", "Not recording preprocessing or random seeds."], "resources": [{"label": "P", "url": "y"}, {"label": "h", "url": "t"}]},
};
Object.assign(detailed, detailedContentV1);

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

const assessmentContentV1 = {
  "02": [
    [
      "A feature vector has shape (8,). What does that most naturally mean?",
      [
        "Eight features for one example",
        "Eight labels for eight models",
        "An 8x8 matrix",
        "Eight examples with one feature each"
      ],
      0
    ],
    [
      "If a dot product of two vectors is zero, what can you conclude?",
      [
        "They are identical",
        "They are orthogonal in the usual geometric setting",
        "They are both zero",
        "They have equal length"
      ],
      1
    ],
    [
      "Why is the gradient useful during minimization?",
      [
        "It is always a scalar",
        "It directly gives the final model",
        "It replaces the loss function",
        "Its negative direction indicates how to locally reduce the objective"
      ],
      3
    ],
    [
      "A learning rate that is too large can cause what behavior?",
      [
        "The model always becomes more accurate",
        "Updates can overshoot and training can become unstable",
        "Gradients become unnecessary",
        "The dataset becomes larger"
      ],
      1
    ],
    [
      "Which statement about P(A|B) is generally correct?",
      [
        "It is the probability of A conditioned on B and is not generally equal to P(B|A)",
        "It is the same as P(A)",
        "It is only used for regression",
        "It is always equal to P(B|A)"
      ],
      0
    ],
    [
      "Why can an outlier strongly affect the mean?",
      [
        "The median is computed first",
        "The mean only uses the smallest value",
        "The mean ignores large values",
        "The mean uses every numeric value directly"
      ],
      3
    ],
    [
      "Why can cosine similarity be useful for embeddings?",
      [
        "It only works on images",
        "It focuses on the angle between vectors and can reduce sensitivity to magnitude",
        "It requires binary labels",
        "It always equals Euclidean distance"
      ],
      1
    ],
    [
      "Which metric is especially sensitive to large regression errors?",
      [
        "Precision",
        "Accuracy",
        "MSE",
        "Recall"
      ],
      2
    ],
    [
      "A gradient of [2, -4] is used to minimize a loss. What is the direction of the first step before choosing a learning rate?",
      [
        "Toward [0, 0] regardless of parameters",
        "There is no direction",
        "Toward [2, -4]",
        "Toward [-2, 4]"
      ],
      3
    ],
    [
      "Why should evaluation metrics be chosen from failure costs?",
      [
        "Metrics eliminate the need for test data",
        "Different metrics emphasize different kinds of errors",
        "Metrics are interchangeable",
        "Metrics determine the programming language"
      ],
      1
    ]
  ],
  "03": [
    [
      "What is the main purpose of a test set?",
      [
        "Estimate performance on unseen data after model choices are finalized",
        "Fit preprocessing parameters",
        "Replace the training set",
        "Tune hyperparameters repeatedly"
      ],
      0
    ],
    [
      "Which situation is a clear example of data leakage?",
      [
        "Using a validation set",
        "Using a baseline model",
        "Using information that would only exist after the prediction time",
        "Using a numeric feature"
      ],
      2
    ],
    [
      "Why establish a simple baseline before a complex model?",
      [
        "It removes the need for evaluation",
        "It prevents overfitting automatically",
        "It gives a reference point for whether added complexity creates real value",
        "It guarantees the best score"
      ],
      2
    ],
    [
      "What does logistic regression normally model for binary classification?",
      [
        "A decision tree",
        "A probability through a logistic transformation of a linear score",
        "A vector database",
        "A pixel grid"
      ],
      1
    ],
    [
      "A very deep decision tree gets 100% training accuracy but much lower validation accuracy. What is the likely issue?",
      [
        "Underfitting",
        "Data normalization",
        "Overfitting",
        "Insufficient model capacity"
      ],
      2
    ],
    [
      "What is a key difference between bagging and boosting?",
      [
        "Boosting never uses trees",
        "They are exactly the same procedure",
        "Bagging always uses neural networks",
        "Bagging aggregates varied learners, while boosting builds learners sequentially to focus on errors"
      ],
      3
    ],
    [
      "When should a scaler be fitted?",
      [
        "Separately on the test set",
        "Only after model evaluation",
        "On training data, then applied to validation/test data",
        "On the entire dataset before splitting"
      ],
      2
    ],
    [
      "Why can accuracy be misleading on an imbalanced classification problem?",
      [
        "Accuracy always equals recall",
        "A majority-class prediction can look accurate while missing the minority class",
        "Accuracy cannot be computed",
        "Imbalance makes labels continuous"
      ],
      1
    ],
    [
      "What is the purpose of cross-validation?",
      [
        "Increase the number of labels",
        "Guarantee zero overfitting",
        "Estimate how a model-selection procedure behaves across multiple training/validation splits",
        "Replace a final test set in every situation"
      ],
      2
    ],
    [
      "What belongs in a good ML project README?",
      [
        "Only a screenshot",
        "Only the model name",
        "Problem definition, data assumptions, split strategy, metrics, limitations and how to reproduce the result",
        "Only the final accuracy"
      ],
      2
    ]
  ],
  "04": [
    [
      "What happens during forward propagation?",
      [
        "The optimizer chooses a dataset",
        "Inputs pass through model layers to produce predictions",
        "Gradients are discarded before the model runs",
        "Parameters are permanently deleted"
      ],
      1
    ],
    [
      "Why do neural networks need nonlinear activations?",
      [
        "They make data smaller",
        "They create labels",
        "They replace the loss",
        "Without them, stacked linear layers collapse to another linear transformation"
      ],
      3
    ],
    [
      "What does loss represent during training?",
      [
        "The learning rate only",
        "The number of layers",
        "A numerical objective measuring how predictions differ from the training target according to the chosen loss",
        "The GPU temperature"
      ],
      2
    ],
    [
      "What does loss.backward() do in PyTorch?",
      [
        "Computes gradients through the recorded computation graph",
        "Updates all parameters automatically",
        "Loads a dataset",
        "Starts a web server"
      ],
      0
    ],
    [
      "What does optimizer.step() do?",
      [
        "Computes the dataset split",
        "Clears the model architecture",
        "Calculates accuracy only",
        "Uses available gradients to update optimizer-managed parameters"
      ],
      3
    ],
    [
      "Why call optimizer.zero_grad() in a typical training loop?",
      [
        "Gradients accumulate by default, so old gradients must be cleared before the next update",
        "It normalizes the input images",
        "It deletes the model",
        "It changes the learning rate"
      ],
      0
    ],
    [
      "What is a useful debugging test for a new neural network?",
      [
        "Try to overfit a tiny batch to verify that the pipeline can learn",
        "Change the architecture and data at the same time",
        "Skip validation forever",
        "Train for 1000 epochs immediately"
      ],
      0
    ],
    [
      "Why should validation normally avoid optimizer.step()?",
      [
        "Validation measures the current model without updating its parameters",
        "Optimizer steps only work on images",
        "It would make the model deterministic",
        "Validation data cannot contain labels"
      ],
      0
    ],
    [
      "What is the learning rate?",
      [
        "A scale controlling the size of parameter updates",
        "The loss function",
        "The number of classes",
        "The number of training examples"
      ],
      0
    ],
    [
      "What makes a small deep-learning project reproducible?",
      [
        "A single prompt",
        "A large model only",
        "Documented data processing, dependencies, random seeds where relevant, training configuration and evaluation",
        "A screenshot of the final loss"
      ],
      2
    ]
  ],
  "05": [
    [
      "For an RGB image tensor in CHW format, what does shape (3,224,224) represent?",
      [
        "224 channels, height 3, width 224",
        "224 classes",
        "3 channels, height 224, width 224",
        "3 images of 224 pixels"
      ],
      2
    ],
    [
      "What does a convolutional kernel learn?",
      [
        "The final class name directly",
        "Local patterns that are useful for the task",
        "The optimizer settings",
        "The dataset filename"
      ],
      1
    ],
    [
      "What does increasing convolution stride generally do?",
      [
        "It increases the step size of the filter and often reduces spatial resolution",
        "It changes labels",
        "It increases the number of channels automatically",
        "It removes all parameters"
      ],
      0
    ],
    [
      "Why can pooling be useful?",
      [
        "It replaces convolution everywhere",
        "It guarantees better accuracy",
        "It prevents information loss",
        "It reduces spatial resolution and can increase the effective receptive field"
      ],
      3
    ],
    [
      "What is a key rule for data augmentation?",
      [
        "Augmentation should use future labels",
        "Every image should be rotated 180 degrees",
        "Validation should always be randomly augmented",
        "The transformation should preserve the task label meaning"
      ],
      3
    ],
    [
      "Why is transfer learning useful?",
      [
        "A pretrained backbone can provide useful representations when task data is limited",
        "It only works without labels",
        "It removes the need for evaluation",
        "It guarantees zero errors"
      ],
      0
    ],
    [
      "What is the key difference between image classification and object detection?",
      [
        "Detection predicts both what is present and where it is",
        "Classification always needs bounding boxes",
        "They are identical tasks",
        "Detection only predicts one class"
      ],
      0
    ],
    [
      "What does IoU measure in object detection?",
      [
        "Text similarity",
        "Model training time",
        "Overlap between predicted and reference bounding boxes",
        "Number of image channels"
      ],
      2
    ],
    [
      "Why inspect misclassified images instead of only reporting accuracy?",
      [
        "Accuracy is never useful",
        "Examples can reveal systematic failure modes hidden by aggregate metrics",
        "Images cannot be evaluated",
        "Misclassifications are always random"
      ],
      1
    ],
    [
      "What should a good vision project report?",
      [
        "Only the highest training accuracy",
        "Only the model architecture",
        "Only a demo video",
        "Preprocessing, model choice, metrics by relevant groups, failure examples and limitations"
      ],
      3
    ]
  ]
};
Object.assign(assessmentBank, assessmentContentV1);

const assessments = Object.fromEntries(Object.entries(assessmentBank).map(([id, qs]) => [id, qs.map(([q,options,answer])=>({q,options,answer}))]));

function lessonData(id) {
  const [pi, name, desc, lessons] = phases.find(p => p[0] === id.split('-')[0]) || phases[0];
  return lessons.map((title, i) => {
    const lid = `${pi}-${i+1}`;
    const d = detailed[lid] || {};
    return {id:lid, phase:pi, phaseName:name, title, summary:d.summary || `Understand ${title.toLowerCase()}, build a small example, and verify the result.`, body:d.body || `This lesson is part of ${name}. Start with intuition, build the smallest useful example, and finish by checking expected behavior.`, takeaways:d.takeaways || ['Explain the core idea.','Implement a minimal example.','Define a test or evaluation signal.','Connect the concept to a production AI system.'], code:d.code || `# ${title}\nprint("Practice: ${title}")`, practice:d.practice || 'Change one part of the example, predict the result, run it, and explain what happened.', verify:d.verify || 'Define an expected result and test it with a small example. Explain the result in your own words.', mistakes:d.mistakes || ['Skipping the prerequisite concept.','Copying code without understanding the output.','Measuring only whether code runs, not whether it is correct.'], resources:d.resources || []};
  });
}
function phaseLessons(phaseId) { return lessonData(`${phaseId}-1`); }
