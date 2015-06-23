            var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
                //showLeft = document.getElementById( 'logo' ),
                showLeftPush = document.getElementById( 'logo' ),
                body = document.body;
/*
            showLeft.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( menuLeft, 'cbp-spmenu-open' );
            };
*/
             showLeftPush.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( body, 'cbp-spmenu-push-toright' );
                classie.toggle( menuLeft, 'cbp-spmenu-open' );
            };