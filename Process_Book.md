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

For this milestone, we include two untuned models that performed best with our data. Much of the work so far has been dedicated to cleaning data and learning more about it.

There's lots of cataloging of the process in our basic_model notebook since it's easier to document in context. We'll include a high-level overview here.

### Data Cleaning

We found some errors in the MLS dataset (ex having negative ages or lot sizes given in both acres and square feet). Given that we're working with a limited set of flipped homes in the data, we're going to make the effort to clean up this data where possible. This effort is in progress.

We removed condos from our data for now, because it was difficult to match on address to identify flips (conds unit data is not great, and it's going to take a lot of extra work to include single and multi family building that were condoized into our data, though this would be very valuable).

### Variable Selection

We cleaned most of the continuous variables for this milestone. For the next one, we'd like to play with including several categorical variables to our data set to see if any improve the model. The most interesting ones to us at the moment are number of photos included in the listing (fixer uppers anecdotally include fewer photos, so this may be a great predictor), property type, and potentially zip code (we imagine some areas are more likely to have flips than others).

We also performed PCA to help guide variable selection, and in the next iteration will try the model with fewer variables to see if accuracy improves (and remove some of the issues caused by strongly correlated predictors...). We are also going to try log-transforming some of the coontinuous variables, namely price, to see if that helps better separate the data.

### Model Selection

We ran the basic untransformed data through a series of classification models including logistic regression, decision tree classifier, LDA and QDA, KNN, SVM, several boosting algorithms, random forest, and bagging. The idea was to see which models worked well with our data and set us up to be able to quickly run many models with different combinations of transformed and untransformed predictors.

Decision trees and random forest performed best, followed by KNN with 3 neighbors. The next step will be tuning and improving parameters with gridsearch, combining approaches, applying better cv techniques like bootstrap, and trying approaches known to work on imbalanced data like SMOTE. Should be a "breeze" ;).

### Listing Descriptions and Photos

We'd also like to improve the accuracy of our classifier by learning from the listing descriptions and (if there's time) from the listing images themselves. We will work on including that in the next two weeks!

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
