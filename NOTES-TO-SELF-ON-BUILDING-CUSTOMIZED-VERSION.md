About Building a Custom Version of Reeborg's World
===================================================

When I updated this Reeborg instance in Nov, 2018
--------------------------------------------------

- copied everything over from the main Reeborg repo, replacing any duplicate files
- renamed reeborg.html to be index.html
- searched through the new index.html and:
    - removed clicky.js calls (near the bottom of the page)
    - removed together.js (in a few places, just search for together)
    - removed class and href from a id="logo" in the header tag
    - changed RUR.DEFAULT_MENU_EN to be 
        RUR.DEFAULT_MENU_EN = '/worlds/menus/sk_menu.json';
        RUR.DEFAULT_MENU_FR = '/worlds/menus/sk_menu_fr.json';



Old Changes (none of this should be required for me anymore)
=============================================================

Changes from the 'normal' Reeborg's world repo:
------------------------------------------------

- .nojekyll file added to the root directory (this allows you to host Reeborg's World on GitHub pages -- MUST DO THIS)
- create a gh-pages branch to host this on GitHub Pages
- renamed reeborg-offline.html to be index.html (so this is the page that loads when you open the root directory on GitHub Pages)

- customized worlds for CS20 tutorials are added to /src/worlds/steps/
- list of worlds to load is changed in /src/js/ui/custom_world_select.js
    - right now, this is just changed in the reeborg.js combined file (simply because I didn't want to run the entire build process for a simple world selector change)


- added keyboard shortcuts for saving (not required anymore, as Andrè added this to the main version of Reeborg)


As of Jan 17, 2018
-------------------

Just copied over the main Reeborg repo, overwriting anything that had changed.Renamed the reeborg-offline.html file to be index.html. Then, can link to the SK content by calling something like:

http://reeborg.ca/reeborg.html?lang=en&mode=python&collection=worlds/menus/sk_menu.json&name=Step%201

http://reeborg.ca/reeborg.html?lang=en&mode=python&collection=worlds/menus/sk_menu.json

where the URL is replaced by:
https://sk-opentexts.github.io/reeborg?


Reminder to self -- should also remove the Clicky calls...