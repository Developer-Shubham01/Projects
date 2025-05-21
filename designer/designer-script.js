let postArea = document.getElementById('postArea');

//Post
function setBackground(event) {
    let img = event.target.getAttribute('src');
    postArea.style.backgroundImage = `url(${img})`
};

function setBackgroundByChoice(event) {
    let img = prompt('Enter Image Url');
    postArea.style.backgroundImage = `url(${img})`
};

function BackgroundColor(event) {
    let color_value = event.target.getAttribute('value');
    postArea.style.backgroundColor = color_value;
};

function BackgroundColorByChoice(event) {
    let color_value = prompt('Enter Color');
    postArea.style.backgroundColor = color_value;
};

//Post>Background
function getBackgroundPanel() {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
                <header>
                    <i class="fa-solid fa-backward"></i>
                </header>
    
                <center>
                    <img src="https://img.freepik.com/free-vector/flat-blue-design-image-upload-landing-pages_23-2148274066.jpg?ga=GA1.1.144598626.1747157890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackgroundByChoice(event)">
                    <img src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?ga=GA1.1.561314937.1747483619&semt=ais_hybrid&w=740"
                        alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-vector/realistic-bokeh-background-design_921039-24385.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740"
                        alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-vector/gradient-luxury-background_23-2148999255.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-vector/realistic-neon-lights-background-design_1280668-1983.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-photo/top-wood-table-with-blurred-sea-palm-tree-background_34936-371.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-photo/beautiful-milky-way-with-stars-space-dust-night-sky_28586-65.jpg?ga=GA1.1.143527255.1747483956&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    
                </center>
    `;
    newSection.setAttribute('id', 'section1');
    let oldSection = document.getElementsByClassName('section1')[0];
    oldSection.replaceWith(newSection);

    let backIcon = newSection.children[0];
    backIcon.addEventListener('click', backAgain);
    function backAgain() {
        newSection.replaceWith(oldSection);
    };

};

//Post>Gradient
function getGradientPanel() {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
                <header>
                    <i class="fa-solid fa-backward"></i>
                </header>
    
                <center>
    
                    <img src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740"
                        alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-vector/shiny-vibrant-bokeh-lights-abstract-design_1017-25610.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740"
                        alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-vector/dark-wavy-colors-background_23-2148403785.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-vector/cosmic-nightfall-clean-spaceinspired-background_483777-588.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-photo/redblue-abstract-space-design-bright-blurred-background-beautiful-gradient-backdrop_694006-3809.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/premium-photo/blue-red-gradient-abstract-background-with-textured-grain-ideal-design-projects_229911-16296.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-vector/pink-background-with-purple-background-white-text-reading_483537-4573.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    <img src="https://img.freepik.com/free-photo/abstract-gradient-neon-lights_23-2149279169.jpg?ga=GA1.1.1621918011.1747487890&semt=ais_hybrid&w=740" alt="background_Image" onclick="setBackground(event)">
                    
                </center>
    `;
    newSection.setAttribute('id', 'section1');
    let oldSection = document.getElementsByClassName('section1')[0];
    oldSection.replaceWith(newSection);

    let backIcon = newSection.children[0];
    backIcon.addEventListener('click', backAgain);
    function backAgain() {
        newSection.replaceWith(oldSection);
    };

};

//Post>Size
function backgroundImageSize() {
    let currentElement = document.activeElement;
    let currentValue = document.activeElement.value;
    if (currentValue == '10') {
        postArea.style.backgroundSize = "10%";
        currentElement.value = 30;
        document.activeElement.textContent = 'Size-10'
    }

    else if (currentValue == '30') {
        postArea.style.backgroundSize = "30%";
        currentElement.value = 50;
        document.activeElement.textContent = 'Size-30'
    }
    else if (currentValue == '50') {
        postArea.style.backgroundSize = "50%";
        currentElement.value = 70;
        document.activeElement.textContent = 'Size-50'
    }
    else if (currentValue == '70') {
        postArea.style.backgroundSize = "70%";
        currentElement.value = 90;
        document.activeElement.textContent = 'Size-70'
    }
    else if (currentValue == '90') {
        postArea.style.backgroundSize = "90%";
        currentElement.value = 100;
        document.activeElement.textContent = 'Size-90'
    }

    else if (currentValue == '100') {
        postArea.style.backgroundSize = "100%";
        currentElement.value = 'cover';
        document.activeElement.textContent = 'Size-100'
    }

    else {
        postArea.style.backgroundSize = "cover";
        currentElement.value = 10;
        document.activeElement.textContent = 'Cover';
    };
};

