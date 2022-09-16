from Player_Points import Player_Points
from pathlib import Path

import pandas
import numpy as np

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


class Player_Domestic(Player_Points):
    def __init__(self, ID, player_name, overall_innings, overall_runs, overall_average, strike_rate, thirties, fifties, centuries):
        Player_Points.__init__(self,ID, player_name, overall_innings, overall_runs, overall_average, strike_rate, thirties, fifties, centuries)
        self.Player_points_id = ID
        self.Player_points_name = player_name
        self.Player_points_overall_innings = overall_innings
        self.Player_points_overall_runs = overall_runs
        self.Player_points_overall_average = overall_average
        self.Player_points_strike_rate = strike_rate
        self.Player_points_thirties = thirties
        self.Player_points_fifties = fifties
        self.Player_points_centuries = centuries


    def calculating_score_of_domestic(self):
        if(self.Player_points_overall_innings <= 0):
            return 0.0
        else:
            x = self.Player_points_overall_innings/self.Player_points_overall_runs
            y = (20 * self.Player_points_centuries) + (15 * self.Player_points_fifties ) + (10 * self.Player_points_thirties)
            z = (0.3 * y) + (0.7 * self.Player_points_overall_average)
            return x * z

arr = np.array([])
for index, row in df.iterrows():
        p = Player_Points(ID=row['ID'],player_name=row['player_name'],overall_innings=row['overall_innings'],overall_runs=row['overall_runs'],overall_average=row['overall_average'],strike_rate=row['strike_rate'],thirties=row['thirties'],fifties=row['fifties'],centuries=row['centuries'] )
        value = p.calculating_overall_points()
        arr = np.append(arr, value)

df['calculated_domestic_value']=arr
df.to_csv('new.csv')

while True:
    x = input("Enter Player ID :-")
    try:
        result = df[df['ID']==int(x)]['calculated_value'].iloc[0]
    except:
        result = "Player ID not Found/Available"
    print(result)
    