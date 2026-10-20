# Faubion Choir

Static website for Faubion Middle School Choir. It is plain HTML, CSS, and a little JavaScript, so it can be hosted for free.

## Publish on GitHub Pages

1. Push this folder to GitHub.
2. In the repository, open Settings → Pages.
3. Set the source to the `master` branch and the root folder.
4. The site will be at `https://whm1595.github.io/Faubionchoir/`.

To use faubionchoir.com, add the domain under Pages and point the domain’s DNS at GitHub. Turn off the old Weebly site only after the new one is loading.

## Update the calendar

Edit the tables in `calendar.html`. Each row’s `data-end` is the last day of that event (`YYYY-MM-DD`). The page uses it to dim dates that have passed.
