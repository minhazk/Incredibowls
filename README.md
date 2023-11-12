# Incredibowls - Bowling Score Tracker App

## Table of Contents

-   [Project Description](#project-description)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Licence](#licence)

## Project Description

The Bowling Score Tracker App is a mobile application built with React Native and Expo. It serves as a scorecard tracking app designed to make recording and keeping track of bowling game results quick and convenient. This app simplifies the scoring process, calculates total points, tallies scores, and handles deductions automatically in real-time.

## Features

- **Live Scoring**: The app provides live scoring for bowling games, making it easy to record scores as the game progresses. It automatically calculates the total points, tallies the scores, and handles any deductions.

- **Data Persistence**: Game data is stored locally using the React Native Async Storage library. This ensures that your scores and game history are saved for future reference.

- **State Management**: The app uses Redux for state management, allowing for efficient handling of data and user interactions.

- **Camera Integration**: Users can take pictures during games using the "expo-camera" feature. These pictures can be saved with a reference to the game, creating memorable moments and enhancing the overall experience.

- **Cross-Platform Compatibility**: The app is compatible with both Android and iOS devices, ensuring accessibility for a wide range of users.

## Technologies Used

- React Native
- Expo
- Redux
- React Native Async Storage
- Expo Camera

## Getting Started

To run this project, follow these steps:

### Prerequisites

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) installed on your system.
-   Expo mobile app installed on your phone.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/minhazk/Incredibowls.git
    cd cryptopal
    ```

2. Install the required Node.js modules:
    
    ```bash
     npm install
    ```

Please replace the placeholders (e.g., your_firebase_api_key) with your actual credentials and information.

## Usage

1. Start the development server with the following command:

    ```bash
    expo start
    ```

2. Open the Expo Go app on your Android or iOS device.

3. Scan the QR code displayed in the terminal using the Expo Go app. This will load the app on your mobile device.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE.md). See the [LICENSE.md](LICENSE.md) file for the full text of the license.