//Post>Position
function backgroundPosition() {
    let currentElement = document.activeElement;
    let currentValue = currentElement.value;
    console.log(currentValue);

    if (currentValue == 'center') {
        postArea.style.backgroundPosition = "center";
        currentElement.value = 'left';
        currentElement.textContent = 'center';
    }
    else if (currentValue == 'left') {
        postArea.style.backgroundPosition = "left";
        currentElement.value = 'right';
        currentElement.textContent = 'left';
    }
    else if (currentValue == 'right') {
        postArea.style.backgroundPosition = "right";
        currentElement.value = 'top';
        currentElement.textContent = 'right';
    }
    else if (currentValue == 'top') {
        postArea.style.backgroundPosition = "top";
        currentElement.value = 'bottom';
        currentElement.textContent = 'top';
    }
    else {
        postArea.style.backgroundPosition = "bottom";
        currentElement.value = 'center';
        currentElement.textContent = 'bottom';
    }
};

//Post>color
function setBackgroundColor() {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
                <header>
                    <i class="fa-solid fa-backward"></i>
                </header>
    
                <center>
                    <span value="red" Style="background-image:linear-gradient(to left,blue,green,white,orange,red,black,grey);" onclick="BackgroundColorByChoice(event)"></span>
                    <span value="red" Style="background-color:red;" onclick="BackgroundColor(event)"></span>
                    <span value="RoyalBlue" Style="background-color:RoyalBlue;" onclick="BackgroundColor(event)"></span>
                    <span value="green" Style="background-color:green;" onclick="BackgroundColor(event)"></span>
                    <span value="blue" Style="background-color:blue;" onclick="BackgroundColor(event)"></span>
                    <span value="yellow" Style="background-color:yellow;" onclick="BackgroundColor(event)"></span>
                    <span value="purple" Style="background-color:purple;" onclick="BackgroundColor(event)"></span>
                    <span value="black" Style="background-color:black;" onclick="BackgroundColor(event)"></span>
                    <span value="crimson" Style="background-color:crimson;" onclick="BackgroundColor(event)"></span>
                    <span value="pink" Style="background-color:pink;" onclick="BackgroundColor(event)"></span>
                    <span value="grey" Style="background-color:grey;" onclick="BackgroundColor(event)"></span>
                    
                </center>
    `;
    newSection.setAttribute('id', 'section1');
    let oldSection = document.getElementsByClassName('section1')[0];
    oldSection.replaceWith(newSection);

    let backIcon = newSection.children[0];
    backIcon.addEventListener('click', backAgain);
    function backAgain() {
        newSection.replaceWith(oldSection);
    };

};

//Post>Repeat
function backgroundRepeat() {
    let currentElement = document.activeElement;
    let currentValue = currentElement.value;

    if (currentValue == 'repeat') {
        postArea.style.backgroundRepeat = 'repeat';
        currentElement.value = 'no-repeat';
        currentElement.textContent = "Repeat";
    }
    else {
        postArea.style.backgroundRepeat = 'no-repeat';
        currentElement.value = 'repeat';
        currentElement.textContent = "No-Repeat";
    }
};

//Title
function BackgroundColorHeadingByChoice(event){
    let color_value = prompt('Enter Color');
    document.getElementById('postHeading').style.backgroundColor = color_value;
};
//Title>Heading
function createHeading() {
    let heading = document.createElement('h1');
    heading.setAttribute('contenteditable', '');
    heading.setAttribute('id', 'postHeading');
    heading.textContent = "Title";
    postArea.append(heading);
};

//Alignment
function setHeadingAlignment(event) {
    let heading = document.getElementById('postHeading');
    let currentElement = event.target;
    let currentValue = currentElement.value;
    if (currentValue == 'center') {
        heading.style.textAlign = "center";
        currentElement.value = "left";
        currentElement.textContent = "center"
    }
    else if (currentValue == 'left') {
        heading.style.textAlign = "left";
        currentElement.value = "right";
        currentElement.textContent = "left"
    }
    else if (currentValue == 'right') {
        heading.style.textAlign = "right";
        currentElement.value = "justify";
        currentElement.textContent = "right"
    }
    else {
        heading.style.textAlign = "justify";
        currentElement.value = "center";
        currentElement.textContent = "justify"
    }
};

//Background
function SetHeadingBackground() {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
                <header>
                    <i class="fa-solid fa-backward"></i>
                </header>
    
                <center>
                    <span value="red" Style="background-image:linear-gradient(to left,blue,green,white,orange,red,black,grey);" onclick="BackgroundColorHeadingByChoice(event)"></span>
                    <span Style="background-color:red;" onclick="document.getElementById('postHeading').style.backgroundColor='red'"></span>
                    <span Style="background-color:yellow;" onclick="document.getElementById('postHeading').style.backgroundColor='yellow'"></span>
                    <span Style="background-color:black;" onclick="document.getElementById('postHeading').style.backgroundColor='black'"></span>
                    <span Style="background-color:green;" onclick="document.getElementById('postHeading').style.backgroundColor='green'"></span>
                    <span Style="background-color:teal;" onclick="document.getElementById('postHeading').style.backgroundColor='teal'"></span>
                    <span Style="background-color:hotpink;" onclick="document.getElementById('postHeading').style.backgroundColor='hotpink'"></span>
                    <span Style="background-color:blue;" onclick="document.getElementById('postHeading').style.backgroundColor='blue'"></span>
                    <span Style="background-color:purple;" onclick="document.getElementById('postHeading').style.backgroundColor='purple'"></span>
                    <span Style="background-color:gold;" onclick="document.getElementById('postHeading').style.backgroundColor='gold'"></span>
                    <span Style="background-image:url('https://img.freepik.com/free-vector/glass-plate-frame-glossy-window-glass-with-reflections-isolated-transparent-surface_90220-323.jpg?ga=GA1.1.1902662525.1747753875&semt=ais_hybrid&w=740');" onclick="document.getElementById('postHeading').style.backgroundColor='transparent'"></span>
                    
                </center>
    `;
    newSection.setAttribute('id', 'section1');
    let oldSection = document.getElementsByClassName('section1')[0];
    oldSection.replaceWith(newSection);

    let backIcon = newSection.children[0];
    backIcon.addEventListener('click', backAgain);
    function backAgain() {
        newSection.replaceWith(oldSection);
    };

};

