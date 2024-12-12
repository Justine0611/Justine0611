function cookiebarAccepter() {
    document.getElementById('cookie-banner').style.display = 'none';
}
 
function cookiebarRefuser() {
    document.getElementById('cookie-paragraph1').style.display = 'none';
    document.getElementById('cookie-paragraph2').style.display = 'none';
    document.getElementById('cookie-paragraph3').style.display = 'none';
 
    const cookieContent = document.getElementById('cookie-content');
    cookieContent.innerHTML = '<p>Êtes vous sûr ? Cela nous permettra de vous offrir des publicités pouvant vous intérésser.</p><button class="btn-refuser" id="cookieButton" onclick="hideCookieBar()">Refuser les cookie</button><button class="btn-accepter" id="cookieButton" onclick="hideCookieBar()">Accepter les cookie</button>';
    document.getElementById('cookie-banner').style.height = '6.5em';
 
 
 
    document.getElementById('cookieButton').style.display = 'none';
}