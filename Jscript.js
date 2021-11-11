var n = 1
for (var a = prompt("Sonni kiriting"); isNaN(a) || a == 0;) {
    a = prompt("SON kiriting!!!")
}

for (var b = prompt("Darajani kiriting"); isNaN(b) || b == 0;) {
    b = prompt("Darajaga SON kiriting!!!")
}
if (b > 0)
    for (let i = 1; i <= b; i++) {
        n = n * a;
    }

else {
    for (let i = -1; i >= b; i--) {
        n = n / a;
    }
}
alert("Natija: (" + a + ") ^ (" + b + ") = " + n)