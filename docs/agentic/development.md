---
layout: agentic
title: Development Guide
description: Contributing and development guidelines for the Agentic Framework
---

# Development Guide

## Setup Development Environment

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agentic.git
cd agentic
```

2. Install dependencies:
```bash
pip install -e .
```

3. Set up GCP and Secret Manager:
Follow the [GCP and Terraform Setup Guide](setup).

## Running Tests

Run all tests:
```bash
pytest
```

Run specific test files:
```bash
pytest tests/secrets/  # Run only secrets tests
```

Run with coverage:
```bash
pytest --cov=agentic
```

## Contributing

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and write tests

3. Run tests and ensure they pass:
```bash
pytest
```

4. Commit your changes:
```bash
./scripts/commit.sh "feat: description of your changes"
```

5. Create a pull request

## Code Style

- Follow PEP 8 guidelines
- Use type hints
- Write docstrings for all public functions and classes
- Keep functions focused and small
- Write tests for new features

## Project Structure

```
agentic/
├── agent/          # Agent implementation
├── llm/            # LLM providers
├── secrets/        # Secrets management
└── tools/          # Built-in tools

tests/              # Test files
docs/               # Documentation
scripts/            # Utility scripts
terraform/          # Infrastructure as code
