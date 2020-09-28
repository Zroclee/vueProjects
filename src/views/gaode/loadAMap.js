export default function MapLoader() { // <-- 原作者这里使用的是module.exports
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap)
        } else {
            var url = 'https://webapi.amap.com/maps?v=1.4.15&key=856434d91a5682e6eaeb5c399f3c5f01&callback=onLoad';
            // var jsapi = document.createElement('script');
            // jsapi.charset = 'utf-8';
            // jsapi.src = url;
            // document.head.appendChild(jsapi);


            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.async = true
            script.src = url
            script.onerror = reject
            document.head.appendChild(script)
        }
        // window.initAMap = () => {
        //     resolve(window.AMap)
        // }
        window.onload = () => {
            resolve(window.AMap)
        }
    })
}