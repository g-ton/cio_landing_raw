  function Funciones() { }
    $(function () {

  var controller = new ScrollMagic.Controller();
      gsap.set("#laptop",{
        scale:1.4,
        opacity:0
      });
  
      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // .to("section.panel.turqoise ", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        // .to("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
       
        wipeAnimation.to("#laptop", 0, {opacity:0.5,  ease: Linear.easeNone});
        wipeAnimation.to("#laptop", 0, {opacity:1, ease: Linear.easeNone});
        wipeAnimation.to("#fondo2", 0, {opacity:0, ease: Linear.easeNone});  
        wipeAnimation.to("#laptop", 1, {scale:0.5, ease: Linear.easeNone});
      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainer2",
        triggerHook: "onLeave",
        duration: "100%"
      })
      .setPin("#pinContainer2")
      .setTween(wipeAnimation)
        .addTo(controller);
      

      
      var images = [
      "assets/img/Laptop/0001.png",
      "assets/img/Laptop/0002.png",
      "assets/img/Laptop/0003.png",
      "assets/img/Laptop/0004.png",
      "assets/img/Laptop/0005.png",
      "assets/img/Laptop/0006.png",
      "assets/img/Laptop/0007.png",
      "assets/img/Laptop/0008.png",
      "assets/img/Laptop/0009.png",
      "assets/img/Laptop/0010.png",
      "assets/img/Laptop/0011.png",
      "assets/img/Laptop/0012.png",
      "assets/img/Laptop/0013.png",
      "assets/img/Laptop/0014.png",
      "assets/img/Laptop/0015.png",
      "assets/img/Laptop/0016.png",
      "assets/img/Laptop/0017.png",
      "assets/img/Laptop/0018.png",
      "assets/img/Laptop/0019.png",
      "assets/img/Laptop/0020.png",
      "assets/img/Laptop/0021.png",
      "assets/img/Laptop/0022.png",
      "assets/img/Laptop/0023.png",
      "assets/img/Laptop/0024.png",
      "assets/img/Laptop/0025.png"
    ];
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    //EncabezadoAnimado
    var controller = new ScrollMagic.Controller();
    gsap.set(["#pinMaster"],{
      y:"0%"
    })
    
     

    var obj = { curImg: 0 };

    // create tween
    
    var tween = TweenMax.to(obj, 1,
      {
        curImg: images.length - 1,  // animate propery curImg to number of images
        roundProps: "curImg",       // only integers so it can be used as an array index
        repeat: 0,                  // repeat 3 times
        immediateRender: true,      // load first image automatically
        ease: Linear.easeNone,      // show every image the same ammount of time
        onUpdate: function () {
          $("#myimg").attr("src", images[obj.curImg]); // set the image source
          
        }
      }
    );
    var scene = new ScrollMagic.Scene({ triggerElement: "#pinMaster", triggerHook: "onLeave", duration: 300, offset: 0 })
      .setPin("#pinMaster")
      .setTween(tween)
      .addTo(controller);


      var funciones = new Funciones();
      $('[data-toggle="popover"]').popover({ container: 'body' });



      $(document).on('click', '#fun01', function () {
        $("#contenidoModal").text('La contabilidad más fácil que nunca, donde quieras cuando quieras.')
        $("#funimg").attr('src', "assets/img/Funcionalidades/01A.png");
      });

      $(document).on('click', '#fun02', function () {
        $("#contenidoModal").text('Reducción de tiempo, con la funcionalidad automática de carga y contabilidad de facturas en tiempo real.')
        $("#funimg").attr('src', "assets/img/Funcionalidades/02A.png");
      });


      $(document).on('click', '#fun03', function () {
        $("#contenidoModal").text('Te permite llevar tu contabilidad al día de manera eficiente y eficaz, sin tener que pasar por procesos complicados de instalación.')
        $("#funimg").attr('src', "assets/img/Funcionalidades/03A.png");
      });

      $(document).on('click', '#fun04', function () {
        $("#contenidoModal").text('Disminución de errores humanos gracias a cálculos automáticos dentro de los movimientos contables.')
        $("#funimg").attr('src', "assets/img/Funcionalidades/04A.png");
      });

      $(document).on('click', '#fun05', function () {
        $("#contenidoModal").text('Genera pólizas rápidamente de manera automática.')
        $("#funimg").attr('src', "assets/img/Funcionalidades/05A.png");
      });


      $(document).on('click', '#myBtn', function () {
        var video = document.getElementById("myVideo");

        // Get the button
        var btn = document.getElementById("myBtn");

        if (video.paused) {
          video.play();
          btn.innerHTML = "Pause";
        } else {
          video.pause();
          btn.innerHTML = "Play";
        }
      });
    });
