var CordovaExif = (function () {

	var Exif, FileHandle, BinaryImage;


	BinaryImage = function(imageBin) {
		var dataOffset = 0;


		this.getByteAt = function(imageOffset) {
			return imageBin.charCodeAt(imageOffset + dataOffset) & 0xFF;
		}

		this.getBytesAt = function(imageOffset, imageLength) {
			var bytesArray = [];

			for (var i = 0; i < imageLength; i++) {
				bytesArray[i] = imageBin.charCodeAt((imageOffset + i) + dataOffset) & 0xFF
			}

			return bytesArray;
		}

		this.getShortAt = function(imageOffset, binaryBigEndian) {
			var imageShort;

			if(binaryBigEndian){
				imageShort = (this.getByteAt(imageOffset) << 8) + this.getByteAt(imageOffset + 1);
			} else {
				imageShort = (this.getByteAt(imageOffset + 1) << 8) + this.getByteAt(imageOffset);
			}

			if (imageShort < 0){
				imageShort += 65536;
			}

			return imageShort;
		}

		this.getLongAt = function(imageOffset, binaryBigEndian) {
			var imageShort,
				imageByte1 = this.getByteAt(imageOffset),
				imageByte2 = this.getByteAt(imageOffset + 1),
				imageByte3 = this.getByteAt(imageOffset + 2),
				imageByte4 = this.getByteAt(imageOffset + 3);

			if(binaryBigEndian){
				imageShort = (((((imageByte1 << 8) + imageByte2) << 8) + imageByte3) << 8) + imageByte4;
			} else {
				imageShort = (((((imageByte4 << 8) + imageByte3) << 8) + imageByte2) << 8) + imageByte1;
			}

			if (imageShort < 0){
				imageShort += 4294967296;
			}

			return imageShort;
		}

		this.getSLongAt = function(imageOffset, binaryBigEndian) {
			var imageUnsignedLong = this.getLongAt(imageOffset, binaryBigEndian);

			if (imageUnsignedLong > 2147483647){
				imageUnsignedLong = (imageUnsignedLong - 4294967296);
			}

			return imageUnsignedLong;
		}

		this.getStringAt = function(imageOffset, imageLength) {
			var bytesArray,
				stringArray = [];

			bytesArray = this.getBytesAt(imageOffset, imageLength);

			for (var j=0; j < imageLength; j++) {
				stringArray[j] = String.fromCharCode(bytesArray[j]);
			}

			return stringArray.join('');
		}
	};

	return {};

})();
