# Making accessible icon buttons
The idea is to have the descriptive text inside of the `<button>` element while placing the Font Awesome class on the `<button>` itself. The `<span>` is set to be practically invisible by using a font-size of 0, a height of one pixel (to make VoiceOver happy). The rest is used to ensure the `<span>` never grows any larger.

In all browsers and screen readers mentioned in this post, the text "Email button" is announced using this pattern. The solution is something that makes the purist side of me very comfortable. You aren’t tempting fate by moving text offscreen yet the `<button>` element still has text inside of it. You don’t have to use ARIA to provide additional context for screen readers in this case.

```code
<style>
.btn-label {
   font-size: 0;
   height: 1px;
   overflow: hidden;
   display: block;
}
</style>
<button class="icon-envelope"><span class="btn-label">Email</span></button>
```
It is always a good to use anchor tag for links as it automatically become  keyboard accessible without specifying tabindex.

# ACCESSKEYS (accesskey=”A”)
They are a means for people to jump immediately to a specific part of an HTML page by pressing ALT (PC) or CTRL (Mac), followed by the appropriate key on the keyboard, as defined by you via an accesskey parameter. They’re particularly useful for people with mobility issues who don’t use a mouse and have a keyboard for their every movement on a computer. Accesskeys allow them quickly and easily to hop around the content of your Web pages. Able-bodied users can find them equally useful as shortcuts, too.

**Reference:**

1. http://www.sitepoint.com/accesskeys/
2. http://www.alistapart.com/articles/accesskeys/

# Tips
* ARIA: Accessible Rich Internet Application
* Major Screen Readers: JAWS, NVDA, VoiceOver
* roles: dialog, alertdialog
* Once tabIndex is set to -1, you can call focus() on the element just like any other focusable element. 


### WAI-ARIA Best Practices:
http://www.w3.org/TR/wai-aria-practices/#tabpanel

### Keyboard navigation:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets#Keyboard_navigation

### An Introduction to WAI-ARIA:
http://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance

### Color Blindness:
http://www.colourblindawareness.org/colour-blindness/living-with-colour-vision-deficiency/

### ARIA Tools:
* http://www.nvaccess.org/
* https://addons.mozilla.org/en-US/firefox/addon/fangs-screen-reader-emulator/
* http://wave.webaim.org/
* http://achecker.ca/checker/
* http://www.checkmycolours.com/
* http://trace.wisc.edu/peat/
* http://www.standards-schmandards.com/exhibits/rix/index.php