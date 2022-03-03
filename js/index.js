// open sidebar
function openSideBar() {
	var close = document.getElementById('SideBar');
	var content = document.getElementById('Content');

	close.style.display = 'block';

	if (close.style.display = 'block') {
		content.style.display = 'none';
	}
}
// close sidebar
function closeSideBar() {
	var close = document.getElementById('SideBar');
	var content = document.getElementById('Content');

	close.style.display = 'none';
	
	if (close.style.display = 'none') {
		content.style.display = 'block';
	}
}
// clipboard js for code 
// copy the code script
window.onload = function () {
	// pre tag code
	var htmlCode = Array.prototype.slice.call(document.querySelectorAll('.js-htmlCode'));
	// copy btn
	var codeBtn = Array.prototype.slice.call(document.querySelectorAll('.js-codeBtn'));
	// tooltip
	var tipMsg = Array.prototype.slice.call(document.querySelectorAll('.js-tipMsg'));
	// onclick button event occcurs.
	codeBtn.forEach(function (btn,idx){
		btn.addEventListener("click", function(){
			const copyhtmlCode  = htmlCode[idx].textContent;
			const textArea = document.createElement('textarea');
			textArea.textContent = copyhtmlCode.trim();
			document.body.append(textArea);
			textArea.select();
			try{
				var msg = document.execCommand('copy') ? 'Copied To Clipboard' : 'Code Not Copied';
				console.log(msg);
				tipMsg[idx].innerHTML = msg;
				tipMsg[idx].style.width = '200px';
				textArea.style.display = 'none';
				textArea.trim();
			}
			catch(err){
				console.log('whoops, unable to copy');
			}				
		});
	});
}
