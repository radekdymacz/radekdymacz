---
layout: agentic
title: Agentic Framework
description: A powerful framework for building AI agents
image: /images/agentic-logo.png
---

# Agentic Framework

Agentic is a powerful framework for building AI agents that can interact with tools, maintain conversation history, and execute complex tasks. Built with a focus on modularity and extensibility, it provides a robust foundation for creating sophisticated AI applications.

<div style="width: 100%; height: 600px; margin: 20px 0;">
<iframe src="https://link.excalidraw.com/readonly/Fkc3umVB0GohLoVTnxtE" width="100%" height="100%" style="border: none;"></iframe>
</div>

## Overview

The Agentic Framework is designed to simplify the development of AI agents while providing powerful capabilities:

### Core Features

- **Tool-based Architecture**: Build and integrate custom tools with a simple, consistent interface
- **Conversation Management**: Built-in support for maintaining context and history
- **LLM Integration**: First-class support for modern language models
- **Infrastructure Automation**: Seamless cloud integration and deployment
- **Security**: Built-in secrets management and secure configuration

### Key Benefits

- **Rapid Development**: Get started quickly with intuitive APIs and comprehensive documentation
- **Extensibility**: Easy to extend with custom tools and integrations
- **Cloud-Native**: Built for modern cloud environments with infrastructure as code
- **Type Safety**: Strong typing throughout for better development experience
- **Production Ready**: Battle-tested in real-world applications

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

- **[Overview](overview)** - Architecture and key concepts
- **[Setup Guide](setup)** - Installation and configuration
- **[API Reference](api)** - Detailed API documentation
- **[Development Guide](development)** - Contributing and development

## Key Features

### Tool-based Architecture
Build and integrate custom tools with a simple interface:
```python
from agentic import Tool

class MyTool(Tool):
    """Custom tool for specific tasks"""
    def execute(self, **kwargs):
        return "Tool result"

# Register with agent
agent.register_tool(MyTool())
```

### Conversation Management
Built-in support for maintaining context and history:
```python
# Conversations maintain context
agent.chat("What's the weather?")
agent.chat("Should I bring an umbrella?")  # Understands context

# Access history
history = agent.get_history()
```

### Cloud Integration
Seamless integration with cloud services:
```python
from agentic.cloud import GCPIntegration

# Initialize cloud integration
gcp = GCPIntegration()
gcp.setup_project("my-project")

# Use cloud services
secret = gcp.get_secret("api-key")
```

## Next Steps

1. Follow the [Setup Guide](setup) to install and configure Agentic
2. Check out the [Overview](overview) to understand the architecture
3. Read the [Development Guide](development) to start contributing
4. Browse the [API Reference](api) for detailed documentation
