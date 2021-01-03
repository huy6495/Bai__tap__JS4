/**
 * Muc dich: Lam bai tap JS
 * Nguoi tao: Nguyen Quoc Huy
 * Ngay tao: 28.12.2020
 */

//  Bai tap 1
document.getElementById("ketQuaBai1").addEventListener("click", function(){
    var a = parseInt(document.getElementById("soThu1").value);
    var b = parseInt(document.getElementById("soThu2").value);
    var c = parseInt(document.getElementById("soThu3").value);
    var maxAB = 0;
    var minAB = 0;
    var max = 0;
    var min = 0;
    var mid = 0;
    
    if(a>b){
        maxAB=a;minAB=b;
    }
    if(a<b){
        maxAB=b;minAB=a;
    }
    if(maxAB>c){
        max=maxAB;
        {if(minAB>c){
            min=c;mid=minAB;
        }else{
            min=minAB;mid=c;
        }
    }}else{
        max=c;
        if(a>b){
            mid=a;min=b;
        }else{
            mid=b;min=a;
        }
    }
    document.getElementById("ketQua1").innerHTML = min +"," + mid + "," + max
})

// Bai tap 2:
document.getElementById("chaoBo").addEventListener("click", function(){
    document.getElementById("loiChao").innerHTML = "Xin Chào Bố"
})
document.getElementById("chaoMe").addEventListener("click", function(){
    document.getElementById("loiChao").innerHTML = "Xin Chào Mẹ"
})
document.getElementById("chaoAnh").addEventListener("click", function(){
    document.getElementById("loiChao").innerHTML = "Xin Chào Anh trai"
})
document.getElementById("chaoEm").addEventListener("click", function(){
    document.getElementById("loiChao").innerHTML = "Xin Chào Em gái"
})

// Bai tap 3:
document.getElementById("ketQuaBai3").addEventListener("click", function(){
    var d = parseInt(document.getElementById("soThu4").value);
    var e = parseInt(document.getElementById("soThu5").value);
    var f = parseInt(document.getElementById("soThu6").value);
    var new__array =[d,e,f];
    for( let i=0; i<new__array.length; i++){
        if (new__array[i] % 2 !==0){
            var tagResult = document.createElement("div");
            tagResult.innerHTML = new__array[i] + ";";
            document.getElementById("ketQua3Le").appendChild(tagResult);
            document.getElementById("ketQua3Le").style.display = "flex";
        }}
    for( let i=0; i<new__array.length; i++){
        if (new__array[i] % 2 ==0){
            var tagResult1 = document.createElement("div");
            tagResult1.innerHTML = new__array[i] + ";";
            document.getElementById("ketQua3Chan").appendChild(tagResult1);
            document.getElementById("ketQua3Chan").style.display = "flex";
        }}
    }
)

// Bai tap 4:
document.getElementById("ketQuaBai4").addEventListener("click", function(){
    var g = parseInt(document.getElementById("canhThu1").value);
    var h = parseInt(document.getElementById("canhThu2").value);
    var i = parseInt(document.getElementById("canhThu3").value);
    if ((g==h&&g!=i)||(h==i&&g!=i)||(i==g&&i!=h)){
        document.getElementById("ketQua4").innerHTML = "Tam giác này là: Tam giác cân";
    }
    else if(g==h&&g==i){
        document.getElementById("ketQua4").innerHTML = "Tam giác này là: Tam giác đều";
        }else{
        document.getElementById("ketQua4").innerHTML = "Tam giác này là: Tam giác thường thôi nha";
    }
    if(((g*g)==((h*h) + (i*i)))||((h*h)==((g*g) + (i*i)))||((i*i)==((g*g) + (h*h)))){
        document.getElementById("ketQua4").innerHTML = "Tam giác này là: Tam giác vuông";  
    }
})

