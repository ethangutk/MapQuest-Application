<h6 >
	<a href="https://github.com/ethangutknecht">↩ Back To Ethan Gutknecht's Profile</a>
</h6>

<h1 align="center">🗺 MapQuest Application</h1><br>
<table align="center">
	<tr>
		<th>
			Directory
		</th>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ethangutknecht/MapQuest-Application#-about-the-class">🎓  About The Class</a><br><br>
			<a href="https://github.com/ethangutknecht/MapQuest-Application#%E2%84%B9-about-the-application">ℹ About The Application</a><br><br>
			<a href="https://github.com/ethangutknecht/MapQuest-Application#-the-features-of-the-web-application">🛣 The Features Of The Web Application</a>
			<ul>
				<li><a href="https://github.com/ethangutknecht/MapQuest-Application#-mapquests-api">🚌 MapQuest’s API</a></li>
				<li><a href="https://github.com/ethangutknecht/MapQuest-Application#-html5">🚕 HTML5</a></li>
				<li><a href="https://github.com/ethangutknecht/MapQuest-Application#-bootstrap-and-css">🚂 Bootstrap and CSS</a></li>
				<li><a href="https://github.com/ethangutknecht/MapQuest-Application#-ajax-and-jquery">✈ AJAX and JQuery</a></li>
				<li><a href="https://github.com/ethangutknecht/MapQuest-Application#-sql-lite-and-php-lite">🚢 SQL-Lite and PHP-Lite</a></li>
			</ul>
			<a href="https://github.com/ethangutknecht/MapQuest-Application#-the-full-web-application">🏁 The Full Web Application</a><br><br>
		</td>
  	</tr>
</table><br>

## 🎓 About The Class
#### CSE383 - Web Application Development
I took this during my junior year of college in the fall of 2021. This 15-week course went over 15 different topics and explored all of the fundamental ideas of a web application—everything from HTML, CSS, JavaScript, EC2 instances, PHP, and more. The course allowed me to dive headfirst into what web development is. Late in the class is when all the topics started to come together. After that, we started applying everything we knew and made a new web application every week.


<br><br><br>
## ℹ About The Application
This project that I’m featuring here was my final project for the course. We had to make a great-looking web application using everything that we learned up to the end of the class. The class took an extensive amount of time out of my final weeks of the semester, but I am pleased with how it turned out. This project, in particular, got me to be good at understanding Bootstrap and CSS. In addition, it jump-started my interest in building my website and buying my domain. Overall, I ended up getting a 95% on the project and missing some points for the style of my website. Everything about this project I can successfully say describes my knowledge in this area within computer science; I very much enjoyed developing this.

<br><br><br>
## 🛣 The Features Of The Web Application
### 🚌 MapQuest’s API
<b>APIs Used:</b>
<ul>
	<li><a href="https://developer.mapquest.com/documentation/directions-api/route/get/">MapQuest’s Directions API</a></li>
<li><a href="https://developer.mapquest.com/documentation/open/elevation-api/elevation-chart/get/">MapQuest’s Open Elevation API</a></li>
</ul>
<b>I can say pretty proudly that I love working with APIs</b>. I have worked with APIs in only two classes at Miami University, but they take a front-end application to an amazing new level. In this API that we used, mapquest provided us with some great data to work with and integrate into our web application. I’ll give you the rundown. The user can input two different addresses on a form. Those addresses will query two different APIs. One of the APIs gets a JSON object of the directions between the two addresses, and the other gets an elevation change between the directions. Honestly, this stuff is pretty cool.<br><br>

Now let’s get into the specifics. I presented the user with a form that they could fill out. It has three different fields allowing the user to input a street address, city, and state. The state is a drop-down box of all 50 states to prevent errors when calling the API.<br><br>

![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/DirectionsPage1.png?raw=true)

<br><br>
When you press "Get Directions,” I would say 90% of the program’s code is working in the background. Let's break it down. First, it takes the six input fields that the user decided on and turns them into an API call to MapQuest. An example API call <a href="http://www.mapquestapi.com/directions/v2/route?key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48&from=Clarendon%20Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA">might look something like this.</a> This is a JSON object. In simple terms, think of it as asking MapQuest to reach into their filing cabinet for specific information, and they give it to us as a file, a JSON file. Yes, unformatted looks very scary, but this holds all the data we need to put on our web page. This JSON object holds stuff like the street signs, are we entering a national park, how far until our next maneuver, is their construction, and so much more. I won't get into my specific API call, but I modified it to look better on my web page, like making the maps be dark grey rather than white. <br>

