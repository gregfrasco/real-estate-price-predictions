# Process Book

## Problem

The housing market is known for its challenges and opportunities. One of those opportunities is finding a fixer upper or flipping a house. When searching a house to flip or renovate, one of the major challenges is how to take into account the risk vs reward. Zillow, Redfin, and other leading real estate platforms provide you with a price estimate of the home’s current market value, but doesn’t factor in condition.

## Solution

The goal of this project is to find and analyze houses on the market, determine if the house is flippable and estimate the market value for a home after renovations. We plan on building an interactive website to educate the buyer of the potential value of the home. Our team plans on building a machine learning model that factors in listings from MLS to identify the homes value, and identify potential flips.

## Project Plan

### Machine Learning Model

| Milestone                                                                        | Leader | Estimated Time | Status    |
|----------------------------------------------------------------------------------|--------|----------------|-----------|
| Cleaning Data                                                                    | TBD    | 1 week         | Planned   |
| Classify houses that have been bought and sold in a relatively short time period | Nina   | 1 week         | Completed |
| Optimize the model for better results and produce a flip score                   | TBD    | 1.5 weeks      | Planned   |

### Frontend Application

| Milestone                    | Leader         | Estimated Time | Status      |
|------------------------------|----------------|----------------|-------------|
| Wireframe Application Design | Enrique        | 1 week         | Completed   |
| Flip View Page               | Greg & Enrique | 1.5 weeks      | In Progress |
| Flip Listing Page            | Greg & Enrique | 1.5 weeks      | In Progress |


### Backend Application

| Milestone                                                                             | Leader | Estimated Time | Status    |
|---------------------------------------------------------------------------------------|--------|----------------|-----------|
| Define an RESTful Spec to allow the frontend to interact with the data and ML models  | TBD    | 1 week         | Planned   |
| Build a RESTful api with stub data to start integration with the frontend             | TBD    | 1 week         | Planned   |
| Integrate backend with model and data                                                 | TBD    | 1 week         | Planned   |
| Deploy Application to Heroku                                                          | Greg   | 1 week         | Completed |


# Project Updates

Our team has created a [team charter](https://github.com/gregfrasco/real-estate-price-predictions/blob/master/documents/team_charter.md).This document was developed in a group setting that clarifies team direction, communication, and how to work together. Investing the required time to develop this charter has reduced confusion about the group’s workflow and reducing the risk of rework.

## Machine Learning Model

### Data Cleaning

We have found some errors with the MLS dataset such as Listing have negtitive ages or columns miss-aligned. Given working with a limited set of flipped homes in the data. We are going to make the effort on updating this dataset in hope to improve our model.

## Frontend Application

### Wireframes

Wireframes were created using an online design collabration tool called [Figma](https://www.figma.com/).

| **Map View** | **Listing View** |
|----------|--------------|
| ![Wireframe of a flip listing page](https://user-images.githubusercontent.com/5147346/87996092-45648000-cabf-11ea-8b77-a347f36e26cb.png) | ![Wireframe of a flip listing page](https://user-images.githubusercontent.com/5147346/87996239-8ceb0c00-cabf-11ea-9151-24cc19a855f7.png) |

### React App

A react app was created to view and interact with the flipped dataset.

## Backend Application

### Flask Backend

A Python flask has been added to the project. The goal of app is to server the react frontend and act as an API to the data and the machine learning model.

### Contunoius Integration / Contunoius Depolyment

A set of Github actions has been created to build and validate the react and flask app. These action run on each pull request showing the reviews the applications can install their depenancies build & compile in a production enviorment. Our backend flask app is depolyed onto Heroku at https://real-estate-price-predictions.herokuapp.com/. Depolyment is automaticly triggered on a master commit and after successfull run of Github Actions.

# Team Members

- Bry Power
- Enrique Goude
- Nina Vyedin
- Greg Frasco

Team Leaders
- Fred Im
- Aditya Bagaria
