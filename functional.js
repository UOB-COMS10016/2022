const currentWeek   = 6;
const activityNum   = 8;
const columnNum     = 4;
const title         = "FUNCTIONAL PROGRAMMING";
const headerOn      = 1;
const header1       = "EXERCISES";
const header2       = "LECTURES";
const header3       = "COURSEWORK";
const inactColour   = "#999999";
const titleColour   = "#777777";
const titleBColour  = "#BBBBBB";
const bkgColour     = "#CCCCCC";
const embossColour  = "#AAAAAA";
const fontSizePix   = 11;
const extendCatNum1 = -1;
const extendCatNum2 = -1;

var categories = [
["0","","#CCCCCC","0","","",],
["1","Extra Materials","#DDDDDD","0","","Materials",],
["2","Lectures","#CCCFFF","0","","",],
["3","Setup Lab:","#EEEEDD","0","","",],
["4","Worksheet","#EEEEDD","1","","Materials",],
["5","History","#EEEEDD","0","","Materials",],
["6","Lectures","#CCCFFF","0","","Materials",],
["7","Notes ft.<br>Extra Examples<br>+ Explanations","#94e5bf","0","","Notes",],
["8","Coursework","#EEEEDD","1","SUBMIT HERE (Blackboard)","Materials",],
["9","Bonus Worksheet","#DE591C","1","","Materials",],

];

const activities = [
["1","(optional)","","","","0","3",],
["2","Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley","<a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week1.pdf' target='_blank'>Week 1 - Introduction</a><br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/18e6ea68ad654e9aaafc9f34805f2c831d' target='_blank'>Revision Video 1</a>)","","","0","0",],
["0","","","","","0","0",],
["3","Thurs 29/09/22<br/>15:00-18:00<br/>MVB2.11/1.15","GET YOUR PC READY","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/setup.html","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["2","Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley","<a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week2.pdf' target='_blank'>Week 2 - Data Types and Functions</a><br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/21b78fbe973d43a599fbf79dd94f8aa51d' target='_blank'>Revision Video 1</a>)<br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/7aae664dcbf94eb28fe13a6ed93f24221d' target='_blank'>Revision Video 2</a>)","","","0","0",],
["0","","","","","0","0",],
["4","Thurs 15:00-18:00<br/>MVB2.11/1.15","Types, Parentheses, and Inhabitants","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet01.pdf","","3","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["5","(optional)","History of Haskell","","","7","2",],
["6","Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley","<a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week3.pdf' target='_blank'>Week 3 - Evaluation, Currying, Cases, and Recursion</a><br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/6ec18e18e6814510b259e151366aecee1d' target='_blank'>Revision Video 1</a>)<br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/2da7d7439ebe40189e8e211a36208bee1d' target='_blank'>Revision Video 2</a>)","","","9","1",],
["7","in your own time","","","","10","8",],
["4","Thurs 15:00-18:00<br/>MVB2.11/1.15","Evaluation and Guards","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet02.pdf","","18","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley","<a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week4.pdf' target='_blank'>Week 4 - Modelling, Datatypes, and Testing</a><br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/4361b923603143a18bdd32f7bfe710671d' target='_blank'>Revision Video 1</a>)<br/>(<a href='https://mediasite.bris.ac.uk/Mediasite/Play/c467dfea5fbb4d9a9fc73aea48f202ff1d' target='_blank'>Revision Video 2</a>)","","","22","1",],
["7","in your own time","","","","23","1",],
["4","Thurs 15:00-18:00<br/>MVB2.11/1.15","Pattern Matching","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet03.pdf","","24","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["8","Deadline: 13:00 Thurs 27/10/22<br/>(submit at least 1 hour early)","Power to the People","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","https://www.ole.bris.ac.uk/webapps/assignment/uploadAssignment?content_id=_7367855_1&course_id=_252989_1","28","2",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley","<a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week5.pdf' target='_blank'>Week 5 - Types and Constructors, Pattern Matching, and Lists</a>","","","30","1",],
["7","in your own time","","","","31","3",],
["4","Thurs 15:00-18:00<br/>MVB2.11/1.15","List and Property Testing","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet04.pdf","","34","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["9","(optional)","Structural Inductive Proofs","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheetBonus1.pdf","","38","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],

];

const files = [
["0","https://web.microsoftstream.com/video/17f0fbf7-461c-4cf1-937f-21e8407a137e","Guest seminar VOD: Haskell in the Datacentre",],
["1","https://mengwangoxf.github.io/Papers/NSR15.pdf","Paper: How functional programming mattered",],
["2","https://bristolpl.github.io/","Bristol PL Research Group",],
["3","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet01.pdf","sheet01.pdf",],
["4","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet01Dyslexic.pdf","sheet01Dyslexic.pdf",],
["5","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer01.pdf","answer01.pdf",],
["6","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer01Dyslexic.pdf","answer01Dyslexic.pdf",],
["7","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/HistoryOfHaskell.pdf","History of Haskell",],
["8","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/HowFPMattered.pdf","How Functional Programming Mattered",],
["9","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/code/week3.hs","week3.hs",],
["10","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Types.pdf","Types",],
["11","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/HaskellPoDs.pdf","Haskell PoDs",],
["12","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/DataConstructors.pdf","Data Constructors",],
["13","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Tuples.pdf","Tuples",],
["14","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/FunctionComposition.pdf","Function Composition",],
["15","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Branching.pdf","Branching",],
["16","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Guards.pdf","Guards",],
["17","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Laziness.pdf","Laziness",],
["18","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet02.pdf","sheet02.pdf",],
["19","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet02Dyslexic.pdf","sheet02Dyslexic.pdf",],
["20","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer02.pdf","answer02.pdf",],
["21","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer02Dyslexic.pdf","answer02Dyslexic.pdf",],
["22","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/code/card.hs","card.hs",],
["23","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/PatternMatching.pdf","Pattern Matching",],
["24","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet03.pdf","sheet03.pdf",],
["25","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet03Dyslexic.pdf","sheet03Dyslexic.pdf",],
["26","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer03.pdf","answer03.pdf",],
["27","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer03Dyslexic.pdf","answer03Dyslexic.pdf",],
["28","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","CW1-Instrs.pdf",],
["29","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/coursework/CW1/CW1-PowerToThePeople.zip","CW1-PowerToThePeople.zip",],
["30","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/code/week5.hs","week5.hs",],
["31","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Lists.pdf","Lists",],
["32","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/Maybe.pdf","Maybe",],
["33","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/notes/FunctionRecipe.pdf","Recipe for writing functions",],
["34","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet04.pdf","sheet04.pdf",],
["35","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheet04Dyslexic.pdf","sheet04Dyslexic.pdf",],
["36","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer04.pdf","answer04.pdf",],
["37","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answer04Dyslexic.pdf","answer04Dyslexic.pdf",],
["38","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheetBonus1.pdf","sheetBonus1.pdf",],
["39","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/sheetBonus1Dyslexic.pdf","sheetBonus1Dyslexic.pdf",],
["40","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answerBonus1.pdf","answerBonus1.pdf",],
["41","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/sheets/answerBonus1Dyslexic.pdf","answerBonus1Dyslexic.pdf",],

];

