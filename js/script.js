         var isTouch = "ontouchstart" in document.documentElement,
         evt = isTouch ? 'touchend' : 'click';
        var next = function () {
            $(this).attr("disabled", "disabled").parent().next('li').find('button').removeAttr("disabled");
        };
        // Creating the master menu (SideMenu)
        sideMenu = new SideMenu([
          new SMLabelItem("The First Item Added!")
        ]);


        // Adding items with events ("Share")
        sideMenu.addItem(new SMSubMenuItem("Share", [
            new SMButtonItem("Facebook", function () {
                window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location));
            }, "fb"),
            new SMButtonItem("Twitter", function () {
                window.open('https://twitter.com/intent/tweet?text=SideMenu.js&url=' + encodeURIComponent(location));
            }, "tw"),
            new SMButtonItem("Google+", function () {
                window.open('https://plus.google.com/share?hl=es-419&url=' + encodeURIComponent(location));
            }, "gp"),
            new SMButtonItem("Pinterest", function () {
                alert("Pinterest Share");
            }, "pin")
        ]));


        // Adding mix items ("Animals")
        sideMenu.addItem(new SMSubMenuItem("Animals", [
            new SMLinkItem("Bunny", "https://www.google.com.pe/?#q=Bunny"),
            new SMLinkItem("Tiger", "https://www.google.com.pe/?#q=Tiger"),
            new SMLinkItem("Dog", "https://www.google.com.pe/?#q=Dog"),
            new SMLinkItem("Cat", "https://www.google.com.pe/?#q=Cat", "_blank"),
            new SMSubMenuItem("Birds", [
                new SMLinkItem("Eagle", "https://www.google.com.pe/?#q=eagle"),
                new SMLabelItem("Hawk"),
                new SMLabelItem("Tucan"),
                new SMButtonItem("Parrot", function () {
                    alert("Hello World!")
                }),
                new SMLabelItem("Chicken"),
                new SMLabelItem("Duck")
            ]),
            new SMLabelItem("Pig"),
            new SMLinkItem("Crocodile", "https://www.google.com.pe/?#q=Crocodile")
        ]));


        // Adding simple label items
        sideMenu.addItem(new SMSubMenuItem("Continents", [
            new SMLabelItem("Europe"),
            new SMLabelItem("Asia"),
            new SMLabelItem("Africa"),
            new SMSubMenuItem("North America", [
                new SMLabelItem("Canada"),
                new SMLabelItem("Mexico"),
                new SMLabelItem("United States")
            ]),
            new SMLabelItem("Center America"),
            new SMSubMenuItem("South America", [
                new SMLabelItem("Argentina"),
                new SMLabelItem("Bolivia"),
                new SMLabelItem("Brasil"),
                new SMLabelItem("Colombia"),
                new SMLabelItem("Chile"),
                new SMLabelItem("Ecuador"),
                new SMLabelItem("Paraguay"),
                new SMSubMenuItem("Perú", [
                    new SMLabelItem("Lima"),
                    new SMLabelItem("Trujillo"),
                    new SMLabelItem("Loreto"),
                    new SMLabelItem("Cuzco"),
                    new SMLabelItem("Puno"),
                    new SMLabelItem("Cajamarca"),
                    new SMLabelItem("etc..")
                ]),
                new SMLabelItem("Uruguay")
            ]),
            new SMLabelItem("Oceanía"),
            new SMLabelItem("Antartida")
        ]));


        // Adding new item
        sideMenu.addItem(
            new SMButtonItem("Download File", function(){
              alert("Go Download File!");
            })
        );

        // Adding new item
        sideMenu.addItem(
            new SMButtonItem("Close", function () {
                sideMenu.close();
            })
        );

        // CUSTOM ITEM
        // This is a custom item example
        // all created custom items extend from SMItem Class.

        SMUserAccountItem = (function (name, src) {
          SMItem.call(this); // Call SMItem constructor
          // this._el is jQuery item object that works how wrapper
          $(this.el).addClass('sm-item-useraccount')
            .append(
            this.photo = $('<img/>')
              .addClass('sm-useraccount-photo')
              .attr({ src: src }).get(0)
            )
            .append(
              this.name = $('<div/>')
                .addClass('sm-useraccount-name')
                .text(name).get(0)
            );
        });

        // Extend prototype from SMItem
        SMUserAccountItem.prototype = Object.create(SMItem.prototype); 
        SMUserAccountItem.prototype.constructor = SMUserAccountItem;

        // Adding custom item
        sideMenu.addItem(new SMUserAccountItem(
          "Ana Cueva",
          "https://dl.dropboxusercontent.com/u/30078937/sidemenu-foto.jpg"
        ), 0 /* index cero, first element */ );


        // Finally add SideMenu object to DOM tree target.
        $(function(){
            sideMenu.appendTo(document.getElementById('menu'));
        });

 $("#logo").one(evt, function (e) {
         e.preventDefault();
         sideMenu.open();
         next.call(this);
     });