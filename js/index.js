function rangeSliderRectangular() {
    let range = document.getElementById("myRange");
    let price = document.getElementById("priceange");
    let krishka = document.getElementById("lid");
    let labelForLid = document.getElementById("forLid");

    if(range.value == 1) {
        krishka.disabled = "disabled";
        krishka.checked = "checked";
        labelForLid.innerHTML = `Крышка несъемная`;
        price.innerHTML = 5 + ` литров `+ 580 + ` рублей`;
    } else if(range.value == 2) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 8 + ` литров `+ 660 + ` рублей`;
    } else if(range.value == 3) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 10 + ` литров `+ 756 + ` рублей`;
    } else if(range.value == 4) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 12 + ` литров `+ 864 + ` рублей`;
    } else if(range.value == 5) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 15 + ` литров `+ 1012 + ` рублей`;
    } else if(range.value == 6) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 20 + ` литров `+ 1120 + ` рублей`;
    } else if(range.value == 7) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 25 + ` литров `+ 1228 + ` рублей`;
    } else if(range.value == 8) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 30 + ` литров `+ 1350 + ` рублей`;
    } else if(range.value == 9) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 35 + ` литров `+ 1472 + ` рублей`;
    } else if(range.value == 10) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 40 + ` литров `+ 1580 + ` рублей`;
    } else if(range.value == 11) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 45 + ` литров `+ 1620 + ` рублей`;
    } else if(range.value == 12) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 50 + ` литров `+ 1742 + ` рублей`;
    } else if(range.value == 13) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 55 + ` литров `+ 1824 + ` рублей`;
    } else if(range.value == 14) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 60 + ` литров `+ 1971 + ` рублей`;
    } else if(range.value == 15) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 72 + ` литров `+ 2052 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 72 + ` литров `+ 4064 + ` рублей`;
        }

    } else if(range.value == 16) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 80 + ` литров `+ 2270 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 80 + ` литров `+ 4280 + ` рублей`;
        }
        
    } else if(range.value == 17) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 100 + ` литров `+ 2835 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 100 + ` литров `+ 4900 + ` рублей`;
        }
        
    } else if(range.value == 18) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 120 + ` литров `+ 3405 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 120 + ` литров `+ 5670 + ` рублей`;
        }
        
    } else if(range.value == 19) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 137 + ` литров `+ 3888 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 137 + ` литров `+ 6156 + ` рублей`;
        }
        
    } else if(range.value == 20) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 160 + ` литров `+ 4536 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 160 + ` литров `+ 7000 + ` рублей`;
        }
        
    } else if(range.value == 21) {
        krishka.style.display = "initial";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 180 + ` литров `+ 5100 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 180 + ` литров `+ 8200 + ` рублей`;
        }
        
    } else if(range.value == 22) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 200 + ` литров `+ 5670 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 200 + ` литров `+ 8870 + ` рублей`;
        }
        
    } else if(range.value == 23) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 250 + ` литров `+ 7100 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 250 + ` литров `+ 10300 + ` рублей`;
        }
        
    }
}

function rangeSliderFigured() {
    let range = document.getElementById("figuredRange");
    let price = document.getElementById("figuredpriceange");
    let krishka = document.getElementById("figuredLid");
    let labelForLid = document.getElementById("forFiguredLid");

    if(range.value == 1) {
        krishka.disabled = "disabled";
        krishka.checked = "checked";
        labelForLid.innerHTML = `Крышка несъемная`;
        price.innerHTML = 10 + ` литров `+ 1015 + ` рублей`;
    } else if(range.value == 2) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 12 + ` литров `+ 1080 + ` рублей`;
    } else if(range.value == 3) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 15 + ` литров `+ 1190 + ` рублей`;
    } else if(range.value == 4) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 20 + ` литров `+ 1260 + ` рублей`;
    } else if(range.value == 5) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 25 + ` литров `+ 1310 + ` рублей`;
    } else if(range.value == 6) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 30 + ` литров `+ 1490 + ` рублей`;
    } else if(range.value == 7) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 35 + ` литров `+ 1560 + ` рублей`;
    } else if(range.value == 8) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 40 + ` литров `+ 1660 + ` рублей`;
    } else if(range.value == 9) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 45 + ` литров `+ 1720 + ` рублей`;
    } else if(range.value == 10) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 50 + ` литров `+ 1250 + ` рублей`;
    } else if(range.value == 11) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 55 + ` литров `+ 1920 + ` рублей`;
    } else if(range.value == 12) {
        labelForLid.innerHTML = `Крышка несъемная`;
        krishka.disabled = "disabled";
        price.innerHTML = 60 + ` литров `+ 2140 + ` рублей`;
    } else if(range.value == 13) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 72 + ` литров `+ 2150 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 72 + ` литров `+ 4360 + ` рублей`;
        }

    } else if(range.value == 14) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 80 + ` литров `+ 2380 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 80 + ` литров `+ 4590 + ` рублей`;
        }

    } else if(range.value == 15) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 100 + ` литров `+ 2970 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 100 + ` литров `+ 5240 + ` рублей`;
        }
        
    } else if(range.value == 16) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 120 + ` литров `+ 3565 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 120 + ` литров `+ 6035 + ` рублей`;
        }
        
    } else if(range.value == 17) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 137 + ` литров `+ 4080 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 137 + ` литров `+ 6050 + ` рублей`;
        }
        
    } else if(range.value == 18) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 160 + ` литров `+ 4750 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 160 + ` литров `+ 7400 + ` рублей`;
        }
        
    } else if(range.value == 19) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 180 + ` литров `+ 5340 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 180 + ` литров `+ 8640 + ` рублей`;
        }
        
    } else if(range.value == 20) {
        krishka.style.display = "initial";
        krishka.disabled = "";
        labelForLid.innerHTML = `Крышка со светом`;
        price.innerHTML = 200 + ` литров `+ 5940 + ` рублей`;

        if(krishka.checked) {
            price.innerHTML = 200 + ` литров `+ 9345 + ` рублей`;
        }
        
    }
}

