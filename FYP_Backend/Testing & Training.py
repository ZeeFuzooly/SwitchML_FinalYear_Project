
import fractions
from xml.sax.handler import all_features
import numpy as np
import pandas as pd
from sklearn import datasets
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes  import MultinomialNB
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.svm import SVC
from sklearn.metrics import classification_report

from sklearn.metrics import accuracy_score
from sklearn.metrics import recall_score, precision_score, f1_score
from matplotlib import pyplot as plt
import seaborn as sns


df = pd.read_csv("/Users/ziranfuzooly/Documents/Backups/unique_player_records_cricket.csv")
#checking for missing values
print(df.isnull().sum())

print("--------------------------------------------------------------------------------------------------")
# missing values are replaced by medians of the respective columns
def fmedian(df,col):
    median_value = df[col].median()
    df[col].fillna(median_value,inplace=True)

fmedian(df,'away_strike_rate')
fmedian(df,'away_runs')
fmedian(df,'away_not_out_count')
fmedian(df,'away_average')
fmedian(df,'total_away_ball_faced')
fmedian(df,'away_strike_rate')                  
fmedian(df,'away_zeros')
fmedian(df,'away_30s')
fmedian(df,'away_50s') 
fmedian(df,'away_100s') 
fmedian(df,'home_runs') 
fmedian(df,'home_not_out_count') 
fmedian(df,'home_average') 
fmedian(df,'total_home_ball_faced') 
fmedian(df,'home_strike_rate') 
fmedian(df,'home_zeros') 
fmedian(df,'home_30s') 
fmedian(df,'home_50s') 
fmedian(df,'home_100s')  

print(df.isnull().sum())  

# print("--------------------------------------------------------------------------------------------------")


# checking correlations between the variables to better understand the data.
# corr = df.corr()
# fig, ax = plt.subplots(figsize=(30, 18))
# colormap = sns.diverging_palette(220, 10, as_cmap=True)
# dropSelf = np.zeros_like(corr)
# dropSelf[np.triu_indices_from(dropSelf)] = True
# colormap = sns.diverging_palette(220, 10, as_cmap=True)
# sns.heatmap(corr, cmap=colormap, linewidths=.5, annot=True, fmt=".2f", mask=dropSelf)
# plt.title('Runs - Features Correlations')
# print(plt.show())






# df = df.dropna()
# print(df.tail)
# print ("Shape :", df.shape)
# df.sort_index(inplace=True)
# print(df.tail())

vectorizer = CountVectorizer(stop_words="english")
all_features = vectorizer.fit_transform(df.player_name)
# # breakpoint()
# print(all_features)
# print(vectorizer.vocabulary_)

x_train,x_test,y_train,y_test = train_test_split(all_features, df.centuries,
                                                test_size = 0.3, random_state=42)
# print(x_train.shape)
# print(x_test.shape)

# classifier = MultinomialNB()
# classifier.fit(x_train,y_train)

# nr_correct =(y_test== classifier.predict(x_test)).sum()
# print(f'{nr_correct} documents classified correctly')

# nr_incorrect = y_test.size - nr_correct
# print(f'{nr_incorrect} documents classified in-correctly')

# fraction_wrong = nr_incorrect/(nr_correct+nr_incorrect)
# print(f'The (testing) accuracy of the model is {1-fraction_wrong:.2%}')
# # classifier.score(x_test,y_test)

# # rc = recall_score(y_test, classifier.predict(x_test))
# # print(rc)
# # pr = precision_score(y_test, classifier.predict(x_test))
# # print(pr)
# # f1 = f1_score(y_test, classifier.predict(x_test))
# # print(f1)

#   # Train Decision Tree model
import pickle
desT = DecisionTreeClassifier(max_depth=11, splitter="best", min_samples_split=5, max_features=5)
desT.fit(x_train, y_train)
filename = 'finalized_model.sav'
pickle.dump(desT, open(filename, 'wb'))
desc_pred = desT.predict(x_test)
desc_pred_prob = desT.predict_proba(x_test)
print(classification_report(y_test, desc_pred))
acc = accuracy_score(desc_pred, y_test)
print(f'Dec Tree Accuracy is {acc:.2%}')

import pickle
#   # Train Multi-layer Perceptron model
mlp_clf = MLPClassifier(solver='lbfgs', alpha=1e-06,
                            hidden_layer_sizes=(13), random_state=20, max_iter=1100, activation="logistic", batch_size=150, learning_rate="adaptive")
mlp_clf.fit(x_train, y_train)
filename = 'finalized_model.sav'
pickle.dump(mlp_clf, open(filename, 'wb'))
mlp_pred_prob = mlp_clf.predict_proba(x_test)
mlp_pred = mlp_clf.predict(x_test)
print(classification_report(y_test, mlp_pred))
acc = accuracy_score(mlp_pred, y_test)
print(f'MLP Accuracy is {acc:.2%}')

import pickle
# #Train SVM model
svm_clf = SVC(C=1400, kernel='sigmoid', gamma=0.001, probability=True, degree=7, random_state=46)
svm_clf.fit(x_train, y_train)
filename = 'finalized_model.sav'
pickle.dump(svm_clf, open(filename, 'wb'))
svm_pred = svm_clf.predict(x_test)  
svm_pred_prob = svm_clf.predict_proba(x_test)
print(classification_report(y_test, svm_pred))
acc = accuracy_score(svm_pred, y_test)
print(f'SVM Accuracy is {acc:.2%}')

#amt_say_svm = acceptance_rate(svm_pred, y_test)
#print('Amount of say SVM :', amt_say_svm)

# #  Train Naive Bayes model
# gnb = GaussianNB()
# gnb.fit(x_train, y_train)
# nb_pred_prob = gnb.predict_proba(x_test)
# nb_pred = gnb.predict(x_test)
# print(classification_report(y_test, nb_pred))
# acc = accuracy_score(nb_pred, y_test)
# print(acc)


























# # sm = SMOTE(random_state=41)
# # np_players_resampled, np_performances_resampled = sm.fit_resample(np_players, np_performances)

# # feature_train, feature_test, target_train, target_test = train_test_split(
# #     np_players_resampled, np_performances_resampled, test_size=0.30, random_state=42)

# # print ("Features: ", df.feature_names)
# # print ("Labels: ", df.target_names)

# # X=pd.DataFrame(df['data'])

# # print(X.head())

# # print(df.data.shape)

# # #print the wine labels (0:Class_0, 1:class_2, 2:class_2)

# # y=print (df.target)