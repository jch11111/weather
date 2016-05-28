var random = (function() {

    var quotes = [
"You miss 100% of the shots you don’t take. –Wayne Gretzky",
"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan",
"The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",
"Every strike brings me closer to the next home run. –Babe Ruth",
"Definiteness of purpose is the starting point of all achievement. –W. Clement Stone",
"Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse",
"Life is what happens to you while you’re busy making other plans. –John Lennon",
"We become what we think about. –Earl Nightingale",
"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. –Mark Twain",
"Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll",
"The most common way people give up their power is by thinking they don’t have any. –Alice Walker",
"The mind is everything. What you think you become.  –Buddha",
"The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
"An unexamined life is not worth living. –Socrates",
"Eighty percent of success is showing up. –Woody Allen",
"Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs",
"Winning isn’t everything, but wanting to win is. –Vince Lombardi",
"I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey",
"Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso",
"You can never cross the ocean until you have the courage to lose sight of the shore. –Christopher Columbus",
"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. –Maya Angelou",
"Either you run the day, or the day runs you. –Jim Rohn",
"Whether you think you can or you think you can’t, you’re right. –Henry Ford",
"The two most important days in your life are the day you are born and the day you find out why. –Mark Twain",
"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. –Johann Wolfgang von Goethe",
"The best revenge is massive success. –Frank Sinatra",
"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. –Zig Ziglar",
"Life shrinks or expands in proportion to one’s courage. –Anais Nin",
"Certain things catch your eye, but pursue only those that capture the heart. – Ancient Indian Proverb",
"Believe you can and you’re halfway there. –Theodore Roosevelt",
"Everything you’ve ever wanted is on the other side of fear. –George Addair",
"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. –Plato",
"Teach thy tongue to say, “I do not know,” and thous shalt progress. –Maimonides",
"Start where you are. Use what you have.  Do what you can. –Arthur Ashe",
"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life. –John Lennon",
"Fall seven times and stand up eight. –Japanese Proverb",
"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. –Helen Keller",
"Everything has beauty, but not everyone can see. –Confucius",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. –Anne Frank",
"When I let go of what I am, I become what I might be. –Lao Tzu",
"Life is not measured by the number of breaths we take, but by the moments that take our breath away. –Maya Angelou",
"Happiness is not something readymade.  It comes from your own actions. –Dalai Lama",
"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. –Sheryl Sandberg",
"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. –Aristotle",
"If the wind will not serve, take to the oars. –Latin Proverb",
"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. –Unknown",
"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. –Marie Curie",
"Too many of us are not living our dreams because we are living our fears. –Les Brown",
"Challenges are what make life interesting and overcoming them is what makes life meaningful. –Joshua J. Marine",
"If you want to lift yourself up, lift up someone else. –Booker T. Washington",
"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. –Leonardo da Vinci",
"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. –Jamie Paolinetti",
"You take your life in your own hands, and what happens? A terrible thing, no one to blame. –Erica Jong",
"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. –Bob Dylan",
"I didn’t fail the test. I just found 100 ways to do it wrong. –Benjamin Franklin",
"In order to succeed, your desire for success should be greater than your fear of failure. –Bill Cosby",
"A person who never made a mistake never tried anything new. – Albert Einstein",
"The person who says it cannot be done should not interrupt the person who is doing it. –Chinese Proverb",
"There are no traffic jams along the extra mile. –Roger Staubach",
"It is never too late to be what you might have been. –George Eliot",
"You become what you believe. –Oprah Winfrey",
"Dream big and dare to fail. –Norman Vaughan",
"Our lives begin to end the day we become silent about things that matter. –Martin Luther King Jr.",
"Do what you can, where you are, with what you have. –Teddy Roosevelt",
"If you do what you’ve always done, you’ll get what you’ve always gotten. –Tony Robbins",
"Dreaming, after all, is a form of planning. –Gloria Steinem",
"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. –Mae Jemison",
"You may be disappointed if you fail, but you are doomed if you don’t try. –Beverly Sills",
"Remember no one can make you feel inferior without your consent. –Eleanor Roosevelt",
"Life is what we make it, always has been, always will be. –Grandma Moses",
"The question isn’t who is going to let me; it’s who is going to stop me. –Ayn Rand",
"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. –Henry Ford",
"It’s not the years in your life that count. It’s the life in your years. –Abraham Lincoln",
"Change your thoughts and you change your world. –Norman Vincent Peale",
"Either write something worth reading or do something worth writing. –Benjamin Franklin",
"Nothing is impossible, the word itself says, “I’m possible!” –Audrey Hepburn",
"The only way to do great work is to love what you do. –Steve Jobs",
"If you can dream it, you can achieve it. –Zig Ziglar"];


    var init = function () {
        $(function() {
            showQuote();
            $("button").click(function() {
                button_click();
            });
            $("#divTweet a").click(function() {
                divTweet_click();
            });
        })
    };

    function button_click() {
        showQuote();
    }

    function divTweet_click() {
        var twitterUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#divQuote").text());
        window.open(twitterUrl);
    }

    function showQuote() {
        $.when($("#divQuote").fadeOut("fast"))
        .then
        (
            function () {
                $("#divQuote").text(getQuote());
                $("#divQuote").fadeIn("slow")
            }
        );
    }

    function getQuote() {
        var numberOfQuotes = quotes.length;
        var randomQuoteIndex = getRandomNumber(0, numberOfQuotes - 1);
        return quotes[randomQuoteIndex];

    }

    function getRandomNumber(minVal, maxVal) {
        var numberOfPossibleValues = (maxVal + 1) - minVal;
        return Math.floor(Math.random() * numberOfPossibleValues) + minVal;
    }


    return {
        init: init
    };

}());

random.init();
