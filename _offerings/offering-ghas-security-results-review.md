---
layout: page
title: GitHub Advanced Security - Results Review
delivery:
  method: "`6` hours maximum sync time"
  unit: Workshop
description: Allows you to have a “developer-first” approach to Application Security, recognizing that developers have a critical role to play in securing your applications.
parameterized_name: ghas-security-results-review
---

## Overview

GitHub Advanced Security allows you to have a “developer-first” approach to Application Security, recognizing that developers have a critical role to play in securing your applications.

This engagement is with a single team of developers to walk them through the process of reviewing the results produced by Advanced Security.
The engagement can be repeated for different development teams and products. Product security and DevSecOps team members might take part with the goal of disseminating best practices in triaging and fixing security issues as well as in Advance Security configuration.

## Offering level

Fundamentals [100]

## Target Audience

- Developers
- Product Security teams
- DevSecOps teams

## Key features and benefits

- Review the results produced by Advanced Security with an expert on the call.
- Receive a guided tour on how to effectively use the Advanced Security interface to understand and triage results taking advantage of the offered documentation.
- Receive customized guidance on remediation.
- Receive customized guidance on configuration changes to improve the results produced by Advanced Security.

## Engagement schedule

This engagement will consist of one session of 2 hours face-to-face time, and some pre and post-session support. Maximum session size is typically 15 people.

## Syllabus

- Overview of the Advanced Security interface functionalities
- Analysis of the results obtained on 1-5 customer repositories focusing on:
  - Quantity of results - likely explanations for the absence/abundance of results
  - Approaches to fixing highest severity issues
  - Configuration options

## Learning outcomes/business outcomes

After completing this workshop participants will be able to:

- Use the GitHub Advanced Security interface to understand the reported security vulnerabilities on the selected repositories.
- Triage and remediate the existing vulnerabilities in their repository
- Address new vulnerabilities as they are reported in the pull request workflow.
- Identify build and configuration improvements for the given repositories to reduce false positives and false negatives
- Evaluate the potential benefits of query customization

## Resources

- [Mangage alerts](https://docs.github.com/en/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)
- [Triaging alerts in PRs](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)
- [Query help](https://codeql.github.com/codeql-query-help/)

## Prerequisites

- 1-5 repositories must be selected where Advanced Security is already enabled.
  - If the repositories are not already enabled, the "Pilot Team Implementation" offering can be provided to support enabling GHAS.
- The attendees must have access to the relevant security results on the selected repositories
  - For Code Scanning, the user should be assigned the "View code scanning results" permission, for example by having write access to the repository.
  - For Secret Scanning, the user should be assigned the "View secret scanning results" permission, for example by being a repository admin.
  - For Dependabot, the user should be assigned the "View Dependabot alerts" permission, for example by being a repository admin.
- For CodeQL enabled repositories, the attendees should have access to the CI/CD job logs for a recent run of CodeQL.
