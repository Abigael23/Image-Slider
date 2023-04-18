 let image = document.getElementById("image")
    index = 0;
    let imageArr = ["../abigael.jpg", "../3BT Series2-4.jpg",
        "../3BT.jpg", "../4Bedroom SD-2.jpg", 
        "../4Bedroom.jpg", "../3BT Series2-2.jpg"]
    image.src = imageArr[index]

        function next() {
           if (index == imageArr.length) {
            index = 0;
            image.src = imageArr[index];
            index++;
           } else {
            image.src = imageArr[index];
            index++;
           }
        }

        setInterval(() => {
            if (index == imageArr.length) {
                index = 0;
                image.src = imageArr[index];
                index++;
               } else {
                image.src = imageArr[index];
                index++;
               }
        }, 5000);

        function prev() {
            if (index <= 0) {
                index = imageArr.length;
                image.src = imageArr[length];
                index--;
            } else {
                image.src = imageArr[index];
                index--;
            }
        }

        setInterval(() => {
            if (index <= 0) {
                index = imageArr.length;
                image.src = imageArr[length];
                index--;
            } else {
                image.src = imageArr[index];
                index--;
            }
        }, interval);