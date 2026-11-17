document.getElementById('cleanTabs').addEventListener('click', async() => {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Scanning...';

    try {
        const tabs = await chrome.tabs.query({currentWindow: true});
        const seenUrls = new Set();
        const duplicates = [];

        tabs.forEach(tab => {
            if(seenUrls.has(tab.url)){
                duplicates.push(tab);
            }else{
                seenUrls.add(tab.url);
            }
        });

        if(duplicates.length > 0){
            await chrome.tabs.remove(duplicates);
            statusDiv.textContent = `Closed ${duplicates.length} duplicate tab(s)`;
        }else{
            statusDiv.textContent = 'No duplicate tabs found';
        }
    } catch (error) {
        statusDiv.textContent = `Error cleaning tabs: ${error.message}`;
    }
});
