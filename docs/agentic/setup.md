---
layout: agentic
title: Setup Guide
description: Installation and configuration guide for the Agentic Framework
---

# GCP and Terraform Setup Guide

This guide explains how to set up Google Cloud Platform (GCP) resources and Terraform for secure secrets management.

## Prerequisites

- Google Cloud Platform account
- `gcloud` CLI installed
- Terraform installed

## Setup Steps

### 1. Create State Bucket

Run the following script to set up the GCP state bucket and enable necessary APIs:

```bash
./scripts/01_create_state_bucket.sh
```

This script will:
- Create a GCS bucket for Terraform state
- Enable required GCP APIs
- Configure environment variables

### 2. Setup Terraform Permissions

Run the following script to create and configure the Terraform service account:

```bash
./scripts/02_setup_terraform_permissions.sh
```

This script will:
- Create a service account for Terraform
- Grant necessary permissions (Editor and IAM Admin roles)
- Generate and save credentials

### 3. Initialize Terraform

Run the following script to initialize Terraform with the service account:

```bash
./scripts/03_init_terraform.sh
```

This script will:
- Initialize Terraform with GCS backend
- Create `terraform.tfvars` from environment variables

### 4. Apply Terraform Configuration

Apply the Terraform configuration to set up Secret Manager:

```bash
cd terraform
terraform plan    # Review changes
terraform apply   # Apply changes
```

This will:
- Enable Secret Manager API
- Create a dedicated service account for secrets
- Generate and save credentials

## File Structure

```
├── scripts/
│   ├── 01_create_state_bucket.sh
│   ├── 02_setup_terraform_permissions.sh
│   └── 03_init_terraform.sh
└── terraform/
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    └── terraform.tfvars.example
```

## Security Notes

- All service account keys are stored in `~/.config/gcloud/` with 0600 permissions
- Sensitive files are added to `.gitignore`
- Service accounts use least privilege principle
