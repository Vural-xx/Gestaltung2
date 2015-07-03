         var isTouch = "ontouchstart" in document.documentElement,
         evt = isTouch ? 'touchend' : 'click';
        var next = function () {
            $(this).attr("disabled", "disabled").parent().next('li').find('button').removeAttr("disabled");
        };
        // Creating the master menu (SideMenu)
        sideMenu = new SideMenu([
        ]);

        // Adding new item
        sideMenu.addItem(
            new SMButtonItem("Home", function () {
                window.location.href = "index.html";
            })
        );

        // Adding items with events ("Share")
        sideMenu.addItem(new SMSubMenuItem("Rezepte", [
            new SMSubMenuItem("Fleischgerichte", [
                new SMButtonItem("Hamburger", function () {
                    window.location.href = "index.html";
                }),
                new SMButtonItem("Steak", function () {
                    window.location.href = "index.html";
                }),
                 new SMButtonItem("Schnitzel", function () {
                    window.location.href = "index.html";
                })
            ]),
            new SMSubMenuItem("Fischgerichte", [
                new SMButtonItem("Lachs", function () {
                    window.location.href = "index.html";
                }),
                new SMButtonItem("Dachs mit Lachs im Maul", function () {
                    window.location.href = "index.html";
                }),
                 new SMButtonItem("Fax mit Dachs mit Lachs im Maul", function () {
                    window.location.href = "index.html";
                })
            ]),
            new SMSubMenuItem("Vegetarisch", [
                 new SMButtonItem("Fleischsalat", function () {
                    window.location.href = "index.html";
                }),
                new SMButtonItem("Obstsalat", function () {
                    window.location.href = "index.html";
                }),
                 new SMButtonItem("Salat", function () {
                    window.location.href = "index.html";
                })
            ]),
        ]));

        sideMenu.addItem(
            new SMButtonItem("Fleisch", function () {
                window.location.href = "index.html";
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
          "Grillich"
        ), 0 /* index cero, first element */ );


        // Finally add SideMenu object to DOM tree target.
        $(function(){
            sideMenu.appendTo(document.getElementById('menu'));
        });

    $("#menuknopf").click(evt, function (e) {
         e.preventDefault();
         sideMenu.open();
         next.call(this);
     });