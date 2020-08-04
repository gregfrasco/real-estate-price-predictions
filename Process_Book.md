# Process Book

## Problem

The housing market is known for its challenges and opportunities. One of those opportunities is finding a fixer upper or flipping a house. When searching a house to flip or renovate, one of the major challenges is how to take into account the risk vs reward. Zillow, Redfin, and other leading real estate platforms provide you with a price estimate of the home’s current market value, but doesn’t factor in condition.

## Solution

The goal of this project is to find and analyze houses on the market to determine if the house is flippable.

Our model tries to see if we can predict flippable houses *without* using the description (descriptions will often explicity say if the property is a fixer-upper or needs some work) or photos (which can show the state of the property), to see if there's some other key indicators or similarities in the listings. We could see this being useful in a few ways - in the current housing shortage, investors often try to get in on a property before it hits the market. An investor could use our tool to find a property before it goes on the market and before image and descriptions are available. This helps the investor avoid competition and find good deals.

## Project Plan

### Machine Learning Model

| Milestone                                                                        | Leader | Estimated Time | Status    |
|----------------------------------------------------------------------------------|--------|----------------|-----------|
| Cleaning Data                                                                    | Nina + Bry    | 1 week         | Completed   |
| Classify houses that have been bought and sold in a relatively short time period | Greg + Nina   | 1 week         | Completed |
| Optimize the model for better results and produce a flip score                   | Nina    | 1.5 weeks      | Completed   |

### Frontend Application

| Milestone                    | Leader         | Estimated Time | Status      |
|------------------------------|----------------|----------------|-------------|
| Wireframe Application Design | Enrique        | 1 week         | Completed   |
| Flip View Page               | Greg & Enrique | 1.5 weeks      | Completed   |
| Flip Listing Page            | Greg & Enrique | 1.5 weeks      | Completed   |


### Backend Application

| Milestone                                                                             | Leader | Estimated Time | Status    |
|---------------------------------------------------------------------------------------|--------|----------------|-----------|
| Define an RESTful Spec to allow the frontend to interact with the data and ML models  | TBD    | 1 week         | Completed |
| Build a RESTful api with stub data to start integration with the frontend             | TBD    | 1 week         | Completed |
| Integrate backend with model and data                                                 | TBD    | 1 week         | Completed |
| Deploy Application to Heroku                                                          | Greg   | 1 week         | Completed |


# Project Updates

Our team has created a [team charter](https://github.com/gregfrasco/real-estate-price-predictions/blob/master/documents/team_charter.md).This document was developed in a group setting that clarifies team direction, communication, and how to work together. Investing the required time to develop this charter has reduced confusion about the group’s workflow and reducing the risk of rework.

## Machine Learning Model

For this milestone, we include two untuned models that performed best with our data. Much of the work so far has been dedicated to cleaning data and learning more about it.

There's lots of cataloging of the process in our basic_model notebook since it's easier to document in context. We'll include a high-level overview here.

### Data Cleaning

We found some errors in the MLS dataset (ex having negative ages or lot sizes given in both acres and square feet). Given that we're working with a limited set of flipped homes in the data, we made the effort to clean up this data where possible.

We removed condos from our data for now, because it was difficult to match on address to identify flips (conds unit data is not great, and it's going to take a lot of extra work to include single and multi family building that were condoized into our data, though this would be very valuable).

Here's a list of the cleaning operations we performed:

* Fix bad listings where commas in the description caused bad data in the later columns
* Fix age where year built was used instead of years old

### Variable Selection
Our model uses a mix of categorical and continuous variables. We used SOLDPRICE to train and test, but we imagine an investor may use the recorded assessed price from property tax records with a penalty for condition if available and a growth factor to better match "market" rate.

We also performed PCA to help guide variable selection, with SOLDPRICE and SQFT having the strongest effect on the two principal components.

More predictors seemed to improve the model slightly, and dropping predictors made the accuracy go down. That said, the addition of all the categorical variables did not greatly improve performance. Interestingly, number of bathrooms seemed to have a predictive power, opening the possibility that pre-flipped homes may have a smaller footprint (SQFT), fewer bathrooms, and a lower price than average homes on the market.

Transforming (log) all or part of the continuous variables made the model perform worse. This makes sense when we look at the distribution - transforming helps temper the effect of outliers, but the flipped homes actually tend to cluster right in the middle of the plot of all homes for various predictors, with outliers almost always belonging to the non-flippable category. By removing the effect of key outliers (ex: a large apartment building with 99 garage spaces - a real data point), we actually made the model perform slightly worse.

### Model Selection

We ran the basic untransformed data through a series of classification models including logistic regression, decision tree classifier, LDA and QDA, KNN, SVM, several boosting algorithms, random forest, and bagging. This is documented in the notebook basic_model.

Random forest using all predictors performed best. We did try a round of tuning, but the "best" parameters did not really improve accuracy while making the model slower and bigger. Random forest did very inentifying all the true 0s (non-flippable) as 0s, and did better than average at identifying flips. It still misclassified some flips (1s) as 0s.

                 precision  recall  f1-score    support
       False       0.98      1.00      0.99     41448
        True       1.00      0.68      0.81      2566

    accuracy                           0.98     44014
    macro avg      0.99      0.84      0.90     44014
    weighted avg   0.98      0.98      0.98     44014

Because our dataset of flips was smaller than the non-flippable homes, we also tried oversampling with SMOTE. Oddly, this decreased performance for random forest and decision tree, though it slightly improved all the other models (not enough to compete with the trees).

To improve the model, we could try a few things - the first is cleaning the data further, and doing a better analysis of the flips we identified to make sure each one is a specimen pre-flipped home. We could augment our dataset with more real flip data by finding distressed homes that were flipped by owners (bought distressed, then renovated to live in and not sold). We could also validate the data set of non-flippable homes to remove any oddities. We could add condos to the mix to find distressed properties that were sold as a single or multi-family and later flipped into condos. All of this could improve the data and therefor the performance of our model.

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
