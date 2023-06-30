# GeoGuesser
🚧🚧🚧 Currently Under Development 🚧🚧🚧 <br>
Welcome to GeoGuesser! This web application is an in-progress multiplayer street view game where players need to guess the country based on a randomly generated street view image. The game also features a solo streak option, random multiplayer, and friend invite multiplayer modes.

The app is currently deployed on Vercel at [https://geo-guesser-psi.vercel.app/](https://geo-guesser-psi.vercel.app/)

## Introduction

GeoGuesser is an exciting multiplayer game that challenges players to test their geographical knowledge by identifying the country where a street view image was taken. Whether you prefer playing alone to beat your own streak or competing against friends and random players worldwide, GeoGuesser has something for everyone.

## Features

- **Multiplayer Mode:** Compete against friends or random players in real-time matches. Invite your friends to join the game and see who can guess the country fastest.
- **Solo Streak Mode:** Play solo and aim to achieve the longest streak of correct guesses. Challenge yourself to beat your own record and become a street view expert.
- **Random Multiplayer:** Join random multiplayer games with players from around the world. Test your skills against a diverse range of opponents and climb the global leaderboard.
- **Beautiful User Interface:** The application is built with NativeBase, providing a visually pleasing and intuitive user interface for an enhanced gaming experience.
- **Real-time Updates:** Socket technology is used to ensure seamless real-time updates between players, making the multiplayer experience smooth and interactive.
- **Street View Generation:** The game utilizes the Google Geocode and Street View API to generate random street view images from different locations around the world.
- **Redux:** Redux is integrated into the application to manage the global state and provide a consistent data flow throughout the game.
- **TypeScript:** GeoGuesser is built using TypeScript, which enhances the developer experience by providing static typing and improved code maintainability.

## Tech Stack

GeoGuesser is built using the following technologies:

- **Next.js:** A React framework for building server-rendered applications. It provides an efficient and intuitive development experience.
- **NativeBase:** A UI component library for React Native and React.js. It allows for the creation of beautiful, responsive user interfaces.
- **Socket.IO:** A JavaScript library that enables real-time, bidirectional communication between web clients and servers. It is used to facilitate multiplayer functionality.
- **Google Geocode and Street View API:** APIs provided by Google to obtain geolocation data and generate street view images.
- **Redux:** A predictable state container for JavaScript applications. It is used to manage the global state and ensure consistent data flow throughout the game.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript. It brings static typing, improved tooling, and enhanced code maintainability to the project.

## Installation

To install and run GeoGuesser locally, follow these steps:

1. Clone the repository: 
   ```
   git clone https://github.com/your-username/geoguesser.git
   ```
2. Navigate to the project directory: 
   ```
   cd geoguesser
   ```
3. Install the dependencies: 
   ```
   npm install
   ```
4. Set up the required environment variables for the Google Geocode and Street View API.
5. Start the development server: 
   ```
   npm run dev
   ```
6. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

Once the application is running, you can explore the different game modes and challenge yourself or others to guess the country based on the presented street view images. Enjoy the immersive experience and aim for high scores and long streaks!

## Contributing

Contributions to GeoGuesser are always welcome. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request with your changes.

Before contributing, please read