Now that we have this object, we can look through and get the icon, distance, direction, map, and number for each maneuver the driver has to take to get to their destination. We are appending it to a table in HTML as we are doing this. Once finished with each maneuver, we display the total distance and time at the top of the page.<br><br>

![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/DirectionsPage3.png?raw=true)

<br><br>
At the bottom of the page, we display two more things. An overall map view between your destination and starting location is one of those things. This map required another API call using the same information that the user initially gave us. The second thing we display is an elevation chart between each maneuver. This chart collects all of the latitude and longitudes of each maneuver. It will take the latitudes and longitudes and call the above elevation chart API. This API, unfortunately, has a limit of how many inputs you can test. You can't get an elevation chart from New York to Los Angelos due to the limits on the API itself. <br><br>

![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/DirectionsPage4.png?raw=true)
<br><br>


### 🚕 HTML5
As any developer would create any webpage, I used HTML5 when developing this. There is not much to say here since this is the skeleton of the structure of each page. You can check it out in the source code.
<br><br>


### 🚂 Bootstrap and CSS
I never worked with Bootstrap or anything close to it before this class. I found how powerful and fast the tool is when creating a responsive, professional webpage. Bootstrap is what ties the whole application together. It allows my webpage to be responsive and collapse very quickly. An example of this is when I used the form from the directions page. As I shrink the web page, we see that the side-by-side form turns into one on top of the other form. Along with this, the top menu turns into a “hamburger,” where you can expand it by clicking it rather than the whole thing displayed.<br><br>

![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/DirectionsPage2.png?raw=true)
<br><br>

### ✈ AJAX and JQuery
Ah, the cool stuff. This stuff was pretty interesting to work with, especially since it was the first time I was introduced to it. I used AJAX to get me the JSON objects from the API calls. If MapQuest blew up, I had to code in a fail function, but most work is done pretty elegantly. When applying the JSON object’s data to the webpage, I used JQuery for the sole reason that it is easier than using standard javascript. I like that JQuery uses CSS selector magic and has pretty good error handling rather than doing it the old-fashioned way.
<br><br>

### 🚢 SQL-Lite and PHP-Lite
These two small, lightweight programs allowed me to expand my application further than anticipated. I used SQL-lite to hold all of the previous directions that my application computed. When you go to the "History" page, you can see what other people and yourself are getting searching. I stored this by also creating my API using PHP-Lite. I would save the directions as a JSON object in string form and all other information as to its field within the database. These two features work great together when in action.<br><br>

![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/SearchPage1.png?raw=true)
<br><br>

As you can see, the get requests button will access the SQL-Lite database of all the past requests. In addition, the results will be organized in order by the date of the request.

<br><br>
![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/SearchPage3.png?raw=true)
<br><br>

As you can see by this result, one request showed up. You can see the details of that request by clicking the more info button. The details will display every maneuver that the directions page initially displayed on the screen of the original person that searched for it.

<br><br>
![](https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/SearchPage4.png?raw=true)

<br><br><br><br>

- - - -

<br>

<p align="center">
  ... 📍 You have arrived at your destination 📍 ...
</p>

<br>

- - - -


<br><br><br><br>

## 🏁 The Full Web Application

<p align="center">
	<img src="https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/Final1.png?raw=true">
	<br><br>
	<img src="https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/Final2.png?raw=true">
	<br><br>
	<img src="https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/Final3.png?raw=true">
	<br><br>
	<img src="https://github.com/ethangutknecht/MapQuest-Application/blob/main/Images/Final4.png?raw=true">
</p>

<br><br><br>

- - - -
<h6 align="center">
	<a align="center" href="https://github.com/ethangutknecht/MapQuest-Application#-mapquest-application">⬆ Back To The Top </a>
</h6>

- - - -

<h6 align="center">
	<a href="https://github.com/ethangutknecht">↩ Back To Ethan Gutknecht's Profile</a>
</h6>

- - - -

<h6 align="center">
  Copyright © Ethan Gutknecht 2022
</h6>

