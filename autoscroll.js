const pauseTimes = {
    About: 10000,
    Academic: 5000,
    Events: 5000,
    Blog: 5000,
    Kids: 5000,
    Teachers: 5000,
    Gallery: 5000,
    Contact: 1000,
    Footer: 3000
};

function autoScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function () {
            const nextTarget = getNextTarget(target);
            if (nextTarget) {
                autoScroll(nextTarget);
            } else {
                setTimeout(function () {
                    scrollToTop();
                }, pauseTimes.Contact);
            }
        }, pauseTimes[target]);
    }
}

function getNextTarget(currentTarget) {
    const targets = ['About', 'Academic', 'Events', 'Blog', 'Kids', 'Teachers', 'Gallery', 'Contact', 'Footer'];
    const currentIndex = targets.indexOf(currentTarget);
    if (currentIndex === targets.length - 1) {
        return null;
    }
    return targets[currentIndex + 1];
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function startAutoScroll() {
    autoScroll('About');
}
