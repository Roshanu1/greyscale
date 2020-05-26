const input = document.querySelector('input[type="file"]')
	input.addEventListener('change', function(e){

	console.log(input.files)
	const reader = new FileReader()
	reader.onload = function(){

		const img = new Image()
		
		
		img.onload = function(){
			
			const canvas = document.createElement('canvas')
			// canvas.style.paddingtop = "20px"
			// canvas.style.margin = "50px 10px 10px 10px"
			canvas.style.border = "3px solid grey"
			canvas.style.margin = "5%"
			

			// img.style.paddingtop = "20px"
			// img.style.margin = "50px 10px 10px 10px"
			img.style.border = "3px solid grey"
			img.style.margin = "5%"
			img.style.width = "400px"
			img.style.height = "400px"

			// element.classList.add("cnavasStyle")

			img.height = window.innerHeight/3 
			img.width = window.innerWidth/3
			var imgwidth = img.offsetWidth
		    var imgheight = img.offsetHeight
		    canvas.width = imgwidth
		    canvas.height = imgheight 

			// canvas.height = img.height
			// canvas.width = img.width
			const context = canvas.getContext('2d')
			context.drawImage(img, 0 ,0, imgwidth, imgheight)

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
			const data = imageData.data
			for(var i=0; i <= data.length; i+=4){
				const avg = (data[i] + data[i+1] + data[i+2])/3
				data[i] = avg
				data[i + 1] = avg
				data[i + 2] = avg
			}
			context.putImageData(imageData, 0, 0)

			document.body.appendChild(canvas)
		}
		img.src = reader.result
		document.body.appendChild(img)

		}

		reader.readAsDataURL(input.files[0])

	})

	function hideMenu(){

		document.getElementById("iviewer").style.display = "none"
		document.getElementById("showButton").style.display = "block"
	}

	