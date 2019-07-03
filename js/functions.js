"use strict";

function generateIcons( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ){
        HTML+= '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }
    return HTML;
}

// header

function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        links = document.querySelectorAll('header nav > a'),
        headerLinkCount = links.length,
        top = document.getElementById('education').offsetTop,
        sectionID = '',
        activeSectionIndex = 0,
        clname = '';

    // searching for section index user is looking at
    for ( var i=0; i<headerLinkCount; i++ ) {
        sectionID = links[i].getAttribute('href');
        if ( sectionID === '#' ) {
            sections.push(0);
            continue;
        }
        top = document.querySelector(sectionID).offsetTop;
        sections.push(top);
        if ( top <= scroll ) {
            activeSectionIndex = i;
        } else {
            break;
        }
    }

    // remove class "active" from all links
    for ( var i=0; i<links.length; i++ ) {
        clname = ' ' + links[i].className + ' ';
        clname = clname.replace(" active ", " ");
        links[i].className = clname;
    }
    // add class "active" to particular link
    links[activeSectionIndex].className += ' active';
    
}

function headerStyle() {
    var scroll = window.scrollY,
        limit = 30,
        element = document.getElementById('header'),
        clname = '';
    if ( scroll > limit ) {
        clname = ' ' + element.className + ' ';
        clname = clname.replace(" transparent ", " ");
        element.className = clname;
    } else {
        element.className += ' transparent';
    }
}

// Ourblog

function generateBlog (data) {
var HTML ='';
for ( var i=0; i<data.length; i++ ) {
    HTML=HTML+ `<div class="blog">
    <div class="img" style="background-image: url(img/${data[i].image});"></div>
    <h4>${data[i].heading}</h4>
    <h5>${data[i].topic}</h5>
    <span> ${data[i].date} <b>By Envato</b> </span>
    <p>${data[i].description}</p>
    <a href="${data[i].link}">Read more...</a>
</div>`;

HTML
}
return HTML;
}
// services

function generateServices( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="service">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <h3>'+data[i].title+'</h3>\
                    <p>'+data[i].description+'</p>\
                </div>';
    }
    return HTML;
}

// completed projects

function generateFacts( data ) {
    var HTML = '';
    for ( var j=0; j<data.length; j++ ) {
        HTML += '<div class="col">\
                    <j class="fa fa-'+data[j].icon+'"></j>\
                    <div class="counter_value">'+data[j].counter_value+'</div>\
                    <div class="title">'+data[j].title+'</div>\
                </div>';
    }
    return HTML;
}


// get in touch

function generateContactInfo( data ) {
    var HTML = '',
        infoListHTML = '',
        infoElement;

    for ( var i=0; i<data.length; i++ ) {
        infoListHTML = '';

        for ( var p=0; p<data[i].info.length; p++ ) {
            infoElement = data[i].info[p];

            if ( infoElement.type === 'text' ) {
                infoListHTML += `<p>${infoElement.value}</p>`;
            }

            if ( infoElement.type === 'link' ) {
                infoListHTML += `<a href="mailto:${infoElement.value}">${infoElement.value}</a>`;
            }
        }

        HTML += `<div class="info-box">
                    <i class="fa fa-${data[i].icon}"></i>
                    <h4>${data[i].title}:</h4>
                    <div>${infoListHTML}</div>
                </div>`;
    }

    return HTML;
}

function generateForm( data ) {
    var HTML = '<form>',
        field,
        attrHTML = '',
        attrInfo,
        classNames = '';

    for ( var i=0; i<data.fields.length; i++ ) {
        field = data.fields[i];
        attrHTML = '';
        classNames = '';

        for ( var a=0; a<field.attr.length; a++ ) {
            attrInfo = field.attr[a];
            attrHTML += `${attrInfo.name}="${attrInfo.value}"`;
        }

        classNames = field.className.join(' ');
        
        if ( field.type === 'input' ) {
            HTML += `<div class="${classNames}">
                        <label for="">${attrInfo.value}</label>
                        <input ${attrHTML}>
                    </div>`;
        }
        if ( field.type === 'textarea' ) {
            HTML += `<div class="${classNames}">
                        <label for="">${attrInfo.value}</label>
                        <textarea ${attrHTML}></textarea>
                    </div>`;
        }
    }
    HTML += '<div class="actions">';
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <div class="btn btn-${data.actions[i].style}">${data.actions[i].text}</div>
                    </div>`;
        }
    HTML += '</div>';
    
    HTML += '</form>';

    return HTML;
}

// education and experience

function generateEducation( data ) {
    var HTML = '';

    data.forEach( (education) => {
        HTML += `<div class="edu">
                        <div class="period">${education.period}</div>
                        <div class="about">
                            <h4>${education.position}</h4>
                            <span>${education.description}</span>
                        </div>
                </div>`;
    });
        return HTML;
}
//ourWork
function generateGallery (data) {
    var HTML ='<div class="filter"><div id = "all" class = "listCLick">ALL </div>';
    var words = [];//words= tuscias naujas array

    data.forEach((work) => {//eina per duotus data , work= 1 sekcijos is data gallery_items duomenys
        for( var i=0;i<work.tag.length;i++)
            words.push(work.tag[i])//eidamas per visus array elementus, sudeda juos i viena array 
    })
    
    console.log(words)//ats visi buvo elementai is array(14)
    var a = []

    for (var i=0; i<words.length; i++)
        if (a.indexOf(words[i]) === -1 && words[i] !== '')// naujame array(tai a) is zodziu imam po viena ir jeigu lygus -1(naujamelementui) arba nera tuscias tada i ta a array supushina unique reiksmes
            a.push(words[i]);
console.log(a);

 a.forEach(newLine => {
     HTML+=`<div class= "listClick"> ${newLine} </div>`
 });
 HTML+='</div> <div class="list">'
    data.forEach(( work,i) => {
console.log( (i +1) + ')' + work.tag );
        // work=data[1] gavo duomenys ir eina per kiekviena elementa, data i pakeicia i work'a,
        HTML += `<div class="galleryBlock">
        <div class= "absolute">
            <div class="galleryPhoto" style= "background-image: url(img//${work.galleryPhoto})"> 
            </div>
            <div class= "blackside">
                <h6> ${work.topic} </h6>
                <span> ${work.title} </span>
                </div>
            </div>
        </div>`;
    });
    HTML+= `</div>`

// for(var i=0;  i<data.length; i++){
// work = data[i];
// console.log( (i +1) + ')' + work.tag);//TAS PATS KAIP SU FOREACH

return HTML;
}
    

//ourClient
function generateTestimonials( data ) {
var HTML = '<div class="list">';
for ( var i=0; i<data.length; i++ ) {
    HTML += `<div class="allTestimonials ${i === 0 ? 'active' : ''}" data-index="${i}">
    <img src="${data[i].logo}" alt="logotip" >
    <h5>${data[i].author}</h5>
    <h6>${data[i].possition}</h6>
    <p>${data[i].text}</p>
    </div>`;
}
HTML+='</div>';
HTML+= '<div class="dotsBlock">';
for ( var i=0; i<data.length; i++){
    HTML+= `<div id="number${i}" class="dots" data-index="${i}"></div>`;
    
}
return HTML;
}

function showTestimonial (value) {
    console.log(value.target.getAttribute('data-index'));

    document.querySelector('.allTestimonials.active').classList.remove('active');
    document.querySelector('.allTestimonials[data-index="'+value.target.getAttribute('data-index')+'"]').classList.add('active');
}

