
from decimal import Decimal
from unicodedata import decimal
from matplotlib.pyplot import axis
import pandas 
import numpy as np
import math as math
from imblearn.combine  import SMOTETomek
from collections import Counter
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.svm import SVC
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score
from pathlib import Path


data_file = Path(__file__).with_name('unique_player_records.csv')
df = pandas.read_csv(data_file)

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
class Player_International:
    def __init__(self, ID, player_name, team,
    home_innings,home_runs,home_average,home_strike_rate,home_30s,home_50s,home_100s,
    away_innings,away_runs,away_average,away_strike_rate,away_30s,away_50s,away_100s,
    form_innings,form_runs,form_average,form_strike_rate,recent_30s,recent_50s,recent_100s,
    # overall_innings, overall_runs, overall_average, strike_rate, thirties, fifties, centuries
    ):
        # Player_Points.__init__(self,ID, player_name, overall_innings, overall_runs, overall_average, strike_rate, thirties, fifties, centuries)

        self.Player_ID = ID
        self.team = team
        self.Player_name = player_name
        self.Player_home_innings = home_innings
        self.Player_home_runs = home_runs
        self.Player_home_average = home_average
        self.Player_home_strike_rate = home_strike_rate
        self.Player_home_30s = home_30s
        self.Player_home_50s = home_50s
        self.Player_home_100s = home_100s
        self.Player_away_innings = away_innings
        self.Player_away_runs = away_runs
        self.Player_away_average = away_average
        self.Player_away_strike_rate = away_strike_rate
        self.Player_away_30s = away_30s
        self.Player_away_50s = away_50s
        self.Player_away_100s = away_100s
        self.Player_form_innings = form_innings
        self.Player_form_runs = form_runs
        self.Player_form_average = form_average
        self.Player_form_strike_rate = form_strike_rate
        self.Player_form_30s = recent_30s 
        self.Player_form_50s = recent_50s
        self.Player_form_100s = recent_100s
        # self.overall_innings = overall_innings
        # self.overall_runs = overall_runs
        # self.overall_average = overall_average
        # self.overall_strike_rate = strike_rate
        # self.overall_30s = thirties
        # self.overall_50s = fifties
        # self.overall_100s = centuries


      


# Calculating Players Home Points
    def calculating_home_points(self):
        if(self.Player_home_innings <= 0):
            return 0.0
        else:
            try:
                x = self.Player_home_innings/self.Player_home_runs
                y = (20 * self.Player_home_100s) + (10 * self.Player_home_50s ) + (5 * self.Player_home_30s)
                z = (0.3 * y) + (0.7 * self.Player_home_average)
            except:
                x=0
                z=0
            return round((x * z) * 10)


# Calculating Players Away Points
    def calculating_away_points(self):
        if(self.Player_away_innings <= 0):
            return 0.0
        else:
            try:
                x = self.Player_away_innings/self.Player_away_runs
                y = (20 * self.Player_away_100s) + (10 * self.Player_away_50s ) + (5 * self.Player_away_30s)
                z = (0.3 * y) + (0.7 * self.Player_away_average)
            except:
                x=0
                z=0
            return round((x * z) * 10)


# Calculating Recent Form Points
    def calculating_form_points(self): 
        if(self.Player_form_innings <= 0):
            return 0.0
        else:
            try:
                x = self.Player_form_innings/self.Player_form_runs
                y = (20 * self.Player_form_100s) + (10 * self.Player_form_50s ) + (5 * self.Player_form_30s)
                z = (0.3 * y) + (0.2 * self.Player_form_strike_rate) + (0.5 * self.Player_form_runs)
            except:
                x=0
                z=0
            return round((x * z) * 10)
    
  

# arr = np.array([])
# arr2 = np.array([])
# arr3 = np.array([])
# for index, row in df.iterrows():
#     p = Player_International(ID=row['ID'],
#     player_name=row['player_name'],
#     home_innings=row['home_innings'],
#     home_runs=row['home_runs'],
#     home_average=row['home_average'],
#     home_strike_rate=row['home_strike_rate'],
#     home_30s=row['home_30s'],
#     home_50s=row['home_50s'],
#     home_100s=row['home_100s'],
#     away_innings=row['away_innings'],
#     away_runs=row['away_runs'],
#     away_average=row['away_average'],
#     away_strike_rate=row['away_strike_rate'],
#     away_30s=row['away_30s'],
#     away_50s=row['away_50s'],
#     away_100s=row['away_100s'],
#     form_innings=row['form_innings'],
#     form_runs=row['form_runs'],
#     form_average=row['form_average'],
#     form_strike_rate=row['form_strike_rate'],
#     recent_30s=row['recent_30s'],
#     recent_50s=row['recent_50s'],
#     recent_100s=row['recent_100s'] )


