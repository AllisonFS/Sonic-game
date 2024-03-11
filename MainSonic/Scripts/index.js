const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spikes');

const jump = () => {
    sonic.classList.add('jump');
    
    setTimeout(() => {
        sonic.classList.remove('jump');

    }, 600);
     
    sonic.src = "/IMG/sonic-rolling-unscreen.gif";

    


}

const loop = setInterval(() => {

    console.log('loop');
    
    const posisaospike = spike.offsetLeft;
    const posisaosonic = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (posisaospike <= 70 && posisaospike > 0 && posisaosonic < 80) { 
        
        spike.style.animation = 'none';
        spike.style.left = `${posisaospike}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${posisaosonic}px`;

        sonic.src = '/IMG/gameover.png';
        sonic.style.width = '180px';

        clearInterval(loop);

    }
}, 10); 

document.addEventListener('keydown', jump); 

const transf = () => {
    sonic.src = '/IMG/sonic-speed-unscreen.gif';
    sonic.style.width = '80px';
}

document.addEventListener('mousedown', transf);