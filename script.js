let mainContainer;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("heartContainer");
    mainContainer = document.querySelector('.mainContainer');  // Assuming you have a mainContainer element

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
        picThirteen: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
        picFourteen: { animation: "slide-left 0.5s ease", translateX: "400px", translateY: "10px" },
        picFifteen: { animation: "slide-left 0.5s ease", translateX: "480px", translateY: "10px" },
        picSixteen: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picSeventeen: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picNineteen: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
        picTwenty: { animation: "slide-left 0.5s ease", translateX: "400px", translateY: "10px" },
        picTwentyOne: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picTwentyThree: { animation: "slide-left 0.5s ease", translateX: "322px", translateY: "10px" },
    };

    // Function to reset all pictures to their original state
    window.resetPictures = function() {  // Make the function global by attaching it to `window`
        const pictureElements = container.querySelectorAll(".pictures");
        pictureElements.forEach(picture => {
            picture.classList.remove('moved'); // Remove the "moved" class
            picture.style.animation = ''; // Reset animation
            picture.style.transform = ''; // Reset position
            picture.style.display = 'flex'; // Reset display style

            // Smoothly shrink the picture while sliding back
            picture.style.transform = ''; // Reset transform
            picture.style.width = '30px'; // Shrink width (transitioned smoothly)
            picture.style.height = '30px'; // Shrink height (transitioned smoothly)
        });

        mainContainer.style.visibility = 'hidden'; // Hide the main container
    };

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

                    // If it's already moved, do not reset it when clicked
                    if (picture.classList.contains('moved')) {
                        return; // If it's already moved, don't reset
                    } else {
                        // Apply new transformations (slide and resize)
                        picture.classList.add('moved'); // Mark as moved
                        picture.style.animation = transform.animation;
                        picture.style.transform = `translateX(${transform.translateX}) translateY(${transform.translateY})`;

                        picture.style.width = '100px';  // Enlarge
                        picture.style.height = '100px'; // Enlarge

                        picture.style.display = 'absolute';
                        picture.style.top = '200px';

                        // Correctly reference the container to show it
                        mainContainer.style.visibility = "visible"; // Make the container visible
                    }

                    picture.style.animation = ""; // Remove animation to prevent repeating

                    // Once animation ends, apply the final position and stop animation
                    picture.addEventListener("animationend", function () {
                        picture.style.height = '100px';
                        picture.style.width = '100px';
                    }, { once: true });
                }
            });
        }
    }

    // Add event listener to the container to catch clicks on the pictures
    container.addEventListener("click", handleBoxClick);
});

const text1 = "prepared text string, ready to be inserted into the paragraph.";

        const text = "This is a prepared text string, ready to be inserted into the paragraph.";
        function flipCard() {
            const theCard = document.getElementById('theCard');
            theCard.classList.toggle('flipped'); // Toggle the "flipped" class
        }

        function setFrontImage(imageUrl) {
            const theFront = document.getElementById('theFront');
            theFront.style.backgroundImage = `url(${imageUrl})`; // Set the background image
            theFront.style.backgroundSize = 'cover'; // Ensure the image covers the entire front
            theFront.style.backgroundPosition = 'center'; // Center the image
        }
        function hideMainContainer() {
            const container = document.querySelector('.mainContainer');
            container.classList.add('hidden'); // Apply the hidden class for pixelation and opacity
            container.classList.remove('visible'); // Ensure it's hidden
        }
        
        // Function to show the main container with smooth entrance
        function showMainContainer() {
            const container = document.querySelector('.mainContainer');
            container.classList.remove('hidden'); // Remove the hidden class
            container.classList.add('visible'); // Apply the visible class for smooth entrance
        }


        let pixelToTurnRed = null; // Initialize as null since it will hold the element reference

        function pixel(pixelIndex) {
            pixelToTurnRed = document.getElementById(pixelIndex); // Get the div element by its ID
        }

        function pixelToRed() {
            if (pixelToTurnRed) { // Check if pixelToTurnRed has been set
                pixelToTurnRed.classList.add('red'); // Add the 'red' class to change background color
                pixelToTurnRed.style.backgroundImage = ''; // Remove the background image
            } else {
                alert('No pixel selected!');
            }
        }
        function putMessages(indexValue) {
            // Define the messages
            const picOneM = "In a world where everything moves so fast, it's easy to forget the simple things that make life beautiful. But then, I think of you, and everything slows down. You are my peace, my calm in the chaos, and my reason to smile every day. I feel so incredibly lucky to have you by my side, to share the little moments, the laughter, and even the quiet silences. You're not just the love of my life, you're my best friend, my partner, and my everything. Thank you for being you, for all the ways you make my world brighter, and for loving me like you do.";
            const picTwoM = "There are so many things I could say, but none of them feel like they can truly capture how much you mean to me. Every time I look into your eyes, I see a future filled with endless possibilities, a future that I can’t wait to experience with you. With every word you speak, my heart beats a little faster. With every touch, I feel like I’m exactly where I’m meant to be. You are my safe place, my home, and I want nothing more than to keep building this beautiful life together, one day at a time.";
        
            // Get the textDisplay element
            const textDisplay = document.getElementById('textDisplay');
        
            // Use the value passed (picOneM, picTwoM) to display the correct message
            if (indexValue === 'picOneM') {
                textDisplay.textContent = picOneM;
            } else if (indexValue === 'picTwoM') {
                textDisplay.textContent = picTwoM;
            }
        }
        

        

        


