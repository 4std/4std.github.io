// Chặn chuột phải
document.addEventListener('contextmenu', event => event.preventDefault());

// Chặn copy, cut, paste
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('cut', event => event.preventDefault());
document.addEventListener('paste', event => event.preventDefault());

// Chặn các phím Ctrl + ...
document.addEventListener('keydown', function(event) {

    // Chặn Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A, Ctrl+U (View Source), Ctrl+S
    if (event.ctrlKey) {
        const blockedCtrlKeys = ['c', 'v', 'x', 'a', 'u', 's'];
        if (blockedCtrlKeys.includes(event.key.toLowerCase())) {
            event.preventDefault();
            return false;
        }
    }

    // Chặn F12 (Inspect)
    if (event.key === 'F12') {
        event.preventDefault();
        return false;
    }

    // Chặn Ctrl+Shift+I / J / C (DevTools)
    if (
        event.ctrlKey &&
        event.shiftKey &&
        ['i', 'j', 'c'].includes(event.key.toLowerCase())
    ) {
        event.preventDefault();
        return false;
    }

    // Chặn Print Screen
    if (event.key === 'PrintScreen') {
        alert('Chức năng chụp màn hình bị vô hiệu hóa');
        event.preventDefault();
        return false;
    }
});

// Xóa clipboard sau Print Screen
document.addEventListener('keyup', function(event) {
    if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
    }
});