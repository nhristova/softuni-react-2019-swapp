
# Links
- [Netlify page](https://romantic-chandrasekhar-56245e.netlify.com/)
- [Custom domain http://swapp-app-2019.ml/](http://swapp-app-2019.ml/)
- [Static html draft UI GitHub page](https://nhristova.github.io/softuni-react-2019-swapp/static/episodes)
- [Specs pdf](CourseProjectAssignment.pdf)
- [SoftUni course page](https://softuni.bg/trainings/2583/react-web-applications-masterclass-2019)
- [GitHub demos code](https://github.com/st6io/react-web-apps-master-class-course)

# Specification Requirements

- [ ] Fetch data from GraphQL server - partial :seedling:
- [x] Sign in / sign out functionality - local schema, add token to request header
- [x] Show login error message when trying to login with valid email & password but different from demo@st6.io
- [x] Handle epired token - Redirect to login page. Works on (re)load of page, not when switching between links inside :purple_heart: :sunglasses:
- [x] Route login
- [x] Route episodes
- [x] Route characters
- [x] Route episodes/:episodeId
- [ ] Route characters/:characterId 
- [ ] Route starships/:starshipId
- [ ] Load 5 characters on episode page
- [ ] Load 12 characters on characters list page
- [ ] Load more episodes / characters on button click
- [ ] Hide button button when no more items
- [x] All routes except login are authorized
- [x] Redirect to episodes from /
- [x] Redirect to episodes after login
- [x] Navbar - logo, episodes, characters, sign out
- [x] Switch theme from login and navbar
- [ ] Store theme across sessions (on browser reload)
- [x] Change url upon navigation
- [ ] Styles match provided designs and colors - partial :seedling:
- [ ] App is responsive - partial :seedling:
- [ ] Load more episodes (five)
- [ ] Load more characters (twelve)
- [ ] Swapp logo uses Star Wars font - done in static html, make it work in real page too :seedling:
- [ ] Starship radar
- [ ] Test coverage is :100: - :eyes: :x: :clock430:
- [x] Continuous integration - CI on PR to master
- [x] Continuous deployment - CI on merge to master
- [ ] SSL access - !!!
