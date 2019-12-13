# GTHC - Game Tenting Help Center

![Logo](/app/javascript/src/images/gthc_long.png)

# README

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

## Table of Context
1. [Installation](#Installation)
2. [Setup](#Setup)
3. [Configuration](#configuration)

## Installation
1. XCode 
2. iOS or Android Simulator

## Setup

__Disclaimer:__ Windows users, it is highly recommended that the entire setup process should be done through the Windows Subsystem for Linux (WSL). Setting up WSL can be found [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

1. Make sure you the yarn package manager installed by running: `npm i -g yarn`

   a. `yarn` is a great alternative to `npm` as a dependency manager for Node.js. Read more [here](https://yarnpkg.com/en/).

2. `yarn run setup`

   a. This yarn script should run all of the necessary shell scripts to setup your Docker containers, bundle (ruby gems) dependencies, and your node dependencies.

3. `yarn run ios` OR `yarn run android`

    a. This will start XCode and run on the ios simulator or on Android Studio. 

### Local Software Versioning
It is required that your system is running `Rails 5.0+` for the local development to function properly. It is recommended to use the most recent version of Node, but anything above `Node 8.x` shall work. 

## Configuration
__Important:__ There are private environment variables needed for certain aspects of the application. Therefore, it will be required that you have a `.env` file in the root of your project __before__ running anything. Please contact the project leaders (Aman or Anesu) for this information. __Finally, the .env file should not be pushed to github under no circumstances!__
