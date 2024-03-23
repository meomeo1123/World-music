// showContent-Hot
    itemsHot1 = document.querySelector("#sale_1")
    itemsHot2 = document.querySelector("#sale_2")
    itemsHot3 = document.querySelector("#sale_3")

    Navi1 = document.querySelector(".js-navi-1")
    Navi2 = document.querySelector(".js-navi-2")
    Navi3 = document.querySelector(".js-navi-3")

    imgsale1 = document.querySelector("#show-sale-1")
    imgsale2 = document.querySelector("#show-sale-2")
    imgsale3 = document.querySelector("#show-sale-3")

    function ShowItemsHot1(){
        itemsHot1.classList.add('showItemsHot')
        itemsHot2.classList.remove('showItemsHot')
        itemsHot3.classList.remove('showItemsHot')  
    }
    function ShowItemsHot2(){
        itemsHot2.classList.add('showItemsHot')
        itemsHot1.classList.remove('showItemsHot')
        itemsHot3.classList.remove('showItemsHot')  
    }
    function ShowItemsHot3(){
        itemsHot3.classList.add('showItemsHot')
        itemsHot2.classList.remove('showItemsHot')
        itemsHot1.classList.remove('showItemsHot')  
    }
    Navi1.addEventListener('click',ShowItemsHot1)
    Navi2.addEventListener('click',ShowItemsHot2)
    Navi3.addEventListener('click',ShowItemsHot3)
    imgsale1.addEventListener('click',ShowItemsHot1)
    imgsale2.addEventListener('click',ShowItemsHot2)
    imgsale3.addEventListener('click',ShowItemsHot3)




// END showContent-Hot






// THÊM VÀO GIỎ HÀNG 



    const btnTicket = document.querySelectorAll(".js-buy-ticket")
    btnTicket.forEach(function(button,index){
       button.addEventListener('click',function(event){
        var btnProduct = event.target
        var TicketInfo = btnProduct.parentElement
        var productTicket = TicketInfo.parentElement
        var productImg = productTicket.querySelector("img").src
        var productName = productTicket.querySelector(".js-ticket-name").innerText
        var productPrice = productTicket.querySelector(".js-price_ticket").innerText
        addcart(productImg, productName , productPrice)
        
       })

    })
     
    function addcart(productImg, productName , productPrice){
        var addtr = document.createElement("tr")
        var cartItems = document.querySelectorAll("tbody tr")
        for ( var i = 0 ; i < cartItems.length ; i++){
            var productT = document.querySelectorAll(".identical-product")
            if( productT[i].innerHTML == productName ){
                swal("","Sản phẩm đã tồn tại trong giỏ hàng","error");
                return
            }
           
        }      
        var trContent = '<tr class="section_product-items"><th class="img_cart-list"><img src="'+productImg+'" alt=""><span class="identical-product">'+productName+'</span></th><th><input type="number" value="1" min="1" name="" id=""></th><th><span class="price_ticket js-price_ticket">'+productPrice+'</span> <sup>đ</sup></th><th class="delecItems">Xoá</th>'
        addtr.innerHTML = trContent
        var cartTable = document.querySelector("tbody")
        cartTable.append(addtr)
        cartTotal()
        delecItems()
        inputChange()
        swal("","Đã thêm vào giỏ hàng","success");
    }

// END THÊM VÀO GIỎ HÀNG

// TÍNH TỔNG GIÁ TRỊ ĐƠN HÀNGG
function cartTotal(){
    var cartItems = document.querySelectorAll("tbody tr")
    var TotalAllTicket = 0
    for ( var i = 0 ; i < cartItems.length ; i++){
        var inputValue = cartItems[i].querySelector("input").value
        var productPrice = cartItems[i].querySelector(".js-price_ticket").innerHTML
        S = inputValue*productPrice*1000.
        TotalAllTicket =  TotalAllTicket + S

    }
    var cartValueTotal = document.querySelector(".js-totalAll")
    var priceSection = document.querySelector(".js-price-section span")
    var modalTotal = document.querySelector(".modal-pay-container .js-price-section span")
    cartValueTotal.innerHTML = TotalAllTicket.toLocaleString('de-DE')
    priceSection.innerHTML = TotalAllTicket.toLocaleString('de-DE')
    modalTotal.innerHTML = TotalAllTicket.toLocaleString('de-DE')
    
}


