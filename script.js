var btn = document.querySelector('#get-advice');
const request = () => {
      var xhttpr = new XMLHttpRequest();
      xhttpr.open("Get", "https://api.adviceslip.com/advice", true);
      xhttpr.send();
      xhttpr.onload = () => {
            if (xhttpr.status === 200) {
                  const response = JSON.parse(xhttpr.response);
                  console.log(`http response:${response}`);
                  document.querySelector('#advice').textContent = `"${response.slip.advice}"`;
                  document.querySelector('.advice-number').textContent = response.slip.id;
                  btn.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>';
            }
            else {
                  xhttpr.abort()
            }
      }
}
request();
btn.addEventListener("click", () => {
      document.querySelector('#advice').innerHTML = `
            <div class="ph-items bg-[transparent] border-0 p-0">
                  <div class="ph-col-12">
                        <div class="ph-row flex justify-center">
                              <div class="ph-col-8 big rounded-full"></div>
                              <div class="ph-col-12 big rounded-full"></div>
                              <div class="ph-col-6 big rounded-full"></div>
                        </div>
                  </div>
            </div>
          `;
      btn.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      request();
});