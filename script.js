function getFuncName() {
    return getFuncName.caller.name
}
function teddy() { 
    console.log(getFuncName())
}
teddy()