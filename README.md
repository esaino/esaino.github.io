# estebanhernandez.me

Source for [estebanhernandez.me](https://estebanhernandez.me/), served by GitHub Pages.

- `site/` is published as-is. There is no build step.
- Pushing to `main` deploys via `.github/workflows/deploy.yml`.
- The domain is registered and its DNS hosted at EuroDNS; the custom domain is set in the repo's Pages settings.

## History

- `archive/lovable-v1` branch and `lovable-v1` tag: the Lovable-generated React site, live January to October 2026.
- `docs/lovable-v1-ideas.md`: ideas from that site worth considering for the redesign.

## Local preview

```bash
python3 -m http.server 8000 -d site
```
