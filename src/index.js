module.exports = function towelSort(matrix) {
    let res = [];
    if (Array.isArray(matrix)) {
        for (let index = 0; index < matrix.length; index++) {
            if (index % 2 == 0) {
                res = res.concat(matrix[index]);
            } else {
                res = res.concat(matrix[index].reverse());
            }
        }
    }
    return res;
};
