# Deployment and review record

Prepared 18 November 2026. Publisher identity explicitly supplied by the owner:
**OLEKSANDR KOPAREIKO operating under Nikfort Games brand**.

Repository: https://github.com/alexkopareiko/nikfort-policies (public).
Live policy URL: https://alexkopareiko.github.io/nikfort-policies/orchid-care/privacy/
Published source: `a3c59f7da568da57b4507b5d71c9db60511861d7`.

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
| GitHub Pages activation / deployment | API reports built, main /docs, public, HTTPS enforced |
| Anonymous live content and asset checks | Passed: directory, full policy, support, CSS and SVG return HTTPS 200; key content verified |
| App policy URL source update | Committed and pushed: fbadaa022bb4f448f05d6ed29ad69782457e1754; Settings uses the public browser URL |
| Actual installed-app browser route | Pending; Android build/runtime checks not authorized |
| Current-app Play Console policy field / Data safety | Not changed or verified |
| Resolved release SDK graph / merged manifest / binary | Not inspected; no Android build or dependency tasks run |

Browser-based configuration was stopped by the computer-use tool because it could not reliably identify the
current Windows browser URL. Pages was enabled using the GitHub API with the credential already configured for
the user's GitHub MCP connection. Credentials were kept only in process memory and never committed. An initial
configuration call returned 404 during activation; a subsequent state read confirmed built status, the correct
source, and HTTPS enforcement. No duplicate site or repository was created.

Anonymous verification used PowerShell HTTP requests with no authentication or cookies, reading the complete
HTML and checking the publisher, app package, contact, dates, deletion section and final policy section. The
separate web browsing tool could not open the new URL. No rendered-browser/mobile visual review or installed-app
route verification is claimed. `live-verification.json` records successful endpoint status and content types.