//Height
function setHeadingHeight(event) {
    let heading = document.getElementById('postHeading');
    let height = prompt('Enter Height (digit only)');
    heading.style.height = height + 'px';
    event.target.textContent = 'Height ' + height + ' px';
};

//Width
function setHeadingWidth(event) {
    let heading = document.getElementById('postHeading');
    let width = prompt('Enter Width (digit only)');
    heading.style.width = width + 'px';
    event.target.textContent = 'Width ' + width + ' px';
};

//Margin
function setHeadingMargin(event) {
    let heading = document.getElementById('postHeading');
    let margin = prompt('Enter Margin (digit only)\nWrite as 2px 2px 2px 3\nUse any unit');
    heading.style.margin = margin + 'px';
    event.target.textContent = 'Margin ' + margin + ' px';
};

//Padding
function setHeadingPadding(event) {
    let heading = document.getElementById('postHeading');
    let padding = prompt('Enter Padding (digit only)\nWrite as 2px 2px 2px 3\nUse any unit');
    heading.style.padding = padding + 'px';
    event.target.textContent = 'Padding ' + padding + ' px';
};

//Size
function setHeadingFontSize(event) {
    let size = prompt('Enter Font Size (Digit Only)');
    document.getElementById('postHeading').style.fontSize = size + 'px';
    event.target.textContent = 'Size ' + size + ' px';
};

