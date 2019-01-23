# How do I get puppeteer to download a file?
This has been something that's been asked of in browserless, so it's now a first-class feature. The overview is:

- You POST a script of application/javascript to run.
- It takes care of making a temporary directory for just that script.
- It executes your script (goto a page, click something, whatever).
- It watches the pre-made temp directory for a file download.
- Once downloaded we resolve the request with that file (including an appropriate content-type).
- The temporary folder and file are deleted from disk.

https://docs.browserless.io/docs/download.html#docsNav