#     value = p.calculating_home_points()
#     value2 = p.calculating_away_points()
#     value3 = p.calculating_form_points()
#     arr = np.append(arr,value)
#     arr2 = np.append(arr2,value2)
#     arr3 = np.append(arr3,value3)

# PlayerList = []
# df['calculated_home_points'] = arr
# df['calculated_away_points'] = arr2
# df['calculated_form_points'] = arr3
# df.to_csv('calculatedPoints.csv')
# print("")


# while True:
#     x = input("\nEnter Player ID :")
#     try:
#         result = "\nPlayer Name :  " 
#         result += df[df['ID']==int(x)]['player_name'].iloc[0]
#         result += "\nPlayer Team :  " 
#         result += str(df[df['ID']==int(x)]['team'].iloc[0])
#         result += "\nCalculated Home Points :  " 
#         result += str(df[df['ID']==int(x)]['calculated_home_points'].iloc[0])
#         result += "\nCalculated Away Points :  " 
#         result += str(df[df['ID']==int(x)]['calculated_away_points'].iloc[0])
#         result += "\nCalculated Form Points :  " 
#         result += str(df[df['ID']==int(x)]['calculated_form_points'].iloc[0])
#     except:
#         result = "\n ! Player ID not Found/Available !"
#     print(result)
    
#     df1 = pandas.read_csv('/Users/ziranfuzooly/Documents/Backups/Ziran/Final Year/FYP/Swich-ML-Implementation/new.csv')
#     df1.drop(['player_name','team'],axis=1,inplace=True)
#     # print(df1.dtypes)
#     df1['calculated_home_points'] = df1.calculated_home_points.astype(int)
#     # # df1["calculated_home_points"] = df['calculated_home_points'].str.replace(' ', '').astype(int)
#     df1['calculated_away_points'] = df1.calculated_away_points.astype(int)
#     df1['calculated_form_points'] = df1.calculated_form_points.astype(int)
#     # print(df1.dtypes)

#     # target=np.array(df1['calculated_home_points'],)
#     # train=np.array(df1.drop('calculated_form_points', axis=1) )
#     # print (target.value_counts())

#     # PlayerList.append(df1['calculated_home_points','calculated_away_points','calculated_form_points'])
#     # players = np.array(PlayerList)
    
#     # vectorizer = CountVectorizer(stop_words="english")  
#     target = df1.values
#     train = df1['calculated_home_points'].values

#     target = np.delete(target,1,axis=1)

#     # smk=SMOTETomek(random_state=42)
#     # train_new,target_new=smk.fit_resample(train,target)
#     totalAccuracy = []
#     X_train, X_test, y_train, y_test = train_test_split(target,train, test_size = 0.20, random_state = 0)


    
#     import pickle
#     nb_model=GaussianNB(var_smoothing=2e-9)
#     nb_model.fit(X_train,y_train)
#     # nb_prob_prediction = nb_model.predict_proba(X_test)
#     filename = 'International_Model.sav'
#     pickle.dump(nb_model, open(filename, 'wb'))
#     gnb_pred=nb_model.predict(X_test)

#     accuracy=accuracy_score(y_test,gnb_pred) 
#     precision=precision_score(y_test,gnb_pred,average='weighted')
#     recall=recall_score(y_test,gnb_pred,average='weighted')
#     f1=f1_score(y_test,gnb_pred,average='weighted')
#     # totalAccuracy.append(accuracy)
    
#     print('\nGaussian Naive Bayes')
#     print('Accuracy - {}'.format(accuracy))
#     print('Precision - {}'.format(precision))
#     print('Recall - {}'.format(recall))
#     print('F1 - {}'.format(f1))

#     print('\nRandom Forest')
#     import pickle
#     RFC_model=RandomForestClassifier(n_estimators=10,max_depth=1)
#     RFC_model.fit(X_train,y_train)
#     # RFC_prob_prediction = RFC_model.predict_proba(X_test)
#     filename = 'International_Model.sav'
#     pickle.dump(RFC_model, open(filename, 'wb'))
#     RFC_pred=RFC_model.predict(X_test)

#     accuracy=accuracy_score(y_test,RFC_pred) 
#     precision=precision_score(y_test,RFC_pred,average='weighted')
#     recall=recall_score(y_test,RFC_pred,average='weighted')
#     f1=f1_score(y_test,RFC_pred,average='weighted')
#     # totalAccuracy.append(accuracy)

#     print('Accuracy - {}'.format(accuracy))
#     print('Precision - {}'.format(precision))
#     print('Recall - {}'.format(recall))
#     print('F1 - {}'.format(f1)) 