// END TÍNH TỔNG GIÁ TRỊ ĐƠN HÀNGG


// CLEAR SẢN PHẨM
    function delecItems(){
        var cartItems = document.querySelectorAll("tbody tr")
        for ( var i = 0 ; i < cartItems.length ; i++){
            var productD = document.querySelectorAll(".delecItems")
            productD[i].addEventListener('click', function(event){
                var cartDelete = event.target
                var cartInfo = cartDelete.parentElement
                cartInfo.remove()
                cartTotal()
                
            })            
        }  
    }
    

//END CLEAR SẢN PHẨM

// INPUT CHANGE CHỈNH SỐ LƯỢNG SẢN PHẨM
    function inputChange (){
        var cartItems = document.querySelectorAll("tbody tr")
        for ( var i = 0 ; i < cartItems.length ; i++){
            var inputValue = cartItems[i].querySelector("input")
            inputValue.addEventListener("change",function(){
                cartTotal()
                
            })            
        }  
    }

//  END INPUT CHANGE CHỈNH SỐ LƯỢNG SẢN PHẨM


// js open close modal pay ticket
    modal = document.querySelector(".js-modal")
    closePay = document.querySelector(".js-close-pay")
    showPayticket = document.querySelector(".js-show-payticket")
    modalContainer = document.querySelector(".js-cart-items-list")
    function showModalPay(){
        modal.classList.add('open')
    }
    function CloseModalPay(){
        modal.classList.remove('open')
    }
    showPayticket.addEventListener('click',showModalPay)
    closePay.addEventListener('click',CloseModalPay)
    modal.addEventListener('click',CloseModalPay)
    modalContainer.addEventListener('click',function(event){
        event.stopPropagation()
    })


//end  js open close modal pay ticket

// js payment phương thức thanh toán giỏ hàng
    paymentMomo = document.querySelector(".js-payment-momo")
    paymentCart = document.querySelector(".js-payment-cart")
    Cart = document.querySelectorAll(".js-show-payment-cart")
    Momo = document.querySelectorAll(".js-show-payment-momo")

    function ShowPaymentCart(){
        Cart.classList.add('show-payment')
        Momo.classList.remove('show-payment')
    }
    function ShowPaymentMomo(){
        Momo.classList.add('show-payment')
        Cart.classList.remove('show-payment')
    }
   
    paymentMomo.addEventListener('click',ShowPaymentMomo)
    paymentCart.addEventListener('click',ShowPaymentCart)

//end js payment phương thức thanh toán giỏ hàng

// js đóng mở thanh toán giỏ hàng
    closePayment = document.querySelector(".js-close-modal-pay")
    CartCheckout = document.querySelector(".js-cart-checkout")
    modalpay = document.querySelector(".js-modal-pay")
    function ShowModalPay(){
        modalpay.classList.toggle('show-modal-pay')
    }
    CartCheckout.addEventListener('click',ShowModalPay)
    closePayment.addEventListener('click',ShowModalPay)

// end js đóng mở thanh toán giỏ hàng


 // js thông báo thanh toán thành công -->
    PaymentAccess = document.querySelectorAll(".js-payment-access")

    function ShowMessage(){
        swal("","Thanh Toán Thành Công","success");   
    }
