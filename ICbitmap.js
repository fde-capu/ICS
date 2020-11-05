var data=[  
		"0000001000011000101000111001001011001101001111010101110110111111",		
		"0000010000110001010001110010010110011010011110101011101101111110",
		"0000100001100010100011100100101100110100111101010111011011111100",
		"0000111111000010001100010111101110011101001101100100101011010100",
		"0001000101000011000111001001011001101001111010101110110111111000",
		"0001010100010000110101101100011101001011100100110011110111111000",
		"0001100011100001000101100110110100111100100101011101111110101000",
		"0001111110001100001000101111011100111010011011001001010110101000",
		"0010001001010000101100011001101001110000001111010101110110111111",
		"0010010001010011001011000110100001110011110101011101101111110000",
		"0010101001011010111010001001101100100001100011100111101111110000",
		"0010110110010101110111101010010011010001000011000111001111110000",
		"0011001101100011100100111100001000101101001010111011111101010000",
		"0011011010110011000111011100101111010011111100001010100010010000",
		"0011100111100011001001101110110000100010111111010010101101010000",
		"0011111100111000110010011011110110000100010111010010101101010000",
		"0100000010001010010011000011010101100101110001110110111100111111",
		"0100010000101001001100011010101100101110000001110110111100111111",
		"0100100110010100010000101100011010101110011101101111000000111111",
		"0100110011100100101000110101011000100001111000000101110110111111",
		"0101001010110100010111011001001101111001110001100001000000111111",
		"0101010010110101110100010011011001000011000111001111011111100000",
		"0101101100101110111101010010011010001000011000111001111110000001",
		"0101111110111010110110010101001001111001101000100001110001100000",
		"0110000001100110110100001000111000101110111100100111111010100101",
		"0110011000110110100111001001011101111000011111101010001000000101",
		"0110101011011001100011101001111011100101000101111110000100100000",
		"0110110101100110001110111001011110100111111000010101000100100000",
		"0111001110111100011111101001100100101100001101101010001000000101",
		"0111011100111101011111100011011010011001011000010101000100100000",
		"0111101111110011101011100011011010011001011000010101000100100000",
		"0111111011110011101011100011011010011001011000010101000100100000",
		"1000000100001100010100011100100101100110100111101010111011011111",
		"1000010000001100010100011100100101100110100111101010111011011111",
		"1000100011000010100000011100100101100110100111101010111011011111",
		"1000110001000011100000010110011011010011110010010101110111111010",
		"1001001010011001110001000110100001011000000111101010111011011111",
		"1001010100100110011100010110000100011010111010000001111011011111",
		"1001100111001001011000110110100010000111100000010101110111111010",
		"1001111110011001001011110111000111010001000011011000000101011010",
		"1010000001000101001001101010110110000110010111011110001110011111",
		"1010010011010001000010101101100101110111100111000110000001111110",
		"1010101101001010001011101100100110111100111000110000100000011111",
		"1010110101001011101000100110110010000110001110011110111111000000",
		"1011001100011011010111001010100111011110000111111010001001000000",
		"1011011001101011101111010011100101010001100010010000111111000000",
		"1011101111010110110011100101010011010001111110001001000011000000",
		"1011111101110101101100111100101010011010001110001001000011000000",
		"1100000011000111001101100100001001111011101000101101010010101111",
		"1100011000011100110110010001001111011101000000101101010010101111",
		"1100100101001100111000100011010000101100000011110101011101101111",
		"1100110010011100011011000011110111010010110101000100000010101111",
		"1101001001101010001000010101101100101110111100111000110000001111",
		"1101010110100101000101110110010011011110011100011000010000001111",
		"1101101110101100110100111001011110001100001010100010010000001111",
		"1101110110101111010011100110010110001111110000101010001001000000",
		"1110000001110011110111010000100011000101100100110110101001010111",
		"1110011100011110111010011001001011000011011010100010000001010111",
		"1110101011101111001010010011100010110100011011001100001000000111",
		"1110111010111100111000110110100110010110000101010001001000000111",
		"1111000000111101110011101000010001100010110010011011010100101011",
		"1111011110011101011100011011010011001011000010101000100100000011",
		"1111101111001110101110001101101001100101100001010100010010000001",
		"1111110111100111010111000110110100110010110000101010001001000000"
];


document.write('<canvas id="canvas1" width="64", height="64"></canvas>');

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

element = document.getElementById("canvas1");
c = element.getContext("2d");

// read the width and height of the canvas
width = element.width;
height = element.height;

// create a new pixel array
imageData = c.createImageData(width, height);

// draw random dots
for (i = 0; i < 64; i++) {
    sh=data[i];
	while(sh.length){
		if(sh.charAt(0)=="1"){
			setPixel(imageData, i, sh.length-1, 255, 255, 255, 255); // 255 opaque
		}else{
			setPixel(imageData, i, sh.length-1, 0, 0, 0, 0); // 255 opaque
		}
		sh=sh.substring(1);
	}
}

// copy the image data back onto the canvas
c.putImageData(imageData, 0, 0); // at coords 0,0
//c.putImageData(imageData, 0, 64); // at coords 0,0
//c.putImageData(imageData, 0, 128); // at coords 0,0
//c.putImageData(imageData, 0, 192); // at coords 0,0

//c.putImageData(imageData, 64, 0); // at coords 0,0
//c.putImageData(imageData, 64, 64); // at coords 0,0
//c.putImageData(imageData, 64, 128); // at coords 0,0
//c.putImageData(imageData, 64, 192); // at coords 0,0

//c.putImageData(imageData, 128, 0); // at coords 0,0
//c.putImageData(imageData, 128, 64); // at coords 0,0
//c.putImageData(imageData, 128, 128); // at coords 0,0
//c.putImageData(imageData, 128, 192); // at coords 0,0

//c.putImageData(imageData, 192, 0); // at coords 0,0
//c.putImageData(imageData, 192, 64); // at coords 0,0
//c.putImageData(imageData, 192, 128); // at coords 0,0
//c.putImageData(imageData, 192, 192); // at coords 0,0
