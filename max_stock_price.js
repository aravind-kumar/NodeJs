var maxProfit = function(prices) {
    var t00=0;
    var t01=Number.MIN_SAFE_INTEGER;
    var old_t00;
    
    for(var i=0;i<prices.length;++i){
        old_t00 = t00;
        t00 = Math.max(t00,t01+prices[i]);
        t01 = Math.max(t01,old_t00-prices[i]);
    }
    return t00;
};