function rangeSliderTerrarium() {
    let range = document.getElementById("terrariumRange");
    let price = document.getElementById("terrariumPriceRange");
    let krishka = document.getElementById("terrariumLid");
    let labelForLid = document.getElementById("forTerrariumLid");

    if(range.value == 1) {
        krishka.disabled = "disabled";
        krishka.checked = "checked";
        labelForLid.innerHTML = `C крышкой`;
        price.innerHTML = 10 + ` литров `+ 432 + ` рублей`;
    } else if(range.value == 2) {
        price.innerHTML = 15 + ` литров `+ 486 + ` рублей`;
    } else if(range.value == 3) {
        price.innerHTML = 20 + ` литров `+ 540 + ` рублей`;
    } else if(range.value == 4) {
        price.innerHTML = 25 + ` литров `+ 608 + ` рублей`;
    } else if(range.value == 5) {
        price.innerHTML = 30 + ` литров `+ 743 + ` рублей`;
    } else if(range.value == 6) {
        price.innerHTML = 35 + ` литров `+ 837 + ` рублей`;
    } else if(range.value == 7) {
        price.innerHTML = 40 + ` литров `+ 960 + ` рублей`;
    } else if(range.value == 8) {
        price.innerHTML = 45 + ` литров `+ 1053 + ` рублей`;
    } else if(range.value == 9) {
        price.innerHTML = 50 + ` литров `+ 1161 + ` рублей`;
    } else if(range.value == 10) {
        price.innerHTML = 60 + ` литров `+ 1377 + ` рублей`;
    }
}

function rangeSliderSphere() {
    let range = document.getElementById("sphereRange");
    let price = document.getElementById("spherePriceRange");
    let krishka = document.getElementById("sphereLid");
    let labelForLid = document.getElementById("forSphereLid");

    if(range.value == 1) {
        krishka.disabled = "disabled";
        krishka.checked = "checked";
        labelForLid.innerHTML = `C крышкой`;
        price.innerHTML = 10 + ` литров `+ 1380 + ` рублей`;
    } else if(range.value == 2) {
        price.innerHTML = 20 + ` литров `+ 1730 + ` рублей`;
    } else if(range.value == 3) {
        price.innerHTML = 30 + ` литров `+ 2025 + ` рублей`;
    } else if(range.value == 4) {
        price.innerHTML = 40 + ` литров `+ 2230 + ` рублей`;
    } else if(range.value == 5) {
        price.innerHTML = 50 + ` литров `+ 2500 + ` рублей`;
    } else if(range.value == 6) {
        price.innerHTML = 60 + ` литров `+ 2830 + ` рублей`;
    }
}

// function rangeSliderHexagon() {
//     let range = document.getElementById("hexagonRange");
//     let price = document.getElementById("hexagonPriceRange");
//     let krishka = document.getElementById("hexagonLid");
//     let labelForLid = document.getElementById("forHexagonLid");

//     if(range.value == 1) {
//         krishka.disabled = "disabled";
//         krishka.checked = "checked";
//         labelForLid.innerHTML = `C несъемной крышкой`;
//         price.innerHTML = 10 + ` литров `+ 1230 + ` рублей`;
//     } else if(range.value == 2) {
//         price.innerHTML = 15 + ` литров `+ 1330 + ` рублей`;
//     } else if(range.value == 3) {
//         price.innerHTML = 20 + ` литров `+ 1485 + ` рублей`;
//     } else if(range.value == 4) {
//         price.innerHTML = 30 + ` литров `+ 1640 + ` рублей`;
//     } else if(range.value == 5) {
//         price.innerHTML = 40 + ` литров `+ 1810 + ` рублей`;
//     } else if(range.value == 6) {
//         price.innerHTML = 50 + ` литров `+ 1930 + ` рублей`;
//     } else if(range.value == 7) {
//         price.innerHTML = 60 + ` литров `+ 2310 + ` рублей`;
//     }
// }