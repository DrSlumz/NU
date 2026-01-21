// Header
const albumBox = document.getElementById('discographybox');
const arrow = document.getElementById('arrowdown');

const showAlbum = () => {
    arrow.classList.toggle('rotate');
    if (albumBox.style.display === 'none') {
        albumBox.style.display = 'flex';
    } else {
        albumBox.style.display = 'none';
    }
};
arrow.addEventListener('click', showAlbum);
//

// Self-Titles
const hoverHide = document.getElementById('hoverbox');
const album = document.getElementById('album');

const showHover = () => {
    if (hoverHide.style.display === 'none') {
        hoverHide.style.display = 'flex';
    } else {
        hoverHide.style.display = 'none';
    }
};
const showHide = () => {
    if (hoverHide.style.display === 'flex') {
        hoverHide.style.display = 'none';
    }
};
album.addEventListener('mouseover', showHover);
album.addEventListener('mouseout', showHide);
//
// Life Is Peachy
const hoverHide2 = document.getElementById('hoverbox2');
const album2 = document.getElementById('album2');

const showHover2 = () => {
    if (hoverHide2.style.display === 'none') {
        hoverHide2.style.display = 'flex';
    } else {
        hoverHide2.style.display = 'none';
    }
};
const showHide2 = () => {
    if (hoverHide2.style.display === 'flex') {
        hoverHide2.style.display = 'none';
    }
};
album2.addEventListener('mouseover', showHover2);
album2.addEventListener('mouseout', showHide2);
//
// Follow The Leader
const hoverHide3 = document.getElementById('hoverbox3');
const album3 = document.getElementById('album3');

const showHover3 = () => {
    if (hoverHide3.style.display === 'none') {
        hoverHide3.style.display = 'flex';
    } else {
        hoverHide3.style.display = 'none';
    }
};
const showHide3 = () => {
    if (hoverHide3.style.display === 'flex') {
        hoverHide3.style.display = 'none';
    }
};
album3.addEventListener('mouseover', showHover3);
album3.addEventListener('mouseout', showHide3);
//
// Issues
const hoverHide4 = document.getElementById('hoverbox4');
const album4 = document.getElementById('album4');

const showHover4 = () => {
    if (hoverHide4.style.display === 'none') {
        hoverHide4.style.display = 'flex';
    } else {
        hoverHide4.style.display = 'none';
    }
};
const showHide4 = () => {
    if (hoverHide4.style.display === 'flex') {
        hoverHide4.style.display = 'none';
    }
};
album4.addEventListener('mouseover', showHover4);
album4.addEventListener('mouseout', showHide4);
//
// Untouchables
const hoverHide5 = document.getElementById('hoverbox5');
const album5 = document.getElementById('album5');

const showHover5 = () => {
    if (hoverHide5.style.display === 'none') {
        hoverHide5.style.display = 'flex';
    } else {
        hoverHide5.style.display = 'none';
    }
};
const showHide5 = () => {
    if (hoverHide5.style.display === 'flex') {
        hoverHide5.style.display = 'none';
    }
};
album5.addEventListener('mouseover', showHover5);
album5.addEventListener('mouseout', showHide5);
//
// Take A Look In The Mirror
const hoverHide6 = document.getElementById('hoverbox6');
const album6 = document.getElementById('album6');

const showHover6 = () => {
    if (hoverHide6.style.display === 'none') {
        hoverHide6.style.display = 'flex';
    } else {
        hoverHide6.style.display = 'none';
    }
};
const showHide6 = () => {
    if (hoverHide6.style.display === 'flex') {
        hoverHide6.style.display = 'none';
    }
};
album6.addEventListener('mouseover', showHover6);
album6.addEventListener('mouseout', showHide6);
//
// See You On The Other Side
const hoverHide7 = document.getElementById('hoverbox7');
const album7 = document.getElementById('album7');

const showHover7 = () => {
    if (hoverHide7.style.display === 'none') {
        hoverHide7.style.display = 'flex';
    } else {
        hoverHide7.style.display = 'none';
    }
};
const showHide7 = () => {
    if (hoverHide7.style.display === 'flex') {
        hoverHide7.style.display = 'none';
    }
};
album7.addEventListener('mouseover', showHover7);
album7.addEventListener('mouseout', showHide7);
//
const memberArrows = document.querySelectorAll('.infoarrowdown');
memberArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        const infoBox = arrow.nextElementSibling;

        if (infoBox.style.display === 'flex') {
            infoBox.style.display = 'none';
        } else {
            infoBox.style.display = 'flex';
        }
    });
});
