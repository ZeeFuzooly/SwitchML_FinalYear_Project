import numpy as np
import pandas as pd
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler



df = pd.read_csv("/Users/ziranfuzooly/Documents/Backups/unique_player_records_cricket.csv")

model = SVC(gamma='scale')
model.fit(df.data, df.target_names[df.target])

x = df[['overall_innings:','overall_runs:','overall_average:','strike_rate:','centuries:','fifties:','thirties:','zeros:']].values
y = df[['points']].values

label_encoder = LabelEncoder()
Y = label_encoder.fit_transform(y)
X = StandardScaler().fit_transform(x)

import pickle
X_train , X_test, y_train, y_test = train_test_split(X,Y)
clf = SVC(C=1.0, kernel='rbf').fit(X_train,y_train)
filename = 'svc.sav'
pickle.dump(clf, open(filename, 'wb'))