// Nang cao 1:
document.getElementById("ketQuaNangCao1").addEventListener("click", function(){
    var ngay = parseInt(document.getElementById("ngay").value);
    var thang = parseInt(document.getElementById("thang").value);
    var nam = parseInt(document.getElementById("nam").value);
    if(ngay===30||(ngay===31)&&(thang!=12)||((ngay===28)&&(thang===2)&&(nam%4 !==0))){
        ngay = 1; thang += 1;
    }else if(ngay===31&&thang===12){
        ngay = 1; thang = 1; nam +=1;
    }else if(ngay===28&&thang===2&&nam%4 ===0){
        ngay = 29; thang = 2;
    }else{
        ngay +=1;
    }
    document.getElementById("ketQua1NangCao").innerHTML = ngay + "/" + thang + "/" + nam;
})

// Nang cao 2:
document.getElementById("ketQuaNangCao2").addEventListener("click", function(){
    var txtThang = parseInt(document.getElementById("txtThang").value);
    var txtNam = parseInt(document.getElementById("txtNam").value);
    if(txtThang===2&&txtNam%4===0){
        res = 29;
    }else if(txtThang===1||3||5||7||8||10||12){
        res = 31;
    }else{
        res = 30;
    }
    document.getElementById("ketQua2NangCao").innerHTML = "Thang nay co " + res + " ngay";
})

// Nang cao 3:
function cachDocSo(a){
    var cachDoc = "";
    switch (a){
        case 1:
        cachDoc = "Một";break;
        case 2:
        cachDoc = "Hai";break;
        case 3:
        cachDoc = "Ba";break;
        case 4:
        cachDoc = "Bốn";break;
        case 5:
        cachDoc = "Năm";break;
        case 6:
        cachDoc = "Sáu";break;
        case 7:
        cachDoc = "Bảy";break;
        case 8:
        cachDoc = "Tám";break;
        case 9:
        cachDoc = "Chín";break;
        case 0:
        cachDoc = "";break;}
        return cachDoc;
}
document.getElementById("ketQuaNangCao3").addEventListener("click", function(){
    var txtSo = parseInt(document.getElementById("txtSo").value);
    var hangTram = Math.floor(txtSo/100);
    var hangChuc = Math.floor(txtSo/10)-Math.floor(txtSo/100)*10;
    var hangDonVi = txtSo - hangChuc*10 - hangTram*100
    document.getElementById("ketQua3NangCao").innerHTML = cachDocSo(hangTram) + " Trăm " + cachDocSo(hangChuc) + " Chục " + cachDocSo(hangDonVi) + " Đơn Vị";
})

// Nang cao 4:
function khoangCachDenTruong(x,y){
    var xT = document.getElementById("xT").value;
    var yT = document.getElementById("xT").value;
    khoangCach = Math.sqrt((xT-x)*(xT-x)+(yT-y)*(yT-y));
    return khoangCach
}
document.getElementById("ketQuaNangCao4").addEventListener("click", function(){
    var tenA = document.getElementById("A").value;
    var tenB = document.getElementById("B").value;
    var tenC = document.getElementById("C").value;
    var xA = parseInt(document.getElementById("xA").value);
    var yA = parseInt(document.getElementById("yA").value);
    var xB = parseInt(document.getElementById("xB").value);
    var yB = parseInt(document.getElementById("yB").value);
    var xC = parseInt(document.getElementById("xC").value);
    var yC = parseInt(document.getElementById("yC").value);
    var kcA = khoangCachDenTruong(xA,yA);
    var kcB = khoangCachDenTruong(xB,yB);
    var kcC = khoangCachDenTruong(xC,yC);
    maxKC = kcA;
    document.getElementById("ketQua4NangCao").innerHTML = "Nhà " + tenA + " ở xa nhất";
    if (maxKC<kcB){
        maxKC = kcB;
        document.getElementById("ketQua4NangCao").innerHTML = "Nhà " + tenB + " ở xa nhất";
    }
    if (maxKC<kcC){
        maxKC = kcC;
        document.getElementById("ketQua4NangCao").innerHTML = "Nhà " + tenC + " ở xa nhất";
    }

})