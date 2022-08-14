# city-bike-app

# Helsinki city bike app (Dev Academy pre-assignment)

Here is my contribution to Solita Dev Academy fall 2022 pre-assignment!

Link: https://boiling-waters-92875.herokuapp.com/

## Introduction

The apps purpose is to display information about Helsinki city bike stations and show data about journeys made with the bikes.

Built with MERN stack with a deployment in Heroku cloud platform.

# Features completed

### Station list

* List all the stations
* Pagination
* Searching

### Single station view

* Station name
* Station address
* Total number of journeys starting from the station
* Total number of journeys ending at the station
* Station location on the map

![Screenshot_2022-08-14_11-58-44](https://user-images.githubusercontent.com/89803361/184529861-4b08db23-2637-436c-8454-65caaf31671d.png)

### Journey list view

* List journeys
* For each journey show departure and return stations, covered distance in kilometers and duration in minutes
* Pagination

![Screenshot_2022-08-14_11-59-53](https://user-images.githubusercontent.com/89803361/184529911-0cbe6c9a-fcf7-4843-ab49-4aab1403dbbd.png)


### Data
* Import data from the CSV files to a database
* Validate data before importing
* Don't import journeys that lasted for less than ten seconds
* Don't import journeys that covered distances shorter than 10 meters



### UI
* Made the UI responsive on mobile devices

![Screenshot_2022-08-14_12-04-21](https://user-images.githubusercontent.com/89803361/184530021-9d6112ab-7648-4bfc-bafa-b140562a2120.png)

## Stuff I will add later
Goal is to make this app a nice addition to my portfolio.
* Filtering, searching and sorting journeys
* More info about the stations and journeys related to them
* Adding journeys and stations
* Fixing bugs (biggest one is to fix the problem with MongoDB (or Node) not allowing to import more than 1700000 documents)
* Testing

## Instructions to run locally

Create .env file and add your MONGO_URI there and also the port you want to run the server on.

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client







