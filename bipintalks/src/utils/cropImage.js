export default function getCroppedImg(imageSrc, pixelCrop) {
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = imageSrc;
  
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const ctx = canvas.getContext("2d");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
        resolve(canvas.toDataURL("image/jpeg"));  // Return base64 image data
      };
  
      image.onerror = (error) => reject(error);  // Handle image load errors
    });
  }
  <script
        src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
        user-profile="https://topmate.io/embed/profile/bipin_singh?theme=D5534D"
        btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
        embed-version="v1"
        button-text="Let's Connect"
        position-right="30px"
        position-bottom="30px"
        custom-padding="0px"
        custom-font-size="16px"
        custom-font-weight="500"
        custom-width="200px"
        async=""
        defer=""
      ></script>