---
layout: agentic
title: Style Guide
description: Coding standards and style guidelines
permalink: /docs/agentic/style-guide/
nav_order: 8
category: Documentation
---

# Agentic Framework Style Guide

## Class Organization

### 1. Class Structure
```python
class ExampleClass(BaseModel):
    """Clear class description"""

    # -*- Core settings
    # Clear field description
    field_name: Type = Field(default, description="Description")

    # -*- Group settings
    # Another field description
    another_field: Type = Field(...)

    # -*- Pydantic settings
    model_config = ConfigDict(...)
```

### 2. Field Organization

Fields should be organized in logical groups with clear markers:
- Use `# -*-` to mark section headers
- Group related fields together
- Add descriptive comments for each field
- Use consistent naming

Example groups:
```python
# -*- Core settings
# Basic configuration

# -*- User settings
# User-related fields

# -*- Session settings
# Session management

# -*- Memory settings
# Memory configuration

# -*- Knowledge settings
# Knowledge base configuration

# -*- Tool settings
# Tool-related settings

# -*- Response settings
# Output configuration

# -*- System settings
# System-level configuration

# -*- Pydantic settings
# Model configuration
```

### 3. Field Documentation

Each field should have:
- A clear, one-line description comment
- Appropriate type hints
- Pydantic Field with relevant parameters
- Aliases when needed for backward compatibility

Example:
```python
# Model to use for this agent
model: Optional[BaseLLM] = Field(
    None,
    alias="provider",
    description="The LLM provider to use"
)
```

### 4. Method Organization

Methods should be grouped by functionality:
- Properties first
- Core methods next
- Helper methods last
- Clear docstrings with parameters and return types

Example:
```python
@property
def identifier(self) -> str:
    """Get unique identifier for this instance"""
    return str(self.id)

def core_method(self, param: str) -> Result:
    """Core functionality with clear description
    
    Args:
        param: Parameter description
        
    Returns:
        Description of return value
    """
    pass

def _helper_method(self) -> None:
    """Internal helper method"""
    pass
```

## Code Style

### 1. Imports
Organize imports in groups:
```python
# Standard library
from typing import Optional, List
from datetime import datetime

# Third-party
from pydantic import BaseModel, Field

# Local
from .base import BaseClass
from ..utils import helper
```

### 2. Type Hints
- Always use type hints
- Use Optional[] for nullable fields
- Use Union[] for multiple types
- Import types from typing module

### 3. Documentation
- Clear module docstrings
- Class docstrings with examples
- Method docstrings with args/returns
- Inline comments for complex logic

### 4. Error Handling
- Use custom exceptions
- Provide clear error messages
- Handle edge cases explicitly
- Log errors appropriately

## Best Practices

1. **Consistency**: Follow these patterns across all classes
2. **Readability**: Clear names and organization
3. **Documentation**: Comprehensive but concise
4. **Type Safety**: Strong typing throughout
5. **Error Handling**: Robust and informative

## Example Implementation

```python
"""Module description"""

from typing import Optional, Dict, Any
from pydantic import BaseModel, Field

class ExampleComponent(BaseModel):
    """Component description with example usage"""

    # -*- Core settings
    # Primary identifier for this component
    id: str = Field(..., description="Unique identifier")
    # Name of the component
    name: Optional[str] = None

    # -*- Configuration settings
    # Configuration dictionary
    config: Dict[str, Any] = Field(
        default_factory=dict,
        description="Component configuration"
    )

    # -*- Pydantic settings
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        populate_by_name=True
    )

    def core_method(self) -> None:
        """Core functionality description"""
        pass

    def _helper(self) -> None:
        """Internal helper method"""
        pass
```