//Bold
function setHeadingFontWeight(event) {
    let currentElement = event.target;
    let currentValue = currentElement.value;

    if (currentValue == '100') {
        document.getElementById('postHeading').style.fontWeight = "100";
        currentElement.value = '200';
        currentElement.textContent = 'Bold-1';
    }
    else if (currentValue == '200') {
        document.getElementById('postHeading').style.fontWeight = "200";
        currentElement.value = '300';
        currentElement.textContent = 'Bold-2';
    }
    else if (currentValue == '300') {
        document.getElementById('postHeading').style.fontWeight = "300";
        currentElement.value = '400';
        currentElement.textContent = 'Bold-3';
    }
    else if (currentValue == '400') {
        document.getElementById('postHeading').style.fontWeight = "400";
        currentElement.value = '500';
        currentElement.textContent = 'Bold-4';
    }
    else if (currentValue == '500') {
        document.getElementById('postHeading').style.fontWeight = "500";
        currentElement.value = '600';
        currentElement.textContent = 'Bold-5';
    }
    else if (currentValue == '600') {
        document.getElementById('postHeading').style.fontWeight = "600";
        currentElement.value = '700';
        currentElement.textContent = 'Bold-6';
    }
    else if (currentValue == '700') {
        document.getElementById('postHeading').style.fontWeight = "700";
        currentElement.value = '800';
        currentElement.textContent = 'Bold-7';
    }
    else if (currentValue == '800') {
        document.getElementById('postHeading').style.fontWeight = "800";
        currentElement.value = '900';
        currentElement.textContent = 'Bold-8';
    }
    else {
        document.getElementById('postHeading').style.fontWeight = "900";
        currentElement.value = '100';
        currentElement.textContent = 'Bold-9';
    }
};

//Font
function setHeadingFontFamily(event) {
    let currentElement = event.target;
    let currentValue = currentElement.value;

    if (currentValue == 'cursive') {
        document.getElementById('postHeading').style.fontFamily = "cursive";
        currentElement.value = 'verdana';
        currentElement.textContent = 'cursive';
    }
    else if (currentValue == 'verdana') {
        document.getElementById('postHeading').style.fontFamily = "verdana";
        currentElement.value = 'Impact';
        currentElement.textContent = 'verdana';
    }
    else if (currentValue == 'Impact') {
        document.getElementById('postHeading').style.fontFamily = "Impact";
        currentElement.value = 'sans-serif';
        currentElement.textContent = 'impact';
    }
    else if (currentValue == 'sans-serif') {
        document.getElementById('postHeading').style.fontFamily = "sans-serif";
        currentElement.value = 'Oswald';
        currentElement.textContent = 'sans-serif';
    }
    else if (currentValue == 'Oswald') {
        document.getElementById('postHeading').style.fontFamily = "Oswald";
        currentElement.value = 'Lato';
        currentElement.textContent = 'Oswald';
    }
    else if (currentValue == 'Lato') {
        document.getElementById('postHeading').style.fontFamily = "Lato";
        currentElement.value = 'Montserrat';
        currentElement.textContent = 'Lato';
    }
    else {
        document.getElementById('postHeading').style.fontFamily = "Montserrat";
        currentElement.value = 'cursive';
        currentElement.textContent = 'Montserrat';
    }
};

//Color
function setHeadingFontColor(event) {
    let color = prompt('Enter Font colour ');
    document.getElementById('postHeading').style.color = color;
    event.target.textContent = color;
};





//Description
function BackgroundColorParaByChoice(event){
    let color_value = prompt('Enter Color');
    document.getElementById('postPara').style.backgroundColor = color_value;
};

//Description>Para
function createPara() {
    let para = document.createElement('p');
    para.setAttribute('contenteditable', '');
    para.setAttribute('id', 'postPara');
    para.textContent = "Description";
    postArea.append(para);
};

//Alignment
function setParaAlignment(event) {
    let para = document.getElementById('postPara');
    let currentElement = event.target;
    let currentValue = currentElement.value;
    if (currentValue == 'center') {
        para.style.textAlign = "center";
        currentElement.value = "left";
        currentElement.textContent = "center"
    }
    else if (currentValue == 'left') {
        para.style.textAlign = "left";
        currentElement.value = "right";
        currentElement.textContent = "left"
    }
    else if (currentValue == 'right') {
        para.style.textAlign = "right";
        currentElement.value = "justify";
        currentElement.textContent = "right"
    }
    else {
        para.style.textAlign = "justify";
        currentElement.value = "center";
        currentElement.textContent = "justify"
    }
};

