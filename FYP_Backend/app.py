from flask import Flask, request, jsonify
# to avoid cors error in different frontend like react js or any other
from flask_cors import CORS

import services.replace_player as ReplacePlayer

app = Flask(__name__)
CORS(app)


@ app.route('/health', methods=['GET'])
def test():
    return ('Healthy'), 200


@app.route('/predict', methods=['GET', 'POST'])
def predict_replacement():
    player_id = request.get_json(force=True)['']

    return jsonify({'Replace_Image': ''})

@app.route('/getReplaceID', methods=['GET', 'POST'])
def replacePlayer():
    if request.method == "POST":
        player_id = request.get_json(force=True)['player_id']
        player_ids = request.get_json(force=True)['player_ids']
        print(player_id)
        res = ReplacePlayer.handleReplacement(player_ids, player_id)

        return jsonify({'Replaced Player' : res})
    return jsonify({'Result' : 'Please post data'})


@app.route('/replace-player', methods=['POST'])
def replace_player():
    body = request.get_json(force=True)['player_id']
    res = ReplacePlayer.handle_replace_player(body)
    return jsonify({'Replaced Player': res})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
