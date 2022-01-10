chrome.commands.onCommand.addListener(async (command) => {
  const [active] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(active.id, { msg: command });
});