//Background
function SetParaBackground() {
    let newSection = document.createElement('section');
    newSection.innerHTML = `
                <header>
                    <i class="fa-solid fa-backward"></i>
                </header>
    
                <center>
                    <span value="red" Style="background-image:linear-gradient(to left,blue,green,white,orange,red,black,grey);" onclick="BackgroundColorParaByChoice(event)"></span>
                    <span Style="background-color:red;" onclick="document.getElementById('postPara').style.backgroundColor='red'"></span>
                    <span Style="background-color:yellow;" onclick="document.getElementById('postPara').style.backgroundColor='yellow'"></span>
                    <span Style="background-color:black;" onclick="document.getElementById('postPara').style.backgroundColor='black'"></span>
                    <span Style="background-color:green;" onclick="document.getElementById('postPara').style.backgroundColor='green'"></span>
                    <span Style="background-color:teal;" onclick="document.getElementById('postPara').style.backgroundColor='teal'"></span>
                    <span Style="background-color:hotpink;" onclick="document.getElementById('postPara').style.backgroundColor='hotpink'"></span>
                    <span Style="background-color:blue;" onclick="document.getElementById('postPara').style.backgroundColor='blue'"></span>
                    <span Style="background-color:purple;" onclick="document.getElementById('postPara').style.backgroundColor='purple'"></span>
                    <span Style="background-color:gold;" onclick="document.getElementById('postPara').style.backgroundColor='gold'"></span>
                    <span Style="background-image:url('https://img.freepik.com/free-vector/glass-plate-frame-glossy-window-glass-with-reflections-isolated-transparent-surface_90220-323.jpg?ga=GA1.1.1902662525.1747753875&semt=ais_hybrid&w=740');" onclick="document.getElementById('postPara').style.backgroundColor='transparent'"></span>
                    
                </center>
    `;
    newSection.setAttribute('id', 'section1');
    let oldSection = document.getElementsByClassName('section1')[0];
    oldSection.replaceWith(newSection);

    let backIcon = newSection.children[0];
    backIcon.addEventListener('click', backAgain);
    function backAgain() {
        newSection.replaceWith(oldSection);
    };

};

//Height
function setParaHeight(event) {
    let para = document.getElementById('postPara');
    let height = prompt('Enter Height (digit only)');
    para.style.height = height + 'px';
    event.target.textContent = 'Height ' + height + ' px';
};

//Width
function setParaWidth(event) {
    let para = document.getElementById('postPara');
    let width = prompt('Enter Height (digit only)');
    para.style.width = width + 'px';
    event.target.textContent = 'Width ' + width + ' px';
};

//Margin
function setparaMargin(event) {
    let para = document.getElementById('postPara');
    let margin = prompt('Enter Margin (digit only)\nWrite as 2px 2px 2px 3\nUse any unit');
    para.style.margin = margin + 'px';
    event.target.textContent = 'Margin ' + margin + ' px';
};

//Padding
function setparaPadding(event) {
    let para = document.getElementById('postPara');
    let padding = prompt('Enter Padding (digit only)\nWrite as 2px 2px 2px 3\nUse any unit');
    para.style.padding = padding + 'px';
    event.target.textContent = 'Padding ' + padding + ' px';
};

//Size
function setParaFontSize(event) {
    let size = prompt('Enter Font Size (Digit Only)');
    document.getElementById('postPara').style.fontSize = size + 'px';
    event.target.textContent = 'Size ' + size + ' px';
}

