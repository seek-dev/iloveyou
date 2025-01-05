document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("heartContainer");

    // Center the container using JavaScript by setting its position
    container.style.position = 'absolute';
    container.style.left = '50%';
    container.style.top = '50%';
    container.style.transform = 'translate(-50%, -50%)'; // This ensures centering

    // Define unique transformations for each picture (Left or Right movements)
    const transformations = {
        picOne: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picTwo: { animation: "slide-right 0.5s ease", translateX: "400px", translateY: "10px" },
        picThree: { animation: "slide-left 0.5s ease", translateX: "-480px", translateY: "10px" },
        picFour: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picFive: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picSix: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
        picSeven: { animation: "slide-left 0.5s ease", translateX: "400px", translateY: "10px" },
        picEight: { animation: "slide-left 0.5s ease", translateX: "480px", translateY: "10px" },
        picNine: { animation: "slide-left 0.5s ease", translateX: "-480px", translateY: "10px" },
        picTen: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picEleven: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
      //  picTwelve: { animation: "slide-left 0.5s ease", translateX: "362px", translateY: "-100px" },
        picThirteen: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
        picFourteen: { animation: "slide-left 0.5s ease", translateX: "400px", translateY: "10px" },
        picFifteen: { animation: "slide-left 0.5s ease", translateX: "480px", translateY: "10px" },

        picSixteen: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picSeventeen: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        
        picNineteen: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "-10px" },
        picTwenty: { animation: "slide-left 0.5s ease", translateX: "400px", translateY: "10px" },
        picTwentyOne: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picTwentyThree: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
    };

    // Function to reset all pictures to their original state
    function resetPictures() {
        const pictureElements = container.querySelectorAll(".pictures");
        pictureElements.forEach(picture => {
            picture.classList.remove('moved'); // Remove the "moved" class
            picture.style.animation = ''; // Reset animation
            picture.style.transform = ''; // Reset position
            picture.style.width = '30px'; // Reset width
            picture.style.height = '30px'; // Reset height
            picture.style.display = 'flex'; // Reset display style
        });
    }

    // Function to handle box clicks
    function handleBoxClick(event) {
        const clickedBox = event.target;

        // Only process clicks on elements with the "pictures" class
        if (clickedBox.classList.contains("pictures")) {
            // Apply the unique transformations for each picture
            const pictureElements = container.querySelectorAll(".pictures");

            pictureElements.forEach(picture => {
                const picId = picture.id;

                // If the picture is clicked again, reset its state and apply new transformations
                if (transformations[picId]) {
                    const transform = transformations[picId];

                    // If it's already moved, reset the picture
                    if (picture.classList.contains('moved')) {
                        picture.classList.remove('moved');
                        picture.style.animation = ''; // Reset animation
                        picture.style.transform = ''; // Reset position
                        picture.style.width = '30px'; // Reset size
                        picture.style.height = '30px'; // Reset size
                    } else {
                        // Apply new transformations
                        picture.classList.add('moved'); // Mark as moved
                        // Apply the animation style (CSS animation)
                        picture.style.animation = transform.animation;
                        picture.style.transform = `translateX(${transform.translateX}) translateY(${transform.translateY})`;
                        picture.style.height = '100px';
                        picture.style.width = '100px';
                        picture.style.display = 'absolute';
                        picture.style.top = '200px';

                    picture.style.animation = ""; // Remove animation to prevent repeating

                        // Once animation ends, apply the final position and stop animation
                        picture.addEventListener("animationend", function () {
                            picture.style.height = '100px';
                            picture.style.width = '100px';
                        }, { once: true });
                    }
                }
            });
        }
    }

    // Add event listener to the container to catch clicks on the pictures
    container.addEventListener("click", handleBoxClick);
});
