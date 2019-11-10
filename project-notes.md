
# Links
- [Netlify page](https://romantic-chandrasekhar-56245e.netlify.com/)
- [Custom domain http://swapp-app-2019.ml/](http://swapp-app-2019.ml/) - update - can't make https work, getting ERR_CERT_COMMON_NAME_INVALID ... :dizzy_face:
- [Static html draft UI GitHub page](https://nhristova.github.io/softuni-react-2019-swapp/static/episodes)
- [Specs pdf](CourseProjectAssignment.pdf)
- [SoftUni course page](https://softuni.bg/trainings/2583/react-web-applications-masterclass-2019)
- [GitHub demos code](https://github.com/st6io/react-web-apps-master-class-course)

# Specification Requirements

- [ ] Fetch data from GraphQL server - partial :seedling:
- [x] Sign in / sign out functionality - local schema, add token to request header
- [x] Show login error message - when using an email other than demo@st6.io
- [x] Route login
- [x] Route episodes
- [x] Route characters
- [x] Route episodes/:episodeId
- [ ] Route characters/:characterId 
- [ ] Route starships/:starshipId
- [ ] Load 5 characters on episode page
- [ ] Load 12 characters on characters list page
- [ ] Load more episodes (five)
- [ ] Load more characters (twelve)
- [ ] Load more episodes / characters on button click
- [ ] Hide button when no more items
- [x] All routes except login are authorized
- [x] Redirect to episodes from /
- [x] Redirect to episodes after login
- [x] Navbar links - episodes, characters, sign out
- [x] Switch theme from login and navbar
- [ ] Store theme across sessions (on browser reload)
- [x] Change url upon navigation
- [ ] Styles match provided designs and colors - partial :seedling:
- [ ] App is responsive - partial :seedling:
- [ ] Swapp logo uses Star Wars font - done in static html, make it work in real page too :seedling:
- [ ] Starship radar
- [ ] Test coverage is :100: - :eyes: :x: :clock430:
- [x] Hooks on commit
- [x] Continuous integration - CI on PR to master
- [x] Continuous deployment - CI on merge to master

## Additional
- [x] Load configs from .env file - Prefix name with REACT_APP!! (won't load otherwise)
- [ ] SSL access - !!!
- [x] Handle epired token - Redirect to login page. Works on (re)load of page, not when switching between links inside :purple_heart: :sunglasses:
- [x] Redirect to /login if not authorized - works for one-slash-routes, not for `/blah/somethinglese`
