/* Premium curriculum practice dataset — curriculum-content-update */
const curriculumContentUpdateQuestions = [
  {
    "id": "03-ML-001",
    "topic": "Machine Learning Foundations — cross-validation leakage",
    "questionText": "A binary classifier is evaluated with 5-fold cross-validation. Before splitting, the team standardizes every row using the global dataset mean and standard deviation, then fits the model inside each training fold. The reported score is unusually high. What is the strongest diagnosis?",
    "options": [
      "The model is necessarily underfitting because standardization reduces variance.",
      "The preprocessing step used information from validation folds, so validation data influenced the representation seen during training.",
      "Five-fold cross-validation cannot be used for classification.",
      "Standardization always causes label leakage, even when fitted only on training data."
    ],
    "correctAnswer": "The preprocessing step used information from validation folds, so validation data influenced the representation seen during training.",
    "hint": "Ask whether every learned preprocessing parameter was computed using only the training portion of each fold.",
    "explanation": "The mean and standard deviation are learned statistics. Computing them from the full dataset lets each validation fold contribute information to the transformation applied to the training fold. That is preprocessing leakage and can make validation performance optimistic. The safe pattern is to fit the scaler separately on each training fold and apply that fitted scaler to the corresponding validation fold. Classification can use k-fold cross-validation. Standardization itself is not label leakage; the problem is fitting it with information that should have remained outside the training fold."
  },
  {
    "id": "03-ML-002",
    "topic": "Machine Learning Foundations — data distribution shift",
    "questionText": "A fraud model scores 96% accuracy on a random holdout from last year's transactions, but accuracy falls sharply after deployment in a new region. Investigation shows the new region has a different merchant mix and transaction amounts. Which evaluation change most directly tests whether distribution shift is responsible?",
    "options": [
      "Shuffle the original training set again and report another random split.",
      "Evaluate on a temporally or geographically held-out dataset that reflects the deployment distribution and compare feature/label distributions.",
      "Increase the model depth until the deployment score improves.",
      "Remove all rare examples from the original dataset before evaluating."
    ],
    "correctAnswer": "Evaluate on a temporally or geographically held-out dataset that reflects the deployment distribution and compare feature/label distributions.",
    "hint": "Make the evaluation population resemble the population in which the model will actually operate.",
    "explanation": "A random holdout estimates performance when the holdout is drawn from approximately the same distribution as training. If deployment occurs in a different region with a different merchant and transaction distribution, that estimate may not represent production performance. A deployment-like holdout lets the team measure generalization under the suspected shift. Increasing model depth does not diagnose the shift, and deleting rare examples can make the evaluation population less representative."
  },
  {
    "id": "04-DL-001",
    "topic": "Deep Learning with PyTorch — autograd tracking",
    "questionText": "A PyTorch training loop computes a loss and calls loss.backward(), but a tensor created with requires_grad=False never receives a gradient. Which explanation is correct?",
    "options": [
      "PyTorch computes gradients for every tensor regardless of requires_grad.",
      "Autograd records operations needed for differentiation only when gradient tracking is enabled for the relevant tensors and operations; a tensor outside that graph will not receive the expected gradient.",
      "Calling backward() only updates the optimizer, not gradients.",
      "Gradients exist only for tensors stored on the GPU."
    ],
    "correctAnswer": "Autograd records operations needed for differentiation only when gradient tracking is enabled for the relevant tensors and operations; a tensor outside that graph will not receive the expected gradient.",
    "hint": "Think about the computation graph: which tensors and operations were actually tracked?",
    "explanation": "PyTorch autograd builds a dynamic computation graph from tracked operations. Parameters normally have requires_grad=True, allowing derivatives of the loss to accumulate in their grad fields after backward. A tensor created or used without gradient tracking is not automatically turned into a trainable parameter merely because backward is called later. The GPU has no special requirement for autograd; CPU tensors can participate too. The optimizer consumes gradients after backward; it does not create the graph itself."
  },
  {
    "id": "04-DL-002",
    "topic": "Deep Learning with PyTorch — exploding gradients and tensor shapes",
    "questionText": "A sequence model starts training normally, then its gradient norm grows from roughly $10^1$ to $10^6$ and the loss becomes NaN. A separate batch also fails with a matrix multiplication shape error. Which debugging sequence is most disciplined?",
    "options": [
      "Increase the learning rate, then reshape tensors until the loss decreases.",
      "Inspect tensor shapes at the failing operation, verify the forward dimensions, measure gradient norms, then test gradient clipping or a smaller learning rate if the gradient explosion is confirmed.",
      "Disable autograd globally and continue training.",
      "Convert every tensor to a one-dimensional vector before every layer."
    ],
    "correctAnswer": "Inspect tensor shapes at the failing operation, verify the forward dimensions, measure gradient norms, then test gradient clipping or a smaller learning rate if the gradient explosion is confirmed.",
    "hint": "Separate two failure classes: an immediate shape-contract violation and an optimization instability.",
    "explanation": "A matrix multiplication error is a deterministic shape-contract problem and should be fixed by tracing expected dimensions through the forward pass. Exploding gradients are a training-dynamics problem; gradient norms provide evidence, and clipping or learning-rate changes can be tested after confirming the mechanism. Raising the learning rate can worsen instability. Disabling autograd prevents the required gradient computation. Blindly flattening tensors can destroy the semantics expected by convolutional, recurrent, or attention layers."
  },
  {
    "id": "05-CV-001",
    "topic": "Computer Vision — convolution arithmetic",
    "questionText": "An image tensor has spatial size $32\\times32$. A 2D convolution uses kernel size $5$, stride $1$, and no padding. What spatial size should the output have?",
    "options": [
      "$32\\times32$",
      "$30\\times30$",
      "$28\\times28$",
      "$36\\times36$"
    ],
    "correctAnswer": "$28\\times28$",
    "hint": "Use $\\text{out}=\\left\\lfloor\\frac{n+2p-d(k-1)-1}{s}+1\\right\\rfloor$ with $p=0$, $d=1$, and $s=1$.",
    "explanation": "For one spatial dimension, the convolution output is $\\lfloor(n+2p-d(k-1)-1)/s+1\\rfloor$. Substituting n=32, p=0, d=1, k=5, and s=1 gives 28. Because the kernel cannot extend outside the image when there is no padding, each spatial dimension shrinks from 32 to 28."
  },
  {
    "id": "05-CV-002",
    "topic": "Computer Vision — IoU and object detection",
    "questionText": "A detector predicts a bounding box with intersection area $40$ and union area $100$ relative to the ground-truth box. What is the IoU, and what does a higher IoU generally indicate?",
    "options": [
      "IoU = 0.4; the predicted box overlaps the ground truth by a larger fraction of their union.",
      "IoU = 0.6; the detector has 60% classification accuracy.",
      "IoU = 2.5; the prediction is larger than the ground truth.",
      "IoU = 40; the detector has 40% recall."
    ],
    "correctAnswer": "IoU = 0.4; the predicted box overlaps the ground truth by a larger fraction of their union.",
    "hint": "IoU is intersection divided by union, not intersection divided by ground-truth area.",
    "explanation": "Intersection over Union is $\\mathrm{IoU}=\\frac{|A\\cap B|}{|A\\cup B|}$. With intersection 40 and union 100, IoU is 0.4. Higher IoU generally means tighter spatial overlap between prediction and ground truth. It is not classification accuracy or recall. IoU is bounded between 0 and 1 for ordinary bounding boxes."
  },
  {
    "id": "14-AG-001",
    "topic": "Agent Engineering — infinite loops and termination",
    "questionText": "An agent repeatedly calls a search tool because each tool result contains another possible search action. There is no explicit completion condition. Which control is the most important architectural fix?",
    "options": [
      "Give the model a longer context window and let it continue.",
      "Add explicit termination conditions such as a step/time budget, progress criterion, and terminal states enforced by the harness.",
      "Increase temperature so the agent explores more paths.",
      "Remove all tool error messages from the context."
    ],
    "correctAnswer": "Add explicit termination conditions such as a step/time budget, progress criterion, and terminal states enforced by the harness.",
    "hint": "Do not rely on the model voluntarily deciding to stop.",
    "explanation": "An agent loop needs an externally enforced termination contract. Useful controls include maximum steps, wall-clock budgets, tool-call budgets, explicit terminal states, and checks that the system is making measurable progress. A larger context window does not create a termination condition. Higher temperature adds variability rather than safety. Hiding errors removes useful state and can make diagnosis harder."
  },
  {
    "id": "14-AG-002",
    "topic": "Agent Engineering — tool-calling execution states and planning",
    "questionText": "An agent must call a payment API, wait for the result, inspect whether the payment succeeded, and only then send a confirmation email. Which execution model best represents the dependency?",
    "options": [
      "Fire both tool calls concurrently because the model can infer the dependency later.",
      "Represent the workflow as explicit states such as PLAN → AUTHORIZE_PAYMENT → OBSERVE_RESULT → SEND_CONFIRMATION, with the email transition allowed only after a successful payment observation.",
      "Ask the model to emit both tool calls in one unconstrained text block.",
      "Retry the email until the payment eventually succeeds."
    ],
    "correctAnswer": "Represent the workflow as explicit states such as PLAN → AUTHORIZE_PAYMENT → OBSERVE_RESULT → SEND_CONFIRMATION, with the email transition allowed only after a successful payment observation.",
    "hint": "The second side effect has a hard prerequisite: a successful observation of the first side effect.",
    "explanation": "The payment result is a dependency for sending the confirmation. An explicit execution state machine makes that dependency enforceable instead of leaving it to model reasoning. Concurrent execution could send an email before payment succeeds. A free-form block does not provide a reliable execution boundary. Retrying the email cannot make an unsuccessful payment succeed and may create duplicate notifications. The harness should own state transitions and authorization for side effects."
  },
  {
    "id": "15-REL-001",
    "topic": "AI Systems & Reliability — concurrency bottlenecks",
    "questionText": "An AI service accepts 100 requests concurrently, but all requests serialize behind one shared database connection pool of size 5. Increasing worker count does not improve throughput and increases queueing. What should the engineer inspect first?",
    "options": [
      "The model temperature.",
      "The shared resource's capacity, connection acquisition latency, queue depth, and whether the workload is actually parallelizable.",
      "The UI font size.",
      "The number of Git branches."
    ],
    "correctAnswer": "The shared resource's capacity, connection acquisition latency, queue depth, and whether the workload is actually parallelizable.",
    "hint": "Find the narrowest shared resource that limits progress rather than increasing parallelism blindly.",
    "explanation": "Throughput is constrained by bottlenecks. If 100 requests contend for five database connections, additional workers can increase contention and waiting without increasing database service capacity. Inspect connection wait time, pool utilization, queue depth, query latency, and whether requests can be batched or made independent. Model temperature and UI styling do not explain this resource bottleneck."
  },
  {
    "id": "15-REL-002",
    "topic": "AI Systems & Reliability — transient failures and fallbacks",
    "questionText": "A model provider intermittently returns HTTP 503 during short upstream outages. The operation is read-only and safe to retry, but an alternate provider has different output characteristics. Which fallback design is safest?",
    "options": [
      "Retry forever against the primary provider.",
      "Use bounded exponential backoff with jitter, a maximum retry budget, then invoke the alternate provider under an explicit fallback policy and record which path was taken.",
      "Immediately switch providers on every non-200 response without recording the event.",
      "Retry the request concurrently against ten providers for every call."
    ],
    "correctAnswer": "Use bounded exponential backoff with jitter, a maximum retry budget, then invoke the alternate provider under an explicit fallback policy and record which path was taken.",
    "hint": "A transient failure needs bounded recovery; a fallback also changes system behavior and should be observable.",
    "explanation": "HTTP 503 can represent temporary upstream unavailability, so bounded retries with exponential backoff and jitter can recover without creating a synchronized retry storm. A maximum retry budget prevents unbounded latency and load amplification. If retries fail, an alternate provider can be used under a defined policy, but the system should record the fallback because provider changes can affect latency, output behavior, cost, and evaluation results. Infinite retries and uncontrolled fan-out amplify failures; immediate provider switching discards potentially recoverable primary requests and hides the incident."
  }
];
