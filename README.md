# Nikfort Games policies

Public, app-specific privacy policies and support pages. Publisher: **OLEKSANDR KOPAREIKO operating under Nikfort Games brand**.

## Site and permanent addresses

- Directory: https://alexkopareiko.github.io/nikfort-policies/
- Orchid Care: https://alexkopareiko.github.io/nikfort-policies/orchid-care/privacy/
- Support: https://alexkopareiko.github.io/nikfort-policies/support/

These are the intended addresses; verify a successful Pages deployment and anonymous page content before using a new URL in an app or Console. Hosting status/evidence belongs in `maintenance/deployment.md`.

## Deployment

This is a buildless static site. `docs/.nojekyll` prevents Jekyll processing. No npm install, external fonts, JavaScript, analytics or application secrets are needed.

Shared styling follows the [Nikfort Games publisher site](https://nikfort-games.rosyegret64.chatgpt.site/): warm
paper, deep green ink, orange accent, sans headings and the n wordmark. See `maintenance/style-reference.md`.
Future app policies inherit `docs/assets/site.css`; do not give each policy the app's separate UI palette.

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, **main**, **/docs**, then Save. Keep HTTPS enforcement enabled when available. GitHub's Pages deployment runs after later source pushes; it is separate from Android compilation and release workflows. The repo has no custom Actions workflow and no secrets.

Only `docs/` is published. `templates/` and `maintenance/` are authoring/maintenance material, not public website routes (the repository itself is public).

## Add the next app

1. Choose a permanent lowercase slug such as `next-app`. Never include a version number in its policy URL.
2. Audit the actual app's records, photos, drafts, permissions, backups, recovery copies, SDKs, purchases, external services and deletion behavior. An offline app is not automatically a “no data collected” Play declaration.
3. Use `templates/privacy-policy-brief.md` as a review checklist. Do not copy Orchid Care's data practices into a different app without evidence.
4. Create `docs/<slug>/privacy/index.html` using the existing page structure and shared stylesheet. Relative links to the root and assets use `../../`. Include the exact app name, package, publisher, working contact address, effective/updated dates and app-specific disclosures. No placeholder text may be published.
5. Add a card to `docs/index.html` and an entry to `maintenance/apps.json`. Add support-specific instructions if needed. Create terms or account-deletion pages only when there is a real applicable need; don't publish empty or generic placeholders.
6. Run `node tools/verify-site.mjs`. Review the page on a phone-sized viewport and with keyboard navigation. Commit and push; observe the Pages deployment to completion.
7. Verify the complete page anonymously over HTTPS. Only then use that same URL in the app and its Play Console policy field. Verify the installed app's browser-opening action separately.
8. Record source/website revisions and pending runtime/Console checks. Keep old policy URLs working when renaming or retiring an app.

## Update an existing policy

Edit the app's HTML policy as the authoritative text. Update its displayed revision date, catalogue date and maintenance registry. Review the diff against actual behavior. Git retains earlier revisions; the stable URL displays the current policy. If policy text is also retained in an app's store/ folder, replace it with a pointer to this canonical source to prevent conflicting copies.

Keep a privacy policy readable without login, cookies consent, forms, scripts or PDF downloads. Publishing is not proof of legal compliance, a Play Data safety submission, or Google approval. Review current official requirements for each release.

## Domain portability

The site currently uses GitHub's free address. No domain was bought or configured. Shared page links are relative so a future custom domain can retain the route structure; update canonical URLs, the registry and app/Console URLs deliberately. Preserve redirects at any old URLs where possible and verify them before migrating apps.

## Local checks

`node tools/verify-site.mjs` checks local HTML titles/headings, link/anchor targets, publication placeholders and unexpected scripts/external asset dependencies. It does not compile Android, establish legal compliance, or prove that Pages is enabled.
