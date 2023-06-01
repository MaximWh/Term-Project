class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"SONY HD-TV",  code:"sony",	 image:"sony.png",	description:"The best in entertainment. Access a world of movies, TV and apps, and enjoy every moment in picture quality that goes beyond Full HD. With X-Reality PRO, you will enjoy stunning clarity, sharpness and a more refined picture. " ,price:1200.99},

			{id:2,name:"LG - UltraGear 45” Gaming Monitor", code:"gamingmonitor", image:"monitor.png"	,description:"LG OLED picture + UltraGear speed. Experience unparalleled gaming performance with the huge 45” curved 21:9 WQHD LG UltraGear OLED gaming monitor. Get the picture quality of LG OLED, with the speed of a serious gaming monitor. Stay a step ahead of the competition with an unprecedented on LG OLED 240HZ refresh rate and .03ms response time that will bring you into the game like never before. And with an 800R dramatic, sweeping curved OLED display, you’ll feel enveloped in the action from virtually all around you." ,price:1499.99},
			
			{id:3,name:"Barolli 60” Gaming Desk with Monitor Stand", code:"desk", image:"desk.png"	,description:"Elevate your style and up your game with the ultra-cool Barolli gaming desk. Clean and contemporary, this mixed-media designer desk includes a metal frame in a gunmetal finish, topped with an engineered wood surface with replicated wood grain. Setting you up for success: a large open raceway for power cord management, a desktop monitor shelf, and an LED back light with multiple color options for an enhanced gaming experience. Along with a PC stand for easy access, this gaming desk features a custom designed headset hanger and a built-in electric can cooler with a USB plug-in." ,price:479.99},

			{id:4,name:"Bossin Gaming Chairs with Footrest", code:"chair", image:"chair.png"	,description:"A perfect ergonomic computer chair We presents you with the revolving gaming chair, a swivel chair that has the design of a racing car seat. It is the perfect chair for passionate gamers, but also for office workers who wish to be more comfortable while they work. The ergonomic computer chair with the high density foam seat, the high backrest and the wide armrests will become your favorite piece of furniture." ,price:129.99},
			
			{id:5,name:"PS5 Digital Edition", code:"ps5", image:"ps5.png"	,description:"Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio, and an all-new generation of incredible PlayStation® games. <br> <br> PS5™ Digital Edition is an all-digital version of the PS5™ console with no disc drive. Sign into your account for PlayStation™Network and go to PlayStation™Store to buy and download games." ,price:399.99},

			{id:6,name:"DualSense Wireless Controller", code:"controller", image:"controller.png"	,description:"Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. Next-generation haptic feedback replaces the traditional “rumble” feel of previous controllers offering more immersive physical sensations. These sensations are quicker, more precise and much more tactile. The controller gives players the ability to reduce the effect or disable if they desire." ,price:69.99},

			{id:7,name:"PULSE 3D Wireless Headset", code:"headset", image:"headset.png"	,description:"Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5™ consoles*. <br> <br> The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, and built-in rechargeable battery, plus an array of easy-access controls." ,price:99.99},

			{id:8,name:"Xbox Series X", code:"xbox", image:"xbox.png"	,description:"Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X. Limit 1 console purchase per customer." ,price:499.99},
			
			{id:9,name:"Xbox Wireless Controller", code:"xboxcontroller", image:"xboxcontroller.png"	,description:"Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay. Stay on target with textured grip and a hybrid D-pad. Seamlessly capture and share content with a dedicated Share button. Quickly pair with, play on, and switch between devices including Xbox Series X|S, Xbox One, Windows PC, Android, and iOS." ,price:59.99},

			{id:10,name:"Xbox Wireless Headset", code:"xboxheadset", image:"xboxheadset.png"	,description:"Experience high quality audio with a low-latency, 100% wireless connection to your Xbox console, without the need for a dongle or a base station. Supports spatial sound technologies for realism and audio precision that fully surrounds you." ,price:99.99}

		];
	}
	getProducts(){return this.products;}
	getItem(code)
	{
		 for (let i=0; i<this.products.length; i+=1)
		 {
			 if(this.products[i].code==code) return this.products[i];
		 } 
		 return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			 if(this.products[i].code==code) return true;
		} 
		 return false;
	}
}

