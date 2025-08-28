### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById** - Through this we can access a specific tag or element through id. In this case, I can access only one element. If id name is not found then null output will be given.
**getElementsByClassName** - Through this, multiple elements of the same class name can be accessed in an array. If class name is not found then empty array will be returned.
**querySelector / querySelectorAll**
If I want to access another class or id or element inside a specific class or id, then **querySelector / querySelectorAll** will be used. Elements can access in an nodelist.
**querySelector** - Through this we can access the starting element. If not found then null output will be given.
**querySelectorAll** - Through this I can access all the elements. If not found then empty nodelist will be given.

2. How do you **create and insert a new element into the DOM**?

Suppose I have a section container whose id is main-container. At the beginning I will access that section container.
const mainContainer = document.getElementById('main-container');

Now Create a new div element into the DOM using createElement method.
const div = document.createElement('div');

Now insert a new div element into the DOM using appendChild method.
mainContainer.appendChild('div');

This way **create and insert a new element into the DOM**

3. What is **Event Bubbling** and how does it work?

**Event Bubbling** means that if I add events to all the elements in a section container, then if I click on the child element, then the events of the parent element above will also work.

That is, if you click on any of the elements of the section container in the browser, then the browser does not understand where you are clicking. The browser initially goes from top to bottom when it gets the target element and then bubbles and goes up and if there are more events added there they will also work. This is called **Event Bubbling**.

stopPropagation() is used to stop **Event Bubbling**
document.getElementById(id_name).addEventListener('click',function(e){
e.stopPropagation();
});

4. What is **Event Delegation** in JavaScript? Why is it useful?

**Event Delegation** I am trying to make the event work on the childNode but adding event to parentNode and this event will work for childNode.

**Event Delegation** is useful because using it we can find an object without running a loop. As a result, the performance of the website increases, the memory efficiency increases, the number of adding event listeners decreases.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault()** is use to stop page reload.
If we don't use type='button' in the button, then by default is assumed as submit button, so if we click in the button, the page reloads. **preventDefault()** is used to stop this page reload.
document.getElementById(btn_id_name).addEventListener('click',function(e){
e.preventDefault();
});

**stopPropagation()** is used to stop Event Bubbling.
document.getElementById(id_name).addEventListener('click',function(e){
e.stopPropagation();
});
