@ECHO OFF

curl -s -H "Content-Type: application/json" -X POST -d @"../datas/AudioQuery.json" http://localhost:8081/synthesis?speaker=1 > ../datas/ResultAudio.wav
