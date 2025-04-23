const my_array =[
    "When you scroll I script, when you sleep I ship - Brian Kamau",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
    "Code never lies, comments sometimes do. – Ron Jeffries",
    "Fix the cause, not the symptom. -- Steve Maguire",
    "The best way to predict the future is to invent it. --  Alan Kay",
    "In order to be irreplaceable, one must always be different. -- Coco Chanel",
    "Learning to write programs stretches your mind, and helps you think better. -- Bill Gates",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.  -- Edsger Dijkstra",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. -- Dan Salomon",
    "To iterate is human, to recurse divine. – L. Peter Deutsch",
    "Good code is its own best documentation. – Steve McConnell",
    "Technology is best when it brings people together. – Matt Mullenweg",
    "Software is a great combination between artistry and engineering. – Bill Gates",
    "Everybody in this country should learn to program a computer because it teaches you how to think. – Steve Jobs",
    "You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.",
    "Computers are good at following instructions, but not at reading your mind. – Donald Knuth",
    "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses. – Bjarne Stroustrup",
    "A good programmer looks both ways before crossing a one-way street. – Doug Linder",
    "I think it’s fair to say that personal computers have become the most empowering tool we’ve ever created. – Bill Gates",
    "A user interface is like a joke. If you have to explain it, it’s not that good.",
    "The computer was born to solve problems that did not exist before.",
    "Any product that needs a manual is broken. – Elon Musk",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. – Bill Gates",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. – Mosher’s Law",
    "The function of good software is to make the complex appear simple.",
    "Great software is not built with 1000 features, but with 1000 decisions. – Jack Dorsey",
    "Indentation in Python isn’t a bug, it's a discipline. – Brian Kamau",
    "Python is where simplicity meets power. – Brian Kamau",
    "Every Python function starts with def, just like every coder starts with a dream. – Brian Kamau",
    "In Python, whitespace isn’t empty—it’s full of meaning. – Brian Kamau",
    "Coding in Python feels like writing poetry that runs. – Brian Kamau"

]

const usedIndexes = new Set()
const quote_text = document.getElementById("quote_text")

function generateQuote(){

    if (usedIndexes.size === my_array.length){
        alert("You have seen all the Qoutes.Restating..")
        usedIndexes.clear();
    }

   

   const random_index = Math.floor(Math.random() * my_array.length)
   const the_quote = my_array[random_index]
   quote_text.innerHTML = the_quote;
}