
# Project Links
- [Netlify page](https://romantic-chandrasekhar-56245e.netlify.com/)
- [Custom domain](http://swapp-app-2019.ml/)
- [Static html & css](https://nhristova.github.io/softuni-react-2019-swapp/static/episodes) -  draft UI GitHub page

# Course Links
- [SoftUni course page](https://softuni.bg/trainings/2583/react-web-applications-masterclass-2019)
- [GitHub demos code](https://github.com/st6io/react-web-apps-master-class-course)
- [Create React App readme](readme-cra.md)

-----------------
# Specification Requirements

- [Specs pdf](CourseProjectAssignment.pdf)
- [x] Fetch data from GraphQL server
- [x] All routes except login are authorized
- [x] Redirect to /login if not authorized 
- [x] Redirect to episodes from / - default page
- [x] Redirect to episodes after login
- [x] Handle wrong routes - works for one-slash-routes, not for `/blah/somethinglese`
- [x] Route login
- [x] Route episodes - load all episodes
- [x] Route characters - load 12
- [x] Route episodes/:episodeId - load 5 characters
- [x] Route characters/:characterId - load all starships
- [x] Route starships/:starshipId
- [x] Navbar links - episodes, characters, sign out
- [x] Switch theme from login and navbar SWAPP logo
- [x] Store theme across sessions (on browser reload) - used localStorage
- [x] Sign in / sign out functionality - local schema, add token to request header
- [x] Show login error message - when using an email other than demo@st6.io
- [x] Change url upon navigation
- [x] Styles match provided designs and colors 
- [x] App is responsive 
- [x] Load 5 more characters on episode page
- [x] Load 12 more characters on characters page :satisfied:
- [x] Hide load more button when no more items
- [x] Swapp logo uses Star Wars font 
- [x] Starship radar
- [ ] Test coverage is :100: - partial :seedling: 75% Statements  66% Branches  60% Functions  75% Lines  
- [x] Hooks on commit
- [x] Continuous integration - CI on PR to master
- [x] Continuous deployment - CI on merge to master

## Additional
- [x] Handle epired token - Redirect to login page. Works on (re)load of page, not when switching between links inside :purple_heart: :sunglasses:
- [x] Custom icon for mobile desktop & Chrome tab
- [x] Replace missing character / starship photo with generic image

## Notes
- [x] Load configs from .env file - Prefix name with REACT_APP!! (won't load otherwise)
- [x] HTTPS SSL access - **very** different links for http and https
  - https://swapp.st6.io/graphql
  - http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql
