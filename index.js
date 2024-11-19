const { Flipside } = require("@flipsidecrypto/sdk");
const fs = require( 'fs' );
const path = require('path');

async function main(){
    const prompt = require('prompt-sync')();
    const funcSig = prompt('Input function signature: ');

    const patternPath = path.join(__dirname, 'patterns/BASIC_FUNCSIG');
    const pattern = fs.readFileSync(patternPath, 'utf8');

    // Initialize `Flipside` with your API key
    const flipside = new Flipside(
      "1db0d506-ae07-43a5-8c52-f5204121aa11",
      "https://api-v2.flipsidecrypto.xyz"
    );

    const sql = pattern.replace('func_sig', funcSig);

    // Send the `Query` to Flipside's query engine and await the results
    const queryResultSet = await flipside.query.run({sql: sql});
    console.log(queryResultSet)
}

main();