// chặn form load lại trang 
    function processForm(e){
        if (e.preventDefault) e.preventDefault();
        return false;
    }
    var form = document.getElementById('my-Form')
    var formTow = document.getElementById('my-Form-2')

    if( form.attachEvent){
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
    if( formTow.attachEvent){
        formTow.attachEvent("submit", processForm);
    } else {
        formTow.addEventListener("submit", processForm);
    }
// end chặn form load lại trang 




// end js thông báo thanh toán thành công

// show purchase ticket
    btnPurchase1 = document.querySelector(".js-payment-cart")
    btnPurchase2 = document.querySelector(".js-payment-momo")
    
    PurchaseCart = document.querySelector(".js-show-payment-cart")
    PurchaseMomo = document.querySelector(".js-show-payment-momo")

    function ShowPurchaseCart(){
        PurchaseCart.classList.add('show-payment')
        PurchaseMomo.classList.remove('show-payment')
    }
    function ShowPurchaseMomo(){
        PurchaseMomo.classList.add('show-payment')
        PurchaseCart.classList.remove('show-payment')
    }
   
    btnPurchase1.addEventListener('click',ShowPurchaseCart)
    btnPurchase2.addEventListener('click',ShowPurchaseMomo)



// end show purchase ticket

// close modal-payments-purchase
    closeModalPurchase1 = document.querySelector(".js-close-modal-purchase-1")
    closeModalPurchase2 = document.querySelector(".js-close-modal-purchase-2")
    closeModalPurchase3 = document.querySelector(".js-close-modal-purchase-3")
    closeModalPurchase4 = document.querySelector(".js-close-modal-purchase-4")
    closeModalPurchase5 = document.querySelector(".js-close-modal-purchase-5")
    closeModalPurchase6 = document.querySelector(".js-close-modal-purchase-6")
    closeModalPurchase7 = document.querySelector(".js-close-modal-purchase-7")
    closeModalPurchase8 = document.querySelector(".js-close-modal-purchase-8")

    closeModalPurchase9 = document.querySelector(".js-close-modal-purchase-9")
    closeModalPurchase10 = document.querySelector(".js-close-modal-purchase-10")
    closeModalPurchase11 = document.querySelector(".js-close-modal-purchase-11")
    closeModalPurchase12 = document.querySelector(".js-close-modal-purchase-12")
    closeModalPurchase13 = document.querySelector(".js-close-modal-purchase-13")
    closeModalPurchase14 = document.querySelector(".js-close-modal-purchase-14")
    closeModalPurchase15 = document.querySelector(".js-close-modal-purchase-15")
    closeModalPurchase16 = document.querySelector(".js-close-modal-purchase-16")

    closeModalPurchase17 = document.querySelector(".js-close-modal-purchase-17")
    closeModalPurchase18 = document.querySelector(".js-close-modal-purchase-18")
    closeModalPurchase19 = document.querySelector(".js-close-modal-purchase-19")
    closeModalPurchase20 = document.querySelector(".js-close-modal-purchase-20")
    closeModalPurchase21 = document.querySelector(".js-close-modal-purchase-21")
    closeModalPurchase22 = document.querySelector(".js-close-modal-purchase-22")
    closeModalPurchase23 = document.querySelector(".js-close-modal-purchase-23")
    closeModalPurchase24 = document.querySelector(".js-close-modal-purchase-24")

    ModalPurchase1 = document.querySelector(".js-modal-purchase-1")
    ModalPurchase2 = document.querySelector(".js-modal-purchase-2")
    ModalPurchase3 = document.querySelector(".js-modal-purchase-3")
    ModalPurchase4 = document.querySelector(".js-modal-purchase-4")
    ModalPurchase5 = document.querySelector(".js-modal-purchase-5")
    ModalPurchase6 = document.querySelector(".js-modal-purchase-6")
    ModalPurchase7 = document.querySelector(".js-modal-purchase-7")
    ModalPurchase8 = document.querySelector(".js-modal-purchase-8")

    ModalPurchase9 = document.querySelector(".js-modal-purchase-9")
    ModalPurchase10 = document.querySelector(".js-modal-purchase-10")
    ModalPurchase11 = document.querySelector(".js-modal-purchase-11")
    ModalPurchase12 = document.querySelector(".js-modal-purchase-12")
    ModalPurchase13 = document.querySelector(".js-modal-purchase-13")
    ModalPurchase14 = document.querySelector(".js-modal-purchase-14")
    ModalPurchase15 = document.querySelector(".js-modal-purchase-15")
    ModalPurchase16 = document.querySelector(".js-modal-purchase-16")

    ModalPurchase17 = document.querySelector(".js-modal-purchase-17")
    ModalPurchase18 = document.querySelector(".js-modal-purchase-18")
    ModalPurchase19 = document.querySelector(".js-modal-purchase-19")
    ModalPurchase20 = document.querySelector(".js-modal-purchase-20")
    ModalPurchase21 = document.querySelector(".js-modal-purchase-21")
    ModalPurchase22 = document.querySelector(".js-modal-purchase-22")
    ModalPurchase23 = document.querySelector(".js-modal-purchase-23")
    ModalPurchase24 = document.querySelector(".js-modal-purchase-24")




    buy1 = document.querySelector(".js-buy-1")
    buy2 = document.querySelector(".js-buy-2")
    buy3 = document.querySelector(".js-buy-3")
    buy3_1 = document.querySelector(".js-buy-3_1")
    buy4 = document.querySelector(".js-buy-4")
    buy5 = document.querySelector(".js-buy-5")
    buy6 = document.querySelector(".js-buy-6")
    buy7 = document.querySelector(".js-buy-7")
    buy8 = document.querySelector(".js-buy-8")
    buy9 = document.querySelector(".js-buy-9")
    buy10 = document.querySelector(".js-buy-10")
    buy11 = document.querySelector(".js-buy-11")
    buy12 = document.querySelector(".js-buy-12")
    buy12_1 = document.querySelector(".js-buy-12_1")

    buy13 = document.querySelector(".js-buy-13")
    buy14 = document.querySelector(".js-buy-14")
    buy15 = document.querySelector(".js-buy-15")
    buy16 = document.querySelector(".js-buy-16")
    buy17 = document.querySelector(".js-buy-17")
    buy18 = document.querySelector(".js-buy-18")
    buy19 = document.querySelector(".js-buy-19")
    buy20 = document.querySelector(".js-buy-20")
    buy21 = document.querySelector(".js-buy-21")
    buy22 = document.querySelector(".js-buy-22")
    buy22_1 = document.querySelector(".js-buy-22_1")
    buy23 = document.querySelector(".js-buy-23")
    buy24 = document.querySelector(".js-buy-24")


    function ShowPurchaseModal1(){
        ModalPurchase1.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal2(){
        ModalPurchase2.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal3(){
        ModalPurchase3.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal4(){
        ModalPurchase4.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal5(){
        ModalPurchase5.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal6(){
        ModalPurchase6.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal7(){
        ModalPurchase7.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal8(){
        ModalPurchase8.classList.toggle('show-modal-pay')
    }

    function ShowPurchaseModal9(){
        ModalPurchase9.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal10(){
        ModalPurchase10.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal11(){
        ModalPurchase11.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal12(){
        ModalPurchase12.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal13(){
        ModalPurchase13.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal14(){
        ModalPurchase14.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal15(){
        ModalPurchase15.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal16(){
        ModalPurchase16.classList.toggle('show-modal-pay')
    }

    function ShowPurchaseModal17(){
        ModalPurchase17.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal18(){
        ModalPurchase18.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal19(){
        ModalPurchase19.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal20(){
        ModalPurchase20.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal21(){
        ModalPurchase21.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal22(){
        ModalPurchase22.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal23(){
        ModalPurchase23.classList.toggle('show-modal-pay')
    }
    function ShowPurchaseModal24(){
        ModalPurchase24.classList.toggle('show-modal-pay')
    }

    buy1.addEventListener("click",ShowPurchaseModal1)
    buy2.addEventListener("click",ShowPurchaseModal2)
    buy3.addEventListener("click",ShowPurchaseModal3)
    buy3_1.addEventListener("click",ShowPurchaseModal3)
    buy4.addEventListener("click",ShowPurchaseModal4)
    buy5.addEventListener("click",ShowPurchaseModal5)
    buy6.addEventListener("click",ShowPurchaseModal6)
    buy7.addEventListener("click",ShowPurchaseModal7)
    buy8.addEventListener("click",ShowPurchaseModal8)

    buy9.addEventListener("click",ShowPurchaseModal9)
    buy10.addEventListener("click",ShowPurchaseModal10)
    buy11.addEventListener("click",ShowPurchaseModal11)
    buy12_1.addEventListener("click",ShowPurchaseModal12)
    buy12.addEventListener("click",ShowPurchaseModal12)
    buy13.addEventListener("click",ShowPurchaseModal13)
    buy14.addEventListener("click",ShowPurchaseModal14)
    buy15.addEventListener("click",ShowPurchaseModal15)
    buy16.addEventListener("click",ShowPurchaseModal16)

    buy17.addEventListener("click",ShowPurchaseModal17)
    buy18.addEventListener("click",ShowPurchaseModal18)
    buy19.addEventListener("click",ShowPurchaseModal19)
    buy20.addEventListener("click",ShowPurchaseModal20)
    buy21.addEventListener("click",ShowPurchaseModal21)
    buy22_1.addEventListener("click",ShowPurchaseModal22)
    buy22.addEventListener("click",ShowPurchaseModal22)
    buy23.addEventListener("click",ShowPurchaseModal23)
    buy24.addEventListener("click",ShowPurchaseModal14)



    closeModalPurchase1.addEventListener("click",ShowPurchaseModal1)
    closeModalPurchase2.addEventListener("click",ShowPurchaseModal2)
    closeModalPurchase3.addEventListener("click",ShowPurchaseModal3)
    closeModalPurchase4.addEventListener("click",ShowPurchaseModal4)
    closeModalPurchase5.addEventListener("click",ShowPurchaseModal5)
    closeModalPurchase6.addEventListener("click",ShowPurchaseModal6)
    closeModalPurchase7.addEventListener("click",ShowPurchaseModal7)
    closeModalPurchase8.addEventListener("click",ShowPurchaseModal8)

    closeModalPurchase9.addEventListener("click",ShowPurchaseModal9)
    closeModalPurchase10.addEventListener("click",ShowPurchaseModal10)
    closeModalPurchase11.addEventListener("click",ShowPurchaseModal11)
    closeModalPurchase12.addEventListener("click",ShowPurchaseModal12)
    closeModalPurchase13.addEventListener("click",ShowPurchaseModal13)
    closeModalPurchase14.addEventListener("click",ShowPurchaseModal14)
    closeModalPurchase15.addEventListener("click",ShowPurchaseModal15)
    closeModalPurchase16.addEventListener("click",ShowPurchaseModal16)

    closeModalPurchase17.addEventListener("click",ShowPurchaseModal17)
    closeModalPurchase18.addEventListener("click",ShowPurchaseModal18)
    closeModalPurchase19.addEventListener("click",ShowPurchaseModal19)
    closeModalPurchase20.addEventListener("click",ShowPurchaseModal20)
    closeModalPurchase21.addEventListener("click",ShowPurchaseModal21)
    closeModalPurchase22.addEventListener("click",ShowPurchaseModal22)
    closeModalPurchase23.addEventListener("click",ShowPurchaseModal23)
    closeModalPurchase24.addEventListener("click",ShowPurchaseModal24)


    

 
// end close modal-payments-purchase



// open nav -mobile

    btnNav = document.querySelector(".js-nav-mobile")
    nav = document.querySelector(".js-nav")

    function ShowNav(){
        nav.classList.toggle('open')
    }
    btnNav.addEventListener("click",ShowNav)

    var navItems = document.querySelectorAll('.nav>li>a')
   for( const navItem of navItems){
        navItem.addEventListener("click",ShowNav)
   }