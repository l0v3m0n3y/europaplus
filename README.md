# europaplus
JavaScript library for europaplus.ru
# main
```js
async function main(){
    const {europaplus} = require('./europaplus');
    const europa= new europaplus();
    let req=await europa.get_schedule()
    console.log(req)
}
main()
```
