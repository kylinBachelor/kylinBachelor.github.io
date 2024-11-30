---
title: SpringBoot生成二维码
aliases: []
tags:
- Java
- SpringBoot
createTime: 2024/11/30 14:15:41 
---


#### 引入Google的依赖

```xml
<!-- 二维码生成 -->
<dependency>
    <groupId>com.google.zxing</groupId>
    <artifactId>javase</artifactId>
    <version>3.3.0</version>
</dependency>
```



#### 二维码生成工具类

```java
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import java.awt.image.BufferedImage;
import java.util.Hashtable;

/**
 * 二维码生成工具类
 * @Date 2023/5/25 10:09
 */
public class QrCodeUtils {
    private static final String CHARSET = "utf-8";
    public static final String FORMAT = "JPG";
    // 二维码尺寸
    private static final int QRCODE_SIZE = 300;

    /**
     * 生成二维码
     * @param content 二维码内容
     * @return 图片
     */
    public static BufferedImage createImage(String content) throws Exception {
        Hashtable<EncodeHintType, Object> hints = new Hashtable<>();
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
        hints.put(EncodeHintType.CHARACTER_SET, CHARSET);
        hints.put(EncodeHintType.MARGIN, 1);
        BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, QRCODE_SIZE, QRCODE_SIZE, hints);
        int width = bitMatrix.getWidth();
        int height = bitMatrix.getHeight();
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                image.setRGB(x, y, bitMatrix.get(x, y) ? 0xFF000000 : 0xFFFFFFFF);
            }
        }
        return image;
    }

    /**
     * 生成二维码(直接将二维码以图片输出流返回）
     * @param content 内容
     * @return 二维码图片
     */
    public static BufferedImage encode(String content) throws Exception {
        return QrCodeUtils.createImage(content);
    }

}

```

#### 使用方式

```java
BufferedImage image = QrCodeUtils.encode("此处为二维码内容");
```

#### BufferedImage转换为InputStream

```java
ByteArrayOutputStream os = new ByteArrayOutputStream();
ImageIO.write(image, "jpg", os);
InputStream inputStream = new ByteArrayInputStream(os.toByteArray());
```


