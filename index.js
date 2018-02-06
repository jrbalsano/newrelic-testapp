require('newrelic');

function idleEngine() {
    console.log('idling...');
    setTimeout(idleEngine, 60 * 1000);
}

idleEngine();
