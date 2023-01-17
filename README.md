# 🎵 Mellowic - Discover music, Location based results, Lyrics and Player

<div align="center">
    <img width="90%" height="90%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fmellowic%2FScreenshot%202022-12-21%20at%2019-57-36%20Mellowic%20-%20A%20music%20player%20and%20discovery.webp?alt=media&token=6eff10c1-970c-45e5-8d34-c836a94c74e6" alt="home-page">
</div>

**Discover trending music, top artists, and lyrics. Shows now playing or paused song using icon toggles. Get location-based recommendations or filter by genres from a great collection of music libraries. All these features are packed in one super-app, with four colors' six-toned combination for a sleek modern look.**

**Tech Used: ReactJS, Redux Toolkit, Javascript, Styled Components, SwiperJS, React Router, Axios, React Icons, RapidAPI, HTML, CSS and SASS/SCSS.**

## 👉 Major Features

_The core functionalities of the app:_

- **The music is in a scrollable grid format, displaying up to 50 songs at any given time.**
- **Filter out the music library based on genres.**
  - By default starts in the Rock genre on the discovery page.
  - Available genres include Rock, Electronic, Pop, Hip-hop, K-pop, Country, and Worldwide.
- **Get music recommendations based on the user's live location. (By country)**
  - Done using the user's geolocation data.
  - Tracking doesn't work when AdBlocker is active in the browser.
- **Playing music changes its play icon to the pause icon.**
  - Pausing it changes it back to the play icon.
  - Detects if some other music is playing when a second music gets clicked to be played, while the previous one is in its play state. Resets the previous one's icon and shows the pause icon to currently playing music only.
- **Ability to search by keyword(s).**
  - Up to 50 results can be displayed.
- **View Top Charts from the side-menu.**
- **View Top Artists from the side-menu.**
- **View music details upon clicking on a music card.**
  - Music details include Artist's name, Album name, Album art, and genre.
  - Lyrics displayed if available.
- **The right panel includes currently trending artists and top 5 music.**
  - Draggable slider view for artists.
  - Strip view for the top 5 songs.
  - Click on 'see more...' to view all.
- **Lazy-loading images only load when they come into the visible part of the browser window, saving the user's bandwidth.**
- **404 "Page not found" error page will appear upon entering an unknown URL.**
- **Used appropriate HTML tags promoting browser accessibility settings for specially-abled users.**
- **Single screen multi-sectional dashboard.**
  - All super app features are consolidated into one page, to promote fewer reloads and increase performance.
  - The extra scroll requirement of the music and artists list was solved using a mini-overflow area.
- **Responsive design.**
  - Switch smoothly between 16:9 desktop, and 3:4 tablet screen sizes, and loosely also compatible with narrow mobile screen sizes.
  - Hides logo and menu panel when in tablet and mobile view.
- **Wrote reusable components.**
  - For result display grid, song card, artist card, artist headshot, and top-chart strip.
  - Mapped genre list.
  - Saved the development time by removing the need to write the same code for each recurring item.

👉 Quality of Life and Design Features

Little details that cumulatively add to a great user experience:

- **Modern design with four colors' six-toned combination complements each other, along with similar toned lighter color for characters.**
  - Linear gradients give a slightly shiny look to the background, cards, and strips.
  - Light and dark purple.
  - Light and dark cream.
  - Yellow and Orange.
- **The artist slider's mouse pointer changes to a grabber to signify that it's horizontally draggable.**
- **Visual cues for detecting current playing or paused music state.**
- **Alert message in location-based music recommendations page if the adblocker interrupts the GET request.**
  - Disable the adblocker for it to work.
- **Default picture is displayed if a music is missing its album art.**
- **Replaces the ending of extra long titles or artist credits with triple dots if it overflows beyond certain characters.**
- **Inputted keywords auto-blanks upon search completion.**
- **Mouse hover effect.**
  - The side-menu options scale up and shift the text slightly right.
  - Artist cards, music cards, and strips scale up and brighten.
  - Other non-hovered elements stay unaffected by changes in neighboring elements.
- **Error message if there was a problem fetching music or artist list.**
- **Notification message if music lacks lyrics data.**
- **Smooth transition animations.**
- **A fitting icon is next to the option of the side-menu.**
- **Animated loader.**
  - Appears when the app is in the process of data fetching.
  - Disappears as soon as data is ready to be displayed to the user.
- **Custom thin scrollbar design matching the theme.**
- **Title of the web app in the browser's tab.**
- **Custom favicon.**

## 👉 Colors Used

_(Source: Imagination. I just named them whatever I wanted, because why not.) 🤷_

| Colors      | Hex Code |
| ----------- | -------- |
| Backdrop    | #462445  |
| Letters     | #fceae6  |
| Light Berry | #ae606d  |
| Dark Berry  | #673653  |
| Light Peach | #fdac89  |
| Dark Peach  | #de8274  |
| Yellowish   | #fec252  |
| Orangish    | #ed6a56  |

## 👉 Credits for Assets

_Thank you very much_ 🙂

| Assets            | Name        | Link                                           |
| ----------------- | ----------- | ---------------------------------------------- |
| Favicon           | Icons8      | https://icons8.com/                            |
| Logo              | Icons8      | https://icons8.com/                            |
| Fonts             | Google      | https://fonts.google.com/                      |
| Music Library API | Shazam Core | https://rapidapi.com/tipsters/api/shazam-core/ |
| Geolocation API   | Geo Ipify   | https://geo.ipify.org/                         |
