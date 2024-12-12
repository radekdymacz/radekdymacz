---
layout: agentic
title: API Documentation
description: API Documentation documentation for Agentic Framework
---

# API Documentation

## Secrets Management

### GCPSecretManager

```python
from agentic.secrets import GCPSecretManager

# Initialize the manager
secrets = GCPSecretManager()

# Store a secret
secrets.store("api-key", "your-secret-value")

# Retrieve a secret
value = secrets.get("api-key")

# List all secrets
all_secrets = secrets.list()

# Delete a secret
secrets.delete("api-key")
```

## Agent

### ChatAgent

```python
from agentic.agent import ChatAgent

# Create an agent
agent = ChatAgent(
    name="Assistant",
    system_prompt="You are a helpful AI assistant.",
    api_key="your-api-key"
)

# Chat with the agent
response = agent.chat("Hello!")
```

For more examples and detailed API reference, see the docstrings in the code.
