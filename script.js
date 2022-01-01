function simplDimpl() {
	var images = ['https://static-sl.insales.ru/images/products/1/4568/424481240/igrushka-antistress-vechnaya-pupyrka.jpg', 'https://static-sl.insales.ru/images/products/1/5979/424712027/igrushka-antistress-vechnaya-pupyrka-raduzhnaya.jpg', 'https://cdn1.ozone.ru/s3/multimedia-3/6056094807.jpg', 'https://mirishop.ru/wa-data/public/shop/products/03/59/345903/images/500455/500455.970.jpg', 'https://images.wbstatic.net/big/new/26470000/26476581-1.jpg', 'https://ae01.alicdn.com/kf/H92ea939939914768b6984baeb4538e60s/-.jpg', 'https://images-eu.ssl-images-amazon.com/images/I/41MuikrOXVL._UL1000_.jpg', 'https://main-cdn.goods.ru/big2/hlr-system/11/85/47/00/64/54/100026016961b0.jpg', 'https://opt-toys.ru/wa-data/public/shop/products/53/31/3153/images/5850/5850.970.jpg', 'https://d1jqecz1iy566e.cloudfront.net/detail/fa211/b.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61r5kGpf3ZL.jpg', 'https://d1jqecz1iy566e.cloudfront.net/detail/fa211/fa211_4.jpg', 'https://d1jqecz1iy566e.cloudfront.net/detail/fa211/a.jpg', 'https://d1jqecz1iy566e.cloudfront.net/extralarge/fa211.jpg', 'https://ae04.alicdn.com/kf/He6c8268cd4a946f9a8437f6a4e9a364er.jpg'], glent = document.getElementById('aboba'), audio = new Audio('simpl_dimpl_pop_it_skvish.mp3');
    audio.play();
	setInterval(() => {
		glent.src = images[getRandomInt(images.length)]
	}, 250);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var timer = 0;
setInterval(() => {
	timer++;
	if (timer > 228) {
		var audio = new Audio('bass_boost.mp3');
		audio.play();
		timer = -999999999999;
	}
}, 1000);
