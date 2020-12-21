// const tuple: [string, number] = ['1', 1];
var unknownName;
var setUnknownName = function () {
    unknownName = 1;
};
setUnknownName();
if (typeof unknownName === 'number') {
    console.log(unknownName);
}
