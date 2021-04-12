## Simple example of cross-domain Web Worker.

4 separate terminals:
```
python -m http.server 8000
python -m http.server 8001
ngrok http 8000
ngrok http 8001
```

Or you can stick with only 2 first.

With ngrok - replace `workerUrl` in the `main.js` to the second ngrok domain.

![Result](https://fileserver.scythargon.ru/Tooltip_121.png)
