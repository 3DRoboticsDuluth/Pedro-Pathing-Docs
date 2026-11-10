# Pedro Pathing v2 documentation archive

Unofficial archive maintained by 3DRoboticsDuluth. Content is pinned to the last
upstream master revision before the Pedro v3 documentation rewrite:
`d61a6b294c9f113055dce95a41d75e9c5569c4b6`.

Published site: https://3droboticsduluth.github.io/Pedro-Pathing-Docs/
Current official docs: https://pedropathing.com/docs

The archive retains the original v2 guides. Installation examples are pinned to
Pedro 2.1.2; links to upstream projects may now describe newer versions.

## Run locally

With Node 22 or 24, run `npm ci` and `npm run dev`.
To reproduce the Pages build, set `BASE_PATH=/Pedro-Pathing-Docs` and run
`npm run build`. The generated static site is in `out/`.

GitHub Actions publishes the `v2-docs` branch. The fork's `master` branch is
retained separately. GitHub Pages must use GitHub Actions as its build source.
