// overkill - single program for Hurdle 1, 2, 3, 4
function droite() {
    tourne_a_gauche();
    tourne_à_gauche();  // test accent
    tourne_a_gauche();
}

function suit_le_mur () {
    if (rien_a_droite()) {
        droite();
        avance();
    } else if (rien_devant() && !mur_devant()) {  // two equivalent tests
        avance();
    } else {
        tourne_a_gauche();
    }
}

while (! au_but()) {
    suit_le_mur();
}