//Bold
function setParaFontWeight(event) {
    let currentElement = event.target;
    let currentValue = currentElement.value;

    if (currentValue == '100') {
        document.getElementById('postPara').style.fontWeight = "100";
        currentElement.value = '200';
        currentElement.textContent = 'Bold-1';
    }
    else if (currentValue == '200') {
        document.getElementById('postPara').style.fontWeight = "200";
        currentElement.value = '300';
        currentElement.textContent = 'Bold-2';
    }
    else if (currentValue == '300') {
        document.getElementById('postPara').style.fontWeight = "300";
        currentElement.value = '400';
        currentElement.textContent = 'Bold-3';
    }
    else if (currentValue == '400') {
        document.getElementById('postPara').style.fontWeight = "400";
        currentElement.value = '500';
        currentElement.textContent = 'Bold-4';
    }
    else if (currentValue == '500') {
        document.getElementById('postPara').style.fontWeight = "500";
        currentElement.value = '600';
        currentElement.textContent = 'Bold-5';
    }
    else if (currentValue == '600') {
        document.getElementById('postPara').style.fontWeight = "600";
        currentElement.value = '700';
        currentElement.textContent = 'Bold-6';
    }
    else if (currentValue == '700') {
        document.getElementById('postPara').style.fontWeight = "700";
        currentElement.value = '800';
        currentElement.textContent = 'Bold-7';
    }
    else if (currentValue == '800') {
        document.getElementById('postPara').style.fontWeight = "800";
        currentElement.value = '900';
        currentElement.textContent = 'Bold-8';
    }
    else {
        document.getElementById('postPara').style.fontWeight = "900";
        currentElement.value = '100';
        currentElement.textContent = 'Bold-9';
    }
}

//Font
function setParaFontFamily(event) {
    let currentElement = event.target;
    let currentValue = currentElement.value;

    if (currentValue == 'cursive') {
        document.getElementById('postPara').style.fontFamily = "cursive";
        currentElement.value = 'verdana';
        currentElement.textContent = 'cursive';
    }
    else if (currentValue == 'verdana') {
        document.getElementById('postPara').style.fontFamily = "verdana";
        currentElement.value = 'Impact';
        currentElement.textContent = 'verdana';
    }
    else if (currentValue == 'Impact') {
        document.getElementById('postPara').style.fontFamily = "Impact";
        currentElement.value = 'sans-serif';
        currentElement.textContent = 'impact';
    }
    else if (currentValue == 'sans-serif') {
        document.getElementById('postPara').style.fontFamily = "sans-serif";
        currentElement.value = 'Oswald';
        currentElement.textContent = 'sans-serif';
    }
    else if (currentValue == 'Oswald') {
        document.getElementById('postPara').style.fontFamily = "Oswald";
        currentElement.value = 'Lato';
        currentElement.textContent = 'Oswald';
    }
    else if (currentValue == 'Lato') {
        document.getElementById('postPara').style.fontFamily = "Lato";
        currentElement.value = 'Montserrat';
        currentElement.textContent = 'Lato';
    }
    else {
        document.getElementById('postPara').style.fontFamily = "Montserrat";
        currentElement.value = 'cursive';
        currentElement.textContent = 'Montserrat';
    }
}

//Color
function setParaFontColor(event) {
    let color = prompt('Enter Font colour ');
    document.getElementById('postPara').style.color = color;
    event.target.textContent = color;
};




//section2 
//Add size [+]
function addArticleSize() {
    let currentElement = document.activeElement;
    let currentValue = currentElement.value;

    if (currentValue == '1') {
        postArea.style.width = "30%";
        postArea.style.height = "30vh";
        currentElement.value = 2;
        currentElement.textContent = "1";
    }
    else if (currentValue == '2') {
        postArea.style.width = "40%";
        postArea.style.height = "50vh";
        currentElement.value = 3;
        currentElement.textContent = "2";
    }
    else if (currentValue == '3') {
        postArea.style.width = "60%";
        postArea.style.height = "70vh";
        currentElement.value = 4;
        currentElement.textContent = "3";
    }
    else if (currentValue == '4') {
        postArea.style.width = "100%";
        postArea.style.height = "85vh";
        currentElement.value = 'Rectangle';
        currentElement.textContent = "4";
    }
    else if (currentValue == 'Rectangle') {
        postArea.style.width = "50%";
        postArea.style.height = "40vh";
        currentElement.value = 'Square';
        currentElement.textContent = "R";
    }
    else if (currentValue == 'Square') {
        postArea.style.width = "50%";
        postArea.style.height = "50vh";
        currentElement.value = 'Normal';
        currentElement.textContent = "S";
    }
    else {
        postArea.style.width = "70%";
        postArea.style.height = "50vh";
        currentElement.value = 1;
        currentElement.textContent = "N";
    }
};


