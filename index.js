const port = process.env.PORT || 3000
require('express')().get('*', (req, res) => {
    res.header('Content-Type', 'text/html')
    res.send(`
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <title>greetings.kognise.dev</title>
        <style>
            body, html {
                height: 100%;
            }
            
            body {
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                box-sizing: border-box;
                gap: 20px;
            }
            
            p {
                font-family: monospace;
                margin: 0;
                font-size: 1.2em;
                width: 100%;
                max-width: 800px;
            }
        </style>
    </head>
    <body>
        <p>Greetings ${req.headers['user-agent']}.</p>
        <p>Strange game. The only winning move is not to play.</p>
    </body>
</html>
    `)
}).listen(port, () => console.log(`app is up on http://localhost:${port}`))
