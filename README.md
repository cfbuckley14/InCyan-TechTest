# InCyan-TechTest

Test test for InCyan based on the below criteria

Challenge - write a function that takes a json payload and outputs a dot / asci version of a graph.
Example payload:

{
    "title": "stock count",
    "xtitle": "asset",
    "ytitle": "count",
    "items": [
        {"chairs": 20},
        {"tables": 5},
        {"stands": 7},
        {"lamps": 8},
        {"cups": 10}
    ]
}

Example output:

                  stock count
                  -----------
count
-----
        *
        *
        *
        *
        *
        *                                   *  
        *                 *        *        *  
        *        *        *        *        *  
        *        *        *        *        *  
        *        *        *        *        *  
        chairs   tables   stands   lamps    cups
                                                   asset
                                                   -----



The output does not need to look exactly the same as the above, but this is to provide a guide.

The output may be in colour, but this is not necessary.

Outline any assumptions made about the json payload using code comments.

The goal of this exercise is to assess coding ability and thought processes in a language agnostic way.
