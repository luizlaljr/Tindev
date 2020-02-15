var fs = require('fs');
fs.readFile('in.txt', 'utf-8', function (err, data) {
    if(err) throw err
    var lines = data.split('\n')
    
    const limit = lines.shift()

    lines.forEach(element => {
        let a = parseFloat(element)
        let cont = 0
        while (a >= 1) {
            a /= 2
            const limit = lines.shift()
    
            lines.forEach(element => {
                let a = parseFloat(element)
                let cont = 0
                while (a >= 1) {
                    a /= 2
                    cont ++;
                }
                console.log(cont + " dias")
            });
            cont ++;
        }
        console.log(cont + " dias")
    });
    
});

