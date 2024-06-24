---
layout: page
title: GitHub Advanced Security - Security Team Training
description: Supports those who are responsible for reviewing, monitoring and driving remediation of security results across an enterprise.
parameterized_name: ghas-security-team-training
tag: TODO
category: Security
---

## Overview

This training session supports those who are responsible for reviewing, monitoring and driving remediation of security results across an enterprise. It explores how access can be granted security results, how enablement can be tracked, how results can be reviewed across entire enterprises and how the webhooks and APIs can be used to create custom workflows, integrations and reporting.

## Offering level

Intermediate [200]

## Target Audience

- Product Security teams
- DevSecOps teams

## Key features and benefits

- We will review the basics of GitHub Advanced Security and its component features (Code Scanning, Secret Scanning and Dependabot), and how access can be granted cross-organization to those results.
- Exploration of in-built reporting options (Security Overview per repository, per organization and per enterprise).
- Discussion of third-party options available for reporting (including Splunk).
- Exploration of APIs to enable roll-your-own workflows, and a review of some of the examples we provide.

## Engagement schedule

This engagement will consist of one session of 2 hours face-to-face time. Maximum session size is typically 15 people.

## Syllabus

- Review of Advanced Security features
- Granting access to configure Advanced Security and view results
  - Permissions required to view results on repositories
  - Security manager role:
    - What permissions the security manager role grants
    - How to setup teams, add members and make the team a security manager team.
  - Custom roles
    - Using custom roles with GitHub Advanced Security permissions to create custom
- Reviewing alerts
  - Reviewing alerts on repository level
    - Code Scanning Alerts - security severity search, tag search (to view by CWE), resolution search, free text search
    - Secret Scanning Alerts - secret type, provider
    - Dependabot Alerts
  - Security Overview - reviewing results at an organization level
    - Using the Security Overview to answer common questions such as:
      - "How widely are the GHAS features deployed?"
      - "Which repositories currently have most risk?"
      - "Which repositories have more 100 Code Scanning alerts?"
  - Code Scanning Alerts at an organization level
    - Limitations vs repo-level (no tag filtering)
    - Workarounds using free text search
  - Secret Scanning Alerts at an organization level
  - Dependabot Alerts at an organization level - CVE filtering using free text search
  - Dependabot Insights at an organization level
  - Enterprise Security Overview [Beta, GitHub.com only]
  - Splunk integration (demo the dashboard)
- Monitoring and responding to Advanced Security alerts
  - Setting up webhooks - demo using ngrok
  - Using the APIs
    - Demo of fetching results for an organization
      - Talk through a more sophisticated example (<https://github.com/GeekMasher/advanced-security-compliance>)
  - Creating issues from alerts
    - GitHub issues
    - JIRA integration (<https://github.com/github/ghas-jira-integration>)

## Learning outcomes/business outcomes

After completing this workshop participants will be able to:

- Understand how to enable access to view  the key components of GitHub Advanced Security (Code Scanning, Secret Scanning and Dependabot).
- Understand the options available for reporting, monitoring and responding to Advanced Security alerts.
- Understand how to use webhooks and APIs to implement common security integration and reporting workflows.

## Prerequisites

- Attendees should have completed the Developer Training, or have equivalent knowledge of GHAS.
