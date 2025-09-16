// typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const text = "uwogylu";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    typeWriter();
});