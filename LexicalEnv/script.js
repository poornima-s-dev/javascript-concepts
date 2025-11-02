let g_var = 10;
function outer() {
    let l_var = 20;
    function inner() {
        let b_var = 30;
        console.log(g_var);// 10
        console.log(l_var);// 20
        console.log(b_var);// 30
    }
    inner();
    console.log(g_var);// 10
    console.log(l_var);// 20
    console.log(b_var);// ref error
}
outer();
console.log(g_var);// 10
console.log(l_var);// ref error
console.log(b_var);// ref error