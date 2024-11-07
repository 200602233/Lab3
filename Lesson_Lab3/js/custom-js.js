// dont style the whole web with JS


/*
Brianna C - 200602233
    Lab 3:
        1. Send welcome message to console
        2. add new row of MAIN content
        3. new row should contain
             i) contain h element
            ii) new paragraph
           iii) image
       4. Add styling to new content !
*/



// first thing we are going to do is make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{  //all java in this section




    //now test to see if our JS is connected
    console.log('Welcome to the Console!');                                                         //Lab 3: 1. Welcome Text

    //!! Lab 3 Code !!
    document.getElementById("main").innerHTML =
        "<section>" +
        "<h2> Lab 3 H element </h2>" +                                                                    // 3. i) add H element
        "<p> Paragraph for Lab 3 blah blah blahhhh fnduiudfugsd eyfg bdshf bebfsbfbshdbhf shdb" +
        "fhdfehfuheuhfuhuehf uehufhushfuhdufu efhushuhdfuhuiehushudhfuhe ushfuheuhsufhuehsufh </p>" +     // 3. ii) paragraph
        "</section>" + "<section>"+
        "<div id='robot-container'>" +
        "<a href='index.html'>" +
        "<img id='littleRobot' src='./img/cuterobot.jpeg' alt='robot image'>" +                              // 3. iii) image
        "</a>" +
        "</div>" +
        "</section>";

    document.getElementById("main").style.cssText =                                           //4. Stylingg
        "display: flex; height: 250px; background-color: #AD46A3; color: #eaeaea;";
        document.getElementById("robot-container").style.cssText =
       "flex-grow: 1; width: auto; height: 200px;";
    document.getElementById("littleRobot").style.cssText =
        "width: auto; height: 100%;";

    // END of Lab 3 Code




//Class Code:

   //now we will look at how to declare a variable in JS
    let a = 200;
    let b = 180;
    let c = a + b;
    //the const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 =600;
    let total = value1 + value2;

    //now let's look at how we can output our HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variable</h4>" + "<p>Let: The value of C is " + c + "</p>" + "<p>Const: The total is: " + total + "</p>";
    // ^^^  start with "" for string because ' is proper grammer so it will mess

    //now that we can't see our HTML ... Let's style it with JS !
    document.getElementById("ex1").style.color = "#f8f8f8";      //color text in an off-white to pop on aside
    document.getElementById("ex1").style.padding = "0px 10px";   // add padding to make it not so close to sides


    //create our global header - may wanna use on project can use getELementsbyClass by he prefers ID
    //dont use lesson-global-header, MAKE YOUR OWN
    document.getElementById("lesson-global-header").innerHTML =
        "<div id = 'logo-container'>" +
            "<a href='index.html'>" +
                "<img id='logo' src='./img/logo.png' alt='Header Logo Image'>" +
            "</a>" +
        "</div>" +
        "<nav><menu>" +
            "<li><a href='#'>Item 1</a></li>" +
            "<li><a href='#'>Item 2</a></li>" +
            "<li><a href='#'>Item 3</a></li>" +
        "</menu></nav>";
    //target a bunch of different CSS -> use .style.cssText
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";
    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";

});
