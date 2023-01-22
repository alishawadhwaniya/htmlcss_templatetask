'use strict';
function hideShow(id1,id2,id3){
    if(id1.style.display==='flex'){
        id1.style.display='none';
    }
    else{
        id1.style.display='flex';
        id2.style.display='none';
        id3.style.display='none';
    }
}
function hideShortCodes(id1,id2,id3){
    if(id1.style.display==='block'){
        id1.style.display='none';
    }
    else{
        id1.style.display='block';
        id2.style.display='none';
        id3.style.display='none';
    }
}
function displayHide(id1,id2,id3,id4){
    if(id1.classList.contains('hidden')){
        id1.classList.remove('hidden');
        id2.classList.add('hidden');
        id3.classList.add('hidden');
        id4.classList.add('hidden');
        // console.log('display hide without responsive effective.')
    }
    // else{
    //     id1.classList.add('hidden');
    // }
}
function resDisplayHide(c1,c2,c3,c4){
    if(c1.classList.contains('hidden')){
        c1.classList.remove('hidden');
        c2.classList.add('hidden');
        c3.classList.add('hidden');
        c4.classList.add('hidden');
        // console.log('resdisplay show effective.');
    }
    else{
        // console.log(' resdisplay hide effective');
        c1.classList.add('hidden');
    }
}
let mensopen=false;
let womenopen =false;
let bagsopen=false;
let footwearopen=false;
const newarrivalsSection=document.querySelector('.newarrivals-section');
const newArrivalsNavItems=document.querySelector('.new-arrivals-nav-items');
const newArrivalsMains=document.querySelector('.newarrivals-mains');
// for hiding and showing in responsive START--
const nmens=document.querySelector('#nmens');
const nwomens=document.querySelector('#nwomens');
const nbags=document.querySelector('#nbags');
const nfootwear=document.querySelector('#nfootwear');
// end of for hiding and showing in responsive--
const menslink=document.querySelector('#menslink');
const womenslink=document.querySelector('#womenslink');
const bagslink=document.querySelector('#bagslink');
const footwearlink=document.querySelector('#footwearlink');
const mens=document.querySelector('.mens');
const womens=document.querySelector('.womens');
const bags=document.querySelector('.bags');
const footwear=document.querySelector('.footwear');

const mql=window.matchMedia("(max-width:500px)");
function mediaqueryresponse(e){
    if(e.matches){
        nmens.classList.add('hidden');
        nwomens.classList.add('hidden');
        nbags.classList.add('hidden');
        nfootwear.classList.add('hidden');
        menslink.removeAttribute("onclick");
        womenslink.removeAttribute('onclick');
        bagslink.removeAttribute('onclick');
        footwearlink.removeAttribute('onclick');
        console.log('matched.');
        menslink.addEventListener('click',function(){
                if(newarrivalsSection.style.height==='1900px'&& mensopen){
                    newarrivalsSection.style.height='400px';
                    newArrivalsNavItems.style.top='20%';
                    womens.classList.remove('movedownjsclass');
                    bags.classList.remove('movedownjsclass');
                    footwear.classList.remove('movedownjsclass');
                    resDisplayHide(nmens,nwomens,nbags,nfootwear);
                    // console.log('not applied');
                    mensopen=false;
                }else{
                    newarrivalsSection.style.height='1900px';
                    newArrivalsNavItems.style.top='5%';
                    womens.classList.add('movedownjsclass');
                    bags.classList.add('movedownjsclass');
                    footwear.classList.add('movedownjsclass');
                    // console.log('applied');
                    resDisplayHide(nmens,nwomens,nbags,nfootwear);
                    mensopen=true;
                    womenopen=false;
                    bagsopen=false;
                    footwearopen=false;
                }
        });
        womenslink.addEventListener('click',()=>{
            if(newarrivalsSection.style.height==='1900px'&& !womens.classList.contains('movedownjsclass') && womenopen){
                    newarrivalsSection.style.height='400px';
                    newArrivalsNavItems.style.top='20%';
                    bags.classList.remove('movedownjsclass');
                    footwear.classList.remove('movedownjsclass');
                    womens.classList.remove('movedownjsclass');
                    // console.log(newarrivalsSection.style.height);
                    resDisplayHide(nwomens,nmens,nbags,nfootwear);
                    womenopen=false;
            }else{
                newarrivalsSection.style.height='1900px';
                newArrivalsNavItems.style.top='5%';
                bags.classList.add('movedownjsclass');
                footwear.classList.add('movedownjsclass');
                womens.classList.remove('movedownjsclass');
                // console.log('applied');
                resDisplayHide(nwomens,nmens,nbags,nfootwear);
                womenopen=true;
                mensopen=false;
                bagsopen=false;
                footwearopen=false;
            }
            
        });
        bagslink.addEventListener('click',()=>{
            if(newarrivalsSection.style.height==='1900px' && !bags.classList.contains('movedownjsclass')&& bagsopen){
                    newarrivalsSection.style.height='400px';
                    newArrivalsNavItems.style.top='20%';
                    bags.classList.remove('movedownjsclass');
                    footwear.classList.remove('movedownjsclass');
                    womens.classList.remove('movedownjsclass');
                    // console.log('not applied');
                    resDisplayHide(nbags,nwomens,nmens,nfootwear);
                    bagsopen=false;
            }else{
                newarrivalsSection.style.height='1900px';
                newArrivalsNavItems.style.top='5%';
                footwear.classList.add('movedownjsclass');
                bags.classList.remove('movedownjsclass');
                womens.classList.remove('movedownjsclass');
                // console.log('applied');
                resDisplayHide(nbags,nwomens,nmens,nfootwear);
                bagsopen=true;
                mensopen=false;
                womenopen=false;
                footwearopen=false;
            }
        });
        footwearlink.addEventListener('click',()=>{
            if(newarrivalsSection.style.height==='1900px' && !footwear.classList.contains('movedownjsclass')&& footwearopen){
                newarrivalsSection.style.height='400px';
                newArrivalsNavItems.style.top='20%';
                bags.classList.remove('movedownjsclass');
                footwear.classList.remove('movedownjsclass');
                womens.classList.remove('movedownjsclass');
                // console.log('not applied');
                resDisplayHide(nfootwear,nwomens,nbags,nmens);
                footwearopen=false;
            }else{
                newarrivalsSection.style.height='1900px';
                newArrivalsNavItems.style.top='5%';
                bags.classList.remove('movedownjsclass');
                womens.classList.remove('movedownjsclass');
                footwear.classList.remove('movedownjsclass');
                // console.log('applied');
                resDisplayHide(nfootwear,nwomens,nbags,nmens);
                footwearopen=true;
                bagsopen=false;
                mensopen=false;
                womenopen=false;
            }
        }) 
    }
    else{
        console.log('not matched');
        
    }
}
mql.addEventListener('change',mediaqueryresponse);
