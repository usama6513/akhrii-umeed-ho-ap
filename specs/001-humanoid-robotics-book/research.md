# Research & Decisions: AI-Driven Humanoid Robotics Book

This document summarizes the key architectural decisions and research approach for the book project. All "unknowns" from the initial planning phase have been resolved through these decisions.

## Research Approach

A research-concurrent strategy will be employed during the writing process to ensure accuracy and relevance.

- **Priority of Sources**:
  1.  **Official Documentation**: Primary reference for all technologies (ROS 2, Gazebo, NVIDIA Isaac).
  2.  **GitHub Repositories**: Source for practical code examples and implementation patterns.
  3.  **Academic Papers (IEEE, arXiv)**: Used for theoretical foundations and advanced concepts.
  4.  **Community Forums (e.g., ROS Discourse)**: Consulted for practical, real-world troubleshooting and solutions.

- **Process**:
  - All code will be tested concurrently while writing to verify correctness before publication.
  - All technology versions will be explicitly documented to prevent compatibility issues.

- **Citation Style**:
  - Inline links will be used for technical documentation.
  - Footnotes will be used for academic papers.
  - Code comments will reference specific GitHub repositories or files.

## Key Decisions (Phase 0 Resolutions)

The following key decisions have been made, resolving all initial technical context questions.

### Decision 1: ROS 2 Distribution
- **Choice**: **Humble Hawksbill (LTS)**
- **Rationale**: Humble is the most recent Long-Term Support (LTS) release, offering stability and support until 2027. This is critical for a book intended to have a long shelf-life.
- **Alternatives Considered**: Rolling Ridley (latest features, but unstable) or Iron Irwini (interim release). Humble provides the best balance of modern features and stability for an educational context.

### Decision 2: Simulation Platform
- **Choice**: **Gazebo Fortress + Unity (Hybrid Approach)**
- **Rationale**: Gazebo provides robust, open-source physics simulation, which is a core requirement. Unity is used for its high-fidelity graphics and photorealistic rendering capabilities, which are essential for the NVIDIA Isaac Sim integration and for creating visually appealing demonstrations.
- **Alternatives Considered**: Using only Gazebo (less visual realism) or only Unity (more complex ROS integration). The hybrid approach provides the best of both worlds.

### Decision 3: NVIDIA Isaac Access Strategy
- **Choice**: **Support for Cloud, Local, and Docker-based setups.**
- **Rationale**: To ensure the book is accessible to the widest possible audience, regardless of their local hardware capabilities. This lowers the barrier to entry.
- **Alternatives Considered**: Mandating a specific high-end GPU (limits audience) or using cloud-only (introduces costs and latency).

### Decision 4: Primary Language
- **Choice**: **Python primary, with C++ as optional.**
- **Rationale**: The target audience consists heavily of software developers transitioning from AI and web development, where Python is dominant. C++ will be included where performance is critical, but Python will be the default for all core examples.
- **Alternatives Considered**: C++ only (steeper learning curve for the target audience).

### Decision 5: Humanoid Model
- **Choice**: **Custom URDF model, referencing the NASA Valkyrie for advanced concepts.**
- **Rationale**: A custom, simplified URDF allows for clear, step-by-step instruction on robot modeling. The well-documented NASA Valkyrie model will be used for more advanced simulation examples where a complex, real-world model is beneficial.
- **Alternatives Considered**: Using a single, complex model from the start (too overwhelming for early chapters).

### Decision 6: LLM Integration
- **Choice**: **Multi-provider examples (OpenAI, Llama, Claude).**
- **Rationale**: The LLM landscape is volatile. Providing examples for multiple major providers gives readers flexibility and protects the book's content from becoming obsolete if one provider changes its API or pricing model.
- **Alternatives Considered**: Tying the project to a single LLM (risky and less flexible).
