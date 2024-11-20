const { Flipside } = require("@flipsidecrypto/sdk");
const requireFromUrl = require('require-from-url/sync');
const fs = require( 'fs' );

const modes = {
    BASIC_FUNCSIG: 0,
    FUNC_AFTER_FUNC: 1,
    //...
};

async function main(){
    const prompt = require('prompt-sync')();
    const pattern_url = prompt('Input pattern url: ');
    const funcSig1 = prompt('Input function first signature: ');
    const funcSig2 = prompt('Input function second signature: ');

    const Patterns = requireFromUrl(pattern_url);
    const patterns = new Patterns();
    
    // Initialize `Flipside` with your API key
    const flipside = new Flipside(
      "47d52848-9762-4751-b55b-b5e9678e2773",
      "https://api-v2.flipsidecrypto.xyz"
    );
    
    var sql = patterns.getPattern(modes.FUNC_AFTER_FUNC);
    sql = sql.replace('func_sig1', funcSig1);
    sql = sql.replace('func_sig2', funcSig2);
    console.log(sql);
    // Send the `Query` to Flipside's query engine and await the results
    const queryResultSet = await flipside.query.run({sql: sql});
    console.log(queryResultSet)
}

main();