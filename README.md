# Cordova Exif

This plugin, is the simplest way to get exif data of images at Cordova platform (Phonegap)

## Getting Started

Import the source

```html
<script type="text/javascript" src="cordova-exif.js"></script>
```

Pass imageURI and get the object with EXIF information

```javascript
CordovaExif.readData(imageURI, function(exifObject) {
  console.log(exifObject);
});
```

## What is Exif?

Is a standard followed by manufacturers of digital cameras that record information about the technical conditions of image capture on the image file itself in the form of tagged metadata.

If you want know more about technical information, see these links:
- [Exif Standard 2.2](http://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf)
- [Description of Exif file format](http://www.media.mit.edu/pia/Research/deepview/exif.html)
- [Exif Tags](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html)


## Exif Data

![Image with Exif Data](http://i57.tinypic.com/21ahcoi.png)


## Complete Example

This example show how its simple get exif information of photo taken by a smartphone.

```javascript
var options = {
	quality: 90,
	sourceType: 2,
	destinationType: 1,
};

function onSuccess(imageURI) {
	CordovaExif.readData(imageURI, function(exifObject) {
		console.log(exifObject);
	});
};

function onFail(message) {
	console.log('Failed because: ' + message);
};

navigator.camera.getPicture(onSuccess, onFail, options);
```

## About

#### Who?
Created by [Guilherme Farias](http://guilhermefarias.com/), a web developer from Brazil.

#### License?
Cordova Exif is released under the terms of the [MIT license](https://github.com/guilhermefarias/CordovaExif/blob/master/MIT-LICENSE).