class ItemOrder 
{
	constructor(item) {this.item=item;this.numItems=1;}
	getItem(){return this.item;}
	setItem(item){this.item = item;}
	getNumItems(){return this.numItems;}
	setNumItems(n){this.numItems = n;}
	getItemId(){return((this.getItem()).id);}
	getItemCode(){return((this.getItem()).code);}
	getItemName(){return((this.getItem()).name);}
	getItemImage(){return ((this.getItem()).image); }
	getDescription(){return((this.getItem()).description);}
	getUnitCost(){return((this.getItem()).price).toFixed(2);}
	incrementNumItems(){this.setNumItems(parseInt(this.getNumItems()) + 1);}
	cancelOrder(){this.setNumItems(0);}
	getTotalCost(){return(parseInt(this.getNumItems()) * parseFloat(this.getUnitCost())).toFixed(2);} 
}

class ShoppingCart
{
	constructor(userid) 
	{
		this.userid=userid;
		this.itemsOrdered=[];
		this.loadCart();
	}
	getItemImage(id)
	{
		alert("In getItemImage:"+this.itemsOrdered.length);
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert(item.getItemId());
			if(item.getItemId()==id)
			{
				alert("Found Item:");
				return (this.itemsOrdered[i]).getItemImage();
			}
		}
		return '';
	}
	getItemsOrdered() {return this.itemsOrdered ;}
	printShoppingCart()
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert("id="+item.getItemId()+ ": desc="+item.getDescription()+" qty="+item.getNumItems());
		}
	}
	addItem(itemCode) 
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				(this.itemsOrdered[i]).incrementNumItems();
				this.storeCart();
				return;
			}
		}	
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	setNumOrdered(itemCode,numOrdered) 
	{ 
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				if(numOrdered<=0)
				{
					this.itemsOrdered.splice(i,1);
					this.storeCart();
					return;
				}
				else
				{
					(this.itemsOrdered[i]).setNumItems(numOrdered);
					this.storeCart();
					return;
				}
			}
		}
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		newOrder.setNumItems(numOrdered);
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	getTotalCost()
	{
		let total=0;
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			total+=parseFloat(item.getTotalCost());
		}
		return total.toFixed(2);
	}
	addTax()
	{
		let total=parseFloat(this.getTotalCost());
		return (total*.1+total).toFixed(2);
	}

	addShipping(shipcost=0)
	{
	  return(parseFloat(this.addTax())+parseFloat(shipcost)).toFixed(2);
	}
	
	emptyShoppingCart()
	{
	    this.itemsOrdered=[];
	    var usercart=this.userid+"cart";  
	    setCookie(usercart,"",-1);
	}
	storeCart()
	{
		var usercart=this.userid+"cart";
		var cart="";
		var atleastone=false;
		let items=this.getItemsOrdered();
		for(let i=0;i<items.length;i++)
		{
			var qty=parseInt(items[i].getNumItems());
			if(qty>=1)
			{
				cart=cart+(items[i].getItemCode()+":"+qty+"@");
				atleastone=true;
			}
		}
		if(atleastone)
		{
			cart=cart.substring(0,cart.length-1);
			setCookie(usercart,cart,30);
		}
		else setCookie(usercart,"",-1);
	}
	loadCart()
	{
		let cartname=this.userid+"cart";
		let cart=getCookie(cartname);
		if(cart != null)
		{
			var str=cart.split("@");
			for(var i=0;i<str.length;i++)
			{
				var item=str[i].split(":");
				var cookiename=item[0];
				var cookievalue=item[1];
				this.setNumOrdered(cookiename,cookievalue);
			}		
		}
	}
}
