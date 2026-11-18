# Deployment and review record

Prepared 18 November 2026. Publisher identity explicitly supplied by the owner:
**OLEKSANDR KOPAREIKO operating under Nikfort Games brand**.

Repository: https://github.com/alexkopareiko/nikfort-policies (public).
Intended policy URL: https://alexkopareiko.github.io/nikfort-policies/orchid-care/privacy/

## Content reviewed

- Orchid Care source `921bf996478631fdc2a8b683a7b07d582e308853`: manifest, JSON/private-photo store, draft sessions,
  recovery files, data deletion, document picker/export, notification scheduler, billing and browser links.
- Confirmed contact `nikfortgames@gmail.com` in the existing portfolio Play listings and the app handoff.
- No additional app library, analytics, website script, external asset service or font dependency was added.
- Local source check: four HTML pages, all internal links/anchors, headings, assets and publication placeholders.

## Current official references checked

- https://support.google.com/googleplay/android-developer/answer/10144311?hl=en
- https://support.google.com/googleplay/android-developer/answer/10787469?hl=en
- https://docs.github.com/en/rest/pages/pages
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

The policy provides an app-specific HTML page with identity, contact, data purposes, third-party services,
retention/deletion and update dates. It avoids an unsupported blanket Data safety declaration. Hosting details
include GitHub request metadata separately from app data. No claim of legal review or Google approval is made.

## Verification states

| Item | State |
| --- | --- |
| Owner publisher wording | Confirmed in chat |
| Source/data-flow review | Performed against stated source; distributed binary not inspected |
| Local website link/content checks | Passed |
| GitHub Pages activation / deployment | Pending publication verification |
| Anonymous live content and asset checks | Pending deployment |
| App policy URL source update | To follow successful public verification |
| Actual installed-app browser route | Pending; Android build/runtime checks not authorized |
| Current-app Play Console policy field / Data safety | Not changed or verified |
| Resolved release SDK graph / merged manifest / binary | Not inspected; no Android build or dependency tasks run |

Browser-based configuration was stopped by the computer-use tool because it could not reliably identify the
current Windows browser URL. Deployment uses the GitHub API if the configured connection has the required Pages
and repository-administration permission. Credentials are kept only in process memory and never committed.
