// Single source of truth for the portfolio content.
// Everything here mirrors the résumé (public/Haylemeskel_Bantiyerga_Resume.pdf).
// Edit this file to update the site; the pages only render it.

export const profile = {
  name: "Haylemeskel Bantiyerga",
  firstName: "Haylemeskel",
  lastName: "Bantiyerga",
  title: "Software engineer and AI engineer",
  location: "Washington, DC",
  email: "bantiyerga27@gmail.com",
  resumeUrl: "/Haylemeskel_Bantiyerga_Resume.pdf",
  availability:
    "Open to software and AI engineering roles, and to LLM training and evaluation projects.",
  links: {
    github: "https://github.com/Hayle-HB",
    linkedin: "https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/",
    twitter: "https://twitter.com/Hayle_HB",
  },
  intro:
    "I build backend, distributed and cloud systems, most recently production AI services handling 100K+ requests a month. I also train and evaluate large language models and write Terminal-Bench tasks that test coding agents.",
  summary:
    "Software engineer with 5+ years of experience building scalable full-stack, backend, distributed and cloud applications. My background covers system design, scalability, reliability, CI/CD and performance work, including production services handling 50K+ requests a day, and AI-powered applications built on LLM workflows.",
};

// Text inside [[double brackets]] is rendered as a highlighted metric.
export const experience = [
  {
    role: "AI Full Stack Engineer",
    company: "Hahu Cloud",
    location: "Addis Ababa, Ethiopia",
    start: "Nov 2023",
    end: "Jun 2025",
    points: [
      "Supported [[100K+ monthly AI requests]] by building production AI application services and APIs with Python, FastAPI, SQL/NoSQL and microservices, integrating LLMs, structured outputs and enterprise APIs and data sources into scalable workflows.",
      "Reduced AI workflow latency by [[35%]] by engineering asynchronous, multi-step processing pipelines with RabbitMQ, Redis, Celery, Docker and Kubernetes, enabling tool calling, context management and reliable distributed execution.",
      "Cut deployment effort by [[60%]] by implementing CI/CD, automated testing, authentication, monitoring, observability and fault-tolerant infrastructure across AI services.",
    ],
    stack: ["Python", "FastAPI", "RabbitMQ", "Redis", "Celery", "Docker", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    company: "Telebirr",
    location: "Addis Ababa, Ethiopia",
    start: "Jul 2020",
    end: "Oct 2023",
    points: [
      "Supported [[100K+ monthly AI interactions]] by building full-stack AI services with TypeScript, React, Next.js, Python, FastAPI and SQL/NoSQL, integrating LLM workflows with enterprise data.",
      "Reduced AI workflow latency by [[35%]] by engineering agentic, asynchronous workflows with RabbitMQ, Redis, Celery, Docker and Kubernetes, enabling tool calling, context management and structured outputs.",
      "Cut deployment effort by [[60%]] by implementing CI/CD, automated testing, authentication, monitoring, logging and observability, improving reliability, security and production readiness.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Python", "FastAPI", "Kubernetes"],
  },
];

export const skills = [
  {
    group: "AI engineering",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Vercel AI SDK",
      "AI agents and agentic workflows",
      "tool and function calling",
      "embeddings and vector search",
      "prompt and context engineering",
      "structured outputs",
      "AI evaluation",
      "LLM observability",
    ],
  },
  {
    group: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "C#", "C++", "Java", "Go", "SQL", "HTML/CSS", "Bash"],
  },
  {
    group: "Backend and distributed systems",
    items: [
      "ASP.NET Core",
      "FastAPI",
      "REST APIs",
      "microservices",
      "system design",
      "concurrency",
      "RabbitMQ",
      "Redis",
      "caching",
    ],
  },
  {
    group: "Cloud and infrastructure",
    items: ["AWS (S3, Lambda, ECS)", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    group: "Foundations",
    items: [
      "data structures and algorithms",
      "operating systems",
      "networking",
      "database systems",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Software Engineering",
  school: "Addis Ababa Science and Technology University",
  location: "Addis Ababa, Ethiopia",
  coursework: [
    "distributed systems",
    "software architecture",
    "database systems",
    "computer networks",
    "algorithms and data structures",
    "artificial intelligence",
    "web application development",
  ],
};

export const awards = [
  {
    title: "Global GAIAthon Hackathon winner",
    prize: "$3,000 prize",
    org: "Edenway Foundation",
    location: "Accra, Ghana",
    date: "July 28, 2025",
    description:
      "Engineered a high-throughput distributed data-processing architecture in C++ and Python that processes [[10K+ IoT sensor data points a minute]] with sub-second stream-processing latency, enabling near-real-time AI insights while keeping compute costs down.",
  },
];

// ---------------------------------------------------------------------------
// LLM training, evaluation and Terminal-Bench work
// ---------------------------------------------------------------------------

export const aiWork = {
  heading: "Training and evaluating language models",
  intro:
    "Alongside product engineering, I work on the data side of AI: writing the examples models learn from, grading what they produce, and building Terminal-Bench tasks that test whether coding agents can finish real work in a shell.",
  roles: [
    {
      id: "trainer",
      title: "LLM trainer",
      body: "I write prompts, reference answers and step-by-step solutions for coding and engineering problems, and rewrite weak model responses into ones worth learning from. I work in the areas I know from production: Python, TypeScript, Bash, backend services and distributed systems.",
      tasks: [
        "Supervised fine-tuning data",
        "Reference solutions and explanations",
        "Response rewrites",
        "Multi-turn coding conversations",
      ],
    },
    {
      id: "evaluator",
      title: "LLM evaluator",
      body: "I score model responses against detailed rubrics, compare outputs side by side, run the code to confirm it works, and write justifications another reviewer can audit. I look for the quiet failures: a missed edge case, an invented API, a test that passes for the wrong reason.",
      tasks: [
        "Rubric-based grading",
        "Side-by-side preference ranking",
        "Code execution and fact checks",
        "Written critiques",
      ],
    },
    {
      id: "terminal-bench",
      title: "Terminal-Bench task creator",
      body: "I design containerized tasks an AI agent has to solve from the command line, each with an instruction, an environment, a reference solution and tests that decide pass or fail. Tasks go through staged review and are tuned to be hard for frontier agents without being ambiguous.",
      tasks: [
        "Task design and environment setup",
        "Reference solutions",
        "Pytest verifiers",
        "Difficulty calibration",
      ],
    },
  ],
  checklist: [
    "The reference solution passes in a clean container.",
    "An empty attempt fails every test.",
    "Tests check the end state, so any valid approach passes.",
    "The instruction is precise and gives nothing away.",
    "Difficulty holds up against frontier agents.",
  ],
};

// An illustrative, simplified Terminal-Bench task used by the interactive
// "anatomy of a task" panel. It is an example, not a published task.
export const sampleTask = {
  name: "fix-event-pipeline",
  files: [
    {
      path: "instruction.md",
      label: "Instruction",
      explain:
        "The task exactly as the agent sees it: one goal, the constraints, and what done means. It describes the outcome and never hints at the fix.",
      code: `# Fix the event pipeline

The service in /app reads events from
/data/events.jsonl and writes totals to
/app/out/summary.json.

Under concurrent load some events are
counted twice and others are dropped.
Fix the service so every event is
counted exactly once.

Do not modify anything in /data.`,
    },
    {
      path: "task.toml",
      label: "Configuration",
      explain:
        "Metadata and limits: difficulty, category, how long the agent gets, and the resources its container is allowed.",
      code: `version = "1.0"

[metadata]
difficulty = "hard"
category = "debugging"
tags = ["python", "concurrency"]

[agent]
timeout_sec = 1800

[environment]
cpus = 2
memory_mb = 4096`,
    },
    {
      path: "environment/Dockerfile",
      label: "Environment",
      explain:
        "A reproducible container with exactly the tools, files and broken state the agent starts from. Nothing extra that would make the task easier.",
      code: `FROM python:3.12-slim

WORKDIR /app
COPY app/ /app/
COPY data/ /data/

RUN pip install --no-cache-dir -r requirements.txt`,
    },
    {
      path: "solution/solve.sh",
      label: "Reference solution",
      explain:
        "My own solution, run in the same container to prove the task can be solved. Agents never see it.",
      code: `#!/bin/bash
set -euo pipefail

# Swap the unsynchronized counter for an
# idempotent write keyed by event id.
python /solution/patch_worker.py /app/worker.py

python /app/run.py --workers 8`,
    },
    {
      path: "tests/test_outputs.py",
      label: "Tests",
      explain:
        "Pytest checks on the final state of the container. They verify the result, not the path taken, so any correct approach passes and shortcuts fail.",
      code: `import json, hashlib

SUMMARY = "/app/out/summary.json"
EVENTS = "/data/events.jsonl"

def test_every_event_counted_once():
    s = json.load(open(SUMMARY))
    assert s["total"] == 10_000
    assert s["duplicates"] == 0

def test_input_untouched():
    data = open(EVENTS, "rb").read()
    digest = hashlib.sha256(data).hexdigest()
    assert digest == EXPECTED_SHA256`,
    },
  ],
};

// Joins a list into one sentence-cased line: "Alpha, beta, gamma".
export const listText = (items) => {
  const text = items.join(", ");
  return text.charAt(0).toUpperCase() + text.slice(1);
};
