import pandas
import numpy as np
from Player_international import Player_International
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

class Player_Points:
    def __init__(self,ID,player_name,overall_innings,overall_runs,overall_average,strike_rate,thirties,fifties,centuries):
        self.Player_points_id = ID
        self.Player_points_name = player_name
        self.Player_points_overall_innings = overall_innings
        self.Player_points_overall_runs = overall_runs
        self.Player_points_overall_average = overall_average
        self.Player_points_strike_rate = strike_rate
        self.Player_points_thirties = thirties
        self.Player_points_fifties = fifties
        self.Player_points_centuries = centuries

    def calculating_overall_points(self):
        if(self.Player_points_overall_innings <= 0):
            return 0.0
        else:
            try:
                x = self.Player_points_overall_innings/self.Player_points_overall_runs
                y = (20 * self.Player_points_centuries) + (10 * self.Player_points_fifties ) + (5 * self.Player_points_thirties)
                z = (0.3 * y) + (0.7 * self.Player_points_overall_average)
            except:
                x=0
                z=0
            return (x * z) * 10



arr = np.array([])        
arr2 = np.array([])
arr3 = np.array([])
arr4 = np.array([])

for index, row in df.iterrows():
    p = Player_Points(ID=row['ID'],player_name=row['player_name'],overall_innings=row['overall_innings'],overall_runs=row['overall_runs'],overall_average=row['overall_average'],strike_rate=row['strike_rate'],thirties=row['thirties'],fifties=row['fifties'],centuries=row['centuries'] )
    value = p.calculating_overall_points()
    arr = np.append(arr, value)

    p = Player_International(ID=row['ID'],
    player_name=row['player_name'],
    home_innings=row['home_innings'],
    home_runs=row['home_runs'],
    home_average=row['home_average'],
    home_strike_rate=row['home_strike_rate'],
    home_30s=row['home_30s'],
    home_50s=row['home_50s'],
    home_100s=row['home_100s'],
    away_innings=row['away_innings'],
    away_runs=row['away_runs'],
    away_average=row['away_average'],
    away_strike_rate=row['away_strike_rate'],
    away_30s=row['away_30s'],
    away_50s=row['away_50s'],
    away_100s=row['away_100s'],
    form_innings=row['form_innings'],
    form_runs=row['form_runs'],
    form_average=row['form_average'],
    form_strike_rate=row['form_strike_rate'],
    recent_30s=row['recent_30s'],
    recent_50s=row['recent_50s'],
    recent_100s=row['recent_100s'] ,
    team=row['team'] )


    value = p.calculating_home_points()
    value2 = p.calculating_away_points()
    value3 = p.calculating_form_points()
    arr2 = np.append(arr2,value)
    arr3 = np.append(arr3,value2)
    arr4 = np.append(arr4,value3)

PlayerList = []
df['calculated_home_points'] = arr2
df['calculated_away_points'] = arr3
df['calculated_form_points'] = arr4
df.to_csv('calculatedPoints.csv')

df['calculated_value']=arr
df.to_csv('new.csv')

while True:
    x = input("\nEnter Player ID :-")
    try:
        result = "\nPlayer Name :  " 
        result += df[df['ID']==int(x)]['player_name'].iloc[0]
        result += "\nPlayer Team :  " 
        result += str(df[df['ID']==int(x)]['team'].iloc[0])
        result += "\nCalculated Overall Player Points :  "
        result += str(df[df['ID']==int(x)]['calculated_value'].iloc[0])
        result += "\nCalculated Home Points :  " 
        result += str(df[df['ID']==int(x)]['calculated_home_points'].iloc[0])
        result += "\nCalculated Away Points :  " 
        result += str(df[df['ID']==int(x)]['calculated_away_points'].iloc[0])
        result += "\nCalculated Form Points :  " 
        result += str(df[df['ID']==int(x)]['calculated_form_points'].iloc[0])
        
    except:
        result = "Player ID not Found/Available"
    print(result)

    otherPlayerIDs = np.array([])
    for i in range (0,6) :
        id = input("\nEnter Replacement Player ID :-")
        otherPlayerIDs =  np.append(otherPlayerIDs, id)

    most_suitable_player = 0
    score = 0
    for id in otherPlayerIDs:
        points = df[df['ID']==int(id)]['calculated_value'].iloc[0]

        if points > df[df['ID']==int(x)]['calculated_value'].iloc[0] : 
            if points >= score:
                most_suitable_player = id
                score = points
    
    print(most_suitable_player)
    break
             




    

    






    
  
