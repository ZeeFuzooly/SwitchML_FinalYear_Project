import pandas
import numpy as np
from Classes.Player_international import Player_International
from pathlib import Path

data_file = Path(__file__).with_name('unique_player_records.csv')
df = pandas.read_csv(data_file)


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
                # print ("overall  " ,round((x * z) * 10))
            except:
                x=0
                z=0
            return round((x * z) * 10)


def fmedian(df, col):
    median_value = df[col].median()
    df[col].fillna(median_value, inplace=True)


fmedian(df, 'away_strike_rate')
fmedian(df, 'away_runs')
fmedian(df, 'away_not_out_count')
fmedian(df, 'away_average')
fmedian(df, 'total_away_ball_faced')
fmedian(df, 'away_strike_rate')
fmedian(df, 'away_zeros')
fmedian(df, 'away_30s')
fmedian(df, 'away_50s')
fmedian(df, 'away_100s')
fmedian(df, 'home_runs')
fmedian(df, 'home_not_out_count')
fmedian(df, 'home_average')
fmedian(df, 'total_home_ball_faced')
fmedian(df, 'home_strike_rate')
fmedian(df, 'home_zeros')
fmedian(df, 'home_30s')
fmedian(df, 'home_50s')
fmedian(df, 'home_100s')

arr = np.array([])        
arr2 = np.array([])
arr3 = np.array([])
arr4 = np.array([])


# for index, row in df.iterrows():
#     p = Player_Points(ID=row['ID'],player_name=row['player_name'],overall_innings=row['overall_innings'],overall_runs=row['overall_runs'],overall_average=row['overall_average'],strike_rate=row['strike_rate'],thirties=row['thirties'],fifties=row['fifties'],centuries=row['centuries'] )
#     value = p.calculating_overall_points()
#     arr = np.append(arr, value)

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
#     arr2 = np.append(arr2,value)
#     arr3 = np.append(arr3,value2)
#     arr4 = np.append(arr4,value3)

# PlayerList = []
# df['calculated_home_points'] = arr2
# df['calculated_away_points'] = arr3
# df['calculated_form_points'] = arr4
# df.to_csv('calculatedPoints.csv')

# df['calculated_value']=arr
# df.to_csv('new.csv')

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
    recent_100s=row['recent_100s'],
    # overall_innings=row['overall_innings'],
    # overall_runs=row['overall_runs'],
    # overall_average=row['overall_average'],
    # strike_rate=row['strike_rate'],
    # thirties=row['thirties'],
    # fifties=row['fifties'],
    # centuries=row['centuries'],
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


def handle_replace_player(body):
    player_id = body
    print(player_id)

    result = "\nPlayer Name :  " 
    result += df[df['ID']==int(player_id)]['player_name'].iloc[0]
    result += "\nPlayer Team :  " 
    result += str(df[df['ID']==int(player_id)]['team'].iloc[0])
    result += "\nCalculated Overall Player Points :  "
    result += str(df[df['ID']==int(player_id)]['calculated_value'].iloc[0])
    result += "\nCalculated Home Points :  " 
    result += str(df[df['ID']==int(player_id)]['calculated_home_points'].iloc[0])
    result += "\nCalculated Away Points :  " 
    result += str(df[df['ID']==int(player_id)]['calculated_away_points'].iloc[0])
    result += "\nCalculated Form Points :  " 
    result += str(df[df['ID']==int(player_id)]['calculated_form_points'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['home_runs'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['home_average'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['home_100s'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['home_50s'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['home_30s'].iloc[0])

    result += str(df[df['ID']==int(player_id)]['away_runs'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['away_average'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['away_100s'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['away_50s'].iloc[0])
    result += str(df[df['ID']==int(player_id)]['away_30s'].iloc[0])

    result += str(df[df['ID']==int(player_id)]['team'].iloc[0])

    # result += str(df[df['ID']==int(player_id)]['overall_runs'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['overall_average'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['centuries'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['fifties'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['thirties'].iloc[0])

    # result += str(df[df['ID']==int(player_id)]['form_runs'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['form_average'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['recent_100s'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['recent_30s'].iloc[0])
    # result += str(df[df['ID']==int(player_id)]['recent_50s'].iloc[0])
    

    data = {
        'player_name' : df[df['ID']==int(player_id)]['player_name'].iloc[0],
        'calculated_value' : df[df['ID']==int(player_id)]['calculated_value'].iloc[0],
        'calculated_home_points' :  df[df['ID']==int(player_id)]['calculated_home_points'].iloc[0],
        'calculated_away_points' :  df[df['ID']==int(player_id)]['calculated_away_points'].iloc[0],
        'calculated_form_points' :  df[df['ID']==int(player_id)]['calculated_form_points'].iloc[0],
        'player_id' : player_id,

        'home_runs' : df[df['ID']==int(player_id)]['home_runs'].iloc[0],
        'home_average': df[df['ID']==int(player_id)]['home_average'].iloc[0],
         'home_100s' :df[df['ID']==int(player_id)]['home_100s'].iloc[0],
         'home_50s' :df[df['ID']==int(player_id)]['home_50s'].iloc[0],
         'home_30s' :df[df['ID']==int(player_id)]['home_30s'].iloc[0],

         'away_runs' : df[df['ID']==int(player_id)]['away_runs'].iloc[0],
        'away_average': df[df['ID']==int(player_id)]['away_average'].iloc[0],
         'away_100s' :df[df['ID']==int(player_id)]['away_100s'].iloc[0],
         'away_50s' :df[df['ID']==int(player_id)]['away_50s'].iloc[0],
         'away_30s' :df[df['ID']==int(player_id)]['away_30s'].iloc[0],

        #  'form_runs' : df[df['ID']==int(player_id)]['form_runs'].iloc[0],
        # 'form_average': df[df['ID']==int(player_id)]['form_average'].iloc[0],
        #  'recent_100s' :df[df['ID']==int(player_id)]['recent_100s'].iloc[0],
        #  'recent_50s' :df[df['ID']==int(player_id)]['recent_50s'].iloc[0],
        #  'recent_30s' :df[df['ID']==int(player_id)]['recent_30s'].iloc[0],

        #  'overall_runs' : df[df['ID']==int(player_id)]['overall_runs'].iloc[0],
        # 'overall_average': df[df['ID']==int(player_id)]['overall_average'].iloc[0],
        #  'centuries' :df[df['ID']==int(player_id)]['centuries'].iloc[0],
        #  'fifties' :df[df['ID']==int(player_id)]['fifties'].iloc[0],
        #  'thirties' :df[df['ID']==int(player_id)]['thirties'].iloc[0],

        'team' :df[df['ID']==int(player_id)]['team'].iloc[0],

    }
    
    return data

def handleReplacement(ids, x):
    otherPlayerIDs = np.array([])
    for i in ids:
        otherPlayerIDs = np.append(otherPlayerIDs, int(i))
    most_suitable_player = 0
    score = 0
    for id in otherPlayerIDs:
        print(id)
        points = df[df['ID']==int(id)]['calculated_value'].iloc[0]

        if points > df[df['ID']==int(x)]['calculated_value'].iloc[0] : 
            if points >= score:
                most_suitable_player = id
                score = points

    return most_suitable_player


    