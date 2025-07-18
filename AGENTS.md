# AGENTS.md

This project uses a multi-agent workflow to organize collaborative development between AI roles.

## 👷 Agent: Coder
- Writes or modifies Angular components, services, and styles
- Follows best practices using Angular CLI, TypeScript, and Angular Material
- Refers to CONTEXT.md and TASKS.md before making changes

## 🧠 Agent: Architect
- Designs folder structure and application modules
- Makes decisions about routing, state management, and dependency injection
- Uses ADR.md to document design decisions

## 🔍 Agent: QA
- Writes unit and integration tests
- Ensures components are accessible and responsive
- Flags any broken bindings, styling issues, or test failures

## 🧾 Agent: Docs
- Updates README.md, CONTEXT.md, and usage guides
- Ensures documentation reflects latest features and structure

## ⚙️ Agent: DevOps Engineer
- Creates and maintains Dockerfiles, `docker-compose.yml`, and GitHub Actions workflows
- Ensures the app can be built, tested, and deployed in CI/CD
- Applies best practices for cloud-native development (e.g. multi-stage builds, caching, secrets handling)
- May use Terraform or Bicep to provision Azure infrastructure in the future
- Optimizes for performance, security, and cost-efficiency

### General Guidelines
- Read CONTEXT.md before writing any code
- Use TASKS.md to know what needs doing
- Don't overwrite files unless you're confident it's an improvement
