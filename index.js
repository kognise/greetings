const port = process.env.PORT || 3000
require('express')().get('*', (req, res) => {
    if (req.headers['user-agent']?.startsWith('curl/') || req.headers['user-agent']?.toLowerCase()?.startsWith('wget/')) {
        res.header('Content-Type', 'text/plain')
        res.send(`
Greetings ${req.headers['user-agent']}.

Strange game. The only winning move is not to play.
        `.trim() + '\n')
    } else {
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
                line-height: 1.6;
                font-size: 1em;
                font-family: ui-monospace, 
                    Menlo, Monaco,
                    "Cascadia Mono", "Segoe UI Mono", 
                    "Roboto Mono", 
                    "Oxygen Mono", 
                    "Ubuntu Monospace", 
                    "Source Code Pro",
                    "Fira Mono", 
                    "Droid Sans Mono", 
                    "Courier New", monospace;
            }
            
            p {
                margin: 0;
                width: 100%;
                max-width: 800px;
            }
        </style>
    </head>
    <body>
        <p>Greetings ${req.headers['user-agent']}.</p>
        <p>Will you please check my <a href='https://github.com/kognise/website/pull/24'>pulse PR</a> to your website</p>
    </body>
</html>
        `)
    }
}).listen(port, () => console.log(`app is up on http://localhost:${port}`))
