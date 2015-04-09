### When to use `<button>` element?
http://css-tricks.com/use-button-element/
Buttons can have content. If a button doesn’t have a meaningful href, it’s a `<button>`. But unfortunately outside of a context of form, a button is equally meaningless. But button feels better anyway. Alright, lets inert it with JavaScript then.

### When links make more sense
If there is any kind of href you could put on that link that makes sense, by all means, use an anchor. Even if you override that behavior with JavaScript. That's progressive enhancement at it's finest. For instance:
- A search button normally triggers a type-ahead ajax-search thingy - but the href could just point to a /search/ page.
- A publish button triggers the the next stage of publishing something a user built - but the href could just point to a /publish/ page.
- A thumbnail button opens a lightbox with a larger version - but the href could just point to the URL of that larger version.

**Note:** Be careful when marking up links with the button role. Buttons are expected to be triggered using the Space key, while links are expected to be triggered through the Enter key. In other words, when links are used to behave like buttons, adding role="button" alone is not sufficient. It will also be necessary to add a key event handler that listens for the Space key in order to be consistent with native buttons.

### A nicer color palette for the web
- NAVY: #001F3F
- BLUE: #0074D9
- AQUA: #7FDBFF
- TEAL: #39CCCC
- OLIVE: #3D9970
- GREEN:#2ECC40
- LIME:#01FF70
- YELLOW:#FFDC00
- ORANGE:#FF851B
- RED:#FF4136
- MAROON:#85144B
- FUCHSIA:#F012BE
- PURPLE:#B10DC9
- WHITE:#FFFFFF
- SILVER:#DDDDDD
- GRAY:#AAAAAA
- BLACK:#111111

### [Response time: 3 important limits](http://www.nngroup.com/articles/response-times-3-important-limits/)
- 0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result.
- 1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does lose the feeling of operating directly on the data.
- 10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer expects to be done. Feedback during the delay is especially important if the response time is likely to be highly variable, since users will then not know what to expect.
