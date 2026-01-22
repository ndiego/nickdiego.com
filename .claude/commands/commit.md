---
allowed-tools: Bash(git status:*), Bash(git add:*), Bash(git diff:*), Bash(git commit:*), Bash(git log:*), Bash(git check-ignore:*)
description: Selectively commit changes from the current conversation
---

Commit only the changes we've been working on in this conversation.

## Instructions

1. Run `git status` to see all modified and untracked files
2. Run `git diff --stat` to see a summary of changes
3. Run `git log -3 --oneline` to see recent commit style
4. Based on our conversation context, identify which files should be committed together
5. Stage only those relevant files with `git add`
6. Create a commit with a descriptive message following the repo's style

## Commit message format

Use a HEREDOC for proper formatting:

```bash
git commit -m "$(cat <<'EOF'
Short summary of changes (imperative mood)

Optional body explaining the "why" if needed.

EOF
)"
```

## Guidelines

- Only commit files related to the current conversation's work
- Leave unrelated changes uncommitted
- Use present tense: "Add feature" not "Added feature"
- Keep summary under 50 characters
- One logical change per commit
- Break work into individual commits as needed
