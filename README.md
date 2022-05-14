# The movie database app built using React JS (used context api where needed)

App is live at https://rjcb.github.io/react-movie-db/

- This app lets user search for a movie, tv show and view their details including crew, cast, runtime, release date etc. Alternatively, user can also select between trending and popular movies and tv using the buttons on homepage.
- User can also login to their `TMDB account` and any changes made through this app will be reflected in their actual TMDB account as well.
- I have built similar app using styled components however, the number of search features on that app are limited.
- This app is not responsive at the moment, it's is a Todo

Flows:
- Homepage that shows a trending list by default
- Movie details page, shows details for a selected movie
- Login

Dependencies:
- react-router-dom
- axios
- sass
- TMDB api

Todo:
- Pagination or load more button on homepage
- Add favourite, add to watchlist, rate features
- Add proper error handling
- We can Logout a user by deleting the session_id, however the api call to delete is returning 404. Need to look into it.
- Add breakpoints for Responsiveness/make app responsive


![Screen Shot 2022-05-14 at 12 58 15 PM](https://user-images.githubusercontent.com/37097058/168451640-46cee193-37e2-4e30-a15b-813d86178774.png)
![Screen Shot 2022-05-14 at 12 59 07 PM](https://user-images.githubusercontent.com/37097058/168451643-578554f0-750c-4149-a1a7-dd0ee59549c1.png)
![Screen Shot 2022-05-14 at 12 59 23 PM](https://user-images.githubusercontent.com/37097058/168451647-630bbcb7-8b4b-45e7-b390-b6ee0a7d417a.png)
![Screen Shot 2022-05-14 at 12 59 40 PM](https://user-images.githubusercontent.com/37097058/168451649-2be240e1-5fd7-43a3-964f-8a9a1cdde99f.png)
![Screen Shot 2022-05-14 at 2 48 52 PM](https://user-images.githubusercontent.com/37097058/168451662-307c4446-2d9e-4fe3-8e24-e522eab3d085.png)


