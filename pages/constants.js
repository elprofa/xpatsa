// This should already be declared in your API file
var app = express();

// ADD THIS
var cors = require('cors');
app.use(cors());

export const GRAPHQL_API="https://data.fixer.io/api/latest?access_key=75743a764a2f10cc4d8ab0f08be20066&format=1";

export const GET_RATE_QUERY=`
    query rates{
        rates
    }
`;