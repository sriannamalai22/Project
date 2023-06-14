from __future__ import print_function
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import warnings
warnings.filterwarnings('ignore')
df = pd.read_csv('defect.csv')



features = df[['line_count_of_code', 'cyclomatic_complexity','essential_complexity','design_complexity','total_operators', 'volume', 'program_length', 'difficulty','intelligence',
               'effort','time_estimator','lOCode','lOComment','lOBlank','locCodeAndComment','uniq_Op','uniq_Opnd','total_Op','total_Opnd','branchCount']]
target = df['defects']

labels = df['defects']

acc = []
model = []

x = df.drop(["branchCount","total_Opnd","total_Op","uniq_Opnd","uniq_Op"],axis=1)
y = df[["defects"]]
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=1)
# from sklearn.model_selection import train_test_split
# Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)
#
from sklearn.ensemble import RandomForestClassifier
#
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(x_train,y_train)

predicted_values = RF.predict(x_test)

x = metrics.accuracy_score(y_test, predicted_values)
acc.append(x)
model.append('RF')


import pickle
# Dump the trained Naive Bayes classifier with Pickle
RF_pkl_filename = 'bug.pkl'
# Open the file to save as pkl file
RF_Model_pkl = open(RF_pkl_filename, 'wb')
pickle.dump(RF, RF_Model_pkl)
# Close the pickle instances
RF_Model_pkl.close()
print("RF's Accuracy is: ", x)
#
# # # print(classification_report(Ytest,predicted_values))
a=int(float(input("Enter the line_count_of_code = ")))
b=int(float(input("Enter the cyclomatic_complexity = ")))
c=int(float(input("Enter the essential_complexity = " )))
d=int(float(input("Enter the design_complexity = ")))
e=int(float(input("Enter the total_operators = " )))
f=int(float(input("Enter the volume = ")))
g=int(float(input("Enter the program_length = ")))
h=int(float(input("Enter the difficulty = ")))
i=int(float(input("Enter the intelligence = ")))
j=int(float(input("Enter the effort = ")))
k=int(float(input("Enter the time_estimator = ")))
l=int(float(input("Enter the lOCode = ")))
m=int(float(input("Enter the lOComment = ")))
n=int(float(input("Enter the lOBlank = ")))
o=int(float(input("Enter the locCodeAndComment = ")))
p=int(float(input("Enter the uniq_Op = ")))
q=int(float(input("Enter the total_Op = ")))



data = np.array([[a,b,c,e,f,g,h,i,j,k,l,m,n,o,p,q]])


prediction = RF.predict(data)
if prediction==0:
    print("There is no defect")
if prediction==1:
    print("There is defect")