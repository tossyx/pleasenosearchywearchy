// Check if the current URL has a hash fragment
if (window.location.hash) {
    // Get the hash fragment without the '#'
    var hash = window.location.hash.substring(1);
    
    // Replace the URL without the hash fragment
    history.replaceState(null, null, '/' + hash);
}
