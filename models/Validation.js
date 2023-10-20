var Validation = function () {
    this.kiemTraRong = function (value, name, selectoError) {
        if (value.trim() === "") {
            document.querySelector(selectoError).innerHTML =
                name + " không được bỏ trống";
            document.querySelector(selectoError).style.display = "block";
            return false;
        }
        document.querySelector(selectoError).innerHTML = "";
        document.querySelector(selectoError).style.display = "none";
        return true;
    };
    //Kiểm tra tất cả là số
    this.kiemTraTatCaLaSo = function (value, name, selectoError) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(selectoError).innerHTML = "";
            document.querySelector(selectoError).style.display = "none";
            return true;
        }
        document.querySelector(selectoError).innerHTML = name + " tất cả là số";
        document.querySelector(selectoError).style.display = "block";
        return false;
    };
    //Kiểm tra độ chuỗi
    this.kiemTraDoDaiChuoi = function (
        value,
        name,
        selectoError,
        minLenght,
        maxLength
    ) {
        if (value.trim().length < minLenght || value.trim().length > maxLength) {
            document.querySelector(selectoError).innerHTML =
                name + " từ " + minLenght + " đến " + maxLength + " ký tự ";
            document.querySelector(selectoError).style.display = "block";
            return false;
        }
        document.querySelector(selectoError).innerHTML = "";
        document.querySelector(selectoError).style.display = "none";
        return true;
    };
    //Kiểm tra gía trị
    this.kiemTraGiaTri = function (
        value,
        name,
        selectoError,
        minValue,
        maxValue
    ) {
        if (Number(value) > maxValue || Number(value) < minValue) {
            document.querySelector(selectoError).innerHTML =
                name + " giá trị từ " + minValue + " đến " + maxValue;
            document.querySelector(selectoError).style.display = "block";
            return false;
        }
        document.querySelector(selectoError).innerHTML = "";
        document.querySelector(selectoError).style.display = "none";
        return true;
    };
    //Tất cả là chữ 
    this.kiemTraTatCaLaChu = function (
        value,
        name,
        selectoError
    ) {
        var regexAllLetter = /^[A-Za-z]+$/;
        if (regexAllLetter.test(value)) {
            document.querySelector(selectoError).innerHTML = "";
            document.querySelector(selectoError).style.display = "none";
            return true;
        }
        document.querySelector(selectoError).innerHTML = name + " phải là chữ";
        document.querySelector(selectoError).style.display = "block";
        return false;
    }
};
