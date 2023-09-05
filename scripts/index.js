window.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.querySelector("#hero h1");
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); // Controls the typing speed
        }
    }
    
    typeText();
});

/*************************************/
// Low-poly Background animations

var refreshDuration = 10000;
        var refreshTimeout;
        var numPointsX;
        var numPointsY;
        var unitWidth;
        var unitHeight;
        var points;
        
        function onLoad()
        {
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width',window.outerWidth);
            svg.setAttribute('height',window.outerHeight);
            document.querySelector('#bg').appendChild(svg);
        
            var unitSize = (window.innerWidth+window.innerHeight)/15;
            numPointsX = Math.ceil(window.innerWidth/unitSize)+1;
            numPointsY = Math.ceil(window.innerHeight/unitSize)+1;
            unitWidth = Math.ceil(window.innerWidth/(numPointsX-1));
            unitHeight = Math.ceil(window.innerHeight/(numPointsY-1));
        
            points = [];
        
            for(var y = 0; y < numPointsY; y++) {
                for(var x = 0; x < numPointsX; x++) {
                    points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
                }
            }
        
            randomize();
        
            for(var i = 0; i < points.length; i++) {
                if(points[i].originX != unitWidth*(numPointsX-1) && points[i].originY != unitHeight*(numPointsY-1)) {
                    var topLeftX = points[i].x;
                    var topLeftY = points[i].y;
                    var topRightX = points[i+1].x;
                    var topRightY = points[i+1].y;
                    var bottomLeftX = points[i+numPointsX].x;
                    var bottomLeftY = points[i+numPointsX].y;
                    var bottomRightX = points[i+numPointsX+1].x;
                    var bottomRightY = points[i+numPointsX+1].y;
        
                    var rando = Math.floor(Math.random()*2);
        
                    for(var n = 0; n < 2; n++) {
                        var polygon = document.createElementNS(svg.namespaceURI, 'polygon');
        
                        if(rando==0) {
                            if(n==0) {
                                polygon.point1 = i;
                                polygon.point2 = i+numPointsX;
                                polygon.point3 = i+numPointsX+1;
                                polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
                            } else if(n==1) {
                                polygon.point1 = i;
                                polygon.point2 = i+1;
                                polygon.point3 = i+numPointsX+1;
                                polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                            }
                        } else if(rando==1) {
                            if(n==0) {
                                polygon.point1 = i;
                                polygon.point2 = i+numPointsX;
                                polygon.point3 = i+1;
                                polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
                            } else if(n==1) {
                                polygon.point1 = i+numPointsX;
                                polygon.point2 = i+1;
                                polygon.point3 = i+numPointsX+1;
                                polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                            }
                        }
                        polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/3)+')');
                        var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
                        animate.setAttribute('fill','freeze');
                        animate.setAttribute('attributeName','points');
                        animate.setAttribute('dur',refreshDuration+'ms');
                        animate.setAttribute('calcMode','linear');
                        polygon.appendChild(animate);
                        svg.appendChild(polygon);
                    }
                }
            }
        
            refresh();
        
        }
        
        function randomize() {
            for(var i = 0; i < points.length; i++) {
                if(points[i].originX != 0 && points[i].originX != unitWidth*(numPointsX-1)) {
                    points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
                }
                if(points[i].originY != 0 && points[i].originY != unitHeight*(numPointsY-1)) {
                    points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
                }
            }
        }
        
        function refresh() {
            randomize();
            for(var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {
                var polygon = document.querySelector('#bg svg').childNodes[i];
                var animate = polygon.childNodes[0];
                if(animate.getAttribute('to')) {
                    animate.setAttribute('from',animate.getAttribute('to'));
                }
                animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
                animate.beginElement();
            }
            refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
        }
        
        function onResize() {
            document.querySelector('#bg svg').remove();
            clearTimeout(refreshTimeout);
            onLoad();
        }
        
        window.onload = onLoad;
        window.onresize = onResize;
        
// End of Low-poly background animations

// Function to break text into individual spans
// Function to break text into individual spans

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    let textToType = "Welcome to my awesome WebSite";
    let index = 0;
    let intervalId = setInterval(function() {
        if (index < textToType.length) {
            logo.textContent += textToType.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100);

    function breakIntoSpans(element) {
        const text = element.textContent;
        element.innerHTML = '';
        for (const char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
        }
    }
    
    // Initialize: Break existing text into spans
    document.querySelectorAll('h1, h2, p, li, a, #logo').forEach(el => breakIntoSpans(el));
    
    // If you have dynamic content:
    // Create your dynamic content first.
    const dynamicElement = document.createElement('p');
    dynamicElement.textContent = textToType;
    document.body.appendChild(dynamicElement);
    
    // Then apply breakIntoSpans to it.
    breakIntoSpans(dynamicElement);
    
    // Initialize cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-highlight');
    document.body.appendChild(cursor);
    
    // Cursor follows mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        
        document.querySelectorAll('span').forEach(span => {
            const rect = span.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - e.pageX;
            const dy = rect.top + rect.height / 2 - e.pageY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 50) {  // Update this radius to match your cursor's radius
                span.classList.add('text-highlight');
            } else {
                span.classList.remove('text-highlight');
            }
        });
    });
});

