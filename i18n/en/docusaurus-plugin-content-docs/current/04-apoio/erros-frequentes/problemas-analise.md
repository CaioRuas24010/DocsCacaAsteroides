---
sidebar_label: Analysis issues
sidebar_position: 3
---

# Problems related to image analysis

Here you will find a list of problems related to image analysis, including the steps of downloading images, marking asteroids, and reporting. If you are facing any issue related to image analysis, such as difficulties identifying asteroids, questions about the criteria for marking an object as an asteroid, or any other analysis-related matter, check the solutions below.

## When I click to mark an asteroid, nothing happens

Make sure *Data reduction* was successfully performed on the image. If *Data reduction* is not completed, the software will not be able to identify objects in the images, which may prevent you from marking asteroids.

To perform *Data reduction*, follow the instructions described in the [Opening images](i18n/en/docusaurus-plugin-content-docs/current/03-tutorial-pratico/abrir-imagens.md) section of the practical tutorial.

## When I mark an asteroid, the marking does not appear in the image

Make sure the *Select markings* option is configured correctly. To do this, follow the instructions described in the [Initial setup](../../02-comecando/configuracoes.md) section.

## The image package does not contain any asteroids

If an image package does not contain any object that meets the criteria to be considered an asteroid, a report must still be submitted. To do this, follow the instructions described in the [Submitting report](../../03-tutorial-pratico/enviar-relatorio.md) section of the practical tutorial, where there is a detailed step-by-step explanation of how to submit a report even when no asteroids are found in the images.

## I made an incorrect marking

If you marked an object and later realized that you clicked incorrectly or that the object does not meet the criteria to be considered an asteroid, unfortunately there is no way to undo the marking. What you can do, **if you are sure which marking is wrong**, is delete the incorrect line from the report before submitting it.

However, the safest option is to close the images, clear the report, and start the analysis of the image package again.

## I forgot to mark an asteroid

If you forgot to mark an asteroid and have already submitted the report, unfortunately there is no way to correct the submitted report. What you can do is try to contact the support team to check whether a correction to the report can still be accepted, but this is not guaranteed.

So always analyze the images very carefully to make sure you found all the asteroids present before submitting the report.

## There is no data in the nearby objects table (*Object Designation*)

This probably means that the MPCORB database was not downloaded correctly. To solve this:

- Close *Astrometrica* and open it again. Check whether the black window that appears shows any error message related to downloading MPCORB data. If there is any error, contact the support team for assistance.

- In the software settings, under the **Internet** tab, click **Download MPCORB** to try downloading the database again. After it finishes, close the software and open it again to check whether the problem has been resolved.

- The error may be related to the server connection, so check your internet connection and try again. Also try waiting a while and trying again, as it may be a temporary server issue.

## I clicked to mark an asteroid and got a *Floating point error*

You probably clicked on a gray area of the image, that is, an area where there is no data. To avoid this, make sure you only click on areas where there is data, meaning where objects are visible. **Never try to predict the position of an object that you believe to be an asteroid by clicking on an area where there is no data.**

## A moving object does not appear in all images

The minimum number of appearances required to catalog an object as an asteroid is that it must appear in at least 3 of the 4 images. If an object moves but does not appear in at least 3 images, this may indicate that the object is not an asteroid or that there is some issue with the images, so do not try to report that object. **Never try to predict the position of an object that you believe to be an asteroid by clicking on an area where there is no data.**