function StarShit(Line1, Line2){
    this.ball1 = $("<div></div>")
        .addClass("ball")
        .get(0);
    
    this.ball2 = $("<div></div>")
        .addClass("ball")
        .get(0);
    
    this.Text = $("<div></div>")
        .addClass("text")
        .append(this.ball1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia alias, unde itaque est eveniet, maxime magni aliquam? Aperiam sint, necessitatibus veniam obcaecati maiores sequi non. Quaerat qui nulla voluptates, provident! Debitis autem similique ipsum maiores deleniti, molestias quidem quae, corporis! Nostrum, rerum tempora. Excepturi saepe vitae optio consectetur ea illo quibusdam at porro repudiandae distinctio magnam nesciunt, odit vero possimus. Eos aliquam debitis modi earum provident ducimus iste rerum, et, fugiat ratione vero deleniti expedita nesciunt doloremque accusamus, doloribus esse commodi assumenda asperiores labore dolorem. Sapiente sunt eveniet voluptatum debitis. Nisi libero aliquid atque velit optio ad placeat incidunt adipisci, animi impedit laboriosam voluptas cupiditate quos sint sunt, nulla sed? Cum dolore voluptates, natus animi nostrum ut optio tenetur libero. Possimus nesciunt suscipit dolorem consequuntur, quia delectus, quis. Neque molestias porro pariatur doloremque modi ex, ratione cum amet. Iste obcaecati iure natus nesciunt. Voluptates ratione, dolorum fugit rerum nobis eius? Neque, laborum! Ducimus iste saepe, voluptatem placeat facere veniam culpa at qui. Eum, odit aut cum nisi. Impedit expedita nisi mollitia deserunt! Placeat, itaque sint nihil explicabo debitis. Quae, totam? Temporibus quisquam ipsam omnis facere, quibusdam voluptatem quasi laborum tempore minima porro. Molestiae nemo rerum, et ex officiis nulla cum deleniti libero ratione ad quas delectus, alias, voluptatum illum ipsa. Sapiente dolor a assumenda rem, reiciendis quia. Totam animi perferendis autem nisi a fugiat debitis itaque, quos harum praesentium aliquam minus ad maxime illum aperiam repellendus, odio quasi. Sapiente, nulla. Repellendus aspernatur, veritatis, officiis exercitationem perferendis, quas obcaecati adipisci voluptas minima, optio deserunt! Voluptatibus tempora, cupiditate mollitia molestiae non deserunt, doloremque architecto perferendis dolorem, laboriosam perspiciatis itaque magni! Placeat, vel! Ratione ea officia quo provident molestias aliquid eum praesentium a illum omnis libero asperiores ut ab delectus, recusandae veritatis, dolore quisquam, quod aut fuga. Incidunt nostrum explicabo, ipsam doloremque inventore. Harum dolorem quia veniam quos nostrum rerum vel aut id. Voluptas dolores cum ipsam totam nemo quam maiores error veritatis, nam a, fugiat praesentium cupiditate, esse laborum! Molestiae vel, vitae? Sit aut, fugiat soluta reprehenderit, velit ut, accusamus, ducimus obcaecati sed animi at recusandae iusto incidunt autem. Id nemo ratione numquam nam consectetur error, doloribus facere culpa similique ullam nulla! Alias itaque amet molestias, est dicta suscipit, iure corporis nobis dolor nisi similique, accusamus, quidem. Iste placeat deserunt blanditiis sapiente accusantium eum a, repellat quidem fugit autem reiciendis illo ipsum. Eaque deserunt voluptatum consequuntur quia modi illum suscipit, veritatis soluta, ea asperiores, nisi laudantium provident. Ratione, enim, consequuntur. Officiis harum tenetur cumque sint temporibus quam sed earum delectus ipsam illum. Officia sunt est, dicta eos nisi! Repudiandae fugit quod nisi, hic nobis assumenda at aspernatur iusto quisquam molestias, odit quidem, sunt! Quod quos deserunt, nobis odio, facere tempora delectus placeat! Fuga suscipit distinctio voluptatibus nulla necessitatibus aspernatur est eius illum, vitae, cum repellendus pariatur expedita. Adipisci natus accusamus, dignissimos nobis, quo in iusto soluta vel amet, inventore atque sed ab. Aut eligendi fugit, voluptatum ex nostrum nobis, impedit temporibus ducimus amet eveniet, aspernatur laboriosam quo possimus asperiores id quasi. Quod animi magnam asperiores consectetur, eius sunt dolorum quidem quaerat distinctio. Aut nesciunt, odit amet. Exercitationem impedit similique eum consequatur et debitis atque sed perferendis inventore architecto temporibus, nihil commodi ipsum velit dicta minima blanditiis doloribus ratione quasi fugit accusantium optio. Aliquid impedit mollitia quam! Earum totam odit, incidunt accusantium ex nulla ducimus asperiores nisi minus explicabo voluptatem repellat quia repudiandae libero, ipsum esse reiciendis dolorem laboriosam molestias provident nemo adipisci. At, repellendus inventore neque ipsum aperiam natus, eius laudantium magni ipsam animi dolores? Sint in, ea iste a eaque cum nemo, dolores harum repudiandae nobis, dolore quia! Laudantium, eaque, quae?", this.ball2)
        .get(0);
    
    this.Holst = $("<div></div>")
        .addClass("holst")
        .append(this.Text)
        .get(0);
    this.EndAnimate = function(){
        document.body.removeChild(document.querySelector(".holst"));
    };
    
    
     var CloseButton = $("<div></div>")
        .addClass("button-close-feature")
        .text("Close")
        .click(function(){
            document.body.removeChild(this.Holst);
        }.bind(this))
        .get(0);
    
    var fragment = $("<div></div>")
        .addClass("box-feature-logo")
        .get(0);
    var BoxLine = $("<div></div>")
        .addClass("box-lines")
        .get(0);
    fragment.appendChild(
        $("<div></div")
            .addClass("feature-logo")
            .text("Star Shit")
            .get(0)
    );
    
    BoxLine.appendChild(
        $("<div></div")
            .addClass("feature-line1")
            .text(Line1.remove("()") + " cool men")
            .get(0)
    );
    
    BoxLine.appendChild(
        $("<div></div")
            .addClass("feature-line2")
            .text(Line2 + " shitmen")
            .get(0)
    );
    
    fragment.appendChild(BoxLine);
    fragment.appendChild(CloseButton);
   
    

    this.Animate = function(){
        var time;
        var style = getComputedStyle(this.Text);
        console.log(style.height + " " + this.Text.scrollHeight);
        
        time = setInterval(function(){
            var max = this.Text.scrollHeight - parseInt(style.height);
            this.Text.scrollTop += 1;
            if(max - 10 < this.Text.scrollTop){
                clearInterval(time);
                if(this.EndAnimate != null){
                    //this.EndAnimate();
                }
                this.Holst.removeChild(this.Text);
                this.Holst.appendChild(fragment);
            }
        }.bind(this), 10);
    }.bind(this);
    this.Animate();
}