#     print('\nDecision Tree Classifier')
#     import pickle
#     DTC_model=DecisionTreeClassifier(max_depth=1, splitter="best", min_samples_split=5, max_features=1)
#     DTC_model.fit(X_train,y_train)
#     # DTC_prob_prediction = DTC_model.predict_proba(X_test)
#     filename = 'International_Model.sav'
#     pickle.dump(RFC_model, open(filename, 'wb'))
#     DTC_pred=DTC_model.predict(X_test)

#     accuracy=accuracy_score(y_test,DTC_pred) 
#     precision=precision_score(y_test,DTC_pred,average='weighted')
#     recall=recall_score(y_test,DTC_pred,average='weighted')
#     f1=f1_score(y_test,DTC_pred,average='weighted')
#     # totalAccuracy.append(accuracy)

#     print('Accuracy - {}'.format(accuracy))
#     print('Precision - {}'.format(precision))
#     print('Recall - {}'.format(recall))
#     print('F1 - {}'.format(f1))

#     # # Train SVM model
#     # print('\nSupport Vector Machine')
#     # import pickle
#     # svm_clf = SVC(C=1000, kernel='sigmoid', gamma=0.001, probability=True)
#     # svm_clf.fit(X_train, y_train)
#     # # SVM_prob_prediction = svm_clf.predict_proba(X_test)
#     # filename = 'International_Model.sav'
#     # pickle.dump(RFC_model, open(filename, 'wb'))
#     # svm_pred = svm_clf.predict(X_test)
#     # svm_pred_prob = svm_clf.predict_proba(y_test)

#     # accuracy=accuracy_score(y_test,svm_pred) 
#     # precision=precision_score(y_test,svm_pred,average='weighted')
#     # recall=recall_score(y_test,svm_pred,average='weighted')
#     # f1=f1_score(y_test,svm_pred,average='weighted')

#     # print('Accuracy - {}'.format(accuracy))
#     # print('Precision - {}'.format(precision))
#     # print('Recall - {}'.format(recall))
#     # print('F1 - {}'.format(f1))

#     # sumOfAccuracy = sum(totalAccuracy)
#     # averageAccuracy = sumOfAccuracy//3
    
#     def acceptance_rate(prediction, test_data):
#         error_rate = 0
#         for index, pred in enumerate(prediction):
#             if(pred != test_data[index]):
#                 error_rate += 1
#         return 1/2 * (math.log((1-(error_rate/len(prediction)))/(error_rate/len(prediction))))
        
#     amt_say_nb = acceptance_rate(gnb_pred, y_test)

#     amt_say_rfc = acceptance_rate(RFC_pred, y_test)

#     amt_say_dtc = acceptance_rate(DTC_pred, y_test)

#     # amt_say_svm = acceptance_rate(svm_pred, y_test)

#     print('\nAmount of say NB :', amt_say_nb)
#     print('Amount of say MLP :', amt_say_rfc)
#     print('Amount of say DTC :', amt_say_dtc)
#     # print('Amount of say SVM :', amt_say_svm)
#     # print("Average Accuracy: " , "{:.2f}".format(averageAccuracy))

# #     return nb_model, RFC_model, DTC_model, svm_clf, amt_say_dtc, amt_say_nb, amt_say_rfc, amt_say_svm, X_test, X_train, y_test, y_train

# # nb_model, RFC_model, DTC_model, svm_clf, amt_say_dtc, amt_say_nb, amt_say_rfc, amt_say_svm, X_test, X_train, y_test, y_train = initialise()
    
#     # def building_features(Player_Points):

#     #     player_overall_score = Player_Points.calculating_overall_points()

#     #     player_away_score = Player_Points.calculating_away_points()

#     #     player_home_score = Player_Points.calculating_home_points()

#     #     player_form_score = Player_Points.calculating_form_points()

#     #     return [player_overall_score,player_away_score,player_home_score,player_form_score]

        
#     # prediction_probability = []

#     # def engine_prediction(list_of_players):
#     #     nb_prob_prediction = nb_model.predict_proba(list_of_players)
#     #     rfc_prob_prediction = RFC_model.predict_proba(list_of_players)
#     #     DTC_prob_prediction = DTC_model.predict_proba(list_of_players)
#     #     SVM_prob_prediction = svm_clf.predict_proba(list_of_players)

#     #     return nb_prob_prediction, rfc_prob_prediction, DTC_prob_prediction, SVM_prob_prediction

#     # def algo_switch_ml(nb_prob_prediction, rfc_prob_prediction, DTC_prob_prediction, SVM_prob_prediction):

#     #     end_prediction = []

#     #     for index, initial_gnb_pred in enumerate (nb_prob_prediction):
#     #         print (initial_gnb_pred)
#     #         gnb_prediction_weighted_01 = nb







            
