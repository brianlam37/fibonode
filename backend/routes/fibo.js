const router = require('express').Router();

function fibonacci(n){
    if( n < 1){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

router.route('/:number').get((req, res) => {
    return res.json(fibonacci(Number(req.params.number)));
});

module.exports = router;