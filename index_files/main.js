$.ajaxSetup({
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
                });

      function goToMain() {
         // window.open("/");
         window.location.href = "/";
      }
      function kekssssssssssssssssss() {
         if ($("#id_68664346984").hasClass("opened")) {
            $('#id_68664346984').removeClass('opened');
         }
         else {
            $('#id_68664346984').addClass('opened');
         }
      }
      function goToGen() {
         // window.open("/generator");
         window.location.href = "/generator";
      }
      function goToId() {
         // window.open("/id");
         window.location.href = "/id";
      }
      function goToVector() {
         // window.open('/vector');
         window.location.href = "/vector";
      }
      function goToStudy() {
         // window.open("/study");
         window.location.href = "/study";
      }
      function goToDrops() {
         // window.open("/photodrops");
         window.location.href = "/photodrops";
      }
      function openSite2() {
         window.location.href = "/generator/barcode";
      }
      function openSiteOtr() {
         window.open("https://otrisovka.net/");
      }
      function openTgBot() {
         window.open('https://t.me/passport_cloud_bot');
      }
      function openTgCh() {
         window.open('https://t.me/ps_generator');
      }
      function openBalanceAdd() {
         // window.open('/payment');
         window.location.href = "/payment";
      }
      function goToDriving() {
         // window.open("/driving");
         window.location.href = "/driving";
      }
      function goToBill() {
         // window.open("/bills");
         window.location.href = "/bills";
      }
      function goToUsa() {
         // window.open("/usa");
         window.location.href = "/usa";
      }
      function goToCredit() {
         // window.open("/credit_cards");
         window.location.href = "/credit_cards";
      }
      function goToBar() {
         // window.open("/barcodes");
         window.location.href = "/barcodes";
      }
      function logInTop() {
         $('#dialog-id_11134189594').css('display', 'block');
      }

      function closeLog() {
         $('#dialog-id_11134189594').css('display', 'none');
      }

      function regTop() {
         $('#loginForm123').css('display', 'none');
         $('#loginForm1234').css('display', 'none');
         $('#regForm123').css('display', 'block');
         $('#regForm1234').css('display', 'block');
         $("#regForm123456").css('display', 'none');         
         $("#regForm12345").css('display', 'block');
         $("#qrForm").css('display', 'none');
      }
      function regTop1() {
         $('.wrapper').css('height', '438px');
         $('#loginForm123').css('display', 'none');
         $('#loginForm1234').css('display', 'none');
         $('#regForm123').css('display', 'block');
         $('#regForm1234').css('display', 'block');
         $('#forgPass').css('display', 'none');
         $("#regForm123456").css('display', 'none');         
         $("#regForm12345").css('display', 'block');
         $("#qrForm").css('display', 'none');
      }

      function forgetPass() {
         $('#loginForm123').css('display', 'none');
         $('#regForm123').css('display', 'none');
         $('#regForm1234').css('display', 'none');
         $('#loginForm1234').css('display', 'none');
         $('#forgPass').css('display', 'none');
         $('#forgForm123').css('display', 'block');
         $("#regForm123456").css('display', 'none');         
         $("#regForm12345").css('display', 'none');
         $("#qrForm").css('display', 'none');
      }

      function openQr() {
         $('#loginForm123').css('display', 'none');
         $('#regForm123').css('display', 'none');
         $('#regForm1234').css('display', 'none');
         $('#loginForm1234').css('display', 'none');
         $('#forgPass').css('display', 'none');
         $('#forgForm123').css('display', 'none');
         $("#regForm123456").css('display', 'block');         
         $("#regForm12345").css('display', 'none');
         $("#qrForm").css('display', 'block');
         //////////////////////////////////
         var type = 1;
         $.ajax({
            type:'POST',
            url:'/api/ton/genQr',
            data:{"_token": "{{ csrf_token() }}", type:type},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  $('#loaderMain').css('display', 'none');
                  $('#imgQrLogin').css('display', 'block');
                  $('#imgQrLogin').attr('src', 'data:image/jpeg;base64,'+data.qr);

                  setInterval(function(){
                     $.ajax({
                        type:'POST',
                        url:'/api/ton/checkQr',
                        data:{"_token": "{{ csrf_token() }}", idd:data.idd},
                        success:function(data){
                           if(data.status == 'ok') {
                              location.reload();
                           } else if(data.status == 'stop') {
                              location.reload();
                           } else if(data.status == 'error') {
                              location.reload();
                           }
                        }
                     });
                  }, 2000);
               }
            }
         });
      }

      function restorePass1() {
         var email = $('#regEmail11').val();
         $.ajax({
            type:'POST',
            url:'/forget-password',
            data:{"_token": "{{ csrf_token() }}", email:email},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  alert('We have e-mailed your password reset link!');
                  window.location.href = "/";
               }
            }
         });
      }

      function resetPass() {
         var email = $("#confEmail").val();
         var pass1 = $("#confPass").val();
         var pass2 = $("#confPass1").val();
         var token = $("#confEmail1").val();
         $.ajax({
            type:'POST',
            url:'/reset-password',
            data:{"_token": "{{ csrf_token() }}", email:email, pass1:pass1, pass2:pass2, token:token},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  window.location.href = "/login";
               }
            }
         });
      }

       function logTop() {
         $('#loginForm123').css('display', 'block');
         $('#loginForm1234').css('display', 'block');
         $('#regForm123').css('display', 'none');
         $('#regForm1234').css('display', 'none');
         $('#regForm123456').css('display', 'none');
         $('#regForm12345').css('display', 'block');
         $('#forgPass').css('display', 'block');
         $('#forgForm123').css('display', 'none'); 
         $('#qrForm').css('display', 'none');
      }
      function logTop1() {
         $('.wrapper').css('height', '408px');
         $('#loginForm123').css('display', 'block');
         $('#loginForm1234').css('display', 'block');
         $('#regForm123').css('display', 'none');
         $('#regForm1234').css('display', 'none');
         $('#forgPass').css('display', 'block');
      }
      
      function menuOpen() {
         $('.rui-drawer').removeClass('hidden');
      }

      function menuClose() {
         $('.rui-drawer').addClass('hidden');
      }
      function menuClose1() {
         $('.rui-drawer').addClass('hidden');
         $('#dialog-id_11134189594').css('display', 'none');
      }
      function openProfHead() {

         $('#id_59296977269').addClass('opened');
      }
      function regUser() {
         var login = $('#regName').val();
         var email = $('#regEmail').val();
         var pass = $('#regPass').val();
         var param = 0;
         $.ajax({
            type:'POST',
            url:'/register',
            data:{"_token": "{{ csrf_token() }}", login:login, email:email, pass:pass, param:param},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  window.location.href = "/account";
               }
            }
         });
      }
      function regUser1() {
         var login = $('#regName').val();
         var email = $('#regEmail').val();
         var pass = $('#regPass').val();
         var param = 1;
         $.ajax({
            type:'POST',
            url:'/register',
            data:{"_token": "{{ csrf_token() }}", login:login, email:email, pass:pass, param:param},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  window.location.href = "/generator/barcode";
               }
            }
         });
      }
      function logUser() {
         var login = $('#logName').val();
         var pass = $('#logPass').val();
         var param = 0;
         // var url = window.location.pathname;
         $.ajax({
            type:'POST',
            url:'/loginPost',
            data:{"_token": "{{ csrf_token() }}", login:login, pass:pass, param:param},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  window.location.href = '/';
               }
            }
         });
      }
      function logUser1() {
         var param = 1;
         var login = $('#logName').val();
         var pass = $('#logPass').val();
         // var url = window.location.pathname;
         $.ajax({
            type:'POST',
            url:'/loginPost',
            data:{"_token": "{{ csrf_token() }}", login:login, pass:pass, param:param},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg)
               }
               else {
                  if($('#sdhfsjdkfhkdsj').val() == 'barcode') {
                     window.location.href = '/generator/barcode';
                  } else if($('#sdhfsjdkfhkdsj').val() == 'barcodeH') {
                     window.location.href = '/generator/barcode/history';
                  } else if($('#sdhfsjdkfhkdsj').val() == 'mrz') {
                     window.location.href = '/generator/mrz';
                  } else if($('#sdhfsjdkfhkdsj').val() == 'mrzH') {
                     window.location.href = '/generator/mrz/history';
                  } else {
                     window.location.href = '/generator/barcode';
                  }
               }
            }
         });
      }
      function openProfHead() {
         if($('#id_59296977269').hasClass('opened')){
            $('#id_59296977269').removeClass('opened');
         }
         else {
            $('#id_59296977269').addClass('opened');
         }
      }
      $(document).click(function (e) {
         if (!$('#id_59296977269').is(e.target) && $('#id_59296977269').has(e.target).length === 0) {
            $('#id_59296977269').removeClass('opened');
         };
      });

      function balanceBuy(id) {
         var item = id;
         $.ajax({
            type:'POST',
            url:'/balancebuy',
            data:{"_token": "{{ csrf_token() }}", item:item},
            success:function(data){
               if(data.status == 'error') {
                  alert(data.msg);
               }
               else {
                  // window.location.href = "/";
                  alert('Товар куплен!');
                  location.reload();
               }
            }
         });
      }
       


   function closeMirror() {
      $('#mirrorId').css('display', 'none');
   }  