# Say Hi Thai website

## Shell command style (keeps permission prompts away)

- Never use command substitution `$(...)` or heredocs inside Bash commands unless truly necessary — any command containing `$(...)` can never match the permission allowlist and will always prompt the user.
- For git commits, do NOT use `git commit -m "$(cat <<'EOF' ... EOF)"`. Instead use plain quoted `-m` flags:
  `git commit -q -m "Subject line" -m "Body paragraph if needed."`
- Don't append status echoes with substitutions like `echo "unpushed: $(git rev-list ...)"` to the same command — run plain `git log --oneline -1` separately if needed (it's auto-allowed).
