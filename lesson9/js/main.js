class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }

    init() {
        // Start plugin
        this.events();
    }

    events() {
        // All events
        //this.video.addEventListener('click', this.togglePlay.bind(this));
        this.video.addEventListener('click', e => this.togglePlay());
        this.toggle.addEventListener('click', e => this.togglePlay());
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
    }

    togglePlay() {
        // Play / Pause video
        const method =  this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '▌▌' : '►';
        this.video[method]();
    }
    
    handleRangeUpdate(e) {
        // this.video['volume'] = e.target.value;
        // this.video['playbackRate'] = e.target.value;
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        // Time skip
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }
}

const video = new VideoPlayer();
video.init();
