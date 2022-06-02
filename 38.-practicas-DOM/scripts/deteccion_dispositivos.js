export default function userAgentInfo(id) {
    const $id = document.getElementById(id);
    const 
        mobile = {
            android: () => navigator.userAgent.match(/android/i),
            ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
            windows : () => navigator.userAgent.match(/windows phone/i),
            any : function() {
                return this.android() || this.ios() || this.windows();
            }
        },
        desktop = {
            linux: () =>navigator.userAgent.match(/linux/i),
            mac: () =>navigator.userAgent.match(/mac os/i),
            windows: () =>navigator.userAgent.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac()  || this.windows();
            }
        },
        browser = {
            chrome: () => navigator.userAgent.match(/chrome/i),
            safari: () => navigator.userAgent.match(/safari/i),
            firefox: () => navigator.userAgent.match(/firefox/i),
            opera: () => navigator.userAgent.match(/opera|opera mini/i),
            ie: () => navigator.userAgent.match(/msie|iemobile/i),
            edge: () => navigator.userAgent.match(/edge/i),
            any: function() {
                return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
            }
        };

        $id.innerHTML = `
            <ul>
                <li>User Agent: <b>${navigator.userAgent}</b></li>
                <li>Plataforma: <b>${mobile.any()? mobile.any():desktop.any()}</b></li>
                <li>Navegador: <b>${browser.any()}</b></li>
            </ul>
        `;

        if (browser.chrome()) {
            $id.innerHTML += `
                <p>Contenido visualizado solamente en chrome</p>
            `
        }
        if (browser.firefox()) {
            $id.innerHTML += `
                <p>Contenido visualizado solamente en firefox</p>
            `
            
        }
}