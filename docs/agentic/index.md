---
layout: agentic
title: Agentic Framework
description: A powerful framework for building AI agents
---

# Agentic Framework

Agentic is a powerful framework for building AI agents that can interact with tools, maintain conversation history, and execute complex tasks.

<div style="width: 100%; height: 600px; margin: 20px 0;">
<iframe src="https://link.excalidraw.com/readonly/Fkc3umVB0GohLoVTnxtE" width="100%" height="100%" style="border: none;"></iframe>
</div>

## Overview



The Agentic Framework provides a flexible and powerful foundation for building AI agents that can:
- Execute complex tasks using tools
- Maintain conversation history
- Integrate with various LLM providers
- Handle infrastructure automation
- Manage configuration and secrets

## Quick Start

```bash
# Install Agentic
pip install agentic

# Set up your configuration
export AGENTIC_API_KEY=your-api-key

# Create your first agent
from agentic import Agent

agent = Agent()
agent.run("Hello, world!")
```

## Documentation Structure

- **[Overview](overview.md)** - Architecture and key concepts
- **[Setup Guide](setup.md)** - Installation and configuration
- **[API Reference](api.md)** - Detailed API documentation
- **[Development Guide](development.md)** - Contributing and development

## Key Features

### Tool-based Architecture
Build and integrate custom tools with a simple interface:
```python
from agentic import Tool

class MyTool(Tool):
    def execute(self, **kwargs):
        return "Tool result"
```

### Conversation Management
Built-in support for maintaining context and history:
```python
agent.chat("What's the weather?")
agent.chat("Should I bring an umbrella?")  # Maintains context
```

### Cloud Integration
Seamless integration with cloud services:
```python
from agentic.cloud import GCPIntegration

gcp = GCPIntegration()
gcp.setup_project("my-project")
```
