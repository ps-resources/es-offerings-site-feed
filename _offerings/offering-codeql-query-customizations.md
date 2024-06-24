---
layout: page
title: CodeQL Query Customizations
description: Commision GitHub to customize the existing CodeQL queries to provide better results for your organization.
parameterized_name: codeql-query-customizations
tag: TODO
category: Security
---

### Overview

CodeQL ships with hundreds of queries out of the box for each language and includes comprehensive support for finding vulnerabilities in code using the most common and popular libraries and frameworks. However, if you use libraries that are internal to your organization, less popular libraries which are not covered by default, or use uncommon code patterns, you may find CodeQL misses results (false negatives) or produces incorrect results (false positives).

In this engagement we will collaborate with you to extend or modify the existing queries to reduce false positives or false negatives.

You will be able to specify some number of (potentially internal) extension items (sources/sinks/sanitizers), and have a CodeQL expert deliver models that will allow pre-existing CodeQL queries to return customized results. Options for extension items are grouped within different languages supported by CodeQL (Java, JavaScript/TypeScript, Go, C#, Python, C/C++, Ruby). For each requested customization, example code will be provided, or, for non-internal extensions, open source vulnerabilities or false positive examples that you wish to target.

### Offering level

N/A

### Target Audience

- Product/Application Security team
- Security architecture team
- Development/Engineering/QA testing team
- SecDevOps sponsor
- CTO or designated representative
- CISO or designated representative

### Key features and benefits

- Main deliverable of custom models for extension items and custom CodeQL bundle containing custom models.
- Example CodeQL classes and predicates for future CodeQL learning efforts.
- Example custom CodeQL bundle mechanism.

### Syllabus

1. A pre-sales scoping session to define each customization to be implemented and determine an estimated time-to-implement for each customization based on its assigned difficulty. To do the estimate we require one or more of the following be supplied:
   - A security vulnerability/code pattern/false positive result that they want to find/omit with CodeQL
   - A list of sources/sinks/sanitizers to be modelled
   - A test setup (code examples) to validate that the customization improves analysis as expected
2. A post-sales kick-off session to clarify scope and remediate any missing dependencies, such as access to proprietary code
3. Development of the customizations, using an iterative process:
   - Write CodeQL sources/sinks/sanitizers
   - Deliver the customizations with deployment instructions
   - Review feedback on customization impact (reduced false positives/negatives) via issues and a project board
   - Refine sources/sinks/sanitizers if impact is not as expected
4. A final review and Q&A session

### Learning outcomes/business outcomes

- sources/sinks/sanitizers that allow pre-existing queries to detect the example vulnerabilities or omit the example false positives
- Participants will be able to apply the delivered bundle to generate improved results

### Prerequisites

- A list of sources/sinks/sanitizers has been gathered that you wish to have modelled. In the case where an entire API is requested there must be some set of scope - in terms of - sources/sinks/sanitizers that define sufficiently implemented
- Example code has been gathered where CodeQL analysis (either via CLI or in Actions) has run as a baseline for the results to be improved
- A CodeQL Analysis Engineer has evaluated the feasibility of the proposed technical scope of the customization to be developed as well as CodeQL support for the language(s) to be targeted. Customizations can only be developed to model problems of a clear and reasonably defined